import React from "react";
import styles from "../../styles/venue-hero.module.css";

export default function VenueHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <img
                    src="/images/venue-wedding.jpg"
                    alt="Event venues at Jungle Paradise"
                    className={styles.image}
                />

                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <span className={styles.badge}>
                    Premium Event Spaces
                </span>

                <h1 className={styles.title}>
                    Our Event <span>Venues</span>
                </h1>

                <p className={styles.description}>
                    Discover stunning venues designed for weddings, receptions,
                    corporate events, and all your special celebrations.
                </p>
            </div>
        </section>
    );
}