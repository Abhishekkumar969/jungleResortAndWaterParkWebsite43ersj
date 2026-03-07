import React from "react";
import { TreePine, Heart, Sparkles, Award } from "lucide-react";
import styles from "../../styles/about-section.module.css";

const features = [
  { icon: Heart, title: "Personalized Service", desc: "Tailored to your needs" },
  { icon: Sparkles, title: "Premium Amenities", desc: "World-class facilities" },
  { icon: TreePine, title: "Natural Beauty", desc: "Surrounded by nature" },
  { icon: Award, title: "Award Winning", desc: "Excellence in hospitality" },
];

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>

        <div className={styles.aboutGrid}>

          <div className={styles.aboutImages}>

            <div className={styles.imageColumn}>
              <img src="/images/venue-wedding.jpg" alt="Wedding venue" className={styles.imgLarge}/>
              <img src="/images/waterpark-main.jpg" alt="Waterpark" className={styles.imgSmall}/>
            </div>

            <div className={`${styles.imageColumn} ${styles.topSpace}`}>
              <img src="/images/birthday-stage.jpg" alt="Birthday celebration" className={styles.imgSmall}/>
              <img src="/images/venue-reception.jpg" alt="Reception hall" className={styles.imgLarge}/>
            </div>

            <div className={styles.aboutBadge}>
              <div className={styles.badgeNumber}>15+</div>
              <div className={styles.badgeText}>Years of Excellence</div>
            </div>

          </div>

          <div className={styles.aboutContent}>

            <div className={styles.aboutLabel}>
              <TreePine size={20}/>
              <span>About Us</span>
            </div>

            <h2 className={styles.aboutTitles}>
              Where Nature Meets
              <span> Luxury Celebrations</span>
            </h2>

            <p className={styles.aboutTexts}>
              Nestled in the heart of nature, Jungle Paradise Resort & Waterpark offers an
              unparalleled experience for your most precious moments.
            </p>

            <p className={styles.aboutTexts}>
              With state-of-the-art facilities, personalized service, and a team dedicated to
              perfection, we transform your dreams into reality.
            </p>

            <div className={styles.aboutFeatures}>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className={styles.featureItem}>

                    <div className={styles.featureIcon}>
                      <Icon size={20}/>
                    </div>

                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}