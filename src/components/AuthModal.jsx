import React from "react";
import styles from "../styles/loginSignup.module.css";
import AuthPage from "../pages/AuthPage";

export default function AuthModal({ isOpen, onClose }) {

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>

            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >

                {/* CLOSE BUTTON */}
                <button className={styles.modalClose} onClick={onClose}>
                    ✕
                </button>

                {/* YOUR EXISTING AUTH PAGE */}
                <AuthPage onClose={onClose} />

            </div>

        </div>
    );
}