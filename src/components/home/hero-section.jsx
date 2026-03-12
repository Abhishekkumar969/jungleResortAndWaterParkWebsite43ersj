import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Sparkles, TreePine, Waves } from "lucide-react";
import styles from "../../styles/hero-section.module.css";

const texts = [
  "Destination Wedding in Patna",
  "Waterpark in Patna"
];

const stats = [
  { number: "5+", label: "Event Venues" },
  { number: "10+", label: "Water Attractions" },
  { number: "1000+", label: "Events Hosted" },
  { number: "50K+", label: "Happy Visitors" }
];

export default function HeroSection() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState("/images/BackgroundVdo.mp4");
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const statsRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (!entry.isIntersecting) return;

        stats.forEach((stat, index) => {

          let target = stat.number.includes("K")
            ? parseInt(stat.number) * 1000
            : parseInt(stat.number);

          const duration = 2000; // total animation time (ms)
          const startTime = performance.now();

          const animate = (time) => {

            const progress = Math.min((time - startTime) / duration, 1);
            const value = Math.floor(progress * target);

            setCounts(prev => {
              const updated = [...prev];
              updated[index] = value;
              return updated;
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            }

          };

          requestAnimationFrame(animate);

        });

        observer.disconnect();

      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();

  }, []);

  useEffect(() => {

    const currentText = texts[textIndex];

    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {

      if (!isDeleting) {

        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }

      } else {

        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }

      }

    }, typingSpeed);

    return () => clearTimeout(timer);

  }, [charIndex, isDeleting, textIndex]);

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
        { name: "Engagement", link: "/engagement" }
      ]
    },
    {
      title: "Birthday Celebrations",
      items: [
        { name: "Birthday Celebration", link: "/BirthdayCeremony" },
        { name: "Pool Party", link: "/poolparty" },
        { name: "Get Together", link: "/gettogether" },
        { name: "Kitty Party", link: "/kittyparty" }
      ]
    },
    {
      title: "Corporate Events",
      items: [
        { name: "Corporate Meeting", link: "/corporateevents" },
        { name: "Corporate Party", link: "/corporateparty" },
        { name: "Corporate Pool Party", link: "/corporatepoolparty" }
      ]
    },
    {
      title: "WaterPark Tickets", link: "/waterpark-tickets"
    },
    {
      title: "FunPark Tickets", link: "/funpark-tickets"
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
          muted
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

        <div className={styles.heroTag}>
          <Sparkles size={16} />
          <span>Where Dreams Meet Nature</span>
        </div>

        {/* Desktop Title */}
        <h1 className={`${styles.heroTitle} ${styles.desktopTitle}`}>
          Welcome to <br />
          <span>Jungle Resort & Waterpark</span>
        </h1>

        {/* Mobile Title */}
        <h1 className={`${styles.heroTitle} ${styles.mobileTitle}`}>
          Welcome to <br />
          <span>
            Jungle Resort <div className={styles.andSymbol}>&</div> Waterpark
          </span>
        </h1>

        <h2 className={styles.typeWriter}>
          {displayText}
          <span className={styles.cursor}>|</span>
        </h2>

        <div className={styles.heroButtons}>

          {heroMenus.map((menu, index) => (

            <div key={index} className={styles.dropdown}>

              {menu.items ? (

                <>
                  <button
                    className={
                      menu.title.includes("Tickets")
                        ? styles.heroBtnOutline
                        : styles.heroBtnPrimary
                    }
                  >
                    {menu.title}
                    <ChevronDown size={16} style={{ marginLeft: "6px" }} />
                  </button>

                  <div className={styles.dropdownMenu}>
                    {menu.items.map((item, i) => (
                      <Link key={i} to={item.link} className={styles.dropdownItem}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>

              ) : (

                <Link
                  to={menu.link}
                  className={
                    menu.title.includes("Tickets")
                      ? styles.heroBtnOutline
                      : styles.heroBtnPrimary
                  }
                >
                  {menu.title}
                </Link>

              )}

            </div>

          ))}

        </div>

        <div ref={statsRef} className={styles.heroStats}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.heroStat}>
              <div className={styles.statNumber}>
                {stat.number.includes("K")
                  ? Math.floor(counts[index] / 1000)
                  : counts[index]}
                {stat.number.includes("K") ? "K" : ""}
                {stat.number.includes("+") ? "+" : ""}
              </div>
              <div className={styles.statLabels}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}