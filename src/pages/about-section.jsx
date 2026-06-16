import React from "react";
import { TreePine, Heart, Sparkles, Award } from "lucide-react";

import styles from "../styles/about-section.module.css";
import Contact from "./contact/Contact"
import useSEO from "../hooks/useSEO";


const features = [
  { icon: Heart, title: "Personalized Service", desc: "Tailored to your needs" },
  { icon: Sparkles, title: "Premium Amenities", desc: "World-class facilities" },
  { icon: TreePine, title: "Natural Beauty", desc: "Surrounded by nature" },
  { icon: Award, title: "Award Winning", desc: "Excellence in hospitality" },
];

export default function AboutSection() {
  useSEO({
    title: "About Jungle Resort Patna | Best Resort & Banquet Hall in Patna",
    description: "Discover Jungle Resort Patna — the best resort in Patna for luxury weddings, banquet hall events, destination weddings, and family staycations. Luxury resort in Patna with wedding lawn and marriage hall.",
    keywords: "Resort in Patna, Best Resort in Patna, Banquet Hall in Patna, Luxury Resort in Patna, Wedding Venue in Patna, Marriage Hall in Patna, Destination Wedding in Patna, Wedding Lawn in Patna",
    canonical: "https://www.jungleresortpatna.in/about-us",
  });

  return (
    <>


      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>

            <div className={styles.aboutContent}>


              <div className={styles.aboutLabel}>
                <TreePine size={20} />
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
                <img src="/images/venue-wedding.webp" alt="Wedding venue" className={styles.imgLarge} loading="lazy" />
                <img src="/images/waterpark-main.webp" alt="Waterpark" className={styles.imgSmall} loading="lazy" />
              </div>

              <div className={`${styles.imageColumn} ${styles.topSpace}`}>
                <img src="/images/birthday-stage.webp" alt="Birthday celebration" className={styles.imgSmall} loading="lazy" />
                <img src="/images/venue-reception.webp" alt="Reception hall" className={styles.imgLarge} loading="lazy" />
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

          <div className={styles.container}>

            <p className={styles.aboutTexts}>
              <strong> Best Resort in Patna for Wedding, Banquet & Day Outing </strong>
              Jungle Resort & Water Park is one of the best resorts in Patna, offering a perfect destination for weddings, parties, reception, Birthdays, Anniversary, Pool parties with cottages and family outings. It is Located at Patna Bypass Thana, Marcha Marchi Road, Dharmshala More. This Resort and Banquet Hall near Kankarbagh, Kumhrar and Patna City, is a perfect choice for those searching for a resort near me or a luxury resort in Patna or banquet hall in patna.
              <br />
              We provide complete solutions for any kind of events specially destination weddings in Patna, birthday parties, and corporate functions. Whether you are planning a resort for a day outing in Patna or a grand celebration with your family and friends, Jungle Resort ensures a memorable experience.
            </p>

            <p className={styles.aboutTexts}>
              <strong> Banquet Hall in Patna for Events </strong>
              We are known as one of the best banquet halls in Patna, provides a premium and classy   outdoor and indoor event space for Jaimala and Mandap.
              <br />
              If you are searching for a banquet hall in Kankarbagh with price or banquet halls near me, Jungle Resort provides the perfect gateway for Luxurious, affordable and customizable packages in Patna. Even if you are looking for a banquet hall near me then it tops the list for your dream destination wedding in patna. This banquet hall in patna city provides all amenities that you wished for your fairytale wedding.
            </p>

            <p className={styles.aboutTexts}>
              <strong> Wedding Resort in Patna for Destination Wedding </strong>
              Jungle Resort is one of the best choices for a wedding resort in Patna, providing a complete setup for a fairytale destination wedding in Patna.
              <br />
              With Open lawn, Open Air Lawn, banquet hall, Family Hall and Cottages we are perfect for a resort wedding in Patna and a wedding venue with rooms in Patna. We are a Top Destination Wedding venue in Patna that offers one stop solutions for wedding planning services.
            </p>

            <p className={styles.aboutTexts}>
              <strong> Open Lawn Wedding in Patna | Outdoor & Open Air Venue </strong>
              Our Open Lawn venue is approx 22500 Sq Ft  highly preferred for open lawn wedding in Patna and outdoor wedding venue Patna.
              <br />
              If you are looking for a marriage garden in Patna or open air wedding in Patna, Jungle Resort offers a beautiful green lawn perfect for grand celebrations with Waterpark activities.
            </p>

            <p className={styles.aboutTexts}>
              <strong> Birthday Party Venue in Patna | Resort, Pool & Kids Party </strong>
              Celebrate and enjoy your special day at the best birthday party venue in Patna.
              <br />
              We offer resort for birthday party in Patna, pool party setups and kids birthday party venue in Patna, making every celebration fun, memorable and make you feel special.
            </p>

            <p className={styles.aboutTexts}>
              <strong> Party Venue in Patna for Reception, Corporate & Pool Party </strong>
              Jungle Resort is a perfect party venue in Patna for receptions, corporate events, anniversary and group celebrations.
              <br />
              We also offer options for pool party in Patna, picnic outings, social and large gatherings.
            </p>

            <p className={styles.aboutTexts}>
              <strong> Resort Near Kankarbagh, Kumhrar & Patna City: </strong>
              Jungle Resort is located near major areas, It is a popular choice for those searching for a resort in Kankarbagh Patna, resort in Patna City, resort in Kumhrar or resort in Mithapur and resort near me areas.
            </p>


            <p className={styles.aboutTexts}>
              <strong> Why Jungle Resort is the Best Resort in Patna: </strong>
              <ul>
                <li>One of the largest resorts in Patna</li>
                <li>Perfect for Weddings, parties, birthday, reception, anniversary, pool party and day outing.</li>
                <li>Prime location near Patna City and Kankarbagh</li>
                <li>Affordable pricing options</li>
                <li>Safe & family friendly environment</li>
              </ul>
            </p>


            <div className={styles.aboutTexts}>
              <div>
                <strong> Frequently Asked Questions: </strong> <br />
                <strong>Q1. Which is the best resort in Patna?</strong> <br />
                <span> We also offer options for pool party in Patna, picnic outings, social and large gatherings.</span>
              </div>

              <div>
                <strong>Q2. What is the price of resort in Patna?</strong> <br />
                <span> Prices depend on packages and guest count. Affordable options are available.</span>
              </div>

              <div>
                <strong>Q3. Is Jungle Resort good for destination wedding in Patna?</strong> <br />
                <span> Yes, it is one of the top venues for destination weddings with lawn and Cottage rooms.</span>
              </div>

              <div>
                <strong>Q4. Do you provide open lawn wedding in Patna?</strong> <br />
                <span>Yes, we offer a spacious lawn for outdoor and open air weddings.</span>
              </div>

              <div>
                <strong>Q5. Is it good for birthday party in Patna?</strong> <br />
                <span>Yes, it is one of the best birthday party venues in Patna.</span>
              </div>

              <div>
                <strong>Q6. Which is the best Banquet hall in Patna?</strong> <br />
                <span>Jungle Resort, Patna has the best Banquet hall with a big dedicated lawn for the banquet</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      <Contact />
    </>
  );
}