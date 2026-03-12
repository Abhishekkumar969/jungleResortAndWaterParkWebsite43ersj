import React from "react";
import { Utensils, Car, Wifi, Camera, Music, Flower, Users, Shield } from "lucide-react";

import Navbar from "../components/navigation-temp";
import Footer from "../components/footer-temp";
import styles from "../styles/services-section.module.css";

const services = [
    {
        icon: Utensils,
        title: "Gourmet Catering",
        description: "Delicious multi-cuisine menu with veg and non-veg options prepared by expert chefs."
    },
    {
        icon: Camera,
        title: "Photography & Video",
        description: "Professional photography and cinematography to capture every precious moment."
    },
    {
        icon: Flower,
        title: "Decor & Themes",
        description: "Stunning floral arrangements and custom themed decorations for your event."
    },
    {
        icon: Music,
        title: "Entertainment",
        description: "DJ, live bands, and entertainment setups to keep the celebration going."
    },
    {
        icon: Car,
        title: "Valet Parking",
        description: "Complimentary valet parking with ample space for all your guests."
    },
    {
        icon: Wifi,
        title: "Modern Amenities",
        description: "High-speed WiFi, AC halls, and state-of-the-art audio-visual equipment."
    },
    {
        icon: Users,
        title: "Event Management",
        description: "Dedicated event coordinators to handle every detail of your celebration."
    },
    {
        icon: Shield,
        title: "Safety & Security",
        description: "24/7 security with CCTV surveillance for your peace of mind."
    }
];

export default function ServicesSection() {
    return (
        <>
            <Navbar />
            <section className={styles.servicesSection}>

                <div className="container">

                    <div className={styles.servicesHeader}>

                        <span className={styles.servicesLabel}>Our Services</span>

                        <h2 className={styles.servicesTitle}>
                            Everything You Need <span>Under One Roof</span>
                        </h2>

                        <p className={styles.servicesDesc}>
                            From catering to entertainment, we provide comprehensive services
                            to make your event truly special and hassle-free.
                        </p>

                    </div>

                    <div className={styles.servicesGrid}>

                        {services.map((service, index) => {

                            const Icon = service.icon;

                            return (
                                <div key={index} className={styles.serviceCard}>

                                    <div className={styles.serviceIcon}>
                                        <Icon size={28} />
                                    </div>

                                    <h3>{service.title}</h3>

                                    <p>{service.description}</p>

                                </div>
                            );

                        })}

                    </div>

                </div>

            </section>
            <Footer />
        </>
    );
}