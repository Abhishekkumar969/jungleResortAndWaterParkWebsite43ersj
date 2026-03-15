import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import styles from "../styles/userDashboard.module.css";

export default function UserDashboard() {

    const [user, setUser] = useState(null);
    const handleLogout = async () => {
        try {
            await signOut(auth);
            window.location.href = "/"; // homepage ya login page
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    useEffect(() => {

        const currentUser = auth.currentUser;

        if (currentUser) {
            setUser(currentUser);
        }

    }, []);

    return (

        <div className={styles.dashboard}>

            {/* Header */}
            <div className={styles.header}>

                <div className={styles.userInfo}>

                    <div className={styles.avatar}>
                        {user?.displayName?.charAt(0) || "A"}
                    </div>

                    <div>

                        <h2>
                            Welcome, {user?.displayName || "User"}! 🌿
                        </h2>

                        <p>{user?.email}</p>

                    </div>

                </div>

            </div>

            {/* Tabs */}
            <div className={styles.tabs}>

                <button className={`${styles.tab} ${styles.active}`}>
                    📊 Overview
                </button>

                <button className={styles.tab}>
                    🎟 My Bookings
                </button>

                <button className={styles.tab}>
                    📋 My Enquiries
                </button>

                <button className={styles.tab}>
                    👤 Profile
                </button>

            </div>

            {/* Stats */}
            <div className={styles.statsGrid}>

                <div className={styles.card}>
                    <span>🎟</span>
                    <h3>1</h3>
                    <p>Total Bookings</p>
                </div>

                <div className={styles.card}>
                    <span>📋</span>
                    <h3>1</h3>
                    <p>Enquiries</p>
                </div>

                <div className={styles.card}>
                    <span>💰</span>
                    <h3>₹1,498</h3>
                    <p>Total Spent</p>
                </div>

                <div className={styles.card}>
                    <span>⭐</span>
                    <h3>14/3/2026</h3>
                    <p>Member Since</p>
                </div>

            </div>

            {/* Recent Bookings */}
            <div className={styles.recentBookings}>

                <h3>Recent Bookings</h3>

                <div className={styles.bookingCard}>

                    <div>

                        <h4>#BK1CTRPLS <span className={styles.confirmed}>Confirmed</span></h4>

                        <p>🎟 Pool Entry – Day Pass × 1 = ₹499</p>
                        <p>🎟 Pool Entry – VIP × 1 = ₹999</p>

                    </div>

                    <div className={styles.price}>
                        ₹1,498
                    </div>

                </div>

            </div>

            {/* Logout */}
            <div className={styles.logoutSection}>

                <button
                    className={styles.logoutBtn}
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

        </div>

    );

}