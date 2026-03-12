import React from "react";

import Navbar from "../components/navigation-temp";
import Footer from "../components/footer-temp";
import HeroSection from "../components/home/hero-section";
import EventsSection from "../components/home/events-section";
import WaterparkPreview from "../components/home/waterpark-preview";
import TestimonialsSection from "../components/home/testimonials-section";
import QuickBookingSection from "../components/home/quick-booking-section";
import styles from "../styles/home-page.module.css";

import BirthdayHero from "../components/birthdays/birthday-hero";
import BirthdayStages from "../components/birthdays/birthday-stages";
import BirthdayPackages from "../components/birthdays/birthday-packages";
import BirthdayAddons from "../components/birthdays/birthday-addons";
import BirthdayBooking from "../components/birthdays/birthday-booking";

function HomePage() {

  return (
    <main className={styles.homePage}>
      <Navbar />
      <HeroSection />
      <EventsSection />

      <BirthdayHero />
      <BirthdayStages />
      <BirthdayPackages />
      <BirthdayAddons />
      <BirthdayBooking />

      <WaterparkPreview />
      <QuickBookingSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}

export default HomePage;