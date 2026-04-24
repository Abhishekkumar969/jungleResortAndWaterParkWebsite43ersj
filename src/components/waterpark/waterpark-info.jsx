import React from "react";
import styles from "../../styles/waterparkinfo.module.css";
import { Clock, ShieldCheck, Utensils, Lock, Shirt, AlertTriangle, CheckCircle2 } from "lucide-react";

const info = [
    {
        icon: Clock,
        title: "Operating Hours",
        color: "#0ea5e9",
        items: [
            "Monday - Sunday: 10:00 AM - 6:00 PM",
            "Last entry at 5:00 PM",
            "Open on all public holidays"
        ]
    },
    {
        icon: ShieldCheck,
        title: "Safety Measures",
        color: "#2ecc71",
        items: [
            "Trained lifeguards on duty",
            "First aid station available",
            "CCTV surveillance 24/7",
            "Safety markings on all pools"
        ]
    },
    {
        icon: Utensils,
        title: "Food & Beverages",
        color: "#f59e0b",
        items: [
            "Pure Veg in-park restaurant",
            "Poolside snack bars available",
            "Wide range of refreshments",
            "Outside food not allowed"
        ]
    },
    {
        icon: Lock,
        title: "Lockers & Storage",
        color: "#8b5cf6",
        items: [
            "Secure lockers for valuables",
            "Refundable deposit policy",
            "Multiple sizes available",
            "Digital key access"
        ]
    },
    {
        icon: Shirt,
        title: "Dress Code",
        color: "#e91e8c",
        items: [
            "Nylon/Lycra swimwear mandatory",
            "Costumes available for rent",
            "No cotton clothes in pools",
            "Lockers for regular clothes"
        ]
    },
    {
        icon: AlertTriangle,
        title: "Park Rules",
        color: "#ef4444",
        items: [
            "Follow all ride requirements",
            "No diving in shallow areas",
            "Supervise children at all times",
            "No glass items permitted"
        ]
    }
];

export default function WaterparkInfo() {
    return (
        <section className={styles.infoSection}>
            <div className={styles.infoContainer}>
                <div className={styles.infoHeader}>
                    <div className={styles.infoPill}>📋 Plan Your Visit</div>
                    <h2>Important <span>Information</span></h2>
                    <p>Everything you need to know before your visit to ensure a safe and enjoyable experience at Jungle Resort.</p>
                </div>

                <div className={styles.infoGrid}>
                    {info.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div className={styles.infoCard} key={item.title}>
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