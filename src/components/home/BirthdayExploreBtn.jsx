import React from "react";
import styles from "../../styles/birthday-hero.module.css";
import { Cake, PartyPopper } from "lucide-react";

export default function BirthdayHero() {
    return (
        <section
            className={styles.hero}
            style={{
                margin: "20px",
                borderRadius: "30px",
                border: "20px solid #ff9421",
                boxShadow: "5px 5px 3px #00000058"
            }}
        >
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
                    Birthday <span>Ceremony</span>
                </h1>

                <p className={styles.description}>
                    Make every birthday unforgettable with our themed stages, waterpark
                    access, and complete party packages designed for all ages!
                </p>

                <div className={styles.buttons}>
                    <a href="birthdayexplore" className={styles.primaryBtn}>
                        <Cake size={18} /> EXPLORE MORE
                    </a>
                </div>
            </div>
        </section>
    );
}