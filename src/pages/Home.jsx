import React, { Suspense, lazy } from "react";
import styles from "../styles/home-page.module.css";
import useSEO from "../hooks/useSEO";

import HeroSection from "../components/home/hero-section";
const EventsSection = lazy(() => import("../components/home/events-section"));

const BirthdayExploreBtn = lazy(() => import("../components/home/BirthdayExploreBtn"));
const PoolPartyExploreBtn = lazy(() => import("../components/home/PoolPartyExploreBtn"));
const CottagePreview = lazy(() => import("../components/home/cottage-preview"));
const WaterparkPreview = lazy(() => import("../components/home/waterpark-preview"));
const TestimonialsSection = lazy(() => import("../components/home/testimonials-section"));
const AboutJungleResortPatna = lazy(() => import("../components/home/about-section"));
const GalleryGrid = lazy(() => import("../components/gallery/gallery-grid"));
const Contact = lazy(() => import("./contact/Contact"));

function HomePage() {
  useSEO({
    title: "Best Resort in Patna | Banquet Hall & Wedding Venue in Patna - Jungle Resort & Waterpark",
    description: "Jungle Resort & Waterpark is the best resort in Patna offering luxury banquet hall in Patna, wedding venue in Patna, destination wedding in Patna, marriage hall in Patna, birthday party venue & corporate event venue in Patna.",
    keywords: "Resort in Patna, Best Resort in Patna, Banquet Hall in Patna, Wedding Venue in Patna, Destination Wedding in Patna, Marriage Hall in Patna, Luxury Resort in Patna, Wedding Lawn in Patna, Resort for Wedding in Patna, Wedding Resort in Patna, Birthday Party Venue in Patna, Corporate Event Venue in Patna",
    canonical: "https://www.jungleresortpatna.in/",
    ogImage: "https://www.jungleresortpatna.in/videos/hero.webp",
  });

  return (
    <main className={styles.homePage}>

      <HeroSection />

      <div data-animate="fade-up">
        <Suspense fallback={null}>
          <EventsSection />
        </Suspense>
      </div>

      <div data-animate="zoom-up">
        <Suspense fallback={null}>
          <PoolPartyExploreBtn />
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

    </main>
  );
}

export default HomePage;
