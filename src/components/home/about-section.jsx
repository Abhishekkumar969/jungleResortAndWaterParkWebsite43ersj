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

           <div style={{ padding: "0px" }}>

            <h3>Why Jungle Resort & Water Park is the Best in Patna</h3>

            <ul>

              <li><strong>Top Rated Banquet Hall in Patna</strong> with 4.6+ Google rating</li>
              <li><strong>Located at Bypass Thana, Marcha - Mirchi Road, Patna</strong></li>
              <li><strong>Capacity of 10,000+ guests</strong> for grand weddings</li>
              <li><strong>Luxury resort with natural surroundings</strong></li>
              <li><strong>Perfect for weddings, receptions, birthdays & corporate events</strong></li>

              <li>Premium AC banquet halls</li>
              <li>Massive open lawns for outdoor weddings</li>
              <li>Beautiful stage decoration setup</li>
              <li>Fully customizable wedding themes</li>
              <li>Affordable to luxury pricing options</li>

              <li>Best destination wedding resort in Patna</li>
              <li>Water park facility for fun & entertainment</li>
              <li>Ideal for pool parties and summer events</li>
              <li>Family-friendly environment</li>
              <li>Clean and hygienic infrastructure</li>

              <li>Professional event management team</li>
              <li>In-house catering with multi-cuisine menu</li>
              <li>Veg & non-veg options available</li>
              <li>High-quality food service</li>
              <li>Guest satisfaction focused service</li>

              <li>24/7 security with CCTV surveillance</li>
              <li>Large parking space available</li>
              <li>Easy accessibility from all parts of Patna</li>
              <li>Close to main city location</li>
              <li>Well-connected road access</li>

              <li>Perfect for destination weddings in Bihar</li>
              <li>Best resort for engagement ceremonies</li>
              <li>Top venue for mehndi and haldi functions</li>
              <li>Ideal for birthday and anniversary celebrations</li>
              <li>Corporate event friendly infrastructure</li>

              <li>DJ, music and entertainment setup</li>
              <li>Lighting and decoration services</li>
              <li>Photography & videography support</li>
              <li>Custom event planning options</li>
              <li>Luxury experience at affordable pricing</li>

              <li>Highly rated by customers</li>
              <li>Trusted wedding venue in Patna</li>
              <li>Best marriage garden in Patna</li>
              <li>Top resort for wedding events</li>
              <li>One-stop solution for all events</li>

              <li>Indoor and outdoor venue options</li>
              <li>Poolside event setup available</li>
              <li>Unique combination of resort + water park</li>
              <li>Relaxing environment surrounded by greenery</li>
              <li>Perfect for day and night events</li>

              <li>Flexible booking options</li>
              <li>Customized packages for every budget</li>
              <li>Experienced staff and support team</li>
              <li>Well-maintained property</li>
              <li>Excellent customer reviews</li>

              <li>Ideal for large-scale wedding planning</li>
              <li>Best venue for luxury weddings in Bihar</li>
              <li>Affordable wedding packages available</li>
              <li>Modern infrastructure with traditional touch</li>
              <li>Premium event experience guaranteed</li>

            </ul>
          </div>

        </div>
      </section>
    </>
  );
}