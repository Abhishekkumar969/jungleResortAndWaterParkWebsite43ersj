import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { db, auth } from "../../firebaseConfig";
import { getDoc, doc, setDoc } from "firebase/firestore";
import styles from "../../styles/Checkout.module.css";

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

const ticketNames = {
    kidsbelow10years: { name: "Kids Below 10 Years", price: 299 },
    above10years: { name: "Above 10 Years", price: 399 },
    groupof5: { name: "Group Of 5", price: 1849 },
    groupof10: { name: "Group Of 10", price: 3250 },
    groupof15: { name: "Group Of 15", price: 4500 },
    groupof20: { name: "Group Of 20", price: 5500 },
};

const fmt = (n) => new Intl.NumberFormat("en-IN").format(n);

/* ─── Ticket PDF Generator ─── */
function downloadTicket({ formData, selectedTickets, cottage, totalAmount, bookingId, paymentId }) {
    const now = new Date();
    const dateStr = now.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });

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
            <td>🏡 Cottage Room – ${cottage.duration}${cottage.days > 1 ? ` × ${cottage.days} days` : ""}</td>
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
        <h1>🌿 Jungle Resort &amp; Waterpark</h1>
        <p>Patna, Bihar — Your Visit Ticket</p>
        <span class="badge">✅ Booking Confirmed</span>
    </div>
    <div class="body">
        <div class="info-grid">
            <div class="info-box"><label>Guest Name</label><span>${formData.name}</span></div>
            <div class="info-box"><label>Mobile</label><span>${formData.phone}</span></div>
            <div class="info-box"><label>Visit Date</label><span>${formData.visitDate}</span></div>
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
        <b>Jungle Resort &amp; Waterpark Patna</b><br>
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
function SuccessScreen({ formData, selectedTickets, cottage, totalAmount, bookingId, paymentId, onClose }) {
    const [downloaded, setDownloaded] = useState(false);

    const handleDownload = () => {
        downloadTicket({ formData, selectedTickets, cottage, totalAmount, bookingId, paymentId });
        setDownloaded(true);
    };

    useEffect(() => {
        // Auto-download once on mount — deps intentionally omitted (one-shot)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const t = setTimeout(() => {
            downloadTicket({ formData, selectedTickets, cottage, totalAmount, bookingId, paymentId });
            setDownloaded(true);
        }, 1000);
        return () => clearTimeout(t);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return ReactDOM.createPortal(
        <div className={styles.successOverlay}>
            <div className={styles.successCard}>
                <div className={styles.successIcon}>🎉</div>
                <h2 className={styles.successTitle}>Payment Successful!</h2>
                <p className={styles.successSub}>
                    Thank you for choosing <strong>Jungle Resort &amp; Waterpark</strong>
                </p>

                <div className={styles.successInfo}>
                    <div className={styles.successRow}>
                        <span>👤 Name</span><strong>{formData.name}</strong>
                    </div>
                    <div className={styles.successRow}>
                        <span>📅 Visit Date</span><strong>{formData.visitDate}</strong>
                    </div>
                    <div className={styles.successRow}>
                        <span>💰 Amount Paid</span>
                        <strong style={{ color: "#e91e8c" }}>₹{fmt(totalAmount)}</strong>
                    </div>
                    <div className={styles.successRow}>
                        <span>🔖 Booking ID</span>
                        <strong style={{ fontFamily: "monospace", fontSize: "12px" }}>
                            {bookingId.slice(0, 12).toUpperCase()}
                        </strong>
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

    const { selectedTickets, cottage, totalAmount } = data || {};
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [paymentError, setPaymentError] = useState("");
    const [showDetails, setShowDetails] = useState(false);
    const [successData, setSuccessData] = useState(null);

    const [formData, setFormData] = useState({ name: "", phone: "", visitDate: "" });

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

    if (!isOpen && !successData) return null;

    // Show success screen if payment done
    if (successData) {
        return <SuccessScreen {...successData} onClose={() => { setSuccessData(null); onClose(); }} />;
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
            const res = await fetch(process.env.REACT_APP_API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: totalAmount }),
            });
            if (!res.ok) throw new Error("Server error");
            const order = await res.json();
            if (!order?.id) throw new Error("Order creation failed");

            const bookingId = crypto.randomUUID();
            const now = new Date();
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const monthYear = `${monthNames[now.getMonth()]}${now.getFullYear()}`;

            const wpBookingData = {
                bookingId,
                userId: auth.currentUser?.uid || "guest",
                ...formData,
                tickets: selectedTickets,
                cottage: cottage ? { id: cottage.id, duration: cottage.duration, total: cottage.total } : null,
                total: totalAmount,
                orderId: order.id,
                verification: false,
                createdAt: new Date().toLocaleString("en-IN"),
            };

            if (Object.keys(selectedTickets || {}).length > 0 || cottage) {
                await setDoc(doc(db, "WaterPark", monthYear), { [bookingId]: wpBookingData }, { merge: true });
            }

            let cottageBookingData = null;
            if (cottage) {
                cottageBookingData = {
                    bookingId,
                    userId: auth.currentUser?.uid || "guest",
                    name: formData.name,
                    phone: formData.phone,
                    visitDate: formData.visitDate,
                    cottagePackage: { id: cottage.id, duration: cottage.duration, price: cottage.basePrice, days: cottage.days || 1 },
                    waterParkAddons: cottage.addons || {},
                    total: cottage.total,
                    orderId: order.id,
                    verification: false,
                    createdAt: new Date().toLocaleString("en-IN"),
                };
                await setDoc(doc(db, "CottageBookings", monthYear), { [bookingId]: cottageBookingData }, { merge: true });
            }

            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY_ID,
                amount: order.amount,
                order_id: order.id,
                currency: "INR",
                name: "Jungle Resort & Waterpark",
                description: cottage && Object.keys(selectedTickets || {}).length > 0
                    ? "Waterpark Tickets + Cottage Room"
                    : cottage ? `Cottage – ${cottage.duration}` : "Waterpark Tickets",

                handler: async (response) => {
                    setLoading(false);
                    try {
                        const paymentFields = {
                            paymentId: response.razorpay_payment_id,
                            orderId: response.razorpay_order_id,
                            verification: true,
                            paymentAt: new Date(),
                        };

                        if (Object.keys(selectedTickets || {}).length > 0 || cottage) {
                            await setDoc(
                                doc(db, "WaterPark", monthYear),
                                { [bookingId]: { ...wpBookingData, ...paymentFields } },
                                { merge: true }
                            );
                        }
                        if (cottageBookingData) {
                            await setDoc(
                                doc(db, "CottageBookings", monthYear),
                                { [bookingId]: { ...cottageBookingData, ...paymentFields } },
                                { merge: true }
                            );
                        }

                        // Clear cart
                        localStorage.removeItem("cart");
                        window.dispatchEvent(new Event("cartUpdated"));

                        // Show success screen
                        setSuccessData({
                            formData,
                            selectedTickets,
                            cottage,
                            totalAmount,
                            bookingId,
                            paymentId: response.razorpay_payment_id,
                        });

                    } catch { setPaymentError("Payment recorded but confirmation failed. Contact support."); }
                },

                modal: {
                    ondismiss: () => {
                        setLoading(false);
                        setPaymentError("Payment cancelled ❌");
                        setDoc(doc(db, "WaterPark", monthYear),
                            { [bookingId]: { ...wpBookingData, paymentStatus: "cancelled", cancelledAt: new Date() } },
                            { merge: true }
                        );
                    }
                },

                prefill: { name: formData.name, contact: formData.phone },
                theme: { color: "#e91e8c" },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();

        } catch (err) {
            setPaymentError("Payment failed. Please try again ❌");
            setLoading(false);
        }
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

                            {/* Order Summary */}
                            <div className={styles.orderSummaryBox}>
                                {Object.entries(selectedTickets || {}).map(([id, qty]) => {
                                    const t = ticketNames[id];
                                    return (
                                        <div key={id} className={styles.summaryRow}>
                                            <span>🎟️ {t?.name} × {qty}</span>
                                            <strong>₹{fmt((t?.price || 0) * qty)}</strong>
                                        </div>
                                    );
                                })}
                                {cottage && (
                                    <div className={styles.summaryRow}>
                                        <span>🏡 Cottage {cottage.duration}{cottage.days > 1 ? ` × ${cottage.days}d` : ""}</span>
                                        <strong>₹{fmt(cottage.total)}</strong>
                                    </div>
                                )}
                                <div className={styles.summaryTotal}>
                                    <span>Grand Total</span>
                                    <strong>₹{fmt(totalAmount)}</strong>
                                </div>
                            </div>

                            {/* Form */}
                            <div className={styles.inputGroup}>

                                <label>Choose Visit Date</label>
                                <input
                                    type="date"
                                    name="visitDate"
                                    value={formData.visitDate}
                                    min={new Date().toISOString().split("T")[0]}
                                    onChange={handleChange}
                                />
                                {errors.visitDate && <p className={styles.error}>{errors.visitDate}</p>}

                                <label>Full Name</label>
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
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className={styles.loader}></span>
                                ) : (
                                    <>PAY NOW : ₹ {fmt(totalAmount)}</>
                                )}
                            </button>

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
                                {Object.entries(selectedTickets || {}).map(([id, qty]) => {
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
                                {cottage && (
                                    <tr>
                                        <td>🏡 Cottage {cottage.duration}</td>
                                        <td>₹{fmt(cottage.basePrice)}</td>
                                        <td>{cottage.days || 1}</td>
                                        <td>₹{fmt(cottage.total)}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <div className={styles.detailsTotal}>Total = ₹ {fmt(totalAmount)}</div>
                    </div>
                </div>
            )}
        </div>,
        document.body
    );
}