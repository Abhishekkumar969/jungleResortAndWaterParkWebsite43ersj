import React, { useState } from "react";
import { auth, db } from "../firebaseConfig";
import { doc, updateDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import styles from "../styles/loginSignup.module.css";

export default function CompleteProfile() {

    const navigate = useNavigate();

    const user = auth.currentUser;

    const [name, setName] = useState(user?.displayName || "");
    const [phone, setPhone] = useState("");

    const handleSave = async () => {

        if (!name || !phone) {
            alert("Please fill all fields");
            return;
        }

        try {

            const now = new Date();

            const monthNames = [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ];

            const monthYear =
                `${monthNames[now.getMonth()]}${now.getFullYear()}`;

            const docRef = doc(db, "users", monthYear);

            const userData = {
                name,
                phone,
                email: user.email,
                createdAt: serverTimestamp()
            };

            try {

                await updateDoc(docRef, {
                    [user.uid]: userData
                });

            } catch {

                await setDoc(docRef, {
                    [user.uid]: userData
                });

            }

            navigate("/");

        } catch (err) {

            alert(err.message);

        }

    };

    return (

        <div className={styles.authContainer}>

            <h2>Complete Your Profile</h2>

            <p className={styles.subtitle}>
                We need a few more details
            </p>

            <div className={styles.formGroup}>
                <label>Full Name</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className={styles.formGroup}>
                <label>Phone Number</label>
                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            <button
                className={styles.authBtn}
                onClick={handleSave}
            >
                Save Profile
            </button>

        </div>

    );

}