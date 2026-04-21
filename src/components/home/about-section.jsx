import React, { useState } from "react";
import { TreePine, Heart, Sparkles, Award } from "lucide-react";
import { ChevronDown } from "lucide-react";
import styles from "../../styles/about-section.module.css";

const features = [
  { icon: Heart, title: "Personalized Service", desc: "Tailored to your needs" },
  { icon: Sparkles, title: "Premium Amenities", desc: "World-class facilities" },
  { icon: TreePine, title: "Natural Beauty", desc: "Surrounded by nature" },
  { icon: Award, title: "Award Winning", desc: "Excellence in hospitality" },
];

const faqs = [
  {
    q: "Q1. Which is the best resort in Patna?",
    a: "We also offer options for pool party in Patna, picnic outings, social and large gatherings."
  },
  {
    q: "Q2. What is the price of resort in Patna?",
    a: "Prices depend on packages and guest count. Affordable options are available."
  },
  {
    q: "Q3. Is Jungle Resort good for destination wedding in Patna?",
    a: "Yes, it is one of the top venues for destination weddings with lawn and Cottage rooms."
  },
  {
    q: "Q4. Do you provide open lawn wedding in Patna?",
    a: "Yes, we offer a spacious lawn for outdoor and open air weddings."
  },
  {
    q: "Q5. Is it good for birthday party in Patna?",
    a: "Yes, it is one of the best birthday party venues in Patna."
  },
  {
    q: "Q6. Which is the best Banquet hall in Patna?",
    a: "Jungle Resort, Patna has the best Banquet hall with a big dedicated lawn."
  }
];

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <section className={styles.aboutSection}>
        <div className={styles.container}>

          <div className={styles.aboutGrid}>

            <div className={styles.aboutContent}>

              <div className={styles.aboutLabel}>
                <TreePine size={20} />
                <span>About Jungle Resort & Water Park</span>
              </div>

              <h2 className={styles.aboutTitles}>
                Where Nature Meets
                <span> Luxury Celebrations</span>
              </h2>

              <p className={styles.aboutTexts}>
                Nestled in the heart of nature, Jungle Resort & Water Park offers an
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
                        <Icon size={20} aria-hidden="true" />
                      </div>
                      <div>
                        <p className={styles.featureTitle}>{feature.title}</p>
                        <p className={styles.featureDesc}>{feature.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            <div className={styles.aboutImages}>

              <div className={styles.imageColumn}>
                <img src="/images/venue-wedding.webp" alt="Wedding venue" className={styles.imgLarge} loading="lazy" width="400" height="600" />
                <img src="/eventPics/Pool Party/waterparkjungleresort.webp" alt="Waterpark" className={styles.imgSmall} loading="lazy" width="400" height="300" />
              </div>

              <div className={`${styles.imageColumn} ${styles.topSpace}`}>
                <img src="/images/birthday-stage.webp" alt="Birthday celebration" className={styles.imgSmall} loading="lazy" width="400" height="300" />
                <img src="/eventPics/Corporate Event/Corporate Event5.webp" alt="Reception hall" className={styles.imgLarge} loading="lazy" width="400" height="600" />
              </div>

            </div>

          </div>

          {/* foldings */}
          <div className={styles.container}>

            <div>
              <div className={styles.aboutTexts}>
                <strong>Why Jungle Resort is the Best Resort in Patna:</strong>
              </div>
              <ul className={styles.aboutList}>
                  <li>One of the largest resorts in Patna</li>
                  <li>Perfect for Weddings, parties, birthday, reception, anniversary, pool party and day outing.</li>
                  <li>Prime location near Patna City and Kankarbagh</li>
                  <li>Affordable pricing options</li>
                  <li>Safe & family friendly environment</li>
              </ul>
            </div>

            {/* FAQ */}
            <div className={styles.faqSection}>

              <div style={{ marginBottom: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <strong>Frequently Asked Questions:</strong>
              </div>

              {faqs.map((item, index) => (
                <div key={index} className={styles.faqItem}>

                  <button
                    className={`${styles.faqQuestion} ${activeIndex === index ? styles.active : ""}`}
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-answer-${index}`}
                    style={{ background: 'none', border: 'none', textAlign: 'left', width: '100%', fontFamily: 'inherit', cursor: 'pointer' }}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className={`${styles.icon} ${activeIndex === index ? styles.rotate : ""}`}
                    />
                  </button>

                  {/* ANSWER */}
                  {activeIndex === index && (
                    <div id={`faq-answer-${index}`} className={styles.faqAnswer}>
                      {item.a}
                    </div>
                  )}

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>
    </>
  );
}