import React from "react";
import TicketPricing from "../../components/waterpark/ticket-pricing";

import WaterparkInfo from "../../components/waterpark/waterpark-info";
import styles from "../../styles/waterpark-page.module.css";
import useSEO from "../../hooks/useSEO";

export default function WaterparkPage() {
    useSEO({
        title: "Best Water Park in Patna | Resort in Patna with Water Park - Jungle Resort",
        description: "Visit the best water park in Patna at Jungle Resort — the best resort in Patna. Wave pool, water slides, rain dance & family fun. Also a top wedding venue & banquet hall in Patna.",
        keywords: "Water Park in Patna, Best Resort in Patna, Resort in Patna, Luxury Resort in Patna, Birthday Party Venue in Patna, Corporate Event Venue in Patna",
        canonical: "https://www.jungleresortpatna.in/waterpark-in-patna",
        ogImage: "https://www.jungleresortpatna.in/WaterParkAds/6.jpeg",
    });

    return (
        <main className={styles.waterparkPage}>

            <TicketPricing />
            <WaterparkInfo />

        </main>
    );
}