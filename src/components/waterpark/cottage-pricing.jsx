import React, { useState, useEffect, useRef } from "react";
import { Check, Star, Users, Baby, Crown, Sparkles, Play, ShieldCheck, Coffee, Wind, Bed, Tv, Wifi, Waves, Heart, Camera, Ticket } from "lucide-react";
import styles from "../../styles/tickets.module.css";
import cottageStyles from "../../styles/cottage-booking.module.css";
import TicketSearch from "../TicketSearch";

/* ─── Waterpark Tickets ─── */
import { useTicketPrices } from "../../context/TicketPricesContext";
import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const GALLERY_ITEMS = [
    { id: "v1", title: "Resort Walkthrough", type: "local-video", src: "/images/resort-gate.mp4", emoji: "🌳" },
    { id: "i1", title: "Cottage Interior", type: "image", src: "/images/cottage-room.webp", emoji: "🛌" },
    { id: "i2", title: "Exterior View", type: "image", src: "/images/cottage-exterior.webp", emoji: "🏠" },
];

const AMENITIES = [
    { name: "King Size Bed", icon: Bed, desc: "Ultra-soft premium mattresses" },
    { name: "Full AC", icon: Wind, desc: "Silent cooling technology" },
    { name: "High Speed Wifi", icon: Wifi, desc: "Connect with the world" },
    { name: "Smart TV", icon: Tv, desc: "Netflix & Prime pre-installed" },
    { name: "Room Service", icon: Coffee, desc: "Fresh food at your door" },
    { name: "Safety Locker", icon: ShieldCheck, desc: "Keep your valuables secure" },
];

const TRUST_POINTS = [
    { title: "Safe for Couples", icon: Heart, color: "#e91e8c" },
    { title: "Photogenic Spots", icon: Camera, color: "#0ea5e9" },
    { title: "Clean & Hygienic", icon: ShieldCheck, color: "#2ecc71" },
];

const fmt = (n) => new Intl.NumberFormat("en-IN").format(n);
const savings = (orig, price) => Math.round(((orig - price) / orig) * 100);

