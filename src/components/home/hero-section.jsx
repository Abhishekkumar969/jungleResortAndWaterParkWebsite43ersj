import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuickBookForm from "../quick-book-form";
import { ChevronDown, TreePine, Waves } from "lucide-react";
import styles from "../../styles/hero-section.module.css";

const texts = [
  "Destination Wedding in Patna",
  "Water park in Patna"
];

export default function HeroSection() {

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { src: "/videos/3.webp" },
    { src: "/videos/6.webp" },
    { src: "/videos/3.webp" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  /* Typewriter */
  useEffect(() => {

    const currentText = texts[textIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {

      if (!isDeleting) {

        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }

      } else {

        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex(prev => (prev + 1) % texts.length);
        }

      }

    }, typingSpeed);

    return () => clearTimeout(timer);

  }, [charIndex, isDeleting, textIndex]);

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
        { name: "Birthday Celebration", link: "/birthday" },
        { name: "Pool Party", link: "/poolparty" },
        { name: "Get Together", link: "/gettogether" },
        { name: "Kitty Party", link: "/kittyparty" }
      ]
    },
    {
      title: "Corporate Events",
      items: [
        { name: "Corporate Events", link: "/corporateevents" },
        { name: "Corporate Party", link: "/corporateparty" },
        { name: "Corporate Pool Party", link: "/corporatepoolparty" }
      ]
    },
    { title: "WaterPark Tickets", link: "/waterpark-in-patna" },
    { title: "FunPark Tickets", link: "/FunPark" }
  ];

  return (
    <section className={styles.heroSection}>

      {/* Background */}
      <div className={styles.heroBg}>
        <div
          className={styles.slider}
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div className={styles.slide} key={index}>
              <img
                src={slide.src}
                alt="hero"
                className={styles.heroVideo}
                loading={index === 0 ? "eager" : "lazy"} // 🔥 important
              />
            </div>
          ))}
        </div>

        <div className={styles.heroOverlay}></div>
      </div>

      {/* Decorative Icons */}
      <TreePine className={styles.heroTree} />
      <Waves className={styles.heroWaves} />

      {/* Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>

          {/* Show in desktop view */}
          <div className={styles.heroName} >

            <h1 className={`${styles.heroTitle}`}>
              Welcome to <br />
              <span className={`${styles.mobileTitle}`}> Jungle Resort <div>&</div> Waterpark </span>
            </h1>

          </div>

          {/* Show in mobile view  */}
          <div style={{ display: "flex", justifyContent: "center", margin: "-8px", width: "100%" }}>
            <div className={styles.heroForm}>
              <QuickBookForm />
            </div>
          </div>

          <div className={styles.divtypeWriter}>
            <h2 className={styles.typeWriter}>
              {displayText}
              <span className={styles.cursor}>|</span>
            </h2>
          </div>

          {/* Buttons */}
          <div className={styles.heroButtons}>

            {heroMenus.map((menu, index) => (

              <div key={index} className={styles.dropdown}>

                {menu.items ? (
                  <>
                    <button className={styles.heroBtnPrimary}>
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
                ) : menu.title === "FunPark Tickets" ? (

                  // ✅ ONLY button (no Link)
                  <button
                    className={styles.heroBtnOutline}
                    onClick={() => setShowPopup(true)}
                  >
                    {menu.title}
                  </button>

                ) : (

                  // ✅ Normal link
                  <Link to={menu.link} className={styles.heroBtnOutline}>
                    {menu.title}
                  </Link>

                )}

              </div>

            ))}

          </div>

        </div>

        <div className={styles.heroRight} style={{ padding: "70px 0px" }}>
          <QuickBookForm />
        </div>

        {showPopup && (
          <div
            className={styles.popupOverlay}
            onClick={() => setShowPopup(false)} // outside click close
          >
            <div
              className={styles.popupBox}
              onClick={(e) => e.stopPropagation()} // prevent close inside click
            >
              {/* Close Button */}
              <button
                className={styles.popupClose}
                onClick={() => setShowPopup(false)}
              >
                ✕
              </button>

              {/* Content */}
              <h2>🎡 FunPark Coming Soon!</h2>
              <p>
                Exciting rides, games, and a full entertainment experience are coming very soon 🚀
              </p>
            </div>
          </div>
        )}

      </div>

    </section>
  );
}