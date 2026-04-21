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
    },
    {
        title: "ANNIVERSARY",
        image: "/eventPics/Anniversary/Anniversary7.webp",
        href: "/anniversary"
    },
    {
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
                    <h2 className={styles.eventsLabel}>EVENTS &amp; CELEBRATIONS</h2>

                    <div className={styles.eventsLabelDivider}>
                        <img src="/images/divider.webp" alt="" aria-hidden="true" loading="lazy" width="150" height="15" />
                    </div>

                    <p className={styles.eventsTitle}>
                        Wedding Venue &amp; Banquet Hall in Patna
                    </p>
                </div>

                <div className={`${styles.eventsGrid} stagger-children`}>

                    {events.map((event, index) => {

                        return (
                            <Link to={event.href} key={index} className={styles.eventCard} data-animate="fade-up">

                                <div className={styles.eventImage}>


                                    <img src={event.image} alt={event.title} loading="lazy" width="400" height="300" />

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