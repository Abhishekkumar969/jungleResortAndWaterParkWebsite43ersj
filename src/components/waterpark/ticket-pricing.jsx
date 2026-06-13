import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Check, Star, Users, Baby, Crown, Sparkles, Waves, Music, MapPin, Clock, ShieldCheck, Ticket, Calendar, Utensils, Droplets } from "lucide-react";
import styles from "../../styles/tickets.module.css";
import cottageStyles from "../../styles/cottage-booking.module.css";
import TicketSearch from "../TicketSearch";

/* ─── Waterpark Tickets ─── */
import { useTicketPrices } from "../../context/TicketPricesContext";
import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const HIGHLIGHTS = [
    { title: "Gigantic Wave Pool", icon: Waves, color: "#0ea5e9", desc: "Experience ocean-like waves in Patna" },
    { title: "Rain Dance & DJ", icon: Music, color: "#e91e8c", desc: "Groove to the latest hits under the rain" },
    { title: "Thrilling Slides", icon: Droplets, color: "#38bdf8", desc: "Adrenaline pumping water slides for all ages" },
    { title: "Pure Veg Food", icon: Utensils, color: "#f59e0b", desc: "Delicious & hygienic snacks and meals" },
];

const fmt = (n) => new Intl.NumberFormat("en-IN").format(n);
const savings = (orig, price) => Math.round(((orig - price) / orig) * 100);

