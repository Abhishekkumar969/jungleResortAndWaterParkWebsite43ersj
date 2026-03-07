import React from "react";
import styles from "../../styles/waterparkinfo.module.css";
import { Clock, ShieldCheck, Utensils, Lock, Shirt, AlertTriangle } from "lucide-react";

const info = [
    {
        icon: Clock,
        title: "Operating Hours",
        items: [
            "Monday - Sunday: 10:00 AM - 7:00 PM",
            "Last entry at 5:00 PM",
            "Open all public holidays"
        ]
    },
    {
        icon: ShieldCheck,
        title: "Safety Measures",
        items: [
            "Trained lifeguards on duty",
            "First aid station available",
            "Depth markings everywhere",
            "CCTV surveillance"
        ]
    },
    {
        icon: Utensils,
        title: "Food & Beverages",
        items: [
            "In-park restaurant",
            "Poolside snack bars",
            "Veg & Non-veg options",
            "Outside food not allowed"
        ]
    },
    {
        icon: Lock,
        title: "Lockers & Storage",
        items: [
            "Secure lockers available",
            "Rs. 100 deposit (refundable)",
            "Large size: Rs. 50 extra",
            "Keep valuables safe"
        ]
    },
    {
        icon: Shirt,
        title: "Dress Code",
        items: [
            "Swimwear mandatory for pools",
            "Costumes available for rent",
            "No jeans/regular clothes",
            "Water shoes recommended"
        ]
    },
    {
        icon: AlertTriangle,
        title: "Rules & Guidelines",
        items: [
            "Follow all ride requirements",
            "No diving in shallow areas",
            "Supervise children always",
            "No glass items allowed"
        ]
    }
];

export default function WaterparkInfo() {
    return (
        <section className={styles.infoSection}>

            <div className={styles.infoContainer}>

                <div className={styles.infoHeader}>
                    <h2>
                        Important <span>Information</span>
                    </h2>

                    <p>
                        Everything you need to know before your visit to ensure a safe and enjoyable experience.
                    </p>
                </div>

                <div className={styles.infoGrid}>
                    {info.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div className={styles.infoCard} key={item.title}>

                                <div className={styles.infoCardHeader}>

                                    <div className={styles.iconBox}>
                                        <Icon size={20} />
                                    </div>

                                    <h3>{item.title}</h3>

                                </div>

                                <ul>
                                    {item.items.map((text) => (
                                        <li key={text}>
                                            <span className={styles.dot}></span>
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