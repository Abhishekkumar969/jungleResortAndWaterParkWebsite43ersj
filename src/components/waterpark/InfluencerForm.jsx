import React, { useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import styles from "../../styles/TicketSearch.module.css";

export default function InfluencerForm({ onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!name || !phone || !instagram) {
      alert("All fields are required!");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Please enter a valid 10-digit mobile number!");
      return;
    }

    if (!instagram.includes("instagram.com/")) {
      alert("Please enter a valid Instagram URL!");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "influencers"), {
        name,
        phone,
        instagram,
        status: "denied", // As requested, initially denied
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <div className={styles.container}>
            <h3 className={styles.title} style={{ color: "#2ecc71" }}>Success!</h3>
            <p style={{ textAlign: "center", margin: "15px 0", color: "#333", fontSize: "14px", lineHeight: "1.6" }}>
              Your application has been submitted successfully. If you are eligible, our team will accept your application and you will be able to download your pass.
            </p>
            <button className={styles.button} onClick={onClose} style={{ background: "#e72e77" }}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.container} style={{ overflowY: 'visible' }}>
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 10px" }}>
            <h3 className={styles.title} style={{ color: "#e72e77" }}>Apply for Free Pass</h3>
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close form" style={{ top: '-10px', right: '0px' }}>✕</button>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Full Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              placeholder="Your Name"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Mobile Number (10 Digits):</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
              className={styles.input}
              placeholder="e.g. 9876543210"
              maxLength={10}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Instagram URL:</label>
            <input
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              className={styles.input}
              placeholder="https://instagram.com/yourprofile"
            />
          </div>

          <button onClick={handleSubmit} className={styles.button} disabled={loading} style={{ background: "#e72e77" }}>
            {loading ? "Submitting..." : "Apply Now"}
          </button>
        </div>
      </div>
    </div>
  );
}
