import React, { useState } from "react";
import styles from "../../styles/birthday-booking.module.css";
import { Calendar, Clock, Users, Cake, Phone, Mail, User } from "lucide-react";

export default function BirthdayBooking() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        childName: "",
        childAge: "",
        date: "",
        time: "",
        guests: "",
        theme: "",
        package: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Birthday booking:", formData);
        alert("Thank you for your inquiry! Our team will contact you within 24 hours.");
    };

    return (
        <section className={styles.section} id="birthday-booking">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>Book Now</span>

                    <h2 className={styles.title}>
                        Plan Your Child's <span>Dream Birthday</span>
                    </h2>

                    <p className={styles.description}>
                        Fill in the details below and our party planning team will create a magical celebration.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.grid}>
                        <div className={styles.field}>
                            <label>
                                <User size={16} /> Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
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
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.field}>
                            <label>
                                <Phone size={16} /> Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+91 98765 43210"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.field}>
                            <label>
                                <Cake size={16} /> Birthday Child Name
                            </label>
                            <input
                                type="text"
                                name="childName"
                                placeholder="Child name"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.field}>
                            <label>Child Age</label>
                            <select name="childAge" onChange={handleChange}>
                                <option value="">Select age</option>
                                {[...Array(15)].map((_, i) => (
                                    <option key={i} value={i + 1}>
                                        {i + 1} Years
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className={styles.field}>
                            <label>
                                <Calendar size={16} /> Event Date
                            </label>
                            <input type="date" name="date" onChange={handleChange} required />
                        </div>

                        <div className={styles.field}>
                            <label>
                                <Clock size={16} /> Preferred Time
                            </label>
                            <select name="time" onChange={handleChange}>
                                <option value="">Select time</option>
                                <option value="10am">10:00 AM - 2:00 PM</option>
                                <option value="2pm">2:00 PM - 6:00 PM</option>
                                <option value="6pm">6:00 PM - 10:00 PM</option>
                            </select>
                        </div>

                        <div className={styles.field}>
                            <label>
                                <Users size={16} /> Guests
                            </label>
                            <select name="guests" onChange={handleChange}>
                                <option value="">Guests</option>
                                <option>Up to 20</option>
                                <option>20 - 30</option>
                                <option>30 - 50</option>
                                <option>50 - 75</option>
                                <option>75 - 100</option>
                                <option>100+</option>
                            </select>
                        </div>

                        <div className={styles.field}>
                            <label>Theme</label>
                            <select name="theme" onChange={handleChange}>
                                <option>Select Theme</option>
                                <option>Superhero</option>
                                <option>Princess</option>
                                <option>Jungle</option>
                                <option>Sports</option>
                                <option>Unicorn</option>
                                <option>Custom</option>
                            </select>
                        </div>

                        <div className={styles.field}>
                            <label>Package</label>
                            <select name="package" onChange={handleChange}>
                                <option>Select Package</option>
                                <option>Silver ₹15,999</option>
                                <option>Gold ₹29,999</option>
                                <option>Platinum ₹49,999</option>
                                <option>Custom Package</option>
                            </select>
                        </div>

                        <div className={`${styles.field} ${styles.full}`}>
                            <label>Special Requests</label>
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Any special arrangements..."
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button type="submit" className={styles.button}>
                        Submit Birthday Inquiry
                    </button>

                    <p className={styles.note}>
                        Our party planners will contact you within 24 hours.
                    </p>
                </form>
            </div>
        </section>
    );
}