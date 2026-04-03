import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebaseConfig";
import { getDoc, doc, setDoc } from "firebase/firestore";
import styles from "../../styles/Checkout.module.css";

const ticketNames = {
    kikdsbelow10years: { name: "Kids Below 10 Years", price: 299 },
    kikdsabove10years: { name: "Kids Above 10 Years", price: 399 },
    groupof5: { name: "Group Of 5", price: 1600 },
    groupof10: { name: "Group Of 10", price: 3000 },
    groupof15: { name: "Group Of 15", price: 4200 },
    groupof20: { name: "Group Of 20", price: 5000 }
};

export default function Checkout({ isOpen, onClose, data }) {

    const { selectedTickets, totalAmount } = data || {};
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [paymentError, setPaymentError] = useState("");
    const [showDetails, setShowDetails] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        visitDate: ""
    });

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {

            if (!user) return;

            try {
                const now = new Date();

                const monthNames = [
                    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                ];

                const monthYear =
                    `${monthNames[now.getMonth()]}${now.getFullYear()}`;

                const docRef = doc(db, "users", monthYear);
                const snap = await getDoc(docRef);

                if (!snap.exists()) return;

                const data = snap.data();
                const userData = data[user.uid];

                if (userData) {
                    setFormData((prev) => ({
                        ...prev,
                        name: prev.name || userData.name || "",
                        phone: prev.phone || userData.phone || ""
                    }));
                }

            } catch (err) {
                console.error("Auto fill error:", err);
            }

        });

        return () => unsubscribe();
    }, []);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        // 🔥 ERROR REMOVE LOGIC
        setErrors((prev) => {
            const newErrors = { ...prev };

            // remove error if value becomes valid
            if (name === "name" && value.trim()) {
                delete newErrors.name;
            }

            if (name === "phone" && value.length === 10) {
                delete newErrors.phone;
            }

            if (name === "visitDate" && value) {
                delete newErrors.visitDate;
            }

            return newErrors;
        });
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (formData.phone.length !== 10) {
            newErrors.phone = "Enter valid 10 digit mobile number";
        }

        if (!formData.visitDate) {
            newErrors.visitDate = "Please select visit date";
        }

        return newErrors;
    };

    const handlePayment = async () => {

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return; // ❌ stop here
        }

        setLoading(true); // 🔥 START LOADING

        try {

            // 🔥 STEP 1: Create order from Firebase function
            const res = await fetch(process.env.REACT_APP_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ amount: totalAmount })
            });

            if (!res.ok) {
                const text = await res.text();
                console.error("API ERROR:", text);
                throw new Error("Server error");
            }

            const order = await res.json();

            if (!order || !order.id) {
                throw new Error("Order creation failed");
            }

            const bookingId = crypto.randomUUID();

            const now = new Date();
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const monthYear = `${monthNames[now.getMonth()]}${now.getFullYear()}`;

            const bookingData = {
                bookingId,
                userId: auth.currentUser?.uid || "guest",

                ...formData,
                tickets: selectedTickets,
                total: totalAmount,

                orderId: order.id,
                verification: false,

                createdAt: new Date().toLocaleString("en-IN"),
            };

            await setDoc(
                doc(db, "WaterPark", monthYear),
                { [bookingId]: bookingData },
                { merge: true }
            );

            console.log("✅ Saved BEFORE payment");

            // 🔥 STEP 2: Open Razorpay
            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY_ID,
                amount: order.amount,
                order_id: order.id,

                currency: "INR",
                name: "Jungle Resort & Waterpark",
                description: "Ticket Booking",

                handler: async function (response) {
                    setLoading(false);

                    try {
                        await setDoc(
                            doc(db, "WaterPark", monthYear),
                            {
                                [bookingId]: {
                                    ...bookingData,
                                    paymentId: response.razorpay_payment_id,
                                    orderId: response.razorpay_order_id,
                                    verification: true,
                                    paymentAt: new Date()
                                }
                            },
                            { merge: true }
                        );

                        console.log("✅ Payment updated");

                        onClose(); // 🔥 POPUP CLOSE

                    } catch (err) {
                        console.error(err);
                        setPaymentError("Payment saved but update failed"); // optional
                    }
                },

                modal: {
                    ondismiss: function () {
                        setLoading(false);
                        setPaymentError("Payment cancelled ❌");

                        // OPTIONAL: Firebase me update bhi kar sakta hai
                        setDoc(
                            doc(db, "WaterPark", monthYear),
                            {
                                [bookingId]: {
                                    ...bookingData,
                                    paymentStatus: "cancelled",
                                    cancelledAt: new Date()
                                }
                            },
                            { merge: true }
                        );
                    }
                },

                prefill: {
                    name: formData.name,
                    contact: formData.phone
                },

                theme: {
                    color: "#ff6b00"
                }
            };

            const rzp = new window.Razorpay(options);
            rzp.open();

        } catch (err) {
            console.error(err);
            setPaymentError("Payment failed. Please try again ❌");
            setLoading(false);
        }
    };

    const formatINR = (amount) => {
        return new Intl.NumberFormat("en-IN").format(amount);
    };

    return (

        <div className={styles.overlayBody} >

            {/* OVERLAY */}
            <div className={styles.overlay} onClick={() => { if (!showDetails) onClose(); }} />

            {/* MODAL */}
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >

                <div className={styles.centerWrap} >



                    <div className={styles.card} >

                        {/* BOTTOM WHITE */}
                        <div className={styles.right}>

                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                {/* TOP */}
                                <div></div>

                                <div>
                                    <h3 style={{ margin: "0px", padding: "0px", marginBottom: "20px" }}>CHECKOUT</h3>
                                </div>

                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <button className={styles.close} onClick={onClose}>✕</button>
                                </div>

                            </div>


                            <div className={styles.inputGroup}>

                                <label>Choose Visit Date</label>
                                <input
                                    type="date"
                                    name="visitDate"
                                    value={formData.visitDate}
                                    min={new Date().toISOString().split("T")[0]}
                                    onChange={handleChange}
                                    onBlur={(e) => {
                                        if (!e.target.value) {
                                            setErrors((prev) => ({
                                                ...prev,
                                                visitDate: "Please select visit date"
                                            }));
                                        }
                                    }}
                                />
                                {errors.visitDate && <p className={styles.error}>{errors.visitDate}</p>}


                                <label>Full Name</label>
                                <input name="name" placeholder="" value={formData.name} onChange={handleChange} />
                                {errors.name && <p className={styles.error}>{errors.name}</p>}

                                <label>Mobile Number</label>
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    maxLength={10}
                                    onWheel={(e) => e.target.blur()} // ❌ scroll disable
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, "");

                                        if (value.length <= 10) {
                                            setFormData((prev) => ({
                                                ...prev,
                                                phone: value
                                            }));

                                            // 🔥 remove error instantly
                                            setErrors((prev) => {
                                                const newErrors = { ...prev };
                                                if (value.length === 10) {
                                                    delete newErrors.phone;
                                                }
                                                return newErrors;
                                            });
                                        }
                                    }}
                                />
                                {errors.phone && <p className={styles.error}>{errors.phone}</p>}

                            </div>

                            {paymentError && (
                                <p style={{
                                    color: "red", fontSize: "12px", marginTop: "-5px"
                                }}>
                                    {paymentError}
                                </p>
                            )}

                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                                <p style={{ fontSize: "12px", color: "green" }}>
                                    🔒 100% Secure Payment
                                </p>

                                <button
                                    style={{
                                        marginBottom: "10px",
                                        background: "transparent",
                                        border: "none",
                                        color: "#000000",
                                        cursor: "pointer"
                                    }}
                                    onClick={() => setShowDetails(true)}
                                >
                                    🧾 View Details
                                </button>
                            </div>

                            <button
                                className={styles.button}
                                onClick={handlePayment}
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className={styles.loader}></span>
                                ) : (
                                    <>PAY NOW : ₹ {formatINR(totalAmount)}</>
                                )}
                            </button>

                        </div>

                    </div>

                </div>
            </div>

            {showDetails && (
                <div
                    className={styles.detailsOverlay}
                    onClick={() => setShowDetails(false)}
                >
                    <div
                        className={styles.detailsPopup}
                        onClick={(e) => e.stopPropagation()}
                    >

                        <div style={{ display: "flex", justifyContent: "space-between" }}>

                            <div></div>

                            <div style={{ display: "flex", alignItems: "start", justifyContent: "start", marginBottom: "0px" }} >
                                <h3 className={styles.detailsTitle} style={{ whiteSpace: "nowrap" }}>YOUR SELECTIONS</h3>
                            </div>

                            <div style={{ display: "flex", alignItems: "start", justifyContent: "end" }}>
                                <button
                                    className={styles.detailsClose}
                                    style={{ width: "fit-content" }}
                                    onClick={() => setShowDetails(false)}
                                >
                                    x
                                </button>
                            </div>

                        </div>

                        <table className={styles.detailsTable}>
                            <thead>
                                <tr>
                                    <th>Ticket</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                {selectedTickets &&
                                    Object.entries(selectedTickets).map(([id, qty]) => {
                                        const price = ticketNames[id]?.price || 0;
                                        return (
                                            <tr key={id}>
                                                <td>{ticketNames[id]?.name || id}</td>
                                                <td>₹{formatINR(price)}</td>
                                                <td>{qty}</td>
                                                <td>₹{formatINR(price * qty)}</td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>

                        <div className={styles.detailsTotal}>
                            Total = ₹ {formatINR(totalAmount)}
                        </div>


                    </div>
                </div>
            )}
        </div>

    );
}