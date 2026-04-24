import React from "react";
import styles from "../../styles/contact-info.module.css";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const contactDetails = [
    {
        icon: MapPin,
        title: "Our Location",
        details: [
            "Jungle Paradise Resort & Waterpark",
            "NH-44, Near City Bypass Road",
            "District Center, State - 123456",
        ],
    },
    {
        icon: Phone,
        title: "Phone Numbers",
        details: [
            "+91 98765 43210 (Bookings)",
            "+91 98765 43211 (Waterpark)",
            "+91 98765 43212 (Reception)",
        ],
    },
    {
        icon: Mail,
        title: "Email Address",
        details: [
            "info@jungleparadise.com",
            "bookings@jungleparadise.com",
            "support@jungleparadise.com",
        ],
    },
    {
        icon: Clock,
        title: "Working Hours",
        details: [
            "Waterpark: 10:00 AM - 6:00 PM",
            "Event Bookings: 9:00 AM - 8:00 PM",
            "Resort: Open 24/7",
        ],
    },
];

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
];

export default function ContactInfo() {
    return (
        <div className={styles.wrapper}>

            <div className={styles.header}>
                <span className={styles.subtitle}>Contact Info</span>
                <h2 className={styles.title}>Get In Touch</h2>
                <p className={styles.description}>
                    Have questions? Our team is ready to assist you with any inquiries about our services.
                </p>
            </div>

            {/* Contact Cards */}
            <div className={styles.list}>
                {contactDetails.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div key={item.title} className={styles.card}>
                            <div className={styles.iconBox}>
                                <Icon size={22} />
                            </div>

                            <div>
                                <h3>{item.title}</h3>

                                {item.details.map((detail, i) => (
                                    <p key={i}>{detail}</p>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Social Links */}
            <div className={styles.socialBox}>
                <h3>Follow Us</h3>

                <div className={styles.socialIcons}>
                    {socialLinks.map((social) => {
                        const Icon = social.icon;

                        return (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                            >
                                <Icon size={18} />
                            </a>
                        );
                    })}
                </div>

                <p className={styles.socialText}>
                    Stay connected for updates, offers, and behind-the-scenes content!
                </p>
            </div>

            {/* Quick Call */}
            <div className={styles.cta}>
                <h3>Need Immediate Assistance?</h3>

                <p>Call our 24/7 helpline for urgent queries</p>

                <a href="tel:+919876543210" className={styles.phone}>
                    <Phone size={22} /> +91 98765 43210
                </a>
            </div>

        </div>
    );
}