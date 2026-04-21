import React from "react";
import { Link } from "react-router-dom";
import { WavesLadder, ArrowRight, Ticket, PlaneLanding, CloudRainWind, Speaker } from "lucide-react";
import styles from "../../styles/waterpark-preview.module.css";

const attractions = [
    { name: "Wave Pool", icon: WavesLadder },
    { name: "Rain Dance", icon: CloudRainWind },
    { name: "DJ", icon: Speaker },
    { name: "Water Slides", icon: PlaneLanding }
];

export default function WaterparkPreview() {
    return (
        <section className={styles.waterparkSection}>

            {/* Background Img */}
            <img
                src="/videos/waterWave.webp"
                alt=""
                aria-hidden="true"
                className={styles.waterparkVideo}
                loading="lazy"
                width="1920"
                height="1080"
            />

            {/* Overlay */}
            <div className={styles.waterparkOverlay} aria-hidden="true"></div>
            <div className="container">

                <div className={styles.waterparkGrid}>

                    {/* LEFT CONTENT */}
                    <div className={styles.waterparkContent}>

                        <div className={styles.waterparkBadge}>
                            <WavesLadder size={16} aria-hidden="true" />
                            <span>Water Park Adventures</span>
                        </div>

                        <h2 className={styles.waterparkTitle}>
                            Splash Into <span>Endless Fun</span>
                        </h2>

                        <div className={styles.waterparkAttractions}>
                            {attractions.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className={styles.attractionCardHome}>
                                        <Icon size={18} aria-hidden="true" />
                                        <span>{item.name}</span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className={styles.waterparkPricing}>
                            <h3>Quick Pricing</h3>
                            <div className={styles.pricingGrid}>
                                <div><span>Kids Below 10 Years</span><b>₹299</b></div>
                                <div><span>Above 10 Years</span><b>₹399</b></div>
                                <div><span>Group Of 5</span><b>₹1,849</b></div>
                                <div><span>Group Of 10</span><b>₹3,250</b></div>
                                <div><span>Group Of 15</span><b>₹4,500</b></div>
                                <div><span>Group Of 20</span><b>₹5,500</b></div>
                            </div>
                        </div>

                        <div className={styles.waterparkInfo}>
                            <div>
                                <Ticket size={16} aria-hidden="true" />
                                <span>Online Booking Available</span>
                            </div>
                        </div>

                        <div className={styles.waterparkActions}>
                            <Link to="/waterpark-in-patna" className={styles.waterparkBtn}>
                                Book Water Park Tickets
                                <ArrowRight size={18} aria-hidden="true" />
                            </Link>

                        </div>

                    </div>

                    {/* RIGHT IMAGES */}
                    <div className={styles.waterparkImages}>
                        <div className={styles.waterparkImgLarge}>
                            <img src="/WaterParkAds/6.webp" alt="Waterpark overview at Jungle Resort Patna" loading="lazy" width="600" height="400" />
                        </div>
                        <div className={styles.waterparkImgSmall}>
                            <img src="/WaterParkAds/1.webp" alt="Wave pool at Jungle Resort Waterpark" loading="lazy" width="300" height="200" />
                            <img src="/WaterParkAds/2.webp" alt="Water slides at Jungle Resort" loading="lazy" width="300" height="200" />
                        </div>
                        <div className={styles.waterparkDecor} aria-hidden="true"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}