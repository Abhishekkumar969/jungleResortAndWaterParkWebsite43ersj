import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/events-section.module.css";

const events = [
    {
        title: "DESTINATION WEDDING",
        image: "/images/gallery-1.webp",
        href: "/destinationwedding"
    },
    {
        title: "WEDDING",
        image: "/images/venue-wedding.webp",
        href: "/wedding"
    },
    {
        title: "HALDI",
        image: "/eventPics/Haldi/3.webp",
        href: "/haldi"
    },
    {
        title: "MEHNDI",
        image: "/images/mehndi.webp",
        href: "/mehndi"
    },
    {
        title: "SANGEET",
        image: "/images/sangeet.webp",
        href: "/sangeet"
    },
    {
        title: "RECEPTION",
        image: "/images/Receptionimages8kforopenlawn4.webp",
        href: "/reception"
    },
    {
        title: "BIRTHDAY",
        image: "/images/birthday-stage.webp",
        href: "/birthday"
    }, {
        title: "ANNIVERSARY",
        image: "/eventPics/Anniversary/Anniversary7.webp",
        href: "/anniversary"
    }, {
        title: "RING CEREMONY",
        image: "/images/ringceremony.webp",
        href: "/ringceremony"
    },
    {
        title: "CORPORATE EVENT",
        image: "/images/CorporateEvent7.webp",
        href: "/corporateevents"
    },
    {
        title: "THEME PARTY",
        image: "/images/birthday-princess.webp",
        href: "/themeparty"
    },
    {
        title: "POOL PARTY",
        image: "/eventPics/Pool Party/waterparkjungleresort.webp",
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
                        Wedding Venue & Banquet Hall in Patna
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