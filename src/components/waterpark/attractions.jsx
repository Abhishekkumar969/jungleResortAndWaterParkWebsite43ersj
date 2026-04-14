import React from "react";
import styles from "../../styles/attractions.module.css";

const attractions = [
  {
    name: "WaterParkAds1",
    image: "/WaterParkAds/1.webp",
  },
  {
    name: "WaterParkAds2",
    image: "/WaterParkAds/2.webp",
  }
];

const attractions2 = [
  {
    name: "WaterParkAds3",
    image: "/WaterParkAds/6.webp",
  },
  {
    name: "WaterParkAds4",
    image: "/WaterParkAds/7.webp",
  },
  {
    name: "WaterParkAds5",
    image: "/WaterParkAds/4.webp",
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