export default function CottagePricing() {
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
    const [activeItem, setActiveItem] = useState(GALLERY_ITEMS[0]);
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
    const [reservedDates, setReservedDates] = useState([]);

    useEffect(() => {
        const fetchReserved = async () => {
            const ref = doc(db, "Reserved", "Dates");
            const snap = await getDoc(ref);
            if (snap.exists()) {
                const dates = snap.data().dates || [];
                setReservedDates(dates);

                // If current cottageDate is reserved, find next available
                if (dates.includes(cottageDate)) {
                    let d = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
                    while (true) {
                        const formatted = new Intl.DateTimeFormat("en-CA", {
                            timeZone: "Asia/Kolkata",
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                        }).format(d);
                        if (!dates.includes(formatted)) {
                            setCottageDate(formatted);
                            // Also update cart
                            const stored = JSON.parse(localStorage.getItem("cart")) || {};
                            if (stored.cottage) {
                                stored.cottage.date = formatted;
                                localStorage.setItem("cart", JSON.stringify(stored));
                                window.dispatchEvent(new Event("cartUpdated"));
                            }
                            break;
                        }
                        d.setDate(d.getDate() + 1);
                    }
                }
            }
        };
        fetchReserved();
    }, [cottageDate]);

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
        <div className={cottageStyles.page}>
            {/* ════════════ HERO SECTION ════════════ */}
            <section className={cottageStyles.hero}>
                <div className={cottageStyles.heroOverlay} />
                <div className={cottageStyles.heroContent}>
                    <div className={cottageStyles.heroPill}>✨ Premium Stay Experience</div>
                    <h1>Your Luxury Escape <span>Inside Nature</span></h1>
                    <p>Experience the perfect blend of rustic jungle vibes and modern luxury. Patna's most exclusive cottage stay awaits you.</p>

                    <div className={cottageStyles.heroStats}>
                        <div className={cottageStyles.heroStat}>
                            <strong>4.9/5</strong>
                            <span>User Rating</span>
                        </div>
                        <div className={cottageStyles.heroStatDivider} />
                        <div className={cottageStyles.heroStat}>
                            <strong>5</strong>
                            <span>Private Villas</span>
                        </div>
                        <div className={cottageStyles.heroStatDivider} />
                        <div className={cottageStyles.heroStat}>
                            <strong>100%</strong>
                            <span>Privacy</span>
                        </div>
                    </div>
                </div>
            </section>



            {/* ════════════ TRUST POINTS ════════════ */}
            <div style={{ background: "#fff", padding: "20px 0", borderBottom: "1px solid #f0f0f0" }}>
                <div className={cottageStyles.sectionWrap} style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px" }}>
                    {TRUST_POINTS.map((t, i) => {
                        const Icon = t.icon;
                        return (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "700", color: "#333" }}>
                                <div style={{ background: t.color + "15", padding: "8px", borderRadius: "50%" }}>
                                    <Icon size={18} color={t.color} />
                                </div>
                                {t.title}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ════════════ VIDEO & GALLERY SECTION ════════════ */}
            <section className={cottageStyles.videoSection}>
                <div className={cottageStyles.sectionWrap}>
                    <div className={cottageStyles.sectionHead}>
                        <h2>Virtual <span>Resort Tour</span></h2>
                        <p>Take a peek inside our luxury cottages and lush green campus</p>
                    </div>

                    <div className={cottageStyles.videoLayout}>
                        <div className={cottageStyles.mainVideoBox} style={{ background: "#000", overflow: "hidden", position: "relative" }}>
                            {activeItem.type === "video" ? (
                                <iframe
                                    className={cottageStyles.videoIframe}
                                    src={`https://www.youtube.com/embed/${activeItem.videoId}?autoplay=1&mute=1&loop=1&playlist=${activeItem.videoId}`}
                                    title={activeItem.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : activeItem.type === "local-video" ? (
                                <video key={activeItem.src} autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
                                    <source src={activeItem.src} type="video/mp4" />
                                </video>
                            ) : (
                                <img
                                    src={activeItem.src}
                                    alt={activeItem.title}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            )}
                        </div>

                        <div className={cottageStyles.videoThumbCol}>
                            {GALLERY_ITEMS.map(v => (
                                <button
                                    key={v.id}
                                    className={`${cottageStyles.thumbBtn} ${activeItem.id === v.id ? cottageStyles.thumbActive : ""}`}
                                    onClick={() => setActiveItem(v)}
                                >
                                    <span className={cottageStyles.thumbEmoji}>{v.emoji}</span>
                                    <span>{v.title}</span>
                                    {(v.type === "video" || v.type === "local-video") && <Play size={14} className={cottageStyles.thumbPlaying} />}
                                </button>
                            ))}

                            <div className={cottageStyles.thumbImages}>
                                <img src="/images/cottage-room.webp" alt="Room" className={cottageStyles.thumbImg} onClick={() => setActiveItem(GALLERY_ITEMS.find(i => i.id === "i1"))} style={{ cursor: "pointer" }} />
                                <img src="/images/cottage-exterior.webp" alt="Exterior" className={cottageStyles.thumbImg} onClick={() => setActiveItem(GALLERY_ITEMS.find(i => i.id === "i2"))} style={{ cursor: "pointer" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.ticketsHeader}>
                <div className={styles.sectionIcon}><Ticket size={24} /></div>
                <h2>Already have a <span>Booking?</span></h2>
                <p>Book online to get guaranteed entry and avoid long queues at the counter.</p>
                <div className={styles.searchWrap} data-booking-form="true"><TicketSearch /></div>
            </div>

            {/* ════════════ PACKAGE SELECTION ════════════ */}
            <section className={cottageStyles.packageSection}>
                <div className={cottageStyles.sectionWrap}>
                    <div className={cottageStyles.sectionHead}>
                        <h2>Choose Your <span>Stay Package</span></h2>
                        <p>Instant confirmation · Flexible durations · Zero booking fees</p>
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
                                    {pkg.popular && <div className={cottageStyles.pkgBadge}>🔥 Most Preferred</div>}
                                    {pkg.waterIncluded && <div className={cottageStyles.pkgWaterBadge}><Waves size={12} style={{ marginRight: "4px" }} /> Water Park Included</div>}

                                    <div className={cottageStyles.pkgDuration}>
                                        {pkg.emoji} {pkg.duration}
                                    </div>
                                    <div className={cottageStyles.pkgPrice}>
                                        <span className={cottageStyles.pkgRs}>₹</span>{fmt(pkg.price)}
                                    </div>
                                    <div className={cottageStyles.pkgPerLabel}>per cottage / visit</div>

                                    <ul className={cottageStyles.pkgHighlights}>
                                        {pkg.highlights.map((h, i) => <li key={i}>{h}</li>)}
                                    </ul>

                                    <div className={cottageStyles.pkgNote}>⚠️ Food charges extra as per menu</div>

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

                                    {isSelected && cottageDate && reservedDates.includes(cottageDate) && (
                                        <div style={{ textAlign: "right", fontSize: "12px", color: "#d9534f", fontWeight: "700", marginTop: "-5px", marginBottom: "10px" }}>
                                            ⚠️ This date is reserved. Please select another date.
                                        </div>
                                    )}

                                    {isSelected && cottageDate && !reservedDates.includes(cottageDate) && (
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
                                            <span className={cottageStyles.daysLabel}>Number of Rooms</span>
                                            <div className={cottageStyles.daysControl}>
                                                <button className={cottageStyles.daysBtn} onClick={() => updateCottageRooms(-1)} disabled={cottageRooms <= 1 || availableRooms === 0}>−</button>
                                                <span className={cottageStyles.daysCount}>{cottageRooms}</span>
                                                <button className={cottageStyles.daysBtn} onClick={() => updateCottageRooms(1)} disabled={cottageRooms >= availableRooms}>+</button>
                                            </div>
                                        </div>
                                    )}

                                    {(() => {
                                        const isReserved = isSelected && reservedDates.includes(cottageDate);
                                        return (
                                            <div
                                                className={`${cottageStyles.pkgSelectBtn} ${(isSelected && !isReserved) ? cottageStyles.pkgSelectBtnActive : ""}`}
                                                style={isReserved ? { background: "#d9534f", borderColor: "#d9534f", color: "#fff" } : {}}
                                            >
                                                {isReserved ? "⚠️ Date Reserved" : (isSelected ? "✓ Package Selected" : "Select This Stay")}
                                            </div>
                                        );
                                    })()}
                                </div>
                            );
                        })}
                    </div>
                </div>

            </section>


            {/* ════════════ WATERPARK ADDONS ════════════ */}
            <section className={styles.ticketsSection} style={{ background: "#f5f6fa", paddingBottom: "100px" }}>
                <div className={styles.ticketsContainer}>

                    <div className={styles.ticketsHeader}>
                        <div style={{ display: "inline-block", padding: "10px 20px", background: "#0ea5e915", borderRadius: "30px", color: "#0ea5e9", fontSize: "12px", fontWeight: "800", textTransform: "uppercase", marginBottom: "15px" }}>Water Park - Add-on Experience</div>
                    </div>

                    <div className={styles.ticketsGrid}>
                        {ticketsWithIcons.map(ticket => {
                            const Icon = ticket.icon;
                            const qty = selectedTickets[ticket.id] || 0;
                            const save = savings(ticket.originalPrice, ticket.price);
                            return (
                                <div key={ticket.id} className={`${styles.ticketCard} ${ticket.popular ? styles.popular : ""}`}>
                                    {ticket.popular && <div className={styles.cardBadge}>Recommended</div>}
                                    <div className={styles.ticketTop}>
                                        <div className={styles.iconCircle}><Icon size={20} color="#0ea5e9" /></div>
                                        <h3>{ticket.name}</h3>
                                    </div>
                                    <div className={styles.priceBox}>
                                        <span className={styles.old}>₹{ticket.originalPrice}</span>
                                        <span className={styles.price}>{ticket.price === 0 ? "FREE" : `₹${ticket.price}`}</span>
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

            {/* ════════════ AMENITIES SECTION ════════════ */}
            <section style={{ background: "#fff", padding: "80px 0" }}>
                <div className={cottageStyles.sectionWrap}>
                    <div className={cottageStyles.sectionHead}>
                        <h2>World-Class <span>Amenities</span></h2>
                        <p>Everything you need for a comfortable and memorable stay</p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
                        {AMENITIES.map((a, i) => {
                            const Icon = a.icon;
                            return (
                                <div key={i} style={{ display: "flex", gap: "20px", padding: "30px", background: "#f8f9fc", borderRadius: "24px", transition: "transform 0.3s" }} className="amenity-card">
                                    <div style={{ background: "#fff", width: "50px", height: "50px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                                        <Icon size={24} color="#e91e8c" />
                                    </div>
                                    <div>
                                        <h4 style={{ margin: "0 0 5px", fontSize: "16px", fontWeight: "800", color: "#1a1a2e" }}>{a.name}</h4>
                                        <p style={{ margin: 0, fontSize: "13px", color: "#6b7a8d" }}>{a.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

        </div>
    );
}
