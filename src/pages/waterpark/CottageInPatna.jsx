import React from "react";
import CottagePricing from "../../components/waterpark/cottage-pricing";

import CottageInfo from "../../components/waterpark/CottageInfo";
import styles from "../../styles/waterpark-page.module.css";
import useSEO from "../../hooks/useSEO";

export default function CottageInPatna() {
    useSEO({
        title: "Luxury Cottage Stay in Patna | Best Resort in Patna for Stay - Jungle Resort",
        description: "Experience luxury cottage stay at the best resort in Patna — Jungle Resort. Private AC rooms, peaceful jungle vibe. Also a top wedding venue, banquet hall & destination wedding resort in Patna.",
        keywords: "Resort in Patna, Best Resort in Patna, Luxury Resort in Patna, Resort for Wedding in Patna, Wedding Resort in Patna, Cottage in Patna",
        canonical: "https://www.jungleresortpatna.in/cottage-in-patna",
        ogImage: "https://www.jungleresortpatna.in/images/cottage-main.webp",
    });

    return (
        <main className={styles.waterparkPage}>

            <CottagePricing />

            <CottageInfo />
        </main>
    );
}
