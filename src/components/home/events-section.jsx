import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/events-section.module.css";

const events = [
    {
        title: "WEDDING",
        image: "/images/venue-wedding.jpg",
        href: "/event/wedding"
    },
    {
        title: "Reception",
        image: "/images/venue-reception.jpg",
        href: "/event/reception"
    },
    {
        title: "Corporate Event",
        image: "/images/venue-corporate.jpg",
        href: "/event/corporate-event"
    },
    {
        title: "Birthday",
        image: "/images/birthday-stage.jpg",
        href: "/event/birthday"
    },
    {
        title: "Ring Ceremony",
        image: "/images/venue-wedding.jpg",
        href: "/venues"
    },
    {
        title: "Water Park",
        image: "/images/hero-resort.jpg",
        href: "/gallery"
    }
];

export default function EventsSection() {
    return (
        <section className={styles.eventsSection}>

            <div className="container">

                <div className={styles.eventsHeader}>
                    <h2 className={styles.eventsLabel}>Our Events</h2>

                    <h2 className={styles.eventsTitle}>
                        Celebrate Every Moment <span>With Us</span>
                    </h2>
                </div>

                <div className={styles.eventsGrid}>

                    {events.map((event, index) => {

                        return (
                            <Link to={event.href} key={index} className={styles.eventCard}>

                                <div className={styles.eventImage}>

                                    <img src={event.image} alt={event.title} />

                                    <div className={styles.eventOverlay}></div>
                                </div>

                                <div className={styles.eventContent}>

                                    <h3>{event.title}</h3>

                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <span className={styles.eventBtn}>
                                            EXPLORE MORE
                                        </span>
                                    </div>

                                </div>

                            </Link>
                        );

                    })}

                </div>

            </div>

        </section>
    );
}