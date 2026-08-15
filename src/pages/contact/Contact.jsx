import React from "react";

// import ContactHero from "../../components/contact/contact-hero";
import ContactMap from "../../components/contact/contact-map";

import styles from "../../styles/contact-page.module.css";
import useSEO from "../../hooks/useSEO";


export default function ContactPage() {
    useSEO({
        title: "Contact Us | Best Resort in Patna | Banquet Hall & Wedding Venue in Patna - Jungle Resort & Waterpark",
        description: "Contact Jungle Resort & Waterpark Patna — the best resort in Patna for weddings, banquet hall bookings, destination weddings, birthday parties & corporate events. Get directions, enquiry & booking details.",
        keywords: "Resort in Patna, Best Resort in Patna, Banquet Hall in Patna, Wedding Venue in Patna, Destination Wedding in Patna, Marriage Hall in Patna, Contact Jungle Resort Patna",
        canonical: "https://www.jungleresortpatna.in/contact",
    });

    return (
        <main className={styles.page}>

            {/* <ContactHero /> */}
            <ContactMap />
        </main>
    );
}