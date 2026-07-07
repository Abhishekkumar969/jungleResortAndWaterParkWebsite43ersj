import React from "react";
import { PartyPopper, Waves } from "lucide-react";
import styles from "../../styles/birthday-hero.module.css";

export default function PoolPartyExploreBtn() {
    return (
        <section className={styles.heroBorder}>
            <div className={styles.hero}>
                <div className={styles.heroCenter}>
                    <div className={styles.background}>
                        <img
                            src="/images/pool.webp"
                            alt="Pool Party"
                            className={styles.image}
                            loading="lazy"
                            width="800"
                            height="600"
                            style={{ filter: "brightness(0.7)" }}
                        />
                        <div className={styles.overlay}></div>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.badge}>
                        <PartyPopper size={16} />
                        <span>VELORA × Jungle Resort Patna</span>
                    </div>

                    <h2 className={styles.title}>
                        Premium <span>Pool Party</span>
                    </h2>

                    <h2>Summer Escape Tropical Pool Experience</h2>

                    <p className={styles.description}>
                        A premium night experience with live DJ, tropical pool vibes, exclusive crowd, curated partners, and luxury resort atmosphere in Patna.
                    </p>

                    <div className={styles.buttons}>
                        <a href="/pool-party" className={styles.primaryBtn}>
                            <Waves size={18} /> EXPLORE MORE
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
