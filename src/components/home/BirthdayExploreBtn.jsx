import React from "react";
import { Cake, PartyPopper } from "lucide-react";
import styles from "../../styles/birthday-hero.module.css";

export default function BirthdayHero() {
    return (
        <section
            className={styles.heroBorder}
        >
            <div className={styles.hero}>
                <div className={styles.background}>
                    <img
                        src="/images/birthday-stage.jpg"
                        alt="Birthday celebration"
                        className={styles.image}
                    />
                    <div className={styles.overlay}></div>
                </div>

                <div className={styles.content}>
                    <div className={styles.badge}>
                        <PartyPopper size={16} />
                        <span>Multiple Themed Stages</span>
                    </div>

                    <h1 className={styles.title}>
                        Birthday <span>celebration</span>
                    </h1>

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