import React from "react";
import { Link } from "react-router-dom";
import { Waves, ArrowRight, Ticket, Speaker, Music, Zap, ShieldCheck } from "lucide-react";
import styles from "../../styles/waterpark-preview.module.css";
import { useTicketPrices } from "../../context/TicketPricesContext";

const attractions = [
    { name: "Wave Pool", icon: Waves, color: "#0ea5e9" },
    { name: "Rain Dance", icon: Music, color: "#e91e8c" },
    { name: "DJ Night", icon: Speaker, color: "#f59e0b" },
    { name: "Slides", icon: Zap, color: "#2ecc71" }
];

const fmt = (n) => new Intl.NumberFormat("en-IN").format(n);

export default function WaterparkPreview() {
    const { tickets: WATERPARK_TICKETS } = useTicketPrices();
    return (
        <section className={styles.waterparkSection} style={{ background: "#06102b", color: "#fff" }}>

            {/* Background Image & Overlay */}
            <div className={styles.waterparkOverlay} style={{ background: "#04102b43" }} />
            <img
                src="/videos/waterWave.webp"
                alt="Waterpark Background"
                className={styles.waterparkVideo}
                style={{ opacity: "0.5" }}
            />

            <div className="container" style={{ position: "relative", zIndex: 3 }}>
                <div className={styles.waterparkGrid}>

                    {/* LEFT CONTENT */}
                    <div className={styles.waterparkContent}>
                        <div className={styles.waterparkBadge} style={{ background: "rgba(14, 165, 233, 0.2)", color: "#38bdf8", border: "1px solid rgba(14, 165, 233, 0.3)" }}>
                            <Waves size={16} aria-hidden="true" />
                            Summer Adventures 2026
                        </div>

                        <h2 className={styles.waterparkTitle}>
                            Splash Into <span>Ultimate Fun</span>
                        </h2>

                        <div className={styles.waterparkAttractions}>
                            {attractions.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className={styles.attractionCardHome} style={{ background: "rgba(255, 255, 255, 0.1)", color: "#fff", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                                        <Icon size={18} color={item.color} />
                                        <span>{item.name}</span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className={styles.waterparkPricing} style={{ background: "rgba(14, 165, 233, 0.1)", borderColor: "rgba(14, 165, 233, 0.3)" }}>
                            <h4>🎟️ Entry Ticket Prices</h4>
                            <div className={styles.pricingGrid}>
                                {WATERPARK_TICKETS.slice(0, 4).map(ticket => (
                                    <div key={ticket.id} style={{ borderBottomColor: "rgba(255, 255, 255, 0.1)" }}>
                                        <span>{ticket.name}</span>
                                        <b style={{ color: "#38bdf8" }}>{ticket.price === 0 ? "FREE" : `₹${fmt(ticket.price)}`}</b>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.waterparkInfo}>
                            <div style={{ background: "rgba(46, 204, 113, 0.15)", color: "#2ecc71", border: "1px solid rgba(46, 204, 113, 0.2)" }}>
                                <ShieldCheck size={16} />
                                <span>100% Safe & Hygienic</span>
                            </div>
                            <div style={{ background: "rgba(255, 255, 255, 0.1)", color: "#fff" }}>
                                <Ticket size={16} />
                                <span>Instant E-Tickets</span>
                            </div>
                        </div>

                        <div className={styles.waterparkActions}>
                            <Link to="/waterpark-in-patna" className={styles.waterparkBtn} style={{ background: "linear-gradient(135deg, #0ea5e9, #0284c7)", borderColor: "rgba(255, 255, 255, 0.2)" }}>
                                Get Tickets Now <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT IMAGES */}
                    <div className={styles.waterparkImages}>
                        <div className={styles.waterparkImgLarge}>
                            <img src="/WaterParkAds/6.webp" alt="Waterpark overview" />
                        </div>
                        <div className={styles.waterparkImgSmall}>
                            <img src="/WaterParkAds/1.webp" alt="Wave pool" />
                            <img src="/WaterParkAds/2.webp" alt="Water slides" />
                        </div>
                        <div className={styles.waterparkDecor} style={{ background: "rgba(14, 165, 233, 0.2)" }} />
                    </div>

                </div>
            </div>
        </section>
    );
}