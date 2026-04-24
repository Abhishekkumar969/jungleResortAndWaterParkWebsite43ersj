import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import styles from "../../styles/cottage-booking.module.css";

/* ─── Month helper ─── */
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/* ─── Cottage Packages ─── */
import { COTTAGE_PKGS as PACKAGES, WATERPARK_ADDONS } from "../../constants/ticketPrices";

/* ─── YouTube video IDs for the resort ─── */
const VIDEOS = [
    { id: "XHbH8VUiMx4", label: "Resort Overview", thumb: "🏕️" },
    { id: "7PmUtmfTmbg", label: "Cottage Tour", thumb: "🏡" },
    { id: "RLI2zKvTTpM", label: "Waterpark & Fun", thumb: "🌊" },
];

const TOTAL_ROOMS = 5;

/* ══════════════════════════════════════════════════════ */
export default function CottageBookingPage() {

    const [selectedPkg, setSelectedPkg] = useState(null);
    const [days, setDays] = useState(1);
    const [rooms, setRooms] = useState(1);
    const [addons, setAddons] = useState({});
    const [activeVideo, setActiveVideo] = useState(0);
    const [bookedRooms, setBookedRooms] = useState(0);
    const [formErrors, setFormErrors] = useState({});
    const [cartIsOpen, setCartIsOpen] = useState(false);





    /* ── count booked rooms this month ── */
    useEffect(() => {
        (async () => {
            try {
                const now = new Date();
                const key = `${MONTHS[now.getMonth()]}${now.getFullYear()}`;
                const snap = await getDoc(doc(db, "CottageBookings", key));
                if (snap.exists()) {
                    const data = snap.data();
                    const verified = Object.values(data).filter(b => b.verification === true).length;
                    setBookedRooms(Math.min(verified, TOTAL_ROOMS));
                }
            } catch { /* silent */ }
        })();
    }, []);

    /* ── Sync state when cart is updated externally (e.g., removed from Cart drawer) ── */
    useEffect(() => {
        const syncFromCart = () => {
            const stored = JSON.parse(localStorage.getItem("cart")) || {};
            if (!stored.cottage) {
                // Cottage was removed from cart — unselect on page
                setSelectedPkg(null);
                setAddons({});
                setDays(1);
            }
        };
        window.addEventListener("cartUpdated", syncFromCart);
        return () => window.removeEventListener("cartUpdated", syncFromCart);
    }, []);

    /* ── Track Cart open/close to hide floating sticky bar ── */
    useEffect(() => {
        const onOpen = () => setCartIsOpen(true);
        const onClose = () => setCartIsOpen(false);
        window.addEventListener("openCart", onOpen);
        window.addEventListener("closeCart", onClose);
        return () => {
            window.removeEventListener("openCart", onOpen);
            window.removeEventListener("closeCart", onClose);
        };
    }, []);

    /* ── helpers ── */
    const fmt = (n) => new Intl.NumberFormat("en-IN").format(n);
    const availableRooms = TOTAL_ROOMS - bookedRooms;

    const addonTotal = Object.entries(addons).reduce((s, [id, qty]) => {
        const a = WATERPARK_ADDONS.find(x => x.id === id);
        return s + (a?.price || 0) * qty;
    }, 0);

    const basePkgPrice = selectedPkg ? PACKAGES.find(p => p.id === selectedPkg)?.price || 0 : 0;
    // For 1-day package multiply by days; others single price. Both multiplied by rooms.
    const pkgPrice = (selectedPkg === "cottage1day" ? basePkgPrice * days : basePkgPrice) * rooms;
    const grandTotal = pkgPrice + addonTotal;

    const updateAddon = (id, delta) => {
        setAddons(prev => {
            const q = Math.max(0, (prev[id] || 0) + delta);
            const next = { ...prev };
            if (q === 0) delete next[id]; else next[id] = q;
            return next;
        });
    };



    /* ── Add cottage to cart + open cart drawer ── */
    const openCheckout = () => {
        if (!selectedPkg) {
            setFormErrors({ pkg: "Please select a package first" });
            return;
        }
        const pkg = PACKAGES.find(p => p.id === selectedPkg);
        const stored = JSON.parse(localStorage.getItem("cart")) || {};
        const cottageData = {
            id: selectedPkg,
            duration: pkg?.duration,
            basePrice: basePkgPrice,
            days: selectedPkg === "cottage1day" ? days : 1,
            rooms: rooms,
            addons,
            addonTotal,
            total: grandTotal,
        };
        localStorage.setItem("cart", JSON.stringify({ ...stored, cottage: cottageData }));
        window.dispatchEvent(new Event("cartUpdated"));
        window.dispatchEvent(new Event("openCart"));
    };

    const selectedPkgObj = PACKAGES.find(p => p.id === selectedPkg);

    /* ══════════════════════ RENDER ══════════════════════ */
    return (
        <div className={styles.page}>

            {/* ═══════ HERO ═══════ */}
            <div className={styles.hero}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <span className={styles.heroPill}>🏡 Premium Jungle Cottages</span>
                    <h1>Book Your Private Cottage</h1>
                    <p>AC Rooms · Nature Surroundings · 5 Exclusive Cottages</p>
                    <div className={styles.heroStats}>
                        <div className={styles.heroStat}>
                            <strong>{TOTAL_ROOMS}</strong><span>Total Rooms</span>
                        </div>
                        <div className={styles.heroStatDivider} />
                        <div className={styles.heroStat}>
                            <strong style={{ color: availableRooms <= 2 ? "#ff4757" : "#2ecc71" }}>{availableRooms}</strong>
                            <span>Available</span>
                        </div>
                        <div className={styles.heroStatDivider} />
                        <div className={styles.heroStat}>
                            <strong>AC</strong><span>All Rooms</span>
                        </div>
                    </div>
                    {availableRooms <= 2 && (
                        <div className={styles.urgencyBanner}>
                            🔥 Only {availableRooms} room{availableRooms === 1 ? "" : "s"} left! Book now before it's full.
                        </div>
                    )}
                </div>
            </div>

            {/* ═══════ VIDEO GALLERY ═══════ */}
            <section className={styles.videoSection}>
                <div className={styles.sectionWrap}>
                    <div className={styles.sectionHead}>
                        <h2>Take a <span>Virtual Tour</span></h2>
                        <p>See your cottage before you book</p>
                    </div>
                    <div className={styles.videoLayout}>
                        <div className={styles.mainVideoBox}>
                            <iframe
                                key={activeVideo}
                                src={`https://www.youtube.com/embed/${VIDEOS[activeVideo].id}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                                title={VIDEOS[activeVideo].label}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className={styles.videoIframe}
                            />
                        </div>
                        <div className={styles.videoThumbCol}>
                            {VIDEOS.map((v, i) => (
                                <button
                                    key={i}
                                    className={`${styles.thumbBtn} ${activeVideo === i ? styles.thumbActive : ""}`}
                                    onClick={() => setActiveVideo(i)}
                                >
                                    <span className={styles.thumbEmoji}>{v.thumb}</span>
                                    <span>{v.label}</span>
                                    {activeVideo === i && <span className={styles.thumbPlaying}>▶ Playing</span>}
                                </button>
                            ))}
                            <div className={styles.thumbImages}>
                                <img src="/images/cottage-exterior.webp" alt="Cottage exterior" className={styles.thumbImg} />
                                <img src="/images/hotel-room-luxury-resort-768x549.webp" alt="Cottage interior" className={styles.thumbImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════ PACKAGE SELECTION (OYO style) ═══════ */}
            <section className={styles.packageSection}>
                <div className={styles.sectionWrap}>
                    <div className={styles.sectionHead}>
                        <h2>Choose Your <span>Stay</span></h2>
                        <p>All packages include private AC cottage · Food charges extra</p>
                    </div>

                    <div className={styles.packageGrid}>
                        {PACKAGES.map((pkg) => {
                            const isSelected = selectedPkg === pkg.id;
                            return (
                                <div
                                    key={pkg.id}
                                    className={`${styles.pkgCard} ${isSelected ? styles.pkgSelected : ""} ${pkg.popular ? styles.pkgPopular : ""}`}
                                    onClick={() => { setSelectedPkg(pkg.id); setFormErrors(p => { const n = { ...p }; delete n.pkg; return n; }); }}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => e.key === "Enter" && setSelectedPkg(pkg.id)}
                                    aria-label={`Select ${pkg.duration} package`}
                                >
                                    {pkg.popular && <div className={styles.pkgBadge}>🔥 Most Popular</div>}
                                    {pkg.waterIncluded && <div className={styles.pkgWaterBadge}>🌊 Waterpark Included</div>}

                                    <div className={styles.pkgDuration}>{pkg.duration}</div>
                                    <div className={styles.pkgPrice}>
                                        <span className={styles.pkgRs}>₹</span>{fmt(pkg.price)}
                                    </div>
                                    <div className={styles.pkgPerLabel}>per cottage / per visit</div>

                                    <ul className={styles.pkgHighlights}>
                                        {pkg.highlights.map((h, i) => (
                                            <li key={i}>{h}</li>
                                        ))}
                                    </ul>

                                    <div className={styles.pkgNote}>⚠️ Food Charges Extra</div>

                                    {/* ── Days stepper — only for 1 Full Day ── */}
                                    {pkg.id === "cottage1day" && isSelected && (
                                        <div
                                            className={styles.daysStepper}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span className={styles.daysLabel}>No. of Days</span>
                                            <div className={styles.daysControl}>
                                                <button
                                                    className={styles.daysBtn}
                                                    onClick={() => setDays(d => Math.max(1, d - 1))}
                                                    aria-label="Decrease days"
                                                >−</button>
                                                <span className={styles.daysCount}>{days}</span>
                                                <button
                                                    className={styles.daysBtn}
                                                    onClick={() => setDays(d => d + 1)}
                                                    aria-label="Increase days"
                                                >+</button>
                                            </div>
                                            <span className={styles.daysTotal}>₹{fmt(pkg.price * days)} total</span>
                                        </div>
                                    )}

                                    {/* ── Rooms stepper — shown when selected ── */}
                                    {isSelected && (
                                        <div
                                            className={styles.daysStepper}
                                            onClick={(e) => e.stopPropagation()}
                                            style={{ marginTop: "12px", borderTop: "1px dashed #eee", paddingTop: "12px" }}
                                        >
                                            <span className={styles.daysLabel}>No. of Rooms</span>
                                            <div className={styles.daysControl}>
                                                <button
                                                    className={styles.daysBtn}
                                                    onClick={() => setRooms(r => Math.max(1, r - 1))}
                                                    disabled={rooms <= 1}
                                                    aria-label="Decrease rooms"
                                                >−</button>
                                                <span className={styles.daysCount}>{rooms}</span>
                                                <button
                                                    className={styles.daysBtn}
                                                    onClick={() => setRooms(r => Math.min(availableRooms, r + 1))}
                                                    disabled={rooms >= availableRooms}
                                                    aria-label="Increase rooms"
                                                >+</button>
                                            </div>
                                            <span className={styles.daysTotal}>Max {availableRooms} available</span>
                                        </div>
                                    )}

                                    <div className={`${styles.pkgSelectBtn} ${isSelected ? styles.pkgSelectBtnActive : ""}`}>
                                        {isSelected ? "✓ Selected" : "Select Package"}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {formErrors.pkg && <p className={styles.errorCenter}>{formErrors.pkg}</p>}

                    {selectedPkg && (
                        <div className={styles.bookCTAWrap}>
                            <div className={styles.bookCTALeft}>
                                <span className={styles.bookCTADuration}>
                                    {selectedPkgObj?.duration}
                                    {selectedPkg === "cottage1day" && days > 1 && ` × ${days} days`}
                                    {rooms > 1 && ` × ${rooms} rooms`}
                                </span>
                                <span className={styles.bookCTAPrice}>₹{fmt(pkgPrice + addonTotal)}</span>
                                {addonTotal > 0 && <span className={styles.bookCTABreak}>(Cottage ₹{fmt(pkgPrice)} + Add-ons ₹{fmt(addonTotal)})</span>}
                            </div>
                            <button className={styles.bookCTABtn} onClick={openCheckout}>
                                🛒 VIEW CART
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* ═══════ WATERPARK ADD-ONS — Blinkit Style ═══════ */}
            {selectedPkg && !selectedPkgObj?.waterIncluded && (
                <section className={styles.addonSection}>
                    <div className={styles.sectionWrap}>
                        <div className={styles.addonBanner}>
                            <div className={styles.addonBannerLeft}>
                                <span className={styles.addonBannerEmoji}>🎟️</span>
                                <div>
                                    <h3>Add Waterpark Tickets</h3>
                                    <p>Upgrade your visit · Add for your group</p>
                                </div>
                            </div>
                            <span className={styles.addonOptLabel}>Optional</span>
                        </div>

                        <div className={styles.addonGrid}>
                            {WATERPARK_ADDONS.map((a) => {
                                const qty = addons[a.id] || 0;
                                return (
                                    <div key={a.id} className={styles.addonCard}>
                                        <div className={styles.addonEmoji}>{a.emoji}</div>
                                        <div className={styles.addonName}>{a.name}</div>
                                        <div className={styles.addonPrice}>₹{fmt(a.price)}</div>
                                        <div className={styles.addonQtyWrap}>
                                            {qty === 0 ? (
                                                <button className={styles.addonAddBtn} onClick={() => updateAddon(a.id, 1)}>
                                                    + ADD
                                                </button>
                                            ) : (
                                                <div className={styles.addonCounter}>
                                                    <button onClick={() => updateAddon(a.id, -1)}>−</button>
                                                    <span>{qty}</span>
                                                    <button onClick={() => updateAddon(a.id, 1)}>+</button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* already-included notice for 1-day */}
            {selectedPkg && selectedPkgObj?.waterIncluded && (
                <section className={styles.includedSection}>
                    <div className={styles.sectionWrap}>
                        <div className={styles.includedBanner}>
                            <span>🌊</span>
                            <div>
                                <strong>Waterpark is already included in your 1 Full Day package!</strong>
                                <p>Wave Pool · Rain Dance · Water Slides · DJ — all covered</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ═══════ STICKY BAR ═══════ */}
            {selectedPkg && !cartIsOpen && (
                <div className={styles.stickyBar}>
                    <div>
                        <div className={styles.stickyDuration}>
                            {selectedPkgObj?.duration}
                            {selectedPkg === "cottage1day" && days > 1 && ` × ${days} days`}
                            {rooms > 1 && ` × ${rooms} rooms`}
                        </div>
                        <div className={styles.stickyPrice}>₹{fmt(grandTotal)}</div>
                        {addonTotal > 0 && <div className={styles.stickyBreak}>incl. add-ons</div>}
                    </div>
                    <button className={styles.stickyBtn} onClick={openCheckout}>🛒 VIEW CART</button>
                </div>
            )}

            {/* ═══════ SUCCESS TOAST ═══════ */}
            {bookedRooms >= TOTAL_ROOMS && (
                <div className={styles.toast} style={{ background: "#e74c3c" }} role="alert">
                    ⚠️ All cottages are booked for this month. Please contact support for waitlist.
                </div>
            )}
        </div>
    );
}
