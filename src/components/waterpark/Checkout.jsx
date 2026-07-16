import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useTicketPrices } from "../../context/TicketPricesContext";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { db, auth } from "../../firebaseConfig";
import { getDoc, doc, setDoc } from "firebase/firestore";
import styles from "../../styles/Checkout.module.css";
import "../../styles/Calendar.css"

function loadRazorpay() {
    return new Promise((resolve) => {
        if (window.Razorpay) { resolve(true); return; }
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.head.appendChild(script);
    });
}

const fmt = (n) => new Intl.NumberFormat("en-IN").format(n);

/* ─── Ticket PDF Generator ─── */
function downloadTicket({ formData, selectedTickets, cottage, totalAmount, bookingId, paymentId, ticketNames }) {
    const now = new Date();
    const formatDate = (date) => {
        const d = new Date(date);
        if (isNaN(d)) return date;
        return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
    };
    const dateStr = formatDate(now);
    const visitDateStr = formatDate(formData.visitDate);

    const ticketRows = Object.entries(selectedTickets || {}).map(([id, qty]) => {
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
            <div class="info-box"><label>Guest Name</label><span>${formData.name}</span></div>
            <div class="info-box"><label>Mobile</label><span>${formData.phone}</span></div>
            <div class="info-box"><label>Visit Date</label><span>${visitDateStr}</span></div>
            <div class="info-box"><label>Booking Date</label><span>${dateStr}</span></div>
        </div>
        <p class="booking-id">Booking ID: ${bookingId} &nbsp;|&nbsp; Payment: ${paymentId}</p>
        <hr class="divider" />
        <table>
            <thead><tr><th>Item</th><th style="text-align:center">Qty</th><th style="text-align:right">Amount</th></tr></thead>
            <tbody>
                ${ticketRows}${cottageRow}
                <tr class="total-row"><td colspan="2">Grand Total</td><td style="text-align:right">₹${fmt(totalAmount)}</td></tr>
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

/* ─── Success Screen ─── */
function SuccessScreen({ formData, selectedTickets, cottage, totalAmount, bookingId, paymentId, onClose, ticketNames }) {
    const [downloaded, setDownloaded] = useState(false);

    const handleDownload = () => {
        downloadTicket({ formData, selectedTickets, cottage, totalAmount, bookingId, paymentId, ticketNames });
        setDownloaded(true);
    };

    useEffect(() => {
        // Direct download as requested by user
        const t = setTimeout(() => {
            downloadTicket({ formData, selectedTickets, cottage, totalAmount, bookingId, paymentId, ticketNames });
            setDownloaded(true);
        }, 800); // slightly reduced delay
        return () => clearTimeout(t);
    }, [formData, selectedTickets, cottage, totalAmount, bookingId, paymentId, ticketNames]);

    return ReactDOM.createPortal(
        <div className={styles.successOverlay}>
            <div className={styles.successCard}>
                <div className={styles.successIcon}>🎉</div>
                <h2 className={styles.successTitle}>Payment Successful!</h2>
                <p className={styles.successSub}>
                    Thank you for choosing <strong>Jungle Resort &amp; Water Park</strong>
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'space-between', marginTop: '15px', background: '#f8fafd', padding: '15px', borderRadius: '12px', border: '1px solid #e1e8ed' }}>
                    <div className={styles.successInfo} style={{ flex: '1 1 240px', background: 'transparent', padding: 0, margin: 0, boxShadow: 'none', border: 'none' }}>
                        <div className={styles.successRow}>
                            <span>👤 Name</span><strong>{formData.name}</strong>
                        </div>
                        <div className={styles.successRow}>
                            <span>📅 Visit Date</span><strong>{(() => {
                                const d = new Date(formData.visitDate);
                                return isNaN(d) ? formData.visitDate : `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
                            })()}</strong>
                        </div>
                        
                        <div className={styles.successRow}>
                            <span>🎟️ Tickets</span>
                            <div style={{ textAlign: "right", fontSize: "14px", lineHeight: "1.5" }}>
                                {Object.entries(selectedTickets || {}).map(([id, qty]) => {
                                    const name = ticketNames?.[id]?.name || id;
                                    return <div key={id}><strong>{name}</strong> &times; {qty}</div>
                                })}
                                {cottage && (
                                    <div><strong>Cottage ({cottage.duration})</strong> &times; {cottage.rooms || 1}</div>
                                )}
                            </div>
                        </div>

                        <div className={styles.successRow}>
                            <span>💰 Amount Paid</span>
                            <strong style={{ color: "#e91e8c", fontSize: "16px" }}>₹{fmt(totalAmount)}</strong>
                        </div>
                        <div className={styles.successRow}>
                            <span>🔖 Booking ID</span>
                            <strong style={{ fontFamily: "monospace", fontSize: "12px", background: "#eee", padding: "2px 6px", borderRadius: "4px" }}>
                                {bookingId.slice(0, 12).toUpperCase()}
                            </strong>
                        </div>
                    </div>
                </div>

                {downloaded && (
                    <div className={styles.downloadedBanner}>
                        ✅ The tickets has been downloaded — show this at the entrance!
                    </div>
                )}

                <button className={styles.downloadBtn} onClick={handleDownload}>
                    {downloaded ? "⬇️ Download Again" : "⬇️ Download Ticket"}
                </button>

                <button className={styles.doneBtn} onClick={onClose}>
                    Done
                </button>
            </div>
        </div>,
        document.body
    );
}

/* ════════════════════════════════════════════════════════ */
export default function Checkout({ isOpen, onClose, data }) {
    const { ticketMap: ticketNames } = useTicketPrices();

    const { selectedTickets, cottage, totalAmount } = data || {};
    const hasPoolParty = Object.keys(selectedTickets || {}).some(k => k.startsWith('pp_'));
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [paymentError, setPaymentError] = useState("");
    const [showDetails, setShowDetails] = useState(false);
    const [successData, setSuccessData] = useState(null);
    const [reservedDates, setReservedDates] = useState([]);
    const [formData, setFormData] = useState(() => {
        if (hasPoolParty) {
            return { name: "", phone: "", visitDate: "2026-07-17" };
        }
        return { name: "", phone: "", visitDate: "" }; // Will be set by useEffect
    });

    const [filteredTickets, setFilteredTickets] = useState(selectedTickets);
    const [filteredCottage, setFilteredCottage] = useState(cottage);
    const [filteredTotal, setFilteredTotal] = useState(totalAmount);
    const [removedItems, setRemovedItems] = useState(false);

    useEffect(() => {
        if (formData.visitDate && reservedDates.includes(formData.visitDate)) {
            const newTix = {};
            let newTotal = 0;
            let removed = false;
            
            Object.entries(selectedTickets || {}).forEach(([k, v]) => {
                if (k.startsWith('pp_')) {
                    newTix[k] = v;
                    newTotal += (ticketNames[k]?.price || 0) * v;
                } else {
                    removed = true;
                }
            });
            
            if (cottage) removed = true;
            
            setFilteredTickets(newTix);
            setFilteredCottage(null);
            setFilteredTotal(newTotal);
            setRemovedItems(removed);
        } else {
            setFilteredTickets(selectedTickets);
            setFilteredCottage(cottage);
            setFilteredTotal(totalAmount);
            setRemovedItems(false);
        }
    }, [formData.visitDate, reservedDates, selectedTickets, cottage, totalAmount, ticketNames]);

    const formatDateIST = (date) => {
        const d = new Date(date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const getNextAvailableDate = (reservedList) => {
        let d = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
        while (true) {
            const formatted = formatDateIST(d);
            if (!reservedList.includes(formatted)) {
                return formatted;
            }
            d.setDate(d.getDate() + 1);
        }
    };

    useEffect(() => {
        const fetchReserved = async () => {
            const ref = doc(db, "Reserved", "Dates");
            const snap = await getDoc(ref);

            if (snap.exists()) {
                setReservedDates(snap.data().dates || []);
            }
        };

        fetchReserved();
    }, []);

    useEffect(() => { loadRazorpay(); }, []);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (!user) return;
            try {
                const now = new Date();
                const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                const monthYear = `${monthNames[now.getMonth()]}${now.getFullYear()}`;
                const snap = await getDoc(doc(db, "users", monthYear));
                if (!snap.exists()) return;
                const userData = snap.data()[user.uid];
                if (userData) {
                    setFormData(prev => ({
                        ...prev,
                        name: prev.name || userData.name || "",
                        phone: prev.phone || userData.phone || "",
                    }));
                }
            } catch { /* silent */ }
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (isOpen) {
            if (hasPoolParty) {
                setFormData(prev => ({ ...prev, visitDate: "2026-07-17" }));
            } else if (cottage?.date) {
                setFormData(prev => ({ ...prev, visitDate: cottage.date }));
            } else {
                setFormData(prev => ({ ...prev, visitDate: getNextAvailableDate(reservedDates) }));
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, cottage?.date, hasPoolParty, reservedDates]);

    if (!isOpen && !successData) return null;

    // Show success screen if payment done
    if (successData) {
        return <SuccessScreen {...successData} ticketNames={ticketNames} onClose={() => { setSuccessData(null); onClose(); }} />;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => {
            const n = { ...prev };
            if (name === "name" && value.trim()) delete n.name;
            if (name === "phone" && value.length === 10) delete n.phone;
            if (name === "visitDate" && value) delete n.visitDate;
            return n;
        });
    };

    const validate = () => {
        const e = {};
        if (!formData.name.trim()) e.name = "Name is required";
        if (formData.phone.length !== 10) e.phone = "Enter valid 10-digit mobile number";
        if (!formData.visitDate) e.visitDate = "Please select visit date";
        return e;
    };

    const handlePayment = async () => {
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setLoading(true);
        setPaymentError("");

        try {
            const payload = {
                amount: filteredTotal,
                tickets: filteredTickets || {},
                cottage: filteredCottage || null,
            };

            const res = await fetch(process.env.REACT_APP_API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                throw new Error(errorData.details || errorData.error || "Server error");
            }

            const order = await res.json();
            if (!order?.id) throw new Error("Order creation failed");

            const bookingId = crypto.randomUUID();
            const [y, m, d] = (formData.visitDate || "").split("-");
            // Create date in IST to get correct month
            const dateObj = new Date(`${y}-${m}-${d}T00:00:00+05:30`);
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const monthYear = `${monthNames[dateObj.getMonth()]}${dateObj.getFullYear()}`;

            const wpBookingData = {
                bookingId,
                userId: auth.currentUser?.uid || "guest",
                name: formData.name || "",
                phone: formData.phone || "",
                visitDate: formData.visitDate || "",
                tickets: filteredTickets || {},
                cottage: filteredCottage ? {
                    id: filteredCottage.id,
                    duration: filteredCottage.duration,
                    total: filteredCottage.total,
                    rooms: filteredCottage.rooms || 1,
                    days: filteredCottage.days || 1
                } : null,
                total: filteredTotal || 0,
                orderId: order.id,
                verification: false,
                paymentStatus: "pending",
                createdAt: new Date().toLocaleString("en-IN"),
            };



            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY_ID,
                amount: order.amount,
                order_id: order.id,
                currency: "INR",
                name: filteredCottage ? "Jungle Resort Cottage Booking" : (Object.keys(filteredTickets || {}).some(k => k.startsWith('pp_')) ? "Jungle Resort Pool Party" : "Jungle Resort Water Park"),
                description: (() => {
                    const ticketSummary = Object.entries(filteredTickets || {})
                        .map(([k, v]) => `${k}×${v}`)
                        .join(",");

                    const cottageSummary = filteredCottage
                        ? `${filteredCottage.duration}${filteredCottage.days > 1 ? `×${filteredCottage.days}` : ""}`
                        : "";

                    const ticketTypeStr = hasPoolParty ? "Pool Party" : "Water Park";

                    let desc = "";
                    if (filteredCottage && ticketSummary) desc = `Combo: ${ticketSummary} + ${cottageSummary}`;
                    else if (filteredCottage) desc = `Cottage: ${cottageSummary}`;
                    else desc = `${ticketTypeStr}: ${ticketSummary}`;

                    return desc.substring(0, 250); // Trim to avoid Razorpay SDK issues
                })(),

                handler: async (response) => {
                    setLoading(true);
                    const paymentFields = {
                        paymentId: response.razorpay_payment_id || "N/A",
                        orderId: response.razorpay_order_id || "N/A",
                        verification: true,
                        paymentStatus: "paid",
                        paymentAt: new Date().toISOString(),
                    };

                    try {
                        // Sync with WaterPark collection (all bookings)
                        if (Object.keys(filteredTickets || {}).length > 0 || filteredCottage) {
                            await setDoc(doc(db, "WaterPark", monthYear),
                                { [bookingId]: { ...wpBookingData, ...paymentFields } },
                                { merge: true }
                            );
                        }
                    } catch (syncErr) {
                        console.error("Critical: Post-payment Sync Failed", syncErr);
                        // We do NOT show error message to user here because payment is already successful.
                        // We proceed to show success screen so they get their ticket.
                    }

                    localStorage.removeItem("cart");
                    window.dispatchEvent(new Event("cartUpdated"));

                    setLoading(false);
                    setSuccessData({
                        formData,
                        selectedTickets: filteredTickets,
                        cottage: filteredCottage,
                        totalAmount: filteredTotal,
                        bookingId,
                        paymentId: response.razorpay_payment_id,
                    });
                },

                modal: {
                    ondismiss: () => {
                        setLoading(false);
                        setPaymentError("Payment cancelled ❌");
                    }
                },

                prefill: { name: formData.name, contact: formData.phone },
                theme: { color: "#e91e8c" },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();

        } catch (err) {
            console.error("HandlePayment Error:", err);
            setPaymentError(err.message || "Payment failed. Please try again ❌");
            setLoading(false);
        }
    };

    const parseISTDate = (dateStr) => {
        const [y, m, d] = dateStr.split("-");
        return new Date(y, m - 1, d); // 👈 local date (IST safe)
    };



    const formatDisplayDate = (dateStr) => {
        const [y, m, d] = dateStr.split("-");
        return `${d}/${m}/${y}`;
    };

    return ReactDOM.createPortal(
        <div className={styles.overlayBody}>

            {/* OVERLAY */}
            <div className={styles.overlay} onClick={() => { if (!showDetails) onClose(); }} />

            {/* MODAL */}
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.centerWrap}>
                    <div className={styles.card}>
                        <div className={styles.right}>

                            {/* Header */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                                <div>
                                    <h3 style={{ margin: 0, fontSize: "20px", fontWeight: 900, color: "#1a1a2e" }}>
                                        🛒 Checkout
                                    </h3>
                                    <p style={{ margin: 0, fontSize: "12px", color: "#6b7a8d" }}>
                                        Complete your booking
                                    </p>
                                </div>
                                <button className={styles.close} onClick={onClose} aria-label="Close checkout">✕</button>
                            </div>

                            {/* Form */}
                            <div className={styles.inputGroup}>

                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <label>{hasPoolParty ? "Event Date" : "Choose Visit Date"}</label>

                                    {formData.visitDate && (
                                        <span
                                            style={{
                                                fontSize: "13px",
                                                fontWeight: "700",
                                                color: "#e91e8c",
                                                background: "#ffe4f1",
                                                padding: "4px 10px",
                                                borderRadius: "20px"
                                            }}
                                        >
                                            📅 {formatDisplayDate(formData.visitDate)}
                                        </span>
                                    )}
                                </div>

                                {!hasPoolParty && (
                                    <div className={styles.calendarWrapper}>
                                        <Calendar

                                            prev2Label={null}   // ❌ remove <<
                                            next2Label={null}   // ❌ remove >>

                                            minDetail="month"   // ❌ disable year view
                                            maxDetail="month"   // ❌ disable drill up

                                            navigationLabel={({ date }) =>
                                                date.toLocaleDateString("en-US", {
                                                    month: "long",
                                                    year: "numeric",
                                                })
                                            }

                                            formatMonthYear={(locale, date) =>
                                                date.toLocaleDateString("en-US", {
                                                    month: "long",
                                                    year: "numeric",
                                                })
                                            }

                                            value={
                                                formData.visitDate
                                                    ? parseISTDate(formData.visitDate)
                                                    : null
                                            }

                                            onChange={(date) => {
                                                const formatted = formatDateIST(date);

                                                setFormData(prev => ({
                                                    ...prev,
                                                    visitDate: formatted
                                                }));

                                                setErrors(prev => {
                                                    const n = { ...prev };
                                                    delete n.visitDate;
                                                    return n;
                                                });
                                            }}

                                            tileDisabled={({ date }) => {
                                                const formatted = formatDateIST(date);
                                                const todayStr = formatDateIST(new Date());

                                                return (
                                                    formatted < todayStr ||
                                                    reservedDates.includes(formatted)
                                                );
                                            }}

                                            tileClassName={({ date }) => {
                                                const formatted = formatDateIST(date);

                                                if (reservedDates.includes(formatted)) {
                                                    return "reserved-date";
                                                }
                                            }}
                                        />
                                    </div>
                                )}

                                {errors.visitDate && <p className={styles.error}>{errors.visitDate}</p>}

                                <div> <label>Full Name</label> </div>
                                <input
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <p className={styles.error}>{errors.name}</p>}

                                <label>Mobile Number</label>
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    maxLength={10}
                                    placeholder="10-digit mobile number"
                                    onWheel={(e) => e.target.blur()}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, "");
                                        if (value.length <= 10) {
                                            setFormData(prev => ({ ...prev, phone: value }));
                                            setErrors(prev => {
                                                const n = { ...prev };
                                                if (value.length === 10) delete n.phone;
                                                return n;
                                            });
                                        }
                                    }}
                                />
                                {errors.phone && <p className={styles.error}>{errors.phone}</p>}
                            </div>

                            {removedItems && (
                                <div style={{ color: "#d9534f", fontSize: "12px", margin: "10px 0", padding: "10px", background: "#fdf2f2", borderRadius: "8px" }}>
                                    ⚠️ Waterpark and Cottage bookings are closed on the selected date. These items have been automatically removed from checkout.
                                </div>
                            )}

                            {paymentError && (
                                <p style={{ color: "red", fontSize: "12px", marginTop: "-8px", marginBottom: "10px" }}>
                                    {paymentError}
                                </p>
                            )}

                            <p style={{ fontSize: "12px", color: "green", margin: "0 0 10px" }}>
                                🔒 100% Secure Payment via Razorpay
                            </p>

                            <button
                                className={styles.button}
                                onClick={handlePayment}
                                disabled={loading || filteredTotal === 0}
                            >
                                {loading ? (
                                    <span className={styles.loader}></span>
                                ) : (
                                    <>PAY NOW : ₹ {fmt(filteredTotal)}</>
                                )}
                            </button>

                            {/* Order Summary */}
                            <div className={styles.orderSummaryBox} style={{ marginTop: "15px" }}>
                                {Object.entries(filteredTickets || {}).map(([id, qty]) => {
                                    const t = ticketNames[id];
                                    return (
                                        <div key={id} className={styles.summaryRow}>
                                            <span>🎟️ {t?.name} × {qty}</span>
                                            <strong>₹{fmt((t?.price || 0) * qty)}</strong>
                                        </div>
                                    );
                                })}
                                {filteredCottage && (
                                    <div className={styles.summaryRow}>
                                        <span>🏡 Cottage {filteredCottage.duration}{filteredCottage.days > 1 ? ` × ${filteredCottage.days}d` : ""}</span>
                                        <strong>₹{fmt(filteredCottage.total)}</strong>
                                    </div>
                                )}
                                <div className={styles.summaryTotal}>
                                    <span>Grand Total</span>
                                    <strong>₹{fmt(filteredTotal)}</strong>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Details popup */}
            {showDetails && (
                <div className={styles.detailsOverlay} onClick={() => setShowDetails(false)}>
                    <div className={styles.detailsPopup} onClick={(e) => e.stopPropagation()}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                            <h3 className={styles.detailsTitle}>YOUR SELECTIONS</h3>
                            <button className={styles.detailsClose} onClick={() => setShowDetails(false)}>✕</button>
                        </div>
                        <table className={styles.detailsTable}>
                            <thead><tr><th>Ticket</th><th>Price</th><th>Qty</th><th>Total</th></tr></thead>
                            <tbody>
                                {Object.entries(filteredTickets || {}).map(([id, qty]) => {
                                    const price = ticketNames[id]?.price || 0;
                                    return (
                                        <tr key={id}>
                                            <td>{ticketNames[id]?.name || id}</td>
                                            <td>₹{fmt(price)}</td>
                                            <td>{qty}</td>
                                            <td>₹{fmt(price * qty)}</td>
                                        </tr>
                                    );
                                })}
                                {filteredCottage && (
                                    <tr>
                                        <td>🏡 Cottage {filteredCottage.duration} {filteredCottage.rooms > 1 ? `(${filteredCottage.rooms} Rooms)` : ""}</td>
                                        <td>₹{fmt(filteredCottage.basePrice)}</td>
                                        <td>{filteredCottage.days || 1} {filteredCottage.days > 1 ? "days" : "day"}</td>
                                        <td>₹{fmt(filteredCottage.total)}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <div className={styles.detailsTotal}>Total = ₹ {fmt(filteredTotal)}</div>
                    </div>
                </div>
            )}



        </div>,
        document.body
    );
}

