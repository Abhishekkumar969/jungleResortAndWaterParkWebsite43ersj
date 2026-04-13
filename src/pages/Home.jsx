import React from "react";

import Navbar from "../components/navigation-temp";
import Footer from "../components/footer-temp";
import HeroSection from "../components/home/hero-section";
import EventsSection from "../components/home/events-section";
import BirthdayExploreBtn from "../components/home/BirthdayExploreBtn";
import WaterparkPreview from "../components/home/waterpark-preview";
import TestimonialsSection from "../components/home/testimonials-section";
import AboutJungleResortPatna from "../components/home/about-section"
import GalleryGrid from "../components/gallery/gallery-grid";
import Contact from "./contact/Contact"
import styles from "../styles/home-page.module.css";
import { Helmet } from "react-helmet";

function HomePage() {

  return (
    <main className={styles.homePage}>

      <Helmet>
        <title>Luxury Resort & Banquet in Patna | Wedding, Birthday & Corporate Events</title>

        <meta
          name="description"
          content="Jungle Resort Patna offers luxury wedding venue, banquet hall, birthday party space and waterpark fun. Book best resort in Patna for unforgettable events."
        />

        <meta
          name="keywords"
          content="resort in patna, banquet hall patna, wedding venue patna, birthday party hall patna, waterpark patna"
        />
      </Helmet>

      <Navbar />
      <HeroSection />
      <EventsSection />
      <BirthdayExploreBtn />
      <WaterparkPreview />
      <GalleryGrid />
      <AboutJungleResortPatna />
      <TestimonialsSection />
      <Contact />
      <Footer />
    </main>
  );
}

export default HomePage;