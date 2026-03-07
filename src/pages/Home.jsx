import React from "react";

import Navbar from "../components/navigation-temp";
import Footer from "../components/footer-temp";
import HeroSection from "../components/home/hero-section";
import AboutSection from "../components/home/about-section";
import EventsSection from "../components/home/events-section";
import WaterparkPreview from "../components/home/waterpark-preview";
import ServicesSection from "../components/home/services-section";
import TestimonialsSection from "../components/home/testimonials-section";
import QuickBookingSection from "../components/home/quick-booking-section";
import styles from "../styles/home-page.module.css";

function HomePage() {
  return (
    <main className={styles.homePage}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <WaterparkPreview />
      <ServicesSection />
      <TestimonialsSection />
      <QuickBookingSection />
      <Footer />
    </main>
  );
}

export default HomePage;