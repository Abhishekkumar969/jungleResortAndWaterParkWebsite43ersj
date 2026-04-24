import React from "react";
import styles from "../../styles/waterparkinfo.module.css";
import { Clock, ShieldCheck, Utensils, Coffee, Key, Car, CheckCircle2 } from "lucide-react";

const info = [
    {
        icon: Clock,
        title: "Check-in & Check-out",
        color: "#0ea5e9",
        items: [
            "Check-in: 11:00 AM onwards",
            "Check-out: 10:00 AM next day",
            "4Hr/10Hr: Flexible timings",
            "Early check-in (if available)"
        ]
    },
    {
        icon: ShieldCheck,
        title: "Guest Safety",
        color: "#2ecc71",
        items: [
            "Private secured campus",
            "24/7 Security guards",
            "Fire safety equipped",
            "Safe parking inside resort"
        ]
    },
    {
        icon: Utensils,
        title: "Dining Options",
        color: "#f59e0b",
        items: [
            "In-room dining available",
            "Multi-cuisine restaurant",
            "Breakfast: 8 AM - 10 AM",
            "Dinner orders till 10 PM"
        ]
    },
    {
        icon: Coffee,
        title: "Room Amenities",
        color: "#8b5cf6",
        items: [
            "Complimentary mineral water",
            "Tea/Coffee maker in room",
            "Premium toiletries provided",
            "Extra towels on request"
        ]
    },
    {
        icon: Key,
        title: "Guest Rules",
        color: "#e91e8c",
        items: [
            "Valid ID proof mandatory",
            "Visitors not allowed in rooms",
            "No smoking inside cottages",
            "Maintain peaceful environment"
        ]
    },
    {
        icon: Car,
        title: "Location & Parking",
        color: "#64748b",
        items: [
            "Located at Sampatchak, Patna",
            "Free parking for all guests",
            "Easy access to Water Park",
            "Taxi service available on call"
        ]
    }
];

export default function CottageInfo() {
    return (
        <section className={styles.infoSection} style={{ background: "#ffffff" }}>
            <div className={styles.infoContainer}>
                <div className={styles.infoHeader}>
                    <div className={styles.infoPill}>🏨 Stay Policy</div>
                    <h2>Stay <span>Information</span></h2>
                    <p>Everything you need to know for a comfortable and memorable stay at Jungle Resort Patna.</p>
                </div>

                <div className={styles.infoGrid}>
                    {info.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div className={styles.infoCard} key={item.title} style={{ background: "#f8fafc" }}>
                                <div className={styles.infoCardHeader}>
                                    <div className={styles.iconBox} style={{ background: item.color + "15", color: item.color }}>
                                        <Icon size={22} />
                                    </div>
                                    <h3>{item.title}</h3>
                                </div>
                                <ul className={styles.itemList}>
                                    {item.items.map((text) => (
                                        <li key={text} className={styles.item}>
                                            <CheckCircle2 size={14} className={styles.checkIcon} style={{ color: item.color }} />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
