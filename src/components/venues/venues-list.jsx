import React, { useState } from "react";
import styles from "../../styles/venues-list.module.css";
import { Users, Maximize, Star, Check, ArrowRight } from "lucide-react";

const venues = [
    {
        id: 1,
        name: "The Grand Pavilion",
        type: "Outdoor",
        capacity: "500-2000",
        area: "25,000 sq ft",
        price: "Starting Rs. 2,50,000",
        rating: 4.9,
        image: "/images/venue-wedding.jpg",
        description:
            "Our flagship outdoor venue surrounded by lush greenery, perfect for grand weddings and large celebrations.",
        features: ["Open Air Setup", "Stage & Mandap Area", "Parking for 500+ Cars", "Catering Kitchen", "LED Screens"],
        popular: true,
    },
    {
        id: 2,
        name: "Crystal Ballroom",
        type: "Indoor",
        capacity: "200-500",
        area: "10,000 sq ft",
        price: "Starting Rs. 1,50,000",
        rating: 4.8,
        image: "/images/venue-reception.jpg",
        description:
            "Elegant indoor hall with crystal chandeliers and sophisticated decor for premium receptions and parties.",
        features: ["Air Conditioned", "Crystal Chandeliers", "Dance Floor", "Premium Sound System", "Bridal Suite"],
        popular: true,
    },
    {
        id: 3,
        name: "Garden Terrace",
        type: "Semi-Outdoor",
        capacity: "100-300",
        area: "8,000 sq ft",
        price: "Starting Rs. 80,000",
        rating: 4.7,
        image: "/images/hero-resort.jpg",
        description:
            "A beautiful garden terrace venue ideal for ring ceremonies, engagement parties, and intimate gatherings.",
        features: ["Garden View", "Covered Seating", "Fountain Area", "Mood Lighting", "Photography Spots"],
        popular: false,
    },
    {
        id: 4,
        name: "Conference Center",
        type: "Indoor",
        capacity: "50-200",
        area: "5,000 sq ft",
        price: "Starting Rs. 50,000",
        rating: 4.8,
        image: "/images/venue-corporate.jpg",
        description:
            "State-of-the-art conference facility equipped with modern technology for corporate events and meetings.",
        features: ["Projector & Screen", "Video Conferencing", "High-Speed WiFi", "Breakout Rooms", "Coffee Lounge"],
        popular: false,
    },
    {
        id: 5,
        name: "Royal Banquet Hall",
        type: "Indoor",
        capacity: "300-800",
        area: "15,000 sq ft",
        price: "Starting Rs. 2,00,000",
        rating: 4.9,
        image: "/images/venue-reception.jpg",
        description:
            "Regal banquet hall with royal interiors perfect for grand receptions and celebration dinners.",
        features: ["Royal Decor", "Multiple Sections", "VIP Lounge", "Live Kitchen", "Premium Bar"],
        popular: true,
    },
];

export default function VenuesList() {
    const [filter, setFilter] = useState("all");

    const filteredVenues =
        filter === "all"
            ? venues
            : venues.filter((v) => v.type.toLowerCase() === filter);

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <div className={styles.header}>
                    <h2>
                        Choose Your Perfect <span>Venue</span>
                    </h2>
                    <p>
                        From grand outdoor spaces to elegant indoor halls, find the perfect
                        setting for your celebration.
                    </p>
                </div>

                {/* Filters */}
                <div className={styles.filters}>
                    {["all", "outdoor", "indoor", "semi-outdoor"].map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`${styles.filterBtn} ${filter === type ? styles.active : ""
                                }`}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1).replace("-", " ")}
                        </button>
                    ))}
                </div>

                {/* Venue Cards */}
                <div className={styles.list}>
                    {filteredVenues.map((venue) => (
                        <div key={venue.id} className={styles.card}>

                            <div className={styles.imageBox}>
                                <img src={venue.image} alt={venue.name} />
                                {venue.popular && (
                                    <span className={styles.popular}>Most Popular</span>
                                )}
                            </div>

                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span className={styles.type}>{venue.type}</span>

                                    <div className={styles.rating}>
                                        <Star size={16} />
                                        {venue.rating}
                                    </div>
                                </div>

                                <h3>{venue.name}</h3>
                                <p className={styles.desc}>{venue.description}</p>

                                <div className={styles.stats}>
                                    <span>
                                        <Users size={16} /> {venue.capacity} Guests
                                    </span>

                                    <span>
                                        <Maximize size={16} /> {venue.area}
                                    </span>
                                </div>

                                <div className={styles.features}>
                                    {venue.features.slice(0, 4).map((f) => (
                                        <span key={f}>
                                            <Check size={12} /> {f}
                                        </span>
                                    ))}
                                </div>

                                <div className={styles.bottom}>
                                    <div>
                                        <p className={styles.priceLabel}>Starting from</p>
                                        <p className={styles.price}>
                                            {venue.price.replace("Starting ", "")}
                                        </p>
                                    </div>

                                    <button className={styles.bookBtn}>
                                        Book This Venue <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}