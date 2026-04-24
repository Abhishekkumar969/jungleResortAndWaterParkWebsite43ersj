import React, { useState, useEffect } from "react";
import styles from "../../styles/birthday-booking.module.css";
import { Calendar, Users, Cake, Phone, User } from "lucide-react";

export default function BirthdayBooking({
    selectedTheme,
    selectedPackage,
    selectedAddons
}) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        childName: "",
        childAge: "",
        date: "",
        guests: "",
        message: "",
    });


    useEffect(() => {
        setFormData((prev) => ({
            ...prev,
            theme: selectedTheme?.name || "",
            package: selectedPackage || "",
            addons: selectedAddons || [],
        }));
    }, [selectedTheme, selectedPackage, selectedAddons]);

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
                            <select name="theme" value={formData.theme} onChange={handleChange}>
                                <option value="">Select Theme</option>
                                <option value="Superhero Arena">Superhero Arena</option>
                                <option value="Princess Palace">Princess Palace</option>
                                <option value="Jungle Safari">Jungle Safari</option>
                                <option value="Underwater World">Underwater World</option>
                                <option value="Space Galaxy">Space Galaxy</option>
                                <option value="Carnival Fiesta">Carnival Fiesta</option>
                            </select>
                        </div>

                        <div className={styles.field}>
                            <label>Package</label>
                            <select name="package" value={formData.package} onChange={handleChange}>
                                <option value="">Select Package</option>
                                <option value="Silver">Silver ₹15,999</option>
                                <option value="Gold">Gold ₹29,999</option>
                                <option value="Platinum">Platinum ₹49,999</option>
                            </select>
                        </div>

                        <div className={styles.field}>
                            <label>Add-ons</label>
                            <input
                                type="text"
                                value={formData.addons.join(", ")}
                                readOnly
                            />
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