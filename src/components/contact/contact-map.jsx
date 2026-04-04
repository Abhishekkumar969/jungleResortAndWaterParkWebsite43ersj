import React from "react";
import styles from "../../styles/contact-map.module.css";
import { MapPin, Navigation } from "lucide-react";

export default function ContactMap() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <div className={styles.header}>
                    <span className={styles.subtitle}>Find Us</span>
                    <h2 className={styles.title}>Our Location</h2>
                </div>

                <div className={styles.mapWrapper}>

                    <div className={styles.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.439826921119!2d85.21905797517599!3d25.557029977481115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a1e767ace26f%3A0xb3f6b632f1f03148!2sJungle%20Resort%20and%20Waterpark!5e0!3m2!1sen!2sin!4v1775307406413!5m2!1sen!2sin"
                            title="Jungle Resort & Water Park Location"
                            loading="lazy"
                            className={styles.iframe}
                        ></iframe>

                        {/* Location Card */}
                        <div className={styles.locationCard}>
                            <div className={styles.locationHeader}>


                                <div>
                                    <h3 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <span className={styles.iconBox}>
                                            <MapPin size={22} />
                                        </span>
                                        <span>
                                            Jungle Resort & Water Park
                                        </span>
                                    </h3>
                                    <p>
                                        Jungle Resort & WaterPark, Bypass Thana,
                                        Marcha - Mirchi Road, more, Dharamsala,
                                        Patna, Bihar 800009
                                    </p>
                                </div>
                            </div>

                            <a
                                href="https://www.google.com/maps?q=Jungle+Resort+and+Waterpark+Patna"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.button}
                            >
                                <Navigation size={18} /> Get Directions
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}