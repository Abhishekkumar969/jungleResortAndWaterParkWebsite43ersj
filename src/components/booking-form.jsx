import React, { useState } from "react";
import { Calendar, User, Phone, Mail, MessageSquare, CheckCircle } from "lucide-react";
import styles from "../styles/booking-form.module.css";

export default function BookingForm({
    eventTypes = [
        "Wedding",
        "Reception",
        "Ring Ceremony",
        "Corporate Event",
        "Birthday",
        "Baby Shower",
        "Anniversary"
    ],
    title = "Book Your Event"
}) {

    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        date: "",
        eventType: "",
        guests: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
        }, 3000);
    };

    if (submitted) {
        return (

            <div className={styles.bookingSuccess}>

                <div className={styles.successIcon}>
                    <CheckCircle size={40} />
                </div>

                <h3>Thank You!</h3>

                <p>
                    We have received your booking request.
                    Our team will contact you shortly.
                </p>

            </div>

        );
    }

    return (

        <div className={styles.bookingForm}>

            <h3 className={styles.bookingFormTitle}>{title}</h3>

            <form onSubmit={handleSubmit}>

                <div className={styles.formGrid}>

                    <div className={styles.formGroup}>

                        <label>
                            <User size={14} /> Full Name
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
                            <Phone size={14} /> Phone Number
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
                        <Mail size={14} /> Email Address
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
                            <Calendar size={14} /> Event Date
                        </label>

                        <input
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />

                    </div>

                    <div className={styles.formGroup}>

                        <label>Event Type</label>

                        <select
                            value={formData.eventType}
                            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                            required
                        >

                            <option value="">Select event type</option>

                            {eventTypes.map((type, i) => (
                                <option key={i} value={type}>
                                    {type}
                                </option>
                            ))}

                        </select>

                    </div>

                </div>

                <div className={styles.formGroup}>

                    <label>Expected Guests</label>

                    <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        required
                    >

                        <option value="">Select guest count</option>
                        <option>50 - 100 Guests</option>
                        <option>100 - 200 Guests</option>
                        <option>200 - 500 Guests</option>
                        <option>500 - 1000 Guests</option>
                        <option>1000+ Guests</option>

                    </select>

                </div>

                <div className={styles.formGroup}>

                    <label>
                        <MessageSquare size={14} /> Special Requirements
                    </label>

                    <textarea
                        rows="4"
                        placeholder="Tell us about your event requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />

                </div>

                <button type="submit" className={styles.bookingSubmit}>
                    Submit Booking Request
                </button>

            </form>

        </div>

    );

}