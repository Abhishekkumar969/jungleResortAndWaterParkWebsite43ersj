import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/events-section.module.css";

const events = [
    {
        title: "DESTINATION WEDDING",
        image: "/images/gallery-1.jpg",
        href: "/destinationwedding"
    },
    {
        title: "WEDDING",
        image: "/images/venue-wedding.jpg",
        href: "/wedding"
    },
    {
        title: "HALDI",
        image: "/images/haldi.jpg",
        href: "/HALDI"
    },
    {
        title: "MEHNDI",
        image: "/images/mehndi.jpg",
        href: "/MEHNDI"
    },
    {
        title: "SANGEET",
        image: "/images/sangeet.jpg",
        href: "/SANGEET"
    },
    {
        title: "RECEPTION",
        image: "/images/venue-reception.jpg",
        href: "/reception"
    },
    {
        title: "BIRTHDAY",
        image: "/images/birthday-stage.jpg",
        href: "/birthday"
    }, {
        title: "ANNIVERSARY",
        image: "/images/anniversary.png",
        href: "/anniversary"
    }, {
        title: "RING CEREMONY",
        image: "/images/ringceremony.png",
        href: "/ringceremony"
    },
    {
        title: "CORPORATE EVENT",
        image: "/images/venue-corporate.jpg",
        href: "/corporateevents"
    },
    {
        title: "THEME PARTY",
        image: "/images/birthday-princess.jpg",
        href: "/themeparty"
    },
    {
        title: "POOL PARTY",
        image: "/images/poolparty.png",
        href: "/poolparty"
    }
];

export default function EventsSection() {
    return (
        <section className={styles.eventsSection}>

            <div className="container">

                <div className={styles.eventsHeader}>
                    <h2 className={styles.eventsLabel}>EVENTS & CELEBRATIONS</h2>

                    <h2 className={styles.eventsTitle}>
                        Celebrate The Beginning Of Forever
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