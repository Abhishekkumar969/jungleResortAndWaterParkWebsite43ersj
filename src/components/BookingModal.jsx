import React, { useState, useEffect, Suspense, lazy } from "react";
import { X } from "lucide-react";
import BookingOptions from "./BookingOptions";
import styles from "../styles/hero-section.module.css"; // Reuse modal styles from hero-section or move them

const QuickBookForm = lazy(() => import("./quick-book-form"));

export default function BookingModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1); // 1: Options, 2: Event Form

    useEffect(() => {
        const handleOpen = () => {
            setStep(1);
            setIsOpen(true);
        };
        window.addEventListener("openBooking", handleOpen);

        // Check URL params
        const params = new URLSearchParams(window.location.search);
        if (params.get("openBooking") === "true") {
            handleOpen();
            window.history.replaceState({}, document.title, window.location.pathname);
        }

        return () => window.removeEventListener("openBooking", handleOpen);
    }, []);

    if (!isOpen) return null;

    const closeModal = () => setIsOpen(false);

    return (
        <div
            className={styles.bookingOverlay}
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
        >
            <div
                className={styles.bookingModal}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className={styles.bookingModalHeader}>
                    <h2 className={styles.bookingModalTitle}>
                        {step === 1 ? "Select Booking Type" : "Check Event Availability"}
                    </h2>
                    <button
                        className={styles.bookingModalClose}
                        onClick={closeModal}
                        aria-label="Close modal"
                    >
                        <X size={20} aria-hidden="true" />
                    </button>
                </div>

                {/* Body */}
                <div className={styles.bookingModalBody}>
                    {step === 1 ? (
                        <BookingOptions
                            onSelectEvent={() => setStep(2)}
                            onClose={closeModal}
                        />
                    ) : (
                        <Suspense fallback={
                            <div className={styles.bookingLoader}>
                                <div className={styles.bookingLoaderSpinner} />
                                <p>Loading form…</p>
                            </div>
                        }>
                            <QuickBookForm onClose={closeModal} />
                        </Suspense>
                    )}
                </div>
            </div>
        </div>
    );
}
