import React, { useState, useEffect, useRef } from "react";
import { Check, Star, Users, Baby, Crown, Sparkles, Waves, Music, Zap } from "lucide-react";
import styles from "../../styles/tickets.module.css";
import cottageStyles from "../../styles/cottage-booking.module.css";
import TicketSearch from "../TicketSearch";

/* ─── Waterpark Tickets ─── */
const tickets = [
    { id: "kidsbelow10years", name: "Kids (Below 10 Yrs)", icon: Baby, price: 299, originalPrice: 499, features: ["Wave Pool", "Rain Dance", "DJ", "Water Slides"] },
    { id: "above10years", name: "Adult (Above 10 Yrs)", icon: Users, price: 399, originalPrice: 549, features: ["Wave Pool", "Rain Dance", "DJ", "Water Slides"] },
    { id: "groupof5", name: "Group of 5", icon: Star, price: 1849, originalPrice: 2745, features: ["Wave Pool", "Rain Dance", "DJ", "Water Slides"] },
    { id: "groupof10", name: "Group of 10", icon: Crown, price: 3250, originalPrice: 5490, features: ["Wave Pool", "Rain Dance", "DJ", "Water Slides"], popular: true },
    { id: "groupof15", name: "Group of 15", icon: Sparkles, price: 4500, originalPrice: 8235, features: ["Wave Pool", "Rain Dance", "DJ", "Water Slides"] },
    { id: "groupof20", name: "Group of 20", icon: Sparkles, price: 5500, originalPrice: 10980, features: ["Wave Pool", "Rain Dance", "DJ", "Water Slides"] },
];

/* ─── Cottage Packages ─── */
const COTTAGE_PKGS = [
    {
        id: "cottage4hrs",
        duration: "4 Hours",
        price: 1999,
        emoji: "⏰",
        highlights: ["Private AC Cottage Room", "Peaceful Jungle Ambiance", "Ideal for Day Rest"],
        waterIncluded: false,
    },
    {
        id: "cottage10hrs",
        duration: "10 Hours",
        price: 2499,
        emoji: "🌅",
        popular: true,
        highlights: ["Private AC Cottage Room", "Peaceful Jungle Ambiance", "Extended Day Outing"],
        waterIncluded: false,
    },
    {
        id: "cottage1day",
        duration: "1 Full Day",
        price: 3999,
        emoji: "🏆",
        highlights: ["Private AC Cottage Room", "✅ Wave Pool", "✅ Rain Dance", "✅ Water Slides"],
        waterIncluded: true,
    },
];

const fmt = (n) => new Intl.NumberFormat("en-IN").format(n);
const savings = (orig, price) => Math.round(((orig - price) / orig) * 100);

