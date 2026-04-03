import React from "react";

import Navbar from "../components/navigation-temp";
import Footer from "../components/footer-temp";
import HeroSection from "../components/home/hero-section";
import EventsSection from "../components/home/events-section";
import BirthdayExploreBtn from "../components/home/BirthdayExploreBtn";
import WaterparkPreview from "../components/home/waterpark-preview";
import TestimonialsSection from "../components/home/testimonials-section";

import styles from "../styles/home-page.module.css";

function HomePage() {

  return (
    <main className={styles.homePage}>
      <Navbar />
      <HeroSection />
      <EventsSection />
      <BirthdayExploreBtn />
      <WaterparkPreview />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}

export default HomePage;