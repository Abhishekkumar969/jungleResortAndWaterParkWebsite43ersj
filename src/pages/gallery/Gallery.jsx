import React from "react";
import Navbar from "../../components/navigation-temp";
import Footer from "../../components/footer-temp";

// import GalleryHero from "../../components/gallery/gallery-hero";
import GalleryGrid from "../../components/gallery/gallery-grid";

import styles from "../../styles/gallery-page.module.css";

import { Helmet } from "react-helmet";

export default function GalleryPage() {
    return (
        <main className={styles.page}>
            <Helmet>
                <title>Photo Gallery | Jungle Resort & Water Park Patna</title>
                <meta
                    name="description"
                    content="View stunning photos of our water park, banquet halls, weddings, and events at Jungle Resort Patna. Explore our luxury facilities through our gallery."
                />
                <link rel="canonical" href="https://www.jungleresortpatna.in/gallery" />
            </Helmet>
            <Navbar />

            {/* <GalleryHero /> */}
            <GalleryGrid />

            <Footer />
        </main>
    );
}