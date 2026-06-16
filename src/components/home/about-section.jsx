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
    a: "Jungle Resort is widely recognized as the best resort in Patna, offering a luxury resort experience with premium banquet hall, wedding lawn, and waterpark facilities."
  },
  {
    q: "Q2. What is the price of resort in Patna?",
    a: "Prices depend on packages and guest count. Affordable options are available."
  },
  {
    q: "Q3. Is Jungle Resort good for destination wedding in Patna?",
    a: "Yes, Jungle Resort is one of the top venues for destination wedding in Patna, with a luxurious wedding lawn, banquet hall, and cottage rooms for guests."
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
    a: "Jungle Resort has the best banquet hall in Patna — a spacious marriage hall with a large dedicated wedding lawn for grand celebrations."
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
                Best Resort in Patna —
                <span> Where Nature Meets Luxury Celebrations</span>
              </h2>

              <p className={styles.aboutTexts}>
                Nestled in the heart of nature, Jungle Resort & Water Park is the best resort in Patna offering an
                unparalleled experience as a luxury resort, banquet hall, and wedding venue in Patna.
              </p>

              <p className={styles.aboutTexts}>
                Whether you are planning a destination wedding in Patna, searching for a marriage hall in Patna,
                or booking a birthday party venue or corporate event venue in Patna, we transform your dreams into reality
                with personalized service and state-of-the-art facilities.
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
                <strong>Why Jungle Resort is the Best Resort in Patna for Weddings & Events:</strong>
              </div>
              <ul className={styles.aboutList}>
                  <li>The best resort in Patna with luxury resort facilities</li>
                  <li>Premium banquet hall in Patna and spacious wedding lawn in Patna</li>
                  <li>Top wedding venue in Patna and marriage hall in Patna for grand celebrations</li>
                  <li>Ideal destination wedding venue in Patna with cottage rooms</li>
                  <li>Best birthday party venue and corporate event venue in Patna</li>
                  <li>Prime location near Patna City and Kankarbagh with ample parking</li>
                  <li>Safe & family-friendly environment with affordable pricing</li>
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