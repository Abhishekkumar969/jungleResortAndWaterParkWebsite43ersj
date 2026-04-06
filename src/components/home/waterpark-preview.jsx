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

            {/* Background Video */}
            <video
                className={styles.waterparkVideo}
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/videos/WaveVideo.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className={styles.waterparkOverlay}></div>
            <div className="container">

                <div className={styles.waterparkGrid}>

                    {/* LEFT CONTENT */}
                    <div className={styles.waterparkContent}>

                        <div className={styles.waterparkBadge}>
                            <WavesLadder size={16} />
                            <span>Waterpark Adventures</span>
                        </div>

                        <h2 className={styles.waterparkTitle}>
                            Splash Into <span>Endless Fun</span>
                        </h2>

                        <div className={styles.waterparkAttractions}>

                            {attractions.map((item, i) => {

                                const Icon = item.icon;

                                return (
                                    <div key={i} className={styles.attractionCardHome}>

                                        <Icon size={18} />

                                        <span>{item.name}</span>

                                    </div>
                                );

                            })}

                        </div>

                        <div className={styles.waterparkPricing}>

                            <h4>Quick Pricing</h4>

                            <div className={styles.pricingGrid}>

                                <div>
                                    <span>Kids Below 10 Years</span>
                                    <b>₹299</b>
                                </div>

                                <div>
                                    <span>Above 10 Years</span>
                                    <b>₹399</b>
                                </div>

                                <div>
                                    <span>Group Of 5</span>
                                    <b>₹1,849</b>
                                </div>

                                <div>
                                    <span>Group Of 10</span>
                                    <b>₹3,250</b>
                                </div>

                                <div>
                                    <span>Group Of 15</span>
                                    <b>₹4,500</b>
                                </div>

                                <div>
                                    <span>Group Of 20</span>
                                    <b>₹5,500</b>
                                </div>
                            </div>

                        </div>

                        <div className={styles.waterparkInfo}>

                            <div>
                                <Ticket size={16} />
                                <span>Online Booking Available</span>
                            </div>

                        </div>

                        <Link to="/waterpark-in-patna" className={styles.waterparkBtn}>
                            Book Waterpark Tickets
                            <ArrowRight size={18} />
                        </Link>

                    </div>

                    {/* RIGHT IMAGES */}
                    <div className={styles.waterparkImages}>
                        <div className={styles.waterparkImgLarge}>
                            <img src="/WaterParkAds/6.jpeg" alt="Waterpark overview" />
                        </div>
                        <div className={styles.waterparkImgSmall}>
                            <img src="/WaterParkAds/1.jpeg" alt="Wave pool" />
                            <img src="/WaterParkAds/2.jpeg" alt="Water slides" />
                        </div>
                        <div className={styles.waterparkDecor}></div>
                    </div>

                </div>
            </div>
        </section>
    );
}