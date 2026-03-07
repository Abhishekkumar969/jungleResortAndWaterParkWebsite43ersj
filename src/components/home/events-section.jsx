import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Briefcase, Baby, Gem, Camera } from "lucide-react";
import styles from "../../styles/events-section.module.css";

const events = [
    {
        title: "Wedding",
        description: "Create your dream wedding in our stunning venues surrounded by nature's beauty.",
        icon: Heart,
        image: "/images/venue-wedding.jpg",
        href: "/event/wedding"
    },
    {
        title: "Reception",
        description: "Celebrate your union in our elegant reception halls with world-class amenities.",
        icon: Users,
        image: "/images/venue-reception.jpg",
        href: "/event/reception"
    },
    {
        title: "Corporate Event",
        description: "Host impactful corporate events in our professional conference spaces.",
        icon: Briefcase,
        image: "/images/venue-corporate.jpg",
        href: "/event/corporate-event"
    },
    {
        title: "Birthday",
        description: "Make birthdays extra special at our themed stages and waterpark.",
        icon: Baby,
        image: "/images/birthday-stage.jpg",
        href: "/event/birthday"
    },
    {
        title: "Ring Ceremony",
        description: "Exchange rings in an intimate setting adorned with elegance.",
        icon: Gem,
        image: "/images/venue-wedding.jpg",
        href: "/venues"
    },
    {
        title: "Photography",
        description: "Capture timeless memories in our picturesque locations.",
        icon: Camera,
        image: "/images/hero-resort.jpg",
        href: "/gallery"
    }
];

export default function EventsSection() {
    return (
        <section className={styles.eventsSection}>

            <div className="container">

                <div className={styles.eventsHeader}>
                    <span className={styles.eventsLabel}>Our Events</span>

                    <h2 className={styles.eventsTitle}>
                        Celebrate Every Moment <span>With Us</span>
                    </h2>

                    <p className={styles.eventsDesc}>
                        From grand weddings to intimate gatherings, we provide the perfect
                        setting for all your special occasions with personalized service
                        and attention to detail.
                    </p>
                </div>

                <div className={styles.eventsGrid}>

                    {events.map((event, index) => {

                        const Icon = event.icon;

                        return (
                            <Link to={event.href} key={index} className={styles.eventCard}>

                                <div className={styles.eventImage}>

                                    <img src={event.image} alt={event.title} />

                                    <div className={styles.eventOverlay}></div>

                                    <div className={styles.eventIcon}>
                                        <Icon size={22}/>
                                    </div>

                                </div>

                                <div className={styles.eventContent}>

                                    <h3>{event.title}</h3>

                                    <p>{event.description}</p>

                                    <span className={styles.eventBtn}>
                                        Book Now <ArrowRight size={16}/>
                                    </span>

                                </div>

                            </Link>
                        );

                    })}

                </div>

            </div>

        </section>
    );
}