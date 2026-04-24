import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Home, Waves, ChevronRight } from "lucide-react";
import styles from "../styles/booking-options.module.css";

const options = [
    {
        id: "events",
        title: "Book Events",
        subtitle: "Weddings, Birthdays & Corporate",
        image: "/images/venue-wedding.webp",
        icon: Calendar,
        color: "#e72e77"
    },
    {
        id: "cottage",
        title: "Cottage Stay",
        subtitle: "Luxury Rooms & Suites",
        image: "/images/cottage-exterior.webp",
        icon: Home,
        color: "#2e77e7",
        link: "/cottage-in-patna"
    },
    {
        id: "waterpark",
        title: "Water Park",
        subtitle: "Pools, Slides & Fun",
        image: "/images/waterpark-main.webp",
        icon: Waves,
        color: "#27ae60",
        link: "/waterpark-in-patna"
    }
];

export default function BookingOptions({ onSelectEvent, onClose }) {
    const navigate = useNavigate();

    const handleSelect = (option) => {
        if (option.id === "events") {
            onSelectEvent();
        } else {
            onClose();
            navigate(option.link);
        }
    };

    return (
        <div className={styles.optionsContainer}>
            <p className={styles.optionsHeading}>What would you like to book?</p>
            <div className={styles.optionsList}>
                {options.map((option) => {
                    const Icon = option.icon;
                    return (
                        <div
                            key={option.id}
                            className={styles.optionCard}
                            onClick={() => handleSelect(option)}
                        >
                            <div className={styles.cardImage}>
                                <img src={option.image} alt={option.title} loading="lazy" />
                                <div className={styles.imageOverlay} />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardInfo}>
                                    <div className={styles.iconWrapper} style={{ backgroundColor: option.color }}>
                                        <Icon size={20} color="#fff" />
                                    </div>
                                    <div className={styles.textWrapper}>
                                        <h3>{option.title}</h3>
                                        <p>{option.subtitle}</p>
                                    </div>
                                </div>
                                <ChevronRight size={20} className={styles.arrow} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
