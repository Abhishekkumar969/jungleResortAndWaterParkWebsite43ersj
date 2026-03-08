import React from "react";
import { Link } from "react-router-dom";
import { Waves, ArrowRight, Ticket, Clock, Users, Star } from "lucide-react";
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

                        <p className={styles.waterparkDesc}>
                            Dive into excitement at our world-class waterpark featuring thrilling slides,
                            a massive wave pool, relaxing lazy river, and dedicated kids zones.
                        </p>

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
                                    <span>Adults</span>
                                    <b>Rs. 699</b>
                                </div>

                                <div>
                                    <span>Children</span>
                                    <b>Rs. 499</b>
                                </div>

                                <div>
                                    <span>Family Pack</span>
                                    <b>Rs. 2199</b>
                                </div>

                                <div>
                                    <span>VIP Access</span>
                                    <b>Rs. 1499</b>
                                </div>

                            </div>

                        </div>

                        <div className={styles.waterparkInfo}>

                            <div>
                                <Clock size={16} />
                                <span>Open 10 AM - 7 PM</span>
                            </div>

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