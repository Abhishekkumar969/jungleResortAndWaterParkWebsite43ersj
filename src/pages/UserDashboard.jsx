import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import styles from "../styles/userDashboard.module.css";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../components/navigation-temp";

export default function UserDashboard() {
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState("overview");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");

    useEffect(() => {

        const fetchUserData = async () => {

            const currentUser = auth.currentUser;
            if (!currentUser) return;

            setUser(currentUser);

            try {

                const usersCollection = collection(db, "users");
                const snapshot = await getDocs(usersCollection);

                for (const docSnap of snapshot.docs) {

                    const data = docSnap.data();

                    if (data[currentUser.uid]) {

                        const userData = data[currentUser.uid];

                        setName(userData.name || "");
                        setMobile(userData.phone || "");

                        return;

                    }

                }

            } catch (error) {

                console.error("Fetch user error:", error);

            }

        };

        fetchUserData();

    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            window.location.href = "/";
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    const handleProfileUpdate = async () => {

        try {

            const usersCollection = collection(db, "users");
            const snapshot = await getDocs(usersCollection);

            for (const docSnap of snapshot.docs) {

                const data = docSnap.data();

                if (data[user.uid]) {

                    const monthRef = doc(db, "users", docSnap.id);

                    await updateDoc(monthRef, {
                        [`${user.uid}.name`]: name,
                        [`${user.uid}.phone`]: mobile
                    });

                    alert("Profile updated successfully");
                    return;

                }

            }

        } catch (error) {

            console.error("Profile update error:", error);

        }

    };

    return (
        <>
            <Navbar />
            <div className={styles.dashboard} style={{ marginTop: "90px" }}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.userInfo}>
                        <div className={styles.avatar}>
                            {user?.displayName?.charAt(0) || "A"}
                        </div>

                        <div>
                            <h2>Welcome, {name || user?.displayName || "User"}! 🌿</h2>
                            <p>{user?.email}</p>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className={styles.tabs}>

                    <button
                        className={`${styles.tab} ${activeTab === "overview" ? styles.active : ""}`}
                        onClick={() => setActiveTab("overview")}
                    >
                        📊 Overview
                    </button>

                    <button
                        className={`${styles.tab} ${activeTab === "profile" ? styles.active : ""}`}
                        onClick={() => setActiveTab("profile")}
                    >
                        👤 Profile
                    </button>

                </div>

                {/* OVERVIEW */}
                {activeTab === "overview" && (

                    <>
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



                    </>

                )}

                {/* PROFILE */}
                {activeTab === "profile" && (

                    <div className={styles.profileSection}>

                        <h3>Edit Profile</h3>

                        <div className={styles.formGroup}>
                            <label>Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Mobile Number</label>
                            <input
                                type="tel"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                placeholder="Enter mobile number"
                            />
                        </div>

                        <button
                            className={styles.saveBtn}
                            onClick={handleProfileUpdate}
                        >
                            Save Changes
                        </button>


                        {/* Stats */}
                        <div className={styles.statsGrid}>
                            <div className={styles.card}>
                                <span>⭐</span>
                                <h3>14/3/2026</h3>
                                <p>Member Since</p>
                            </div>
                        </div>
                    </div>

                )}

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
        </>
    );
}