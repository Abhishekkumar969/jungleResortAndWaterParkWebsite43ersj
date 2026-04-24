import React from "react";
import styles from "../../styles/gallery-cta.module.css";
import { Calendar, Phone } from "lucide-react";

export default function GalleryCta() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <h2 className={styles.title}>
                    Ready to Create Your Own <span>Memories?</span>
                </h2>

                <p className={styles.description}>
                    Book your event or waterpark visit today and become part of our
                    beautiful gallery of memories.
                </p>

                <div className={styles.buttons}>
                    <a href="/venues" className={styles.primaryBtn}>
                        <Calendar size={20} /> Book Event Venue
                    </a>

                    <a href="/contact" className={styles.secondaryBtn}>
                        <Phone size={20} /> Contact Us
                    </a>
                </div>

            </div>
        </section>
    );
}