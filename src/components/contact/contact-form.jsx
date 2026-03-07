import React, { useState } from "react";
import styles from "../../styles/contact-form.module.css";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact form:", formData);

        alert("Thank you for your message! We'll get back to you within 24 hours.");

        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <span className={styles.subtitle}>Send Message</span>

                <h2 className={styles.title}>Write To Us</h2>

                <p className={styles.description}>
                    Fill out the form below and our team will respond to your inquiry as soon as possible.
                </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>

                <div className={styles.grid}>
                    <div className={styles.field}>
                        <label>
                            <User size={16} /> Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.field}>
                        <label>
                            <Mail size={16} /> Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className={styles.grid}>
                    <div className={styles.field}>
                        <label>
                            <Phone size={16} /> Phone Number
                        </label>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.field}>
                        <label>Subject</label>

                        <select name="subject" value={formData.subject} onChange={handleChange}>
                            <option value="">Select subject</option>
                            <option value="event-booking">Event Booking Inquiry</option>
                            <option value="waterpark">Waterpark Information</option>
                            <option value="birthday">Birthday Party Booking</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="feedback">Feedback</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                <div className={styles.field}>
                    <label>
                        <MessageSquare size={16} /> Your Message
                    </label>

                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className={styles.button}>
                    <Send size={18} /> Send Message
                </button>
            </form>
        </div>
    );
}