import React from "react";
import Navbar from "../../components/navigation-temp";
import Footer from "../../components/footer-temp";
import WaterparkHero from "../../components/waterpark/waterpark-hero";
import TicketPricing from "../../components/waterpark/ticket-pricing";
import Attractions from "../../components/waterpark/attractions";
import WaterparkInfo from "../../components/waterpark/waterpark-info";
import TicketBooking from "../../components/waterpark/ticket-booking";
import styles from "../../styles/waterpark-page.module.css";

export default function WaterparkPage() {
    return (
        <main className={styles.waterparkPage}>
            <Navbar />
            <WaterparkHero />
            <TicketPricing />
            <Attractions />
            <WaterparkInfo />
            <TicketBooking />
            <Footer />
        </main>
    );
}