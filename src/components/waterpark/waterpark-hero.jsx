import React from "react";
import styles from "../../styles/WaterparkHero.module.css";
import { Waves, Ticket } from "lucide-react";

export default function WaterparkHero() {
    return (
        <section className={styles.heroSection}>

            <div className={styles.heroBg}>
                <img
                    src="/images/waterpark-main.webp"
                    alt="Jungle Paradise Waterpark"
                />
                <div className={styles.heroOverlay}></div>
            </div>

            <div className={styles.heroContent}>

                <div className={styles.heroBadge}>
                    <Waves size={16} />
                    <span>10+ Water Attractions</span>
                </div>

                <h1>
                    Splash Into <span>Adventure</span>
                </h1>

                <p>
                    Dive into excitement at our world-class waterpark with thrilling
                    slides, wave pools, lazy rivers, and dedicated kids zones. Fun for
                    the whole family!
                </p>

                <div className={styles.heroInfo}>
                    {[
                        "Open Daily 10AM-7PM",
                        "Online Booking",
                        "Family Packages",
                        "Safety First",
                    ].map((info) => (
                        <span key={info}>{info}</span>
                    ))}
                </div>

                <a href="#tickets" className={styles.heroBtn}>
                    <Ticket size={18} /> Book Tickets Now
                </a>

            </div>

        </section>
    );
}