import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ChevronDown, X, Calendar } from "lucide-react";
import styles from "../../styles/hero-section.module.css";

const QuickBookForm = lazy(() => import("../quick-book-form"));

const heroMenus = [
  {
    title: "Book Your Event",
    items: [
      { name: "Destination Wedding", link: "/destinationwedding" },
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
      { name: "Pool Party", link: "/poolparty" },
      { name: "Get Together", link: "/gettogether" },
      { name: "Kitty Party", link: "/kittyparty" },
    ],
  },
  {
    title: "Corporate Events",
    items: [
      { name: "Corporate Events", link: "/corporateevents" },
      { name: "Corporate Party", link: "/corporateparty" },
      { name: "Corporate Pool Party", link: "/corporatepoolparty" },
    ],
  },
  { title: "Cottage Rooms", link: "/cottage-booking" },
  { title: "WaterPark Tickets", link: "/waterpark-in-patna" },
  { title: "FunPark Tickets", link: "/FunPark" },
];

export default function HeroSection() {
  // Booking modal state
  const [showBooking, setShowBooking] = useState(false);
  // FunPark coming-soon popup
  const [showFunPark, setShowFunPark] = useState(false);

  const openBooking = () => setShowBooking(true);
  const closeBooking = () => setShowBooking(false);

  // Listen for global openBooking event
  useEffect(() => {
    const handleGlobalOpen = () => setShowBooking(true);
    window.addEventListener("openBooking", handleGlobalOpen);

    // Also check URL params if someone navigated from another page
    const params = new URLSearchParams(window.location.search);
    if (params.get("openBooking") === "true") {
      handleGlobalOpen();
      // Clean up URL WITHOUT triggering a re-render if possible, 
      // but we need to remove the param so it doesn't reopen on refresh
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    return () => window.removeEventListener("openBooking", handleGlobalOpen);
  }, []); // Run when search params change

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className={styles.heroSection}>

        {/* Background */}
        <div className={styles.heroBg}>
          <img
            src="/videos/hero.webp"
            alt="Jungle Resort Patna — Luxury Wedding Venue, Waterpark &amp; Banquet Hall"
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
              Patna's Premier Destination for Weddings, Events &amp; Waterpark Fun
            </p>
          </div>



          {/* CTA — clicking this is the ONLY time Firebase loads */}
          <button
            className={styles.heroBookBtn}
            onClick={openBooking}
            aria-label="Open booking form to check availability"
          >
            <Calendar size={20} aria-hidden="true" />
            Check Availability &amp; Book
          </button>

          {/* Trust badges – pure static HTML */}
          <div className={styles.heroBadges}>
            <span className={styles.heroBadge}>🏆 1000+ Events</span>
            <span className={styles.heroBadge}>⭐ 4.8 Rating</span>
            <span className={styles.heroBadge}>💧 Waterpark Included</span>
            <span className={styles.heroBadge}>📍 Patna, Bihar</span>
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

      {/* ── BOOKING MODAL ── Only mounts after user clicks CTA */}
      {showBooking && (
        <div
          className={styles.bookingOverlay}
          onClick={closeBooking}
          role="dialog"
          aria-modal="true"
          aria-label="Booking form"
        >
          <div
            className={styles.bookingModal}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={styles.bookingModalHeader}>
              <h2 className={styles.bookingModalTitle}>Check Availability</h2>
              <button
                className={styles.bookingModalClose}
                onClick={closeBooking}
                aria-label="Close booking form"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            {/* Lazy-loaded form — Firebase only loads HERE */}
            <div className={styles.bookingModalBody}>
              <Suspense fallback={
                <div className={styles.bookingLoader} role="status" aria-label="Loading booking form">
                  <div className={styles.bookingLoaderSpinner} />
                  <p>Loading form…</p>
                </div>
              }>
                <QuickBookForm onClose={closeBooking} />
              </Suspense>
            </div>
          </div>
        </div>
      )}

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