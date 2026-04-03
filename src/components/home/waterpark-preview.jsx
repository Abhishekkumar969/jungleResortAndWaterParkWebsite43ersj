import React from "react";
import { Link } from "react-router-dom";
import { Waves, ArrowRight, Ticket, Users, Star } from "lucide-react";
import styles from "../../styles/waterpark-preview.module.css";

const attractions = [
    { name: "Wave Pool", icon: Waves },
    { name: "Spiral Slides", icon: Star },
    { name: "Lazy River", icon: Waves },
    { name: "Kids Zone", icon: Users }
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
                            <Waves size={16} />
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
                                    <span>Kikds Below 10 Years</span>
                                    <b>Rs. 299</b>
                                </div>

                                <div>
                                    <span>Kikds Above 10 Years</span>
                                    <b>Rs. 399</b>
                                </div>

                                <div>
                                    <span>Group Of 5</span>
                                    <b>Rs. 1,600</b>
                                </div>

                                <div>
                                    <span>Group Of 10</span>
                                    <b>Rs. 3,000</b>
                                </div>

                                <div>
                                    <span>Group Of 15</span>
                                    <b>Rs. 4,200</b>
                                </div>

                                <div>
                                    <span>Group Of 20</span>
                                    <b>Rs. 5,000</b>
                                </div>
                            </div>

                        </div>

                        <div className={styles.waterparkInfo}>

                            <div>
                                <Ticket size={16} />
                                <span>Online Booking Available</span>
                            </div>

                        </div>

                        <Link to="/waterpark" className={styles.waterparkBtn}>

                            Book Waterpark Tickets

                            <ArrowRight size={18} />

                        </Link>

                    </div>

                    {/* RIGHT IMAGES */}

                    <div className={styles.waterparkImages}>

                        <div className={styles.waterparkImgLarge}>

                            <img src="/images/waterpark-main.jpg" alt="Waterpark overview" />

                        </div>

                        <div className={styles.waterparkImgSmall}>

                            <img src="/images/waterpark-wave.jpg" alt="Wave pool" />

                            <img src="/images/waterpark-slides.jpg" alt="Water slides" />

                        </div>

                        <div className={styles.waterparkDecor}></div>

                    </div>

                </div>

            </div>

        </section>
    );
}