import React from "react";
import styles from "../../styles/venue-features.module.css";
import { CheckCircle, Utensils, Camera, Music, Flower, Car, Shield, Users } from "lucide-react";

const features = [
    { icon: Utensils, title: "Premium Catering", desc: "Multi-cuisine menu with 200+ dishes" },
    { icon: Flower, title: "Custom Decor", desc: "Themed decorations as per your choice" },
    { icon: Camera, title: "Photography", desc: "Professional photo & video services" },
    { icon: Music, title: "Entertainment", desc: "DJ, live music, and performers" },
    { icon: Car, title: "Free Parking", desc: "Valet parking for all guests" },
    { icon: Shield, title: "24/7 Security", desc: "Complete safety for your event" },
    { icon: Users, title: "Event Team", desc: "Dedicated coordinators" },
    { icon: CheckCircle, title: "Customizable", desc: "Flexible packages available" },
];

export default function VenueFeatures() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <div className={styles.header}>
                    <h2 className={styles.title}>
                        What's <span>Included</span>
                    </h2>

                    <p className={styles.description}>
                        Every venue booking comes with premium amenities and services for a hassle-free celebration.
                    </p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div key={feature.title} className={styles.card}>
                                <div className={styles.iconBox}>
                                    <Icon size={28} />
                                </div>

                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}