export default function TicketPricing() {
    const { tickets, cottagePkgs } = useTicketPrices();

    const ticketsWithIcons = tickets.map(t => {
        const iconMap = {
            kidsbelow10years: Baby,
            above5years: Users,
            above15years: Users,
            above10years: Users,
            groupof5: Star,
            groupof10: Crown,
            groupof15: Sparkles,
            groupof20: Sparkles
        };
        return { ...t, icon: iconMap[t.id] || Ticket };
    });

    const [selectedTickets, setSelectedTickets] = useState(() => {
        const stored = JSON.parse(localStorage.getItem("cart")) || {};
        return stored.items || {};
    });
    const [selectedCottage, setSelectedCottage] = useState(() => {
        const stored = JSON.parse(localStorage.getItem("cart")) || {};
        return stored.cottage?.id || null;
    });
    const [cottageDays, setCottageDays] = useState(() => {
        const stored = JSON.parse(localStorage.getItem("cart")) || {};
        return stored.cottage?.days || 1;
    });
    const [cottageRooms, setCottageRooms] = useState(() => {
        const stored = JSON.parse(localStorage.getItem("cart")) || {};
        return stored.cottage?.rooms || 1;
    });
    const TOTAL_ROOMS = 5;

    const getTodayIST = () => {
        return new Intl.DateTimeFormat("en-CA", {
            timeZone: "Asia/Kolkata",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }).format(new Date());
    };

    const [cottageDate, setCottageDate] = useState(() => {
        const stored = JSON.parse(localStorage.getItem("cart")) || {};
        return stored.cottage?.date || getTodayIST();
    });
    const [availableRooms, setAvailableRooms] = useState(TOTAL_ROOMS);
    const [isCheckingDate, setIsCheckingDate] = useState(false);

    const initialized = useRef(false);

    /* ── Check Availability ── */
    useEffect(() => {
        if (!cottageDate) {
            setAvailableRooms(TOTAL_ROOMS);
            return;
        }
        const checkAvailability = async () => {
            setIsCheckingDate(true);
            try {
                const [y, m, d] = cottageDate.split("-");
                // Create date in IST to get correct month
                const dateObj = new Date(`${y}-${m}-${d}T00:00:00+05:30`);
                const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                const monthYear = `${monthNames[dateObj.getMonth()]}${dateObj.getFullYear()}`;

                let booked = 0;
                const bookedIds = new Set();
                const targetDate = cottageDate; // YYYY-MM-DD

                const collections = ["CottageBookings", "WaterPark"];
                for (const col of collections) {
                    try {
                        const snap = await getDoc(doc(db, col, monthYear));
                        if (snap.exists()) {
                            const data = snap.data();
                            for (const [bid, booking] of Object.entries(data)) {
                                if (bookedIds.has(bid)) continue;

                                // Normalize booking date comparison
                                const bDate = booking.visitDate || "";
                                const isPaid = booking.paymentStatus === "paid";

                                if (isPaid && bDate === targetDate) {
                                    // Handle both structure types
                                    const roomCount = booking.cottagePackage?.rooms || booking.cottage?.rooms || 0;
                                    if (roomCount > 0) {
                                        booked += Number(roomCount);
                                        bookedIds.add(bid);
                                    }
                                }
                            }
                        }
                    } catch (err) {
                        console.error(`Error checking ${col}:`, err);
                    }
                }
                const avail = Math.max(0, TOTAL_ROOMS - booked);
                setAvailableRooms(avail);
                setCottageRooms(prev => {
                    if (prev > avail) return Math.max(1, avail);
                    return prev;
                });
            } catch (e) {
                console.error("Failed to fetch availability", e);
            } finally {
                setIsCheckingDate(false);
            }
        };
        checkAvailability();
    }, [cottageDate]);

    /* ── Sync from localStorage on external updates ── */
    useEffect(() => {
        initialized.current = true;
        const onCartUpdated = (e) => {
            if (e?.detail?.source === "ticketQty") return;
            const stored = JSON.parse(localStorage.getItem("cart")) || {};
            if (stored.cottage) {
                setSelectedCottage(stored.cottage.id);
                setCottageDays(stored.cottage.days || 1);
                setCottageRooms(stored.cottage.rooms || 1);
                setCottageDate(stored.cottage.date || "");
            } else {
                setSelectedCottage(null);
                setCottageDays(1);
                setCottageRooms(1);
                setCottageDate("");
            }
            if (stored.items) {
                setSelectedTickets(stored.items);
            } else {
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
            const pkg = cottagePkgs.find(p => p.id === id);
            const days = id === "cottage1day" ? cottageDays : 1;
            const rooms = cottageRooms;
            stored.cottage = {
                id,
                duration: pkg.duration,
                basePrice: pkg.price,
                days,
                rooms,
                date: cottageDate,
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
            const pkg = cottagePkgs.find(p => p.id === selectedCottage);
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
            const pkg = cottagePkgs.find(p => p.id === selectedCottage);
            if (stored.cottage) {
                stored.cottage.days = newDays;
                stored.cottage.total = pkg.price * newDays * cottageRooms;
            }
            localStorage.setItem("cart", JSON.stringify(stored));
            window.dispatchEvent(new Event("cartUpdated"));
        }
    };

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setCottageDate(newDate);
        if (selectedCottage) {
            const stored = JSON.parse(localStorage.getItem("cart")) || {};
            if (stored.cottage) {
                stored.cottage.date = newDate;
            }
            localStorage.setItem("cart", JSON.stringify(stored));
            window.dispatchEvent(new Event("cartUpdated"));
        }
    };


    return (
        <div className={styles.pageWrap}>

            {/* ════════════ HERO ════════════ */}
            <section className={styles.heroWrap}>
                <div className={styles.heroWrapOverlay} />
                <div className={styles.heroWrapContent}>
                    <div className={styles.heroBadgeRow}>
                        <span className={styles.heroWrapPill}><MapPin size={12} /> Patna, Bihar</span>
                        <span className={styles.heroWrapPill}><Clock size={12} /> 10 AM - 6 PM</span>
                    </div>
                    <h1>Unforgettable <span>Water Park</span> Fun</h1>
                    <p>Escape the heat and dive into a world of excitement. Patna's largest wave pool and world-class water slides await your arrival.</p>

                    <div className={styles.heroBadges}>
                        <span className={styles.heroBadge}><ShieldCheck size={14} color="#2ecc71" /> Safe & Hygienic</span>
                        <span className={styles.heroBadge}><Star size={14} color="#f59e0b" /> Top Rated Resort</span>
                        <span className={styles.heroBadge}><Calendar size={14} color="#38bdf8" /> Open All Days</span>
                    </div>
                </div>
            </section>

            {/* ════════════ TICKETS ════════════ */}
            <section className={styles.ticketsSection} style={{ background: "#f8fafc" }}>
                <div className={styles.ticketsContainer}>
                    <div className={styles.ticketsHeader}>
                        <div className={styles.sectionIcon}><Ticket size={24} /></div>
                        <h2>Already have a <span>Booking?</span></h2>
                        <p>Book online to get guaranteed entry and avoid long queues at the counter.</p>
                        <div className={styles.searchWrap} data-booking-form="true"><TicketSearch /></div>
                    </div>

                    <div className={styles.ticketsGrid}>
                        {ticketsWithIcons.map(ticket => {
                            const Icon = ticket.icon;
                            const qty = selectedTickets[ticket.id] || 0;
                            const save = savings(ticket.originalPrice, ticket.price);
                            return (
                                <div
                                    key={ticket.id}
                                    className={`${styles.ticketCard} ${ticket.popular ? styles.popular : ""}`}
                                >
                                    {ticket.popular && <div className={styles.cardBadge}>Popular Choice</div>}
                                    <div className={styles.ticketTop}>
                                        <div className={styles.iconCircle}><Icon size={20} color="#0ea5e9" /></div>
                                        <h3>{ticket.name}</h3>
                                    </div>
                                    <div className={styles.priceBox}>
                                        <span className={styles.old}>₹{ticket.originalPrice}</span>
                                        <span className={styles.price}>
                                            {ticket.price === 0 ? "FREE" : `₹${ticket.price}`}
                                        </span>
                                        <span className={styles.savingPill}>{save}% off</span>
                                    </div>
                                    <ul className={styles.features}>
                                        {ticket.features.map(f => (
                                            <li key={f}><Check size={13} color="#2ecc71" /> {f}</li>
                                        ))}
                                    </ul>
                                    {ticket.id === "kidsbelow10years" ? (
                                        <div className={styles.freeTicketLabel}>FREE ENTRY</div>
                                    ) : (
                                        <div className={styles.qtyBox}>
                                            <button onClick={() => updateQuantity(ticket.id, -1)} disabled={qty === 0}>−</button>
                                            <span className={qty > 0 ? styles.activeQty : ""}>{qty}</span>
                                            <button onClick={() => updateQuantity(ticket.id, 1)}>+</button>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ════════════ COTTAGE PROMO ════════════ */}
            <section className={cottageStyles.packageSection} style={{ background: "#fff", padding: "100px 0", borderTop: "1px solid #eee" }}>
                <div className={cottageStyles.sectionWrap}>
                    <div className={cottageStyles.sectionHead}>
                        <div style={{ display: "inline-block", padding: "8px 16px", background: "#e91e8c15", borderRadius: "30px", color: "#e91e8c", fontSize: "12px", fontWeight: "800", textTransform: "uppercase", marginBottom: "15px" }}>Stay & Play</div>
                        <h2>Luxury <span>Cottage Stay</span></h2>
                        <p>Turn your visit into a vacation. Book a private AC cottage for ultimate relaxation.</p>
                        <p style={{ marginTop: "15px" }}>
                            <Link to="/cottage-in-patna" style={{ color: "#e91e8c", fontWeight: "800", textDecoration: "underline", fontSize: "14px" }}>Explore Dedicated Stay Packages →</Link>
                        </p>
                    </div>

                    <div className={cottageStyles.packageGrid}>
                        {cottagePkgs.map(pkg => {
                            const isSelected = selectedCottage === pkg.id;
                            return (
                                <div
                                    key={pkg.id}
                                    className={`${cottageStyles.pkgCard} ${isSelected ? cottageStyles.pkgSelected : ""} ${pkg.popular ? cottageStyles.pkgPopular : ""}`}
                                    onClick={() => handleCottageClick(pkg.id)}
                                >
                                    {pkg.popular && <div className={cottageStyles.pkgBadge}>Trending</div>}
                                    {pkg.waterIncluded && <div className={cottageStyles.pkgWaterBadge}>🌊 Water Park Included</div>}

                                    <div className={cottageStyles.pkgDuration}>
                                        {pkg.emoji} {pkg.duration}
                                    </div>
                                    <div className={cottageStyles.pkgPrice}>
                                        <span className={cottageStyles.pkgRs}>₹</span>{fmt(pkg.price)}
                                    </div>
                                    <div className={cottageStyles.pkgPerLabel}>per cottage</div>

                                    <ul className={cottageStyles.pkgHighlights}>
                                        {pkg.highlights.map((h, i) => <li key={i}>{h}</li>)}
                                    </ul>

                                    <div className={cottageStyles.pkgNote} style={{ marginTop: "10px" }}>⚠️ Food charges extra as per menu</div>

                                    {isSelected && (
                                        <div className={cottageStyles.daysStepper} onClick={(e) => e.stopPropagation()}>
                                            <span className={cottageStyles.daysLabel}>Visit Date</span>
                                            <div className={cottageStyles.daysControl} style={{ width: "100%", justifyContent: "flex-end" }}>
                                                <input
                                                    type="date"
                                                    min={new Date().toISOString().split("T")[0]}
                                                    value={cottageDate}
                                                    onChange={handleDateChange}
                                                    style={{ padding: "6px 10px", borderRadius: "8px", border: "1px solid #e0e0e0", outline: "none", fontFamily: "inherit", fontWeight: "600", color: "#1a1a2e" }}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {isSelected && cottageDate && (
                                        <div style={{ textAlign: "right", fontSize: "12px", color: availableRooms <= 2 ? "#e91e8c" : "#2ecc71", fontWeight: "700", marginTop: "-5px", marginBottom: "10px" }}>
                                            {isCheckingDate ? "Checking availability..." : `${availableRooms} cottage${availableRooms !== 1 ? "s" : ""} available on this date`}
                                        </div>
                                    )}

                                    {pkg.id === "cottage1day" && isSelected && cottageDate && (
                                        <div className={cottageStyles.daysStepper} onClick={(e) => e.stopPropagation()}>
                                            <span className={cottageStyles.daysLabel}>Number of Days</span>
                                            <div className={cottageStyles.daysControl}>
                                                <button className={cottageStyles.daysBtn} onClick={() => updateCottageDays(-1)}>−</button>
                                                <span className={cottageStyles.daysCount}>{cottageDays}</span>
                                                <button className={cottageStyles.daysBtn} onClick={() => updateCottageDays(1)}>+</button>
                                            </div>
                                        </div>
                                    )}

                                    {isSelected && cottageDate && (
                                        <div className={cottageStyles.daysStepper} onClick={(e) => e.stopPropagation()}>
                                            <span className={cottageStyles.daysLabel}>Rooms</span>
                                            <div className={cottageStyles.daysControl}>
                                                <button className={cottageStyles.daysBtn} onClick={() => updateCottageRooms(-1)} disabled={cottageRooms <= 1 || availableRooms === 0}>−</button>
                                                <span className={cottageStyles.daysCount}>{cottageRooms}</span>
                                                <button className={cottageStyles.daysBtn} onClick={() => updateCottageRooms(1)} disabled={cottageRooms >= availableRooms}>+</button>
                                            </div>
                                        </div>
                                    )}

                                    <div className={`${cottageStyles.pkgSelectBtn} ${isSelected ? cottageStyles.pkgSelectBtnActive : ""}`}>
                                        {isSelected ? "✓ Added to Cart" : "Book This Cottage"}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ════════════ FEATURES GRID ════════════ */}
            <div style={{ background: "#fff", padding: "60px 0", borderBottom: "1px solid #f0f0f0" }}>
                <div className={styles.ticketsContainer}>
                    <div className={styles.ticketsGrid} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                        {HIGHLIGHTS.map((h, i) => {
                            const Icon = h.icon;
                            return (
                                <div key={i} style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "20px" }}>
                                    <div style={{ background: h.color + "15", width: "45px", height: "45px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Icon size={22} color={h.color} />
                                    </div>
                                    <h4 style={{ margin: 0, fontSize: "16px", fontWeight: "800", color: "#1a1a2e" }}>{h.title}</h4>
                                    <p style={{ margin: 0, fontSize: "13px", color: "#6b7a8d", lineHeight: "1.5" }}>{h.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </div>
    );
}
