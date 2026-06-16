import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ChevronDown, X, Calendar } from "lucide-react";
import styles from "../../styles/hero-section.module.css";

const heroMenus = [
  {
    title: "Book Your Event",
    items: [
      { name: "Destination Wedding", link: "/destination-wedding" },
      { name: "Wedding", link: "/wedding" },
      { name: "Haldi", link: "/haldi" },
      { name: "Mehndi", link: "/mehndi" },
      { name: "Sangeet", link: "/sangeet" },
      { name: "Receptions", link: "/reception" },
      { name: "Anniversary", link: "/anniversary" },
      { name: "Engagement", link: "/engagement" },
    ],
  },
  {
    title: "Birthday & Parties",
    items: [
      { name: "Birthday Celebration", link: "/birthday" },
      { name: "Pool Party", link: "/pool-party" },
      { name: "Get Together", link: "/get-together" },
      { name: "Kitty Party", link: "/kitty-party" },
    ],
  },
  {
    title: "Corporate Events",
    items: [
      { name: "Corporate Events", link: "/corporate-events" },
      { name: "Corporate Party", link: "/corporate-party" },
      { name: "Corporate Pool Party", link: "/corporate-pool-party" },
    ],
  },
  { title: "Cottage Rooms", link: "/cottage-in-patna" },
  { title: "WaterPark Tickets", link: "/waterpark-in-patna" },
  { title: "FunPark Tickets", link: "/fun-park" },
];

export default function HeroSection() {
  // FunPark coming-soon popup
  const [showFunPark, setShowFunPark] = useState(false);

  const openBooking = () => {
    window.dispatchEvent(new CustomEvent("openBooking"));
  };

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className={styles.heroSection}>

        {/* Background */}
        <div className={styles.heroBg}>
          <img
            src="/videos/hero.webp"
            alt="Jungle Resort Patna — Best Resort in Patna | Wedding Venue, Banquet Hall &amp; Destination Wedding"
            className={styles.heroVideo}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
          />
          <div className={styles.heroOverlay} aria-hidden="true" />
        </div>

        {/* Content – static text only, ZERO Firebase on initial paint */}
        <div className={styles.heroContent}>

          {/* Title */}
          <div className={styles.heroTitleBlock}>
            <h1 className={styles.heroTitle}>
              Welcome to
              <span className={styles.heroTitleBreak}>Jungle Resort</span>
              <span className={styles.heroTitleBreak}>&amp;</span>
              <span className={styles.heroTitleBreak}>Waterpark, Patna</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Best Wedding Resort in Patna for Destination Weddings, Banquet Hall in Patna, Water Park In Patna
            </p>
          </div>

          {/* CTA — clicking this is the ONLY time Firebase loads */}
          <button
            className={styles.heroBookBtn}
            onClick={openBooking}
            aria-label="Open booking form to check availability"
          >
            <Calendar size={20} aria-hidden="true" />
            Check Availability
          </button>

          {/* Trust badges – pure static HTML */}
          <div className={styles.heroBadges}>
            <span className={styles.heroBadge} >💒 Wedding Venue In Patna</span>
            <span className={styles.heroBadge} >🏛️ Banquet Hall In Patna</span>
            <span className={styles.heroBadge} >💧 Water Park In Patna</span>
          </div>

        </div>

        {/* ── HERO BUTTONS — pinned at bottom of hero image ── */}
        <nav className={styles.heroButtons} aria-label="Event categories">
          {heroMenus.map((menu, index) => (
            <div key={index} className={styles.dropdown}>

              {menu.items ? (
                <>
                  <button
                    className={styles.heroBtnPrimary}
                    aria-haspopup="menu"
                    aria-label={`Open ${menu.title} menu`}
                  >
                    {menu.title}
                    <ChevronDown size={15} style={{ marginLeft: "5px" }} aria-hidden="true" />
                  </button>
                  <div className={styles.dropdownMenu} role="menu">
                    {menu.items.map((item, i) => (
                      <Link key={i} to={item.link} className={styles.dropdownItem} role="menuitem">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : menu.title === "FunPark Tickets" ? (
                <button
                  className={styles.heroBtnOutline}
                  onClick={() => setShowFunPark(true)}
                  aria-label="FunPark Tickets — Coming Soon"
                >
                  {menu.title}
                </button>
              ) : (
                <Link to={menu.link} className={styles.heroBtnOutline}>
                  {menu.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

      </section>

      {/* ── FUNPARK POPUP ── */}
      {showFunPark && (
        <div
          className={styles.bookingOverlay}
          onClick={() => setShowFunPark(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="funpark-title"
        >
          <div
            className={styles.popupBox}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.popupClose}
              onClick={() => setShowFunPark(false)}
              aria-label="Close popup"
            >
              <X size={18} aria-hidden="true" />
            </button>
            <h2 id="funpark-title">🎡 FunPark Coming Soon!</h2>
            <p>Thrilling rides and entertainment are on the way 🚀 Stay tuned!</p>
          </div>
        </div>
      )}
    </>
  );
}