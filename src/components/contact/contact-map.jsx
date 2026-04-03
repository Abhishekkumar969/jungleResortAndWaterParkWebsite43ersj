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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle%20NYC!5e0!3m2!1sen!2sus!4v1636482239079!5m2!1sen!2sus"
                            title="Jungle Paradise Resort Location"
                            loading="lazy"
                            className={styles.iframe}
                        ></iframe>

                        {/* Location Card */}
                        <div className={styles.locationCard}>
                            <div className={styles.locationHeader}>
                                <div className={styles.iconBox}>
                                    <MapPin size={22} />
                                </div>

                                <div>
                                    <h3>Jungle Paradise Resort</h3>
                                    <p>
                                        NH-44, Near City Bypass Road <br />
                                        District Center, State - 123456
                                    </p>
                                </div>
                            </div>

                            <a
                                href="https://www.google.com/maps"
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