export default function TicketPricing() {
    const [selectedTickets, setSelectedTickets] = useState({});
    const [selectedCottage, setSelectedCottage] = useState(null);
    const [cottageDays, setCottageDays] = useState(1);
    const [cottageRooms, setCottageRooms] = useState(1);
    const TOTAL_ROOMS = 5;

    const initialized = useRef(false);

    /* ── Load & sync from localStorage ── */
    useEffect(() => {
        const syncFromCart = () => {
            const stored = JSON.parse(localStorage.getItem("cart")) || {};
            setSelectedTickets(stored.items || {});
            if (stored.cottage) {
                setSelectedCottage(stored.cottage.id);
                setCottageDays(stored.cottage.days || 1);
            } else {
                setSelectedCottage(null);
            }
        };

        syncFromCart();
        initialized.current = true;

        const onCartUpdated = (e) => {
            if (e?.detail?.source === "ticketQty") return;
            const stored = JSON.parse(localStorage.getItem("cart")) || {};
            if (stored.cottage) {
                setSelectedCottage(stored.cottage.id);
                setCottageDays(stored.cottage.days || 1);
                setCottageRooms(stored.cottage.rooms || 1);
            } else {
                setSelectedCottage(null);
                setCottageDays(1);
                setCottageRooms(1);
            }
            if (!stored.items || Object.keys(stored.items).length === 0) {
                setSelectedTickets({});
            }
        };

        window.addEventListener("cartUpdated", onCartUpdated);
        return () => window.removeEventListener("cartUpdated", onCartUpdated);
    }, []);

    /* ── Write ticket changes to localStorage ── */
    useEffect(() => {
        if (!initialized.current) return;
        const stored = JSON.parse(localStorage.getItem("cart")) || {};
        localStorage.setItem("cart", JSON.stringify({ ...stored, items: selectedTickets }));
        window.dispatchEvent(new CustomEvent("cartUpdated", { detail: { source: "ticketQty" } }));
    }, [selectedTickets]);

    /* ── Ticket quantity ── */
    const updateQuantity = (id, delta) => {
        setSelectedTickets(prev => {
            const newQty = Math.max(0, (prev[id] || 0) + delta);
            if (newQty === 0) { const u = { ...prev }; delete u[id]; return u; }
            return { ...prev, [id]: newQty };
        });
    };

    /* ── Cottage selection ── */
    const handleCottageClick = (id) => {
        const newId = selectedCottage === id ? null : id;
        setSelectedCottage(newId);
        if (!newId) setCottageRooms(1);
        const stored = JSON.parse(localStorage.getItem("cart")) || {};
        if (!newId) {
            delete stored.cottage;
        } else {
            const pkg = COTTAGE_PKGS.find(p => p.id === id);
            const days = id === "cottage1day" ? cottageDays : 1;
            const rooms = cottageRooms;
            stored.cottage = {
                id,
                duration: pkg.duration,
                basePrice: pkg.price,
                days,
                rooms,
                addons: {},
                addonTotal: 0,
                total: pkg.price * days * rooms,
            };
        }
        localStorage.setItem("cart", JSON.stringify(stored));
        window.dispatchEvent(new Event("cartUpdated"));
    };

    const updateCottageRooms = (delta) => {
        const newRooms = Math.min(TOTAL_ROOMS, Math.max(1, cottageRooms + delta));
        setCottageRooms(newRooms);
        if (selectedCottage) {
            const stored = JSON.parse(localStorage.getItem("cart")) || {};
            const pkg = COTTAGE_PKGS.find(p => p.id === selectedCottage);
            if (stored.cottage) {
                stored.cottage.rooms = newRooms;
                stored.cottage.total = pkg.price * (stored.cottage.days || 1) * newRooms;
            }
            localStorage.setItem("cart", JSON.stringify(stored));
            window.dispatchEvent(new Event("cartUpdated"));
        }
    };

    const updateCottageDays = (delta) => {
        const newDays = Math.max(1, cottageDays + delta);
        setCottageDays(newDays);
        if (selectedCottage) {
            const stored = JSON.parse(localStorage.getItem("cart")) || {};
            const pkg = COTTAGE_PKGS.find(p => p.id === selectedCottage);
            if (stored.cottage) {
                stored.cottage.days = newDays;
                stored.cottage.total = pkg.price * newDays * cottageRooms;
            }
            localStorage.setItem("cart", JSON.stringify(stored));
            window.dispatchEvent(new Event("cartUpdated"));
        }
    };

    return (
        <>
            {/* ═══════════════════════════════════════════
                WATERPARK TICKETS SECTION
            ═══════════════════════════════════════════ */}
            <section className={styles.ticketsSection}>

                {/* Hero */}
                <div className={styles.heroWrap}>
                    <div className={styles.heroWrapOverlay} />
                    <div className={styles.heroWrapContent}>
                        <span className={styles.heroWrapPill}>🌊 Jungle Resort Waterpark, Patna</span>
                        <h1>Waterpark Tickets <span>&amp;</span> Cottage Rooms</h1>
                        <p>Book tickets, add a cottage — all in one place</p>
                        <div className={styles.heroBadges}>
                            <span className={styles.heroBadge}><Waves size={13} /> Wave Pool</span>
                            <span className={styles.heroBadge}><Zap size={13} /> Rain Dance</span>
                            <span className={styles.heroBadge}><Music size={13} /> DJ Night</span>
                            <span className={styles.heroBadge}>🏡 Cottages</span>
                        </div>
                    </div>
                </div>

                <div className={styles.ticketsContainer}>
                    <div className={styles.ticketsHeader}>
                        <h2>Select Your <span>WaterPark Tickets</span></h2>
                        <p>Individuals, groups &amp; families — pick the best deal</p>
                        <div className={styles.searchWrap} data-booking-form="true"><TicketSearch /></div>
                    </div>

                    <div className={styles.ticketsGrid}>
                        {tickets.map(ticket => {
                            const Icon = ticket.icon;
                            const qty = selectedTickets[ticket.id] || 0;
                            const save = savings(ticket.originalPrice, ticket.price);
                            return (
                                <div
                                    key={ticket.id}
                                    className={`${styles.ticketCard} ${ticket.popular ? styles.popular : ""}`}
                                >
                                    {ticket.popular && <div className={styles.badge}>Best Value</div>}
                                    <div className={styles.ticketTop}>
                                        <Icon size={22} color="#0ea5e9" aria-hidden="true" />
                                        <h3>{ticket.name}</h3>
                                    </div>
                                    <div className={styles.priceBox}>
                                        <span className={styles.old}>₹{ticket.originalPrice}</span>
                                        <span className={styles.price}>₹{ticket.price}</span>
                                        <span className={styles.savingPill}>{save}% off</span>
                                    </div>
                                    <ul className={styles.features}>
                                        {ticket.features.map(f => (
                                            <li key={f}><Check size={13} color="#0ea5e9" aria-hidden="true" /> {f}</li>
                                        ))}
                                    </ul>
                                    <div className={styles.qtyBox}>
                                        <button onClick={() => updateQuantity(ticket.id, -1)} disabled={qty === 0}>−</button>
                                        <span>{qty}</span>
                                        <button onClick={() => updateQuantity(ticket.id, 1)}>+</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                COTTAGE ROOMS SECTION (OYO Style)
            ═══════════════════════════════════════════ */}
            <section className={cottageStyles.packageSection} style={{ background: "#f5f6fa", paddingTop: "0" }}>
                <div className={cottageStyles.sectionWrap}>
                    {/* Section header */}
                    <div className={cottageStyles.sectionHead} style={{ paddingTop: "48px" }}>
                        <h2>Book a Private <span>Cottage Room</span></h2>
                        <p>AC rooms · Jungle ambiance · 5 exclusive cottages · Food charges extra</p>
                    </div>

                    {/* OYO-Style Package Cards */}
                    <div className={cottageStyles.packageGrid}>
                        {COTTAGE_PKGS.map(pkg => {
                            const isSelected = selectedCottage === pkg.id;
                            return (
                                <div
                                    key={pkg.id}
                                    className={`${cottageStyles.pkgCard} ${isSelected ? cottageStyles.pkgSelected : ""} ${pkg.popular ? cottageStyles.pkgPopular : ""}`}
                                    onClick={() => handleCottageClick(pkg.id)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => e.key === "Enter" && handleCottageClick(pkg.id)}
                                    aria-label={`Select ${pkg.duration} cottage package`}
                                >
                                    {pkg.popular && <div className={cottageStyles.pkgBadge}>🔥 Most Popular</div>}
                                    {pkg.waterIncluded && <div className={cottageStyles.pkgWaterBadge}>🌊 Waterpark Included</div>}

                                    <div className={cottageStyles.pkgDuration}>
                                        {pkg.emoji} {pkg.duration}
                                    </div>
                                    <div className={cottageStyles.pkgPrice}>
                                        <span className={cottageStyles.pkgRs}>₹</span>{fmt(pkg.price)}
                                    </div>
                                    <div className={cottageStyles.pkgPerLabel}>per cottage / per visit</div>

                                    <ul className={cottageStyles.pkgHighlights}>
                                        {pkg.highlights.map((h, i) => <li key={i}>{h}</li>)}
                                    </ul>

                                    <div className={cottageStyles.pkgNote}>⚠️ Food Charges Extra</div>

                                    {/* Days stepper — only for 1 Full Day when selected */}
                                    {pkg.id === "cottage1day" && isSelected && (
                                        <div
                                            className={cottageStyles.daysStepper}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span className={cottageStyles.daysLabel}>No. of Days</span>
                                            <div className={cottageStyles.daysControl}>
                                                <button
                                                    className={cottageStyles.daysBtn}
                                                    onClick={() => updateCottageDays(-1)}
                                                    aria-label="Decrease days"
                                                >−</button>
                                                <span className={cottageStyles.daysCount}>{cottageDays}</span>
                                                <button
                                                    className={cottageStyles.daysBtn}
                                                    onClick={() => updateCottageDays(1)}
                                                    aria-label="Increase days"
                                                >+</button>
                                            </div>
                                            <span className={cottageStyles.daysTotal}>
                                                ₹{fmt(pkg.price * cottageDays)} total
                                            </span>
                                        </div>
                                    )}

                                    {/* No. of Rooms stepper — shows when card is selected */}
                                    {isSelected && (
                                        <div
                                            className={cottageStyles.daysStepper}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span className={cottageStyles.daysLabel}>No. of Rooms</span>
                                            <div className={cottageStyles.daysControl}>
                                                <button
                                                    className={cottageStyles.daysBtn}
                                                    onClick={() => updateCottageRooms(-1)}
                                                    disabled={cottageRooms <= 1}
                                                    aria-label="Decrease rooms"
                                                >−</button>
                                                <span className={cottageStyles.daysCount}>{cottageRooms}</span>
                                                <button
                                                    className={cottageStyles.daysBtn}
                                                    onClick={() => updateCottageRooms(1)}
                                                    disabled={cottageRooms >= TOTAL_ROOMS}
                                                    aria-label="Increase rooms"
                                                >+</button>
                                            </div>
                                            <span className={cottageStyles.daysTotal}>
                                                Max {TOTAL_ROOMS} rooms available
                                            </span>
                                        </div>
                                    )}

                                    <div className={`${cottageStyles.pkgSelectBtn} ${isSelected ? cottageStyles.pkgSelectBtnActive : ""}`}>
                                        {isSelected ? "✓ Selected" : "Select Package"}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
