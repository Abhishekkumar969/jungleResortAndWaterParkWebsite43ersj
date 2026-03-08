import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Sparkles, TreePine, Waves } from "lucide-react";
import styles from "../../styles/hero-section.module.css";

export default function HeroSection() {

  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState("/images/BackgroundVdo.mp4");
  const [muted, setMuted] = useState(true);

  useEffect(() => {

    /* detect mobile screen */
    const updateVideo = () => {
      if (window.innerWidth <= 768) {
        setVideoSrc("/images/MobileVdo.mp4");
      } else {
        setVideoSrc("/images/BackgroundVdo.mp4");
      }
    };

    updateVideo();
    window.addEventListener("resize", updateVideo);

    const video = videoRef.current;

    /* pause video when not visible */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (video) {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateVideo);
    };

  }, []);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        const video = videoRef.current;

        if (!video) return;

        if (entry.isIntersecting) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }

      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();

  }, []);

  const toggleSound = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const tags = [
    "Grand Wedding Venues",
    "Exciting Waterpark",
    "Birthday Stages",
    "Corporate Events"
  ];

  const stats = [
    { number: "5+", label: "Event Venues" },
    { number: "10+", label: "Water Attractions" },
    { number: "1000+", label: "Events Hosted" },
    { number: "50K+", label: "Happy Visitors" }
  ];

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
        { name: "Engagement", link: "/engagement" }
      ]
    },
    {
      title: "Birthday Celebrations",
      items: [
        { name: "Birthday Celebration", link: "/birthday" },
        { name: "Pool Party", link: "/pool-party" },
        { name: "Get Together", link: "/get-together" },
        { name: "Kitty Party", link: "/kitty-party" }
      ]
    },
    {
      title: "Corporate Events",
      items: [
        { name: "Corporate Meeting", link: "/corporate-meeting" },
        { name: "Corporate Party", link: "/corporate-party" },
        { name: "Corporate Pool Party", link: "/corporate-pool-party" }
      ]
    },
    {
      title: " WaterPark & FunPark Tickets",
      items: [
        { name: "WaterPark Tickets", link: "/waterpark-tickets" },
        { name: "FunPark Tickets", link: "/funpark-tickets" }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className={styles.heroSection}>

      {/* Background */}
      <div className={styles.heroBg}>
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted={muted}
          loop
          playsInline
          className={styles.heroVideo}
        />
        <div className={styles.heroOverlay}></div>
      </div>

      {/* Decorative Icons */}
      <TreePine className={styles.heroTree} />
      <Waves className={styles.heroWaves} />

      {/* Content */}
      <div className={styles.heroContent}>

        <button onClick={toggleSound} className={styles.soundBtn}>
          {muted ? "🔇" : "🔊"}
        </button>

        <div className={styles.heroTag}>
          <Sparkles size={16} />
          <span>Where Dreams Meet Nature</span>
        </div>

        <h1 className={styles.heroTitle}>
          Welcome to <br />
          <span>Jungle Resort & Waterpark</span>
        </h1>

        <p className={styles.heroDesc}>
          Experience the perfect harmony of luxury events and thrilling waterpark adventures.
          From grand weddings to splash-filled birthdays, create unforgettable memories
          in the heart of nature.
        </p>

        <div className={styles.heroFeatures}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.heroFeature}>{tag}</span>
          ))}
        </div>

        <div className={styles.heroButtons}>

          {heroMenus.map((menu, index) => (
            <div key={index} className={styles.dropdown}>

              <button
                className={
                  menu.title.includes("Tickets")
                    ? styles.heroBtnOutline
                    : styles.heroBtnPrimary
                }
              >
                {menu.title} <ChevronDown size={16} style={{ marginLeft: "6px" }} />
              </button>

              <div className={styles.dropdownMenu}>
                {menu.items.map((item, i) => (
                  <Link key={i} to={item.link} className={styles.dropdownItem}>
                    {item.name}
                  </Link>
                ))}
              </div>

            </div>
          ))}

        </div>

        <div className={styles.heroStats}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.heroStat}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabels}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      <div className={styles.heroScroll}>
        <ChevronDown size={32} />
      </div>

    </section>
  );
}