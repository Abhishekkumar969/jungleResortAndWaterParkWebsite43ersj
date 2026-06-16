import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/events-section.module.css";

const events = [
    {
        title: "DESTINATION WEDDING",
        image: "/images/gallery-1.webp",
        href: "/destination-wedding-venue-in-patna"
    },
    {
        title: "WEDDING",
        image: "/images/venue-wedding.webp",
        href: "/wedding-venue-in-patna"
    },
    {
        title: "HALDI",
        image: "/eventPics/Haldi/3.webp",
        href: "/haldi-venue-in-patna"
    },
    {
        title: "MEHNDI",
        image: "/images/mehndi.webp",
        href: "/mehndi-venue-in-patna"
    },
    {
        title: "SANGEET",
        image: "/images/sangeet.webp",
        href: "/sangeet-venue-in-patna"
    },
    {
        title: "RECEPTION",
        image: "/images/Receptionimages8kforopenlawn4.webp",
        href: "/reception-venue-in-patna"
    },
    {
        title: "BIRTHDAY",
        image: "/images/birthday-stage.webp",
        href: "/birthday-party-venue-in-patna"
    },
    {
        title: "ANNIVERSARY",
        image: "/eventPics/Anniversary/Anniversary7.webp",
        href: "/anniversary-venue-in-patna"
    },
    {
        title: "RING CEREMONY",
        image: "/images/ringceremony.webp",
        href: "/ring-ceremony-venue-in-patna"
    },
    {
        title: "CORPORATE EVENT",
        image: "/images/CorporateEvent7.webp",
        href: "/corporate-event-venue-in-patna"
    },
    {
        title: "THEME PARTY",
        image: "/images/birthday-princess.webp",
        href: "/theme-party-venue-in-patna"
    },
    {
        title: "POOL PARTY",
        image: "/eventPics/Pool Party/waterparkjungleresort.webp",
        href: "/pool-party-venue-in-patna"
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