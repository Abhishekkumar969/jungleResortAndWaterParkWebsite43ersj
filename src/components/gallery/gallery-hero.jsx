import React from "react";
import styles from "../../styles/gallery-hero.module.css";

export default function GalleryHero() {
    return (
        <section className={styles.hero}>
            <img
                src="/eventPics/Wed/jungle-resort-kumhrar-patna.jpg"
                alt="Jungle Paradise Gallery"
                className={styles.image}
            />

            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <span className={styles.subtitle}>Our Memories</span>

                <h1 className={styles.title}>Photo Gallery</h1>

                <p className={styles.description}>
                    Relive the magical moments captured at Jungle Paradise Resort &
                    Waterpark
                </p>
            </div>
        </section>
    );
}