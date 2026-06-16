import React from "react";
import { Cake, PartyPopper } from "lucide-react";
import styles from "../../styles/birthday-hero.module.css";

export default function BirthdayHero() {
    return (
        <section
            className={styles.heroBorder}
        >
            <div className={styles.hero}>
                <div className={styles.heroCenter}>
                    <div className={styles.background}>
                        <img
                            src="/images/birthday-stage.webp"
                            alt="Birthday celebration"
                            className={styles.image}
                            loading="lazy"
                            width="800"
                            height="600"
                        />
                        <div className={styles.overlay}></div>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.badge}>
                        <PartyPopper size={16} />
                        <span>Birthday Party Resort In Patna With Water Park</span>
                    </div>

                    <h2 className={styles.title}>
                        Birthday <span>Celebration</span>
                    </h2>

                    <h2>Best Birthday Party Venue in Patna</h2>

                    <p className={styles.description}>
                        Make every birthday unforgettable with our themed stages, waterpark
                        access, and complete party packages designed for all ages!
                    </p>

                    <div className={styles.buttons}>
                        <a href="birthday" className={styles.primaryBtn}>
                            <Cake size={18} /> EXPLORE MORE
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}