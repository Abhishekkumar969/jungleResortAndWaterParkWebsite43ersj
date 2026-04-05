import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import styles from "../styles/TicketSearch.module.css";

export default function TicketSearch() {
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [searched, setSearched] = useState(false);

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

        setSearched(true); // 🔥 mark that user searched

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

            const filtered = bookingList.filter(
                (b) => b.phone === phone && b.visitDate === date
            );

            setResults(filtered);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
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

                        {/* CLOSE BUTTON */}


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
                                        ❌ No tickets found
                                    </p>

                                    <p className={styles.helpText}> No ticket found. Please book your ticket or reach out to our admin if you’ve already booked. </p>

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

                            {searched && results.map((r, i) => (
                                <div key={i} className={styles.card}>
                                    <p className={styles.text}><b>Name:</b> {r.name}</p>
                                    <p className={styles.text}><b>Phone:</b> {r.phone}</p>
                                    <p className={styles.text}>
                                        <b>Visit Date:</b>{" "}
                                        {r.visitDate
                                            ? new Date(r.visitDate)
                                                .toLocaleDateString("en-GB")
                                                .replace(/\//g, "-")
                                            : ""}
                                    </p>

                                    {r.tickets &&
                                        Object.entries(r.tickets).map(([key, value]) => {
                                            const label = key
                                                .replace(/([A-Z])/g, " $1")
                                                .replace(/^./, (str) => str.toUpperCase());

                                            return (
                                                <p className={styles.text}>
                                                    🎟️ <b>{label}:</b> {value}
                                                </p>
                                            );
                                        })
                                    }

                                    <p className={styles.text}>
                                        <b>Total:</b> ₹{Number(r.total || 0)}
                                    </p>

                                    {r.paymentStatus && (
                                        <p className={`${styles.text} ${styles.status}`}>
                                            Status:{" "}
                                            <span className={styles.text}> {r.paymentStatus} </span>
                                        </p>
                                    )}

                                    {r.createdAt && (
                                        <p className={`${styles.text} ${styles.status}`}>
                                            Booked On:{" "}
                                            <span className={styles.text}> {r.createdAt} </span>
                                        </p>
                                    )}

                                </div>
                            ))}
                        </div>

                    </div>
                </div >
            )
            }

        </>
    );
}