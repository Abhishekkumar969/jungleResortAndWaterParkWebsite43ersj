import React from "react";
import styles from "../../styles/attractions.module.css";

const attractions = [
  {
    image: "/WaterParkAds/1.jpeg",
  },
  {
    image: "/WaterParkAds/2.jpeg",
  }
];

const attractions2 = [
  {
    image: "/WaterParkAds/6.jpeg",
  },
  {
    image: "/WaterParkAds/7.jpeg",
  },
  {
    image: "/WaterParkAds/4.jpeg",
  },

];

export default function Attractions() {
  return (
    <section className={styles.attractionsSection}>
      <div className="container">

        <div className={styles.attractionsGrid}>
          {attractions.map((attraction) => {

            return (
              <div className={styles.attractionCard} key={attraction.name}>

                <div className={styles.imageWrapper}>

                  <img src={attraction.image} alt={attraction.name} />

                  <div className={styles.overlay}></div>

                </div>

              </div>
            );
          })}
        </div>

        <div className={styles.attractionsGrid} style={{ marginTop: "20px" }}>
          {attractions2.map((attraction) => {

            return (
              <div className={styles.attractionCard} key={attraction.name}>

                <div className={styles.imageWrapper}>

                  <img src={attraction.image} alt={attraction.name} />

                  <div className={styles.overlay}></div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}