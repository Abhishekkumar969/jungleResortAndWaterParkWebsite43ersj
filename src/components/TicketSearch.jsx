import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import styles from "../styles/TicketSearch.module.css";
import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function TicketSearch() {
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [searched, setSearched] = useState(false);
    const [resultOpen, setResultOpen] = useState(false);
    const [isCancelled, setIsCancelled] = useState(false);
    const ticketRef = useRef();

    // 🔥 Month generator
    const getMonthDoc = (date) => {
        const d = new Date(date);

        const month = d.toLocaleString("en-US", {
            month: "short",
        }); // Jan, Feb, Mar...

        const year = d.getFullYear();

        return `${month}${year}`; // Apr2026
    };

    const handleSearch = async () => {
        if (!phone || !date) {
            alert("Enter phone & date");
            return;
        }

        setSearched(true);
        setIsCancelled(false);

        try {
            setLoading(true);
            setResults([]);

            const monthDoc = getMonthDoc(date);
            const docRef = doc(db, "WaterPark", monthDoc);
            const snap = await getDoc(docRef);

            if (!snap.exists()) return;

            const data = snap.data();

            const bookingList = Object.entries(data).map(([uid, value]) => ({
                uid,
                ...value,
            }));

            // ✅ match phone + date
            const filtered = bookingList.filter(
                (b) => b.phone === phone && b.visitDate === date
            );

            // ✅ remove cancelled
            const validTickets = filtered.filter(
                (b) => b.paymentStatus !== "cancelled"
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
                setOpen(false);
                setResultOpen(true);
            }

            // 🔥 CASE 3: No ticket
            if (filtered.length === 0) {
                setResults([]);
            }

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const generateQRData = (r) => {
        return `
Jungle Resort Waterpark Ticket

Name: ${r.name}
Phone: ${r.phone}
Visit Date: ${r.visitDate}

${Object.entries(r.tickets || {})
                .map(([k, v]) => `${k}: ${v}`)
                .join("\n")}

Total: ₹${r.total}
Status: ${r.paymentStatus || ""}
Booked On: ${r.createdAt || ""}
    `;
    };

    useEffect(() => {
        if (open || resultOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open, resultOpen]);

    const downloadPDF = async () => {
        const element = ticketRef.current;

        const canvas = await html2canvas(element, {
            scale: 3,
            useCORS: true,
        });

        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        let imgWidth = pageWidth - 20;
        let imgHeight = (canvas.height * imgWidth) / canvas.width;

        // 🔥 MAIN FIX (height control)
        if (imgHeight > pageHeight - 20) {
            imgHeight = pageHeight - 20;
            imgWidth = (canvas.width * imgHeight) / canvas.height;
        }

        const x = (pageWidth - imgWidth) / 2;
        const y = (pageHeight - imgHeight) / 2;

        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);

        pdf.save("WaterPark-Ticket.pdf");
    };

    return (

        <>

            <button
                className={styles.downloadBtn}
                onClick={() => setOpen(true)}
            >
                🎟️ Download Your Tickets Now
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
                                >
                                    ✕
                                </button>
                            </div>

                            <div className={styles.field}>
                                <label className={styles.label}>Visit Date:</label>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.field}>
                                <label className={styles.label}>Phone Number: (10 Digits)</label>
                                <input
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
                                >
                                    ✕
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={downloadPDF}
                                    style={{
                                        margin: "10px 0px",
                                        padding: "10px",
                                        width: "100%",
                                        background: "#22c55e",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "8px",
                                        fontWeight: "600",
                                        cursor: "pointer"
                                    }}
                                >
                                    📥 Download
                                </button>
                            </div>

                            {results.map((r, i) => (
                                <div key={i} className={styles.card}>

                                    {/* <p className={styles.text}><b>Name:</b> {r.name}</p>
                                    <p className={styles.text}><b>Phone:</b> {r.phone}</p>

                                    <p className={styles.text}>
                                        <b>Visit Date:</b>{" "}
                                        {new Date(r.visitDate).toLocaleDateString("en-GB")}
                                    </p>

                                    {Object.entries(r.tickets || {}).map(([key, value]) => (
                                        <p className={styles.text}>
                                            🎟️ <b>{key}:</b> {value}
                                        </p>
                                    ))}

                                    <p className={styles.text}>
                                        <b>Total:</b> ₹{Number(r.total || 0)}
                                    </p>

                                    <p className={styles.text}>
                                        <b>Status:</b> {r.paymentStatus}
                                    </p>

                                    <p className={styles.text}>
                                        <b>Booked On:</b> {r.createdAt}
                                    </p>

                                    <div style={{ marginTop: "10px", textAlign: "center" }}>
                                        <QRCodeCanvas value={generateQRData(r)} size={120} />
                                    </div> */}



                                    <div className={styles.ticketCard} ref={ticketRef}>

                                        <div style={{ marginBottom: "10px" }}></div>

                                        <div className={styles.ticketContent}>

                                            <div className={styles.ticketlogo}>
                                                <img src="../../images/logo.png" alt="Jungle Resort Logo" />
                                            </div>

                                            <div className={styles.ticketCardDetails}>
                                                <div className={styles.ticketName}>
                                                    {r.name}
                                                </div>

                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    <div className={styles.ticketTitle}>
                                                        YOUR UNIQUE ENTRY PASS
                                                    </div>
                                                </div>

                                                <div className={styles.qrBox}>
                                                    <QRCodeCanvas value={generateQRData(r)} size={140} />
                                                </div>

                                                <p style={{ fontSize: "12px" }}>
                                                    Visit: {new Date(r.visitDate).toLocaleDateString("en-GB")}
                                                </p>

                                                <div className={styles.ticketTermsWrapper}>
                                                    <div className={styles.ticketTerms}>
                                                        <div className={styles.termsTitle}>TERMS & CONDITIONS</div>

                                                        <ul className={styles.termsList}>
                                                            <li>Valid ticket required. Non-refundable & non-transferable.</li>
                                                            <li>Management reserves right of admission.</li>
                                                            <li>Follow safety rules & staff instructions.</li>
                                                            <li>Lockers, swimwear & food chargeable. Outside food/alcohol not allowed.</li>
                                                            <li>Guests responsible for belongings. Use rides at own risk.</li>
                                                            <li>No liability for injury, loss or damage.</li>
                                                            <li>Property damage will be charged.</li>
                                                            <li>Rides may close anytime; no refund (including weather).</li>
                                                            <li>Entry means consent for photo/video use for promotion.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div style={{ marginBottom: "10px" }}></div>
                                    </div>
                                </div>
                            ))}



                        </div>

                    </div>
                </div>
            )}
        </>
    );
}