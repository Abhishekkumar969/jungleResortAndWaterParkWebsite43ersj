import React from "react";
import styles from "../../styles/attractions.module.css";
import { Waves, Zap, Heart, Baby, Star, Music } from "lucide-react";

const attractions = [
  {
    name: "Wave Pool",
    description:
      "Experience ocean-like waves in our massive 20,000 sq ft wave pool with varying intensities.",
    icon: Waves,
    image: "/images/waterpark-wave.jpg",
    thrill: "Medium",
  },
  {
    name: "Spiral Slides",
    description:
      "Heart-pumping spiral slides with twists and turns that will leave you breathless!",
    icon: Zap,
    image: "/images/waterpark-slides.jpg",
    thrill: "High",
  },
  {
    name: "Lazy River",
    description:
      "Float along our 500-meter lazy river through scenic landscapes and gentle currents.",
    icon: Heart,
    image: "/images/waterpark-main.jpg",
    thrill: "Low",
  },
  {
    name: "Kids Splash Zone",
    description:
      "Safe and fun water play area designed specially for children with mini slides and fountains.",
    icon: Baby,
    image: "/images/waterpark-wave.jpg",
    thrill: "Low",
  },
  {
    name: "Aqua Disco",
    description:
      "Dance to the beats in our water disco pool with DJ music and colorful lights!",
    icon: Music,
    image: "/images/waterpark-main.jpg",
    thrill: "Medium",
  },
  {
    name: "Extreme Plunge",
    description:
      "For the brave ones! A near-vertical drop that sends you plunging into the splash pool.",
    icon: Star,
    image: "/images/waterpark-slides.jpg",
    thrill: "Extreme",
  },
];

export default function Attractions() {
  return (
    <section className={styles.attractionsSection}>
      <div className="container">

        <div className={styles.attractionsHeader}>

          <h2 className={styles.title}>
            Rides & <span>Attractions</span>
          </h2>

          <p className={styles.description}>
            From gentle lazy rivers to heart-pounding slides, we have something
            for everyone!
          </p>
        </div>

        <div className={styles.attractionsGrid}>
          {attractions.map((attraction) => {
            const Icon = attraction.icon;

            return (
              <div className={styles.attractionCard} key={attraction.name}>

                <div className={styles.imageWrapper}>

                  <img src={attraction.image} alt={attraction.name} />

                  <div className={styles.overlay}></div>

                  <div className={styles.cardBadge}>

                    <div className={styles.iconCircle}>
                      <Icon size={18} />
                    </div>

                    <span className={`${styles.thrill} ${styles[attraction.thrill.toLowerCase()]}`}>
                      {attraction.thrill} Thrill
                    </span>

                  </div>

                </div>

                <div className={styles.cardContent}>
                  <h3>{attraction.name}</h3>
                  <p>{attraction.description}</p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}