import React from "react";
import Navbar from "../../components/navigation-temp";
import Footer from "../../components/footer-temp";

// import GalleryHero from "../../components/gallery/gallery-hero";
import GalleryGrid from "../../components/gallery/gallery-grid";

import styles from "../../styles/gallery-page.module.css";

export default function GalleryPage() {
    return (
        <main className={styles.page}>
            <Navbar />

            {/* <GalleryHero /> */}
            <GalleryGrid />

            <Footer />
        </main>
    );
}