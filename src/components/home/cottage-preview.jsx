import React from "react";
import { Link } from "react-router-dom";
import { Hotel, ArrowRight, Bed, Wind, Coffee, ShieldCheck } from "lucide-react";
import styles from "../../styles/waterpark-preview.module.css";
import { useTicketPrices } from "../../context/TicketPricesContext";

const cottageFeatures = [
    { name: "King Bed", icon: Bed },
    { name: "AC Room", icon: Wind },
    { name: "Room Service", icon: Coffee },
    { name: "Safety", icon: ShieldCheck }
];

const fmt = (n) => new Intl.NumberFormat("en-IN").format(n);

export default function CottagePreview() {
    const { cottagePkgs: COTTAGE_PKGS } = useTicketPrices();
    return (
        <section className={styles.waterparkSection} style={{ background: "#0a0a1c", color: "#fff" }}>

            {/* Video Background & Overlay */}
            <div className={styles.waterparkOverlay} style={{ background: "#0b0b1e5c" }} />
            <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.waterparkVideo}
                style={{ opacity: "0.5" }}
            >
                <source src="/images/resort-gate.mp4" type="video/mp4" />
            </video>

            <div className="container" style={{ position: "relative", zIndex: 3 }}>
                <div className={styles.waterparkGrid}>

                    {/* LEFT CONTENT */}
                    <div className={styles.waterparkContent}>
                        <div className={styles.waterparkBadge} style={{ background: "rgba(233, 30, 140, 0.2)", color: "#ff69b4", border: "1px solid rgba(233, 30, 140, 0.3)" }}>
                            <Hotel size={16} aria-hidden="true" />
                            Premium Stay in Patna
                        </div>

                        <h2 className={styles.waterparkTitle}>
                            Luxury <span>Cottage Stay</span>
                        </h2>

                        <div className={styles.waterparkAttractions}>
                            {cottageFeatures.map((f, i) => {
                                const Icon = f.icon;
                                return (
                                    <div key={i} className={styles.attractionCardHome} style={{ background: "rgba(255, 255, 255, 0.1)", color: "#fff", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                                        <Icon size={16} color="#e91e8c" />
                                        {f.name}
                                    </div>
                                );
                            })}
                        </div>

                        <div className={styles.waterparkPricing} style={{ background: "rgba(233, 30, 140, 0.1)", borderColor: "rgba(233, 30, 140, 0.3)" }}>
                            <h4>🏡 Available Packages</h4>
                            <div className={styles.pricingGrid}>
                                {COTTAGE_PKGS.map(pkg => (
                                    <div key={pkg.id} style={{ borderBottomColor: "rgba(255, 255, 255, 0.1)" }}>
                                        <span>{pkg.duration}</span>
                                        <b style={{ color: "#e91e8c" }}>₹{fmt(pkg.price)}</b>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.waterparkActions}>
                            <Link to="/cottage-in-patna" className={styles.waterparkBtn} style={{ background: "linear-gradient(135deg, #e91e8c, #ff6b35)", borderColor: "rgba(255, 255, 255, 0.2)" }}>
                                Book Your Stay <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT IMAGES (Only on Desktop) */}
                    <div className={styles.waterparkImages}>
                        <div className={styles.waterparkImgLarge}>
                            <img src="/images/cottage-room.webp" alt="Cottage Interior" />
                        </div>
                        <div className={styles.waterparkImgSmall}>
                            <img src="/images/cottage-exterior.webp" alt="Cottage Night View" />
                            <div style={{ position: "relative", borderRadius: "14px", overflow: "hidden", border: "2px solid rgba(255, 255, 255, 0.4)", boxShadow: "0 4px 16px rgba(0, 0, 0, 0.22)" }}>
                                <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
                                    <source src="/images/resort-gate.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className={styles.waterparkDecor} style={{ background: "rgba(233, 30, 140, 0.2)" }} />
                    </div>

                </div>
            </div>
        </section>
    );
}
