import React from "react";

// import ContactHero from "../../components/contact/contact-hero";
import ContactMap from "../../components/contact/contact-map";

import styles from "../../styles/contact-page.module.css";

import { Helmet } from "react-helmet";

export default function ContactPage() {
    return (
        <main className={styles.page}>
            <Helmet>
                <title>Contact Us | Jungle Resort & Water Park Patna</title>
                <meta
                    name="description"
                    content="Contact Jungle Resort & Waterpark Patna for bookings, enquiries, and location details. We are here to help you plan your perfect event."
                />
                <link rel="canonical" href="https://www.jungleresortpatna.in/contact" />
            </Helmet>
            {/* <ContactHero /> */}
            <ContactMap />
        </main>
    );
}