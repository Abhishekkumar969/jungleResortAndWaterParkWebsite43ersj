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
                        <Icon size={20} />
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

            <div className={styles.aboutImages}>

              <div className={styles.imageColumn}>
                <img src="/images/venue-wedding.webp" alt="Wedding venue" className={styles.imgLarge} />
                <img src="/eventPics/Pool Party/waterparkjungleresort.webp" alt="Waterpark" className={styles.imgSmall} />
              </div>

              <div className={`${styles.imageColumn} ${styles.topSpace}`}>
                <img src="/images/birthday-stage.webp" alt="Birthday celebration" className={styles.imgSmall} />
                <img src="/eventPics/Corporate Event/Corporate Event5.webp" alt="Reception hall" className={styles.imgLarge} />
              </div>

            </div>

          </div>

          <div className={styles.container}>

            <p className={styles.aboutTexts}>
              <strong>Jungle Resort & Water Park</strong> is one of the <strong>most premium and luxurious event destinations in Patna, Bihar</strong>, known for hosting grand weddings, receptions, anniversaries, birthday parties, and corporate events. Located at <i>Bypass Thana, Marcha - Mirchi Road, near Dharmasala</i>, our resort offers a <strong>perfect blend of nature, comfort, and modern infrastructure</strong>. If you are searching for the <strong>best banquet hall in Patna</strong> or a <strong>top wedding resort in Bihar</strong>, Jungle Resort & Water Park is the ideal choice for creating unforgettable memories.
            </p>

            <p className={styles.aboutTexts}>
              With a <strong>capacity to host more than 10,000 guests</strong>, our venue is designed to handle both large-scale celebrations and private gatherings with ease. From <strong>beautifully decorated wedding stages</strong> to <strong>spacious lawns and elegant event areas</strong>, we provide everything required to make your event grand and well-organized. Our experienced team ensures <i>seamless execution of every function</i>, including decoration, catering, lighting, and guest management, so you can enjoy your special day without any stress.
            </p>

            <p className={styles.aboutTexts}>
              One of the key attractions of <strong>Jungle Resort & Water Park</strong> is its <strong>unique combination of a luxury resort and an exciting water park in Patna</strong>. Guests can enjoy pool parties, summer outings, and fun-filled celebrations in a refreshing environment surrounded by greenery. This makes it one of the <strong>most preferred destinations in Patna for both entertainment and events</strong>. Whether it's a <i>daytime function or an evening celebration</i>, our venue creates the perfect atmosphere for every occasion.
            </p>

            <p className={styles.aboutTexts}>
              We are <strong>highly rated by our guests</strong> and recognized as one of the <strong>best banquet halls in Patna</strong> due to our commitment to quality, service, and customer satisfaction. Our personalized approach ensures that every event is <i>customized according to your needs and preferences</i>. From <strong>intimate family functions</strong> to <strong>large weddings and corporate events</strong>, we maintain <strong>high standards of hospitality</strong> and deliver a premium experience every time.
            </p>

            <p className={styles.aboutTexts}>
              If you are looking for a <strong>wedding venue in Patna</strong>, a <strong>birthday party place</strong>, a <strong>corporate event location</strong>, or a <strong>resort with water park facilities</strong>, <strong>Jungle Resort & Water Park</strong> is your perfect destination. Experience the beauty of nature, <i>luxury of modern amenities</i>, and <strong>excellence in service</strong> — all in one place. <strong>Book your event today</strong> and turn your special moments into unforgettable memories.
            </p>

          </div>

        </div>
      </section>
    </>
  );
}