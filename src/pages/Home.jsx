import React, { useEffect } from "react";

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

  useEffect(() => {

    const sections = document.querySelectorAll(`.${styles.section}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add(styles.active);
          }

        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -80% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));

  }, []);

  return (
    <main className={styles.homePage}>
      <Navbar />
      <section className={styles.section}><HeroSection /></section>
      <section className={styles.section}><EventsSection /></section>
      <section className={styles.section}><AboutSection /></section>
      <section className={styles.section}><WaterparkPreview /></section>
      <section className={styles.section}><QuickBookingSection /></section>
      <section className={styles.section}><TestimonialsSection /></section>
      <section className={styles.section}><ServicesSection /></section>
      <section className={styles.section}><Footer /></section>
    </main>
  );
}

export default HomePage;