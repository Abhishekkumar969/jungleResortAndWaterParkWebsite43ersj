import React from "react";

// import ContactHero from "../../components/contact/contact-hero";
import ContactMap from "../../components/contact/contact-map";

import styles from "../../styles/contact-page.module.css";

export default function ContactPage() {
    return (
        <main className={styles.page}>
            {/* <ContactHero /> */}
            <ContactMap />
        </main>
    );
}