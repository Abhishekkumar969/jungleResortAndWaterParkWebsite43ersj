import React from "react";
import Navbar from "../../components/navigation-temp";
import Footer from "../../components/footer-temp";

import VenueHero from "../../components/venues/venue-hero";
import VenuesList from "../../components/venues/venues-list";
import VenueFeatures from "../../components/venues/venue-features";
import VenueBooking from "../../components/venues/venue-booking";

import styles from "../../styles/venues-page.module.css";

export default function VenuesPage() {
    return (
        <main className={styles.page}>
            <Navbar />

            <VenueHero />
            <VenuesList />
            <VenueFeatures />
            <VenueBooking />

            <Footer />
        </main>
    );
}