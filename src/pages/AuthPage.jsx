import React, { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { doc, updateDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import { Eye, EyeOff } from "lucide-react";

import { signInWithPopup } from "firebase/auth";
import { googleProvider } from "../firebaseConfig";

import styles from "../styles/loginSignup.module.css";

export default function AuthPage() {

    const [mode, setMode] = useState("login");
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleGoogleLogin = async () => {

        try {

            const result = await signInWithPopup(auth, googleProvider);

            const user = result.user;

            const now = new Date();

            const monthNames = [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ];

            const monthYear =
                `${monthNames[now.getMonth()]}${now.getFullYear()}`;

            const docRef = doc(db, "users", monthYear);

            const userData = {
                name: user.displayName || "",
                phone: "",
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

            navigate("/complete-profile");

        } catch (err) {

            alert(err.message);

        }

    };

    /* LOGIN */

    const handleLogin = async () => {

        try {

            await signInWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            navigate("/");

        } catch (err) {

            alert(err.message);

        }

    };

    /* SIGNUP */

    const handleSignup = async () => {

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {

            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            const user = userCredential.user;

            /* Month format → Mar2026 */

            const now = new Date();

            const monthNames = [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ];

            const monthYear =
                `${monthNames[now.getMonth()]}${now.getFullYear()}`;

            const docRef = doc(db, "users", monthYear);

            const userData = {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                createdAt: serverTimestamp()
            };

            try {

                /* If document exists */

                await updateDoc(docRef, {
                    [user.uid]: userData
                });

            } catch {

                /* If month document does not exist */

                await setDoc(docRef, {
                    [user.uid]: userData
                });

            }

            navigate("/");

        } catch (err) {

            alert(err.message);

        }

    };

    /* FORGOT PASSWORD */

    const handleForgotPassword = async () => {

        if (!formData.email) {
            alert("Please enter your email first");
            return;
        }

        try {

            await sendPasswordResetEmail(
                auth,
                formData.email
            );

            alert("Password reset email sent");

        } catch (err) {

            alert(err.message);

        }

    };

    return (

        <div className={styles.authContainer}>

            <h2>Welcome {mode === "login" && (<> Back </>)} !</h2>
            <p className={styles.subtitle}>
                {mode === "login" && (<> Login to </>)} {mode === "signup" && (<> Create </>)} your account
            </p>

            {/* Toggle */}

            <div className={styles.switchTabs}>

                <button
                    className={`${styles.tabBtn} ${mode === "login" ? styles.activeTab : ""}`}
                    onClick={() => setMode("login")}
                >
                    Login
                </button>

                <button
                    className={`${styles.tabBtn} ${mode === "signup" ? styles.activeTab : ""}`}
                    onClick={() => setMode("signup")}
                >
                    Sign Up
                </button>

            </div>

            {/* Signup Fields */}

            {mode === "signup" && (

                <>
                    <div className={styles.formGroup}>
                        <label>Full Name</label>
                        <input
                            name="name"
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Phone Number</label>
                        <input
                            name="phone"
                            onChange={handleChange}
                        />
                    </div>
                </>

            )}

            {/* Email */}

            <div className={styles.formGroup}>
                <label>Email Address</label>
                <input
                    name="email"
                    onChange={handleChange}
                />
            </div>

            {/* Password */}

            <div className={styles.formGroup}>

                <label>Password</label>

                <div className={styles.passwordField}>

                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        onChange={handleChange}
                    />

                    <button
                        type="button"
                        className={styles.eyeBtn}
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword
                            ? <EyeOff size={18} />
                            : <Eye size={18} />
                        }
                    </button>

                </div>

            </div>

            {/* Forgot Password */}

            {mode === "login" && (

                <div className={styles.forgotPassword}>
                    <button onClick={handleForgotPassword}>
                        Forgot Password?
                    </button>
                </div>

            )}

            {/* Confirm Password */}

            {mode === "signup" && (

                <div className={styles.formGroup}>

                    <label>Confirm Password</label>

                    <div className={styles.passwordField}>

                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            onChange={handleChange}
                        />

                        <button
                            type="button"
                            className={styles.eyeBtn}
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword
                                ? <EyeOff size={18} />
                                : <Eye size={18} />
                            }
                        </button>

                    </div>

                </div>

            )}

            {/* Button */}

            {mode === "login" ? (

                <button
                    className={styles.authBtn}
                    onClick={handleLogin}
                >
                    Login
                </button>

            ) : (

                <button
                    className={styles.authBtn}
                    onClick={handleSignup}
                >
                    Create Account
                </button>

            )}

            <div className={styles.divider}>
                <span>OR</span>
            </div>

            <button
                className={styles.googleBtn}
                onClick={handleGoogleLogin}
            >

                <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    width="18"
                    alt="google-img"
                />

                Continue with Google

            </button>

        </div>

    );

}