import React, { useState } from "react";
import styles from "../../styles/TicketBooking.module.css";
import { Calendar, User, Phone, Mail, Users, CheckCircle } from "lucide-react";

export default function TicketBooking() {
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        date: "",
        adults: "1",
        children: "0",
        ticketType: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    if (submitted) {
        return (
            <section className={styles.ticketSection}>
                <div className={`${styles.ticketContainer} ${styles.small}`}>
                    <div className={styles.successCard}>
                        <div className={styles.successIcon}>
                            <CheckCircle size={32} />
                        </div>

                        <h3>Booking Confirmed!</h3>

                        <p>
                            Your waterpark tickets have been booked. Check your email for
                            confirmation and e-tickets.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.ticketSection}>
            <div className={styles.ticketContainer}>

                <div className={styles.ticketHeader}>
                    <h2>
                        Book Your <span>Tickets Online</span>
                    </h2>

                    <p>
                        Fill in your details below to reserve your waterpark tickets.
                        Get instant confirmation!
                    </p>
                </div>

                <div className={styles.ticketCard}>
                    <form onSubmit={handleSubmit}>

                        <div className={styles.formGrid}>
                            <div className={styles.formGroup}>
                                <label>
                                    <User size={16} /> Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label>
                                    <Phone size={16} /> Phone Number
                                </label>

                                <input
                                    type="tel"
                                    placeholder="+91 XXXXX XXXXX"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label>
                                <Mail size={16} /> Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="your@email.com"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className={styles.formGrid}>
                            <div className={styles.formGroup}>
                                <label>
                                    <Calendar size={16} /> Visit Date
                                </label>

                                <input
                                    type="date"
                                    required
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Ticket Type</label>

                                <select
                                    required
                                    value={formData.ticketType}
                                    onChange={(e) => setFormData({ ...formData, ticketType: e.target.value })}
                                >
                                    <option value="">Select ticket type</option>
                                    <option value="adult">Adult Ticket - ₹699</option>
                                    <option value="child">Child Ticket - ₹499</option>
                                    <option value="family">Family Pack - ₹2199</option>
                                    <option value="vip">VIP Access - ₹1499</option>
                                    <option value="couple">Couple Special - ₹1299</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.formGrid}>
                            <div className={styles.formGroup}>
                                <label>
                                    <Users size={16} /> Adults
                                </label>

                                <select
                                    value={formData.adults}
                                    onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                                        <option key={n}>{n}</option>
                                    ))}
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Children</label>

                                <select
                                    value={formData.children}
                                    onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                                >
                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                                        <option key={n}>{n}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className={styles.noteBox}>
                            <p>
                                <strong>Note:</strong> Same-day bookings are only valid if booked
                                before 10 AM. Please carry a valid ID proof for verification.
                            </p>
                        </div>

                        <button className={styles.ticketBtn}>
                            Book Tickets Now
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
}