import React from "react";
import Navbar from "../../components/navigation-temp";
import Footer from "../../components/footer-temp";

import ContactHero from "../../components/contact/contact-hero";
import ContactForm from "../../components/contact/contact-form";
import ContactInfo from "../../components/contact/contact-info";
import ContactMap from "../../components/contact/contact-map";

import styles from "../../styles/contact-page.module.css";

export default function ContactPage() {
    return (
        <main className={styles.page}>
            <Navbar />

            <ContactHero />

            <div className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <ContactForm />
                        <ContactInfo />
                    </div>
                </div>
            </div>

            <ContactMap />

            <Footer />
        </main>
    );
}