import React from "react";
import Navbar from "../../components/navigation-temp";
import Footer from "../../components/footer-temp";

// import GalleryHero from "../../components/gallery/gallery-hero";
import GalleryGrid from "../../components/gallery/gallery-grid";

import styles from "../../styles/gallery-page.module.css";
import useSEO from "../../hooks/useSEO";


export default function GalleryPage() {
    useSEO({
        title: "Photo Gallery | Best Resort in Patna - Jungle Resort & Water Park",
        description: "View stunning photos of weddings, banquet hall events, water park fun & cottage rooms at the best resort in Patna — Jungle Resort. Wedding venue, marriage hall & destination wedding gallery.",
        keywords: "Resort in Patna, Best Resort in Patna, Wedding Venue in Patna, Banquet Hall in Patna, Destination Wedding in Patna, Marriage Hall in Patna, Wedding Lawn in Patna",
        canonical: "https://www.jungleresortpatna.in/gallery",
    });

    return (
        <main className={styles.page}>

            <Navbar />

            {/* <GalleryHero /> */}
            <GalleryGrid />

            <Footer />
        </main>
    );
}