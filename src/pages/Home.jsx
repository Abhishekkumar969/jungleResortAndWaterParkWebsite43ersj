import React, { Suspense, lazy } from "react";
import Navbar from "../components/navigation-temp";
import styles from "../styles/home-page.module.css";
import { Helmet } from "react-helmet";

import HeroSection from "../components/home/hero-section";
const Footer = lazy(() => import("../components/footer-temp"));
const EventsSection = lazy(() => import("../components/home/events-section"));

const BirthdayExploreBtn = lazy(() => import("../components/home/BirthdayExploreBtn"));
const CottagePreview = lazy(() => import("../components/home/cottage-preview"));
const WaterparkPreview = lazy(() => import("../components/home/waterpark-preview"));
const TestimonialsSection = lazy(() => import("../components/home/testimonials-section"));
const AboutJungleResortPatna = lazy(() => import("../components/home/about-section"));
const GalleryGrid = lazy(() => import("../components/gallery/gallery-grid"));
const Contact = lazy(() => import("./contact/Contact"));

function HomePage() {
  return (
    <main className={styles.homePage}>
      <Helmet>
        <title>Jungle Resort Patna | Luxury Resort, Banquet Hall & Water Park</title>
        <meta
          name="description"
          content="Experience luxury and nature at Jungle Resort Patna. The perfect destination for family stays, grand weddings, corporate events, and water park fun. Visit the best resort in Patna today!"
        />
        <meta
          name="keywords"
          content="jungle resort patna, best resort in patna, luxury stay patna, resort near me, family vacation patna"
        />
        <link rel="canonical" href="https://www.jungleresortpatna.in/" />
      </Helmet>

      <Navbar />

      <HeroSection />

      <div data-animate="fade-up">
        <Suspense fallback={null}>
          <EventsSection />
        </Suspense>
      </div>

      <div data-animate="zoom-in" data-delay="200">
        <Suspense fallback={null}>
          <BirthdayExploreBtn />
        </Suspense>
      </div>

      <div data-animate="fade-up">
        <Suspense fallback={null}>
          <GalleryGrid />
        </Suspense>
      </div>

      <div data-animate="fade-up">
        <Suspense fallback={null}>
          <TestimonialsSection />
        </Suspense>
      </div>

      <div data-animate="zoom-up">
        <Suspense fallback={null}>
          <CottagePreview />
        </Suspense>
      </div>

      <div data-animate="zoom-up">
        <Suspense fallback={null}>
          <WaterparkPreview />
        </Suspense>
      </div>

      <div data-animate="fade-right">
        <Suspense fallback={null}>
          <AboutJungleResortPatna />
        </Suspense>
      </div>

      <div data-animate="fade-up">
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </div>


      <Suspense fallback={null}>
        <Footer />
      </Suspense>

    </main>
  );
}

export default HomePage;