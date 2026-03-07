import React, { useState } from "react";
import styles from "../../styles/birthday-packages.module.css";
import { Check, Sparkles, Crown, Star } from "lucide-react";

const packages = [
    {
        name: "Silver",
        price: "15,999",
        icon: Star,
        description: "Perfect for intimate birthday celebrations",
        features: [
            "Up to 30 guests",
            "2 hours venue access",
            "Basic decorations",
            "Sound system",
            "Cake table setup",
            "Photography corner",
            "Complimentary parking"
        ],
        popular: false
    },
    {
        name: "Gold",
        price: "29,999",
        icon: Sparkles,
        description: "Ideal for memorable birthday parties",
        features: [
            "Up to 60 guests",
            "4 hours venue access",
            "Premium decorations",
            "DJ with sound system",
            "Themed cake table",
            "Photo booth",
            "Waterpark access (2 hrs)",
            "Snacks & beverages",
            "Return gifts for kids"
        ],
        popular: true
    },
    {
        name: "Platinum",
        price: "49,999",
        icon: Crown,
        description: "Ultimate birthday experience",
        features: [
            "Up to 100 guests",
            "6 hours venue access",
            "Luxury decorations",
            "Live music/DJ",
            "Custom themed setup",
            "Professional photography",
            "Full day waterpark access",
            "Catering included",
            "Magic show/games",
            "Personalized invitations",
            "VIP parking"
        ],
        popular: false
    }
];

export default function BirthdayPackages() {
    const [selectedPackage, setSelectedPackage] = useState(null);

    return (
        <section className={styles.section} id="packages">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>Packages</span>

                    <h2 className={styles.title}>
                        Birthday Party <span>Packages</span>
                    </h2>

                    <p className={styles.description}>
                        Choose the perfect package for your celebration. All packages can
                        be customized to your preferences.
                    </p>
                </div>

                <div className={styles.grid}>
                    {packages.map((pkg) => {
                        const Icon = pkg.icon;

                        return (
                            <div
                                key={pkg.name}
                                className={`${styles.card} ${pkg.popular ? styles.popular : ""
                                    } ${selectedPackage === pkg.name ? styles.selected : ""}`}
                            >
                                {pkg.popular && (
                                    <div className={styles.popularBadge}>Most Popular</div>
                                )}

                                <div className={styles.cardHeader}>
                                    <div className={styles.iconBox}>
                                        <Icon size={30} />
                                    </div>

                                    <h3>{pkg.name}</h3>
                                    <p className={styles.cardDesc}>{pkg.description}</p>

                                    <div className={styles.price}>
                                        ₹{pkg.price} <span>/event</span>
                                    </div>
                                </div>

                                <div className={styles.features}>
                                    {pkg.features.map((feature, i) => (
                                        <div key={i} className={styles.feature}>
                                            <Check size={18} />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    className={pkg.popular ? styles.goldBtn : styles.primaryBtn}
                                    onClick={() => setSelectedPackage(pkg.name)}
                                >
                                    Select Package
                                </button>
                            </div>
                        );
                    })}
                </div>

                <p className={styles.note}>
                    All prices are exclusive of GST. Custom packages available on request.
                </p>
            </div>
        </section>
    );
}