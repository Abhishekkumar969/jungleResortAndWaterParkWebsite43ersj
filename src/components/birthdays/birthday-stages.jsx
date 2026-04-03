import React from "react";
import styles from "../../styles/birthday-stages.module.css";
import { useNavigate } from "react-router-dom";

const stages = [
    {
        name: "Superhero Arena",
        theme: "Action & Adventure",
        image: "/images/birthday-superhero.jpg",
        description:
            "Action-packed superhero themed stage with comic book backdrops, photo booths, and hero activities!",
        popular: true,
    },
    {
        name: "Princess Palace",
        theme: "Fairy Tale Magic",
        image: "/images/birthday-princess.jpg",
        description:
            "Magical princess themed stage with castle decorations, tiaras, and royal activities!",
        popular: true,
    },
    {
        name: "Jungle Safari",
        theme: "Wild Adventure",
        image: "/images/birthday-jungle.jpg",
        description:
            "Adventure-filled jungle themed stage with animal decorations and safari activities!",
        popular: false,
    },
    {
        name: "Underwater World",
        theme: "Ocean Adventure",
        image: "/images/waterpark-wave.jpg",
        description:
            "Dive into fun with our ocean-themed stage featuring sea creatures and marine decor!",
        popular: false,
    },
    {
        name: "Space Galaxy",
        theme: "Cosmic Fun",
        image: "/images/birthday-stage.jpg",
        description:
            "Blast off to fun with our space-themed stage featuring planets, rockets, and stars!",
        popular: false,
    },
    {
        name: "Carnival Fiesta",
        theme: "Festival Fun",
        image: "/images/birthday-stage.jpg",
        description:
            "Colorful carnival themed stage with games, prizes, and festive decorations!",
        popular: true,
    },
];

export default function BirthdayStages() {
    const navigate = useNavigate();

    return (
        <section className={styles.section} id="stages">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>Themed Stages</span>

                    <h2 className={styles.title}>
                        Choose Your <span>Party Theme</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {stages.map((stage) => (
                        <div
                            key={stage.name}
                            className={styles.card}
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                                navigate("/birthday-details", {
                                    state: { theme: stage },
                                })
                            }
                        >
                            <div className={styles.imageWrapper}>
                                <img src={stage.image} alt={stage.name} />

                                {stage.popular && (
                                    <span className={styles.popular}>Popular</span>
                                )}
                            </div>

                            <div className={styles.content}>
                                <h3>{stage.name}</h3>
                                <p className={styles.desc}>{stage.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}