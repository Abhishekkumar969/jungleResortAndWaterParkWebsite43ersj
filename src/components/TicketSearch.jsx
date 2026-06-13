import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import styles from "../styles/TicketSearch.module.css";


import { useTicketPrices } from "../context/TicketPricesContext";

const fmt = (n) => new Intl.NumberFormat("en-IN").format(n);
const formatDate = (date) => {
    const d = new Date(date);
    if (isNaN(d)) return date;
    return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
};

function downloadTicketHTML({ name, phone, visitDate, createdAt, tickets, cottage, total, bookingId, paymentId, ticketNames }) {
    const ticketRows = Object.entries(tickets || {}).map(([id, qty]) => {
        const t = ticketNames[id];
        return `<tr>
            <td>${t?.name || id}</td>
            <td style="text-align:center">${qty}</td>
            <td style="text-align:right">₹${fmt((t?.price || 0) * qty)}</td>
        </tr>`;
    }).join("");

    const cottageRow = cottage ? `
        <tr style="background:#fff0f7">
            <td>🏡 Cottage Room – ${cottage.duration}${cottage.days > 1 ? ` × ${cottage.days} days` : ""}${cottage.rooms > 1 ? ` (${cottage.rooms} Rooms)` : ""}</td>
            <td style="text-align:center">1</td>
            <td style="text-align:right">₹${fmt(cottage.total)}</td>
        </tr>` : "";

    const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Jungle Resort Ticket</title>
<style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Segoe UI',Arial,sans-serif; background:#f5f6fa; padding:20px; }
    .ticket { background:#fff; border-radius:20px; max-width:600px; margin:0 auto;
        box-shadow:0 8px 32px rgba(0,0,0,.12); overflow:hidden; }
    .header { background:linear-gradient(135deg,#e91e8c,#ff6b35); color:#fff;
        padding:28px 32px; text-align:center; }
    .header h1 { font-size:26px; font-weight:900; letter-spacing:.5px; margin-bottom:4px; }
    .header p { font-size:13px; opacity:.85; }
    .badge { display:inline-block; background:rgba(255,255,255,.25);
        border:1px solid rgba(255,255,255,.4); border-radius:20px;
        padding:4px 16px; font-size:11px; font-weight:700; margin-top:8px;
        text-transform:uppercase; letter-spacing:1px; }
    .body { padding:28px 32px; }
    .info-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px; }
    .info-box { background:#f8f9fc; border-radius:12px; padding:14px 16px; }
    .info-box label { display:block; font-size:11px; color:#6b7a8d; text-transform:uppercase;
        letter-spacing:.5px; margin-bottom:4px; font-weight:700; }
    .info-box span { font-size:15px; font-weight:800; color:#1a1a2e; }
    table { width:100%; border-collapse:collapse; margin-bottom:16px; }
    thead tr { background:#f0f9ff; }
    thead th { padding:10px 12px; font-size:11px; color:#0ea5e9; text-transform:uppercase;
        letter-spacing:.5px; text-align:left; font-weight:800; }
    tbody tr { border-bottom:1px solid #f0f2f5; }
    tbody td { padding:12px 12px; font-size:14px; color:#1a1a2e; font-weight:600; }
    .total-row { background:#e91e8c; color:#fff; }
    .total-row td { padding:14px 12px; font-size:16px; font-weight:900; }
    .footer { background:#1a1a2e; color:rgba(255,255,255,.7); text-align:center;
        padding:18px; font-size:12px; }
    .footer b { color:#fff; }
    .booking-id { font-family:monospace; font-size:12px; color:#6b7a8d;
        text-align:center; margin:0 0 20px; }
    .divider { border:none; border-top:2px dashed #e8ecf0; margin:20px 0; }
</style>
</head>
<body>
<div class="ticket">
    <div class="header">
        <h1>🌿 Jungle Resort &amp; Water Park</h1>
        <p>Patna, Bihar — Your Visit Ticket</p>
        <span class="badge">✅ Booking Confirmed</span>
    </div>
    <div class="body">
        <div class="info-grid">
            <div class="info-box"><label>Guest Name</label><span>${name}</span></div>
            <div class="info-box"><label>Mobile</label><span>${phone}</span></div>
            <div class="info-box"><label>Visit Date</label><span>${formatDate(visitDate)}</span></div>
            <div class="info-box"><label>Booking Date</label><span>${createdAt ? (createdAt.includes("/") ? createdAt : formatDate(createdAt)) : "N/A"}</span></div>
        </div>
        <p class="booking-id">Booking ID: ${bookingId} &nbsp;|&nbsp; Payment: ${paymentId || "Success"}</p>
        <hr class="divider" />
        <table>
            <thead><tr><th>Item</th><th style="text-align:center">Qty</th><th style="text-align:right">Amount</th></tr></thead>
            <tbody>
                ${ticketRows}${cottageRow}
                <tr class="total-row"><td colspan="2">Grand Total</td><td style="text-align:right">₹${fmt(total)}</td></tr>
            </tbody>
        </table>
        <hr class="divider" />
        <p style="font-size:12px;color:#6b7a8d;text-align:center">
            Please show this ticket at the entrance. Food charges are extra.<br>
            This ticket is non-transferable and non-refundable.
        </p>
    </div>
    <div class="footer">
        <b>Jungle Resort &amp; Water Park Patna</b><br>
        📞 +91 90653 83838 · enjoy your visit!
    </div>
</div>
</body>
</html>`;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `JungleResort_Ticket_${bookingId.slice(0, 8).toUpperCase()}.html`;
    a.click();
    URL.revokeObjectURL(url);
}

export default function TicketSearch() {
    const { ticketMap: ticketNames } = useTicketPrices();
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [searched, setSearched] = useState(false);
    const [resultOpen, setResultOpen] = useState(false);
    const [isCancelled, setIsCancelled] = useState(false);
    useEffect(() => {
        const handleOpen = () => setOpen(true);
        window.addEventListener("openTicketSearchModal", handleOpen);
        return () => window.removeEventListener("openTicketSearchModal", handleOpen);
    }, []);



    const handleSearch = async () => {
        if (!phone || !date) {
            alert("Enter phone & date");
            return;
        }

        if (phone.length !== 10) {
            alert("Enter a valid 10-digit phone number");
            return;
        }

        setSearched(true);
        setIsCancelled(false);

        try {
            setLoading(true);
            setResults([]);

            // ✅ Search across ALL month documents in WaterPark collection
            const colRef = collection(db, "WaterPark");
            const snap = await getDocs(colRef);

            let allBookings = [];
            snap.forEach(docSnap => {
                const data = docSnap.data();
                Object.entries(data).forEach(([bid, val]) => {
                    allBookings.push({ bookingId: bid, ...val });
                });
            });

            // ✅ filter by phone + date
            const filtered = allBookings.filter(
                (b) => b.phone === phone && b.visitDate === date
            );

            // ✅ Only include 'paid' tickets with a valid paymentId
            const validTickets = filtered.filter(
                (b) => b.paymentStatus === "paid" && b.paymentId
            );

            // 🔥 CASE 1: All tickets cancelled
            if (filtered.length > 0 && validTickets.length === 0) {
                setIsCancelled(true);
                setResults([]);
                return;
            }

            // 🔥 CASE 2: Valid ticket found
            if (validTickets.length > 0) {
                setResults(validTickets);
                // setOpen(false); // keep modal open to show results
                setResultOpen(true);
            }

            // 🔥 CASE 3: No ticket
            if (filtered.length === 0) {
                setResults([]);
            }

        } catch (err) {
            console.error("Search error:", err);
            alert("Something went wrong during search.");
        } finally {
            setLoading(false);
        }
    };

    //     const generateQRData = (r) => {
    //         return `
    // Jungle Resort Waterpark Ticket

    // Name: ${r.name}
    // Phone: ${r.phone}
    // Visit Date: ${r.visitDate}

    // ${Object.entries(r.tickets || {})
    //                 .map(([k, v]) => `${k}: ${v}`)
    //                 .join("\n")}

    // Total: ₹${r.total}
    // Status: ${r.paymentStatus || ""}
    // Booked On: ${r.createdAt || ""}
    //     `;
    //     };

    useEffect(() => {
        if (open || resultOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open, resultOpen]);

    const handleDownload = (ticket) => {
        downloadTicketHTML({
            name: ticket.name,
            phone: ticket.phone,
            visitDate: ticket.visitDate,
            createdAt: ticket.createdAt,
            tickets: ticket.tickets,
            cottage: ticket.cottage,
            total: ticket.total,
            bookingId: ticket.bookingId,
            paymentId: ticket.paymentId,
            ticketNames
        });
    };

    return (

        <>

            <button
                className={styles.downloadBtn}
                onClick={() => setOpen(true)}
            >
                Download Booking Confirmations
            </button>

            {open && (
                <div className={styles.overlay}>
                    <div className={styles.modal}>

                        {/* 🔥 TERA EXISTING CODE */}
                        <div className={styles.container}>

                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <h3 className={styles.title}>Search Ticket</h3>
                                <button
                                    className={styles.closeBtn}
                                    onClick={() => setOpen(false)}
                                    aria-label="Close form"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="ticket-visit-date" className={styles.label}>Visit Date:</label>
                                <input
                                    id="ticket-visit-date"
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="ticket-phone" className={styles.label}>Phone Number: (10 Digits)</label>
                                <input
                                    id="ticket-phone"
                                    type="text"
                                    placeholder=""
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className={styles.input}
                                />
                            </div>

                            <button onClick={handleSearch} className={styles.button}>
                                {loading ? "Searching..." : "Search"}
                            </button>

                            {loading && <p className={styles.loading}>Loading...</p>}

                            {searched && results.length === 0 && !loading && (
                                <div className={styles.noDataBox}>
                                    <p className={styles.noData}>
                                        {isCancelled ? "⚠️ Ticket Cancelled" : "❌ No tickets found"}
                                    </p>

                                    <p className={styles.helpText}>
                                        {isCancelled
                                            ? "This ticket has been cancelled. Please contact support."
                                            : "No ticket found. Please book your ticket or reach out to admin."}
                                    </p>

                                    <div className={styles.callBtns}>
                                        <a href="tel:+919031080903" className={styles.callBtn}>
                                            📞 Call 9031080903
                                        </a>

                                        <a href="tel:+919031080904" className={styles.callBtn}>
                                            📞 Call 9031080904
                                        </a>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div >
            )}

            {resultOpen && (
                <div className={styles.overlay}>
                    <div className={styles.modal}>

                        <div className={styles.container}>

                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div></div>
                                <h3 className={styles.title}>Your Tickets 🎟️</h3>
                                <button
                                    className={styles.closeBtn}
                                    onClick={() => setResultOpen(false)}
                                    aria-label="Close results"
                                >
                                    ✕
                                </button>
                            </div>
                            {results.map((r, i) => (
                                <div key={i} className={styles.resultCard}>
                                    <div className={styles.resRow}>
                                        <span>👤 Name:</span> <strong>{r.name}</strong>
                                    </div>
                                    <div className={styles.resRow}>
                                        <span>📅 Visit Date:</span> <strong>{formatDate(r.visitDate)}</strong>
                                    </div>
                                    <div className={styles.resRow}>
                                        <span>💰 Total:</span> <strong>₹{fmt(r.total)}</strong>
                                    </div>

                                    <button
                                        onClick={() => handleDownload(r)}
                                        className={styles.resultDownloadBtn}
                                    >
                                        📥 Download Ticket
                                    </button>
                                </div>
                            ))}



                        </div>

                    </div>
                </div>
            )}
        </>
    );
}