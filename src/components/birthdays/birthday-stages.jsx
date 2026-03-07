import React from "react";
import styles from "../../styles/birthday-stages.module.css";
import { Users, Star } from "lucide-react";

const stages = [
    {
        name: "Superhero Arena",
        theme: "Action & Adventure",
        capacity: "50-100 Guests",
        image: "/images/birthday-superhero.jpg",
        description:
            "Action-packed superhero themed stage with comic book backdrops, photo booths, and hero activities!",
        features: ["LED Backdrop", "Hero Costume Corner", "Action Games", "Theme Music"],
        popular: true,
    },
    {
        name: "Princess Palace",
        theme: "Fairy Tale Magic",
        capacity: "50-80 Guests",
        image: "/images/birthday-princess.jpg",
        description:
            "Magical princess themed stage with castle decorations, tiaras, and royal activities!",
        features: ["Castle Backdrop", "Crown Making", "Royal Photobooth", "Magical Decor"],
        popular: true,
    },
    {
        name: "Jungle Safari",
        theme: "Wild Adventure",
        capacity: "40-80 Guests",
        image: "/images/birthday-jungle.jpg",
        description:
            "Adventure-filled jungle themed stage with animal decorations and safari activities!",
        features: ["Jungle Backdrop", "Animal Props", "Safari Games", "Nature Sounds"],
        popular: false,
    },
    {
        name: "Underwater World",
        theme: "Ocean Adventure",
        capacity: "50-100 Guests",
        image: "/images/waterpark-wave.jpg",
        description:
            "Dive into fun with our ocean-themed stage featuring sea creatures and marine decor!",
        features: ["Ocean Backdrop", "Fish Decorations", "Bubble Machines", "Sea Games"],
        popular: false,
    },
    {
        name: "Space Galaxy",
        theme: "Cosmic Fun",
        capacity: "40-70 Guests",
        image: "/images/birthday-stage.jpg",
        description:
            "Blast off to fun with our space-themed stage featuring planets, rockets, and stars!",
        features: ["Galaxy Backdrop", "LED Stars", "Astronaut Props", "Space Music"],
        popular: false,
    },
    {
        name: "Carnival Fiesta",
        theme: "Festival Fun",
        capacity: "60-120 Guests",
        image: "/images/birthday-stage.jpg",
        description:
            "Colorful carnival themed stage with games, prizes, and festive decorations!",
        features: ["Carnival Backdrop", "Game Stalls", "Prize Corner", "Fun Activities"],
        popular: true,
    },
];

export default function BirthdayStages() {
    return (
        <section className={styles.section} id="stages">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>Themed Stages</span>

                    <h2 className={styles.title}>
                        Choose Your <span>Party Theme</span>
                    </h2>

                    <p className={styles.description}>
                        Multiple themed birthday stages at the waterpark area, each designed
                        to create magical memories!
                    </p>
                </div>

                <div className={styles.grid}>
                    {stages.map((stage) => (
                        <div key={stage.name} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={stage.image} alt={stage.name} />

                                {stage.popular && (
                                    <span className={styles.popular}>Popular</span>
                                )}

                                <span className={styles.theme}>{stage.theme}</span>
                            </div>

                            <div className={styles.content}>
                                <h3>{stage.name}</h3>
                                <p className={styles.desc}>{stage.description}</p>

                                <div className={styles.capacity}>
                                    <Users size={16} /> {stage.capacity}
                                </div>

                                <div className={styles.features}>
                                    {stage.features.map((feature) => (
                                        <span key={feature}>
                                            <Star size={12} /> {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}