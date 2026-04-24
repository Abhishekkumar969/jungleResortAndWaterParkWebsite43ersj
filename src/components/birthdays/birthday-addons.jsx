import React from "react";
import styles from "../../styles/birthday-addons.module.css";
import { Cake, Camera, Music, Utensils, Gift, Wand2, Palette, Gamepad2 } from "lucide-react";

const addons = [
    {
        name: "Custom Cake",
        description: "Designer cakes in your chosen theme",
        price: "From ₹2,500",
        icon: Cake,
    },
    {
        name: "Photography",
        description: "Professional event photography & video",
        price: "From ₹5,000",
        icon: Camera,
    },
    {
        name: "Live Music/DJ",
        description: "Kids DJ with fun party games",
        price: "From ₹4,000",
        icon: Music,
    },
    {
        name: "Catering",
        description: "Kid-friendly menu with snacks & drinks",
        price: "From ₹250/head",
        icon: Utensils,
    },
    {
        name: "Return Gifts",
        description: "Customized gift bags for guests",
        price: "From ₹150/bag",
        icon: Gift,
    },
    {
        name: "Magic Show",
        description: "Professional magician performance",
        price: "From ₹3,500",
        icon: Wand2,
    },
    {
        name: "Face Painting",
        description: "Professional face painting artist",
        price: "From ₹2,000",
        icon: Palette,
    },
    {
        name: "Game Zone",
        description: "Bouncy castles, games & activities",
        price: "From ₹4,500",
        icon: Gamepad2,
    },
];

export default function BirthdayAddons({ selectedAddons, setSelectedAddons }) {
    // const [selectedAddons, setSelectedAddons] = useState([]);

    const toggleAddon = (addonName) => {
        setSelectedAddons((prev) =>
            prev.includes(addonName)
                ? prev.filter((item) => item !== addonName) // remove
                : [...prev, addonName] // add
        );
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>Add-Ons</span>

                    <h2 className={styles.title}>
                        Make It Extra <span>Special</span>
                        {selectedAddons.length > 0 && ` (${selectedAddons.length} selected)`}
                    </h2>

                    <p className={styles.description}>
                        Enhance your birthday party with our exciting add-on services.
                    </p>
                </div>

                <div className={styles.grid}>
                    {addons.map((addon) => {
                        const Icon = addon.icon;

                        return (
                            <div
                                key={addon.name}
                                className={`${styles.card} ${selectedAddons.includes(addon.name) ? styles.selected : ""
                                    }`}
                                onClick={() => toggleAddon(addon.name)}
                                style={{ cursor: "pointer" }}
                            >
                                {/* ✅ Selected Tag */}


                                <div className={styles.iconBox}>
                                    <Icon size={28} />
                                </div>

                                <h3>{addon.name}</h3>

                                <p>{addon.description}</p>
                                <div className={styles.priceRow}>
                                    <span>{addon.price}</span>

                                    {selectedAddons.includes(addon.name) && (
                                        <div className={styles.selectedTagTick}>✓</div>
                                    )}
                                </div>


                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}