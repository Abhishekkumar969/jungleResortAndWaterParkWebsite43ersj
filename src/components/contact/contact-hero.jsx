import React from "react";
import styles from "../../styles/contact-hero.module.css";

export default function ContactHero() {
    return (
        <section className={styles.hero}>
            <img
                src="/images/hero-resort.webp"
                alt="Contact Jungle Paradise"
                className={styles.image}
            />

            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <span className={styles.subtitle}>Get In Touch</span>

                <h1 className={styles.title}>Contact Us</h1>

                <p className={styles.description}>
                    We'd love to hear from you. Reach out for bookings, inquiries, or any assistance.
                </p>
            </div>
        </section>
    );
}