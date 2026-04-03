import React from "react";
import styles from "../../styles/birthday-hero.module.css";
import { PartyPopper } from "lucide-react";

export default function BirthdayHero() {
    return (
        <section className={styles.hero}>
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
                    {/* <a href="#packages" className={styles.primaryBtn}>
                        <Cake size={18} /> View Packages
                    </a> */}

                    <a href="#stages" className={styles.secondaryBtn}>
                        Explore Stages
                    </a>
                </div>
            </div>
        </section>
    );
}