import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Cart.module.css";

const ticketMap = {
    kidsbelow10years: { name: "Kids Below 10 Years", price: 299 },
    above10years: { name: "Above 10 Years", price: 399 },
    groupof5: { name: "Group Of 5", price: 1849 },
    groupof10: { name: "Group Of 10", price: 3250 },
    groupof15: { name: "Group Of 15", price: 4500 },
    groupof20: { name: "Group Of 20", price: 5500 }
};

const WATERPARK_ADDONS = [
    { id: "wpaKids", name: "Kids (Below 10 Yrs)", price: 299 },
    { id: "wpaAdult", name: "Adult (Above 10 Yrs)", price: 399 },
    { id: "wpaGroup5", name: "Group of 5", price: 1849 },
    { id: "wpaGroup10", name: "Group of 10", price: 3250 },
];

const CROSS_SELL = [
    { id: "cottage", emoji: "🏡", title: "Cottage Rooms", subtitle: "From ₹1,999 · Private AC Room", link: "/cottage-booking", color: "#e91e8c" },
    { id: "waterpark", emoji: "🌊", title: "More Water Park Tickets", subtitle: "Kids ₹299 · Adults ₹399", link: "/waterpark-in-patna", color: "#0ea5e9" },
];

const fmt = (n) => new Intl.NumberFormat("en-IN").format(n);

export default function Cart({ isOpen, onClose, onProceed }) {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState({});   // waterpark tickets
    const [cottage, setCottage] = useState(null); // cottage booking

    /* ── Load both from localStorage ── */
    const loadCart = () => {
        const stored = JSON.parse(localStorage.getItem("cart")) || {};
        setCartItems(stored.items || {});
        setCottage(stored.cottage || null);
    };

    useEffect(() => { loadCart(); }, [isOpen]);

    /* ── Totals ── */
    const wpTotal = Object.entries(cartItems).reduce(
        (sum, [id, qty]) => sum + (ticketMap[id]?.price || 0) * qty, 0
    );
    const cottageTotal = cottage?.total || 0;
    const grandTotal = wpTotal + cottageTotal;

    const hasWaterpark = Object.keys(cartItems).length > 0;
    const hasCottage = !!cottage;
    const hasItems = hasWaterpark || hasCottage;

    /* ── Waterpark qty update ── */
    const updateQty = (id, delta) => {
        const updated = { ...cartItems };
        updated[id] = (updated[id] || 0) + delta;
        if (updated[id] <= 0) delete updated[id];
        setCartItems(updated);
        const stored = JSON.parse(localStorage.getItem("cart")) || {};
        localStorage.setItem("cart", JSON.stringify({ ...stored, items: updated }));
        window.dispatchEvent(new Event("cartUpdated"));
    };

    /* ── Remove cottage ── */
    const removeCottage = () => {
        const stored = JSON.parse(localStorage.getItem("cart")) || {};
        delete stored.cottage;
        localStorage.setItem("cart", JSON.stringify(stored));
        setCottage(null);
        window.dispatchEvent(new Event("cartUpdated"));
    };

    return ReactDOM.createPortal(
        <div>
            {/* Overlay */}
            <div className={`${styles.overlay} ${isOpen ? styles.show : ""}`} onClick={onClose} />

            {/* Drawer */}
            <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>

                {/* HEADER */}
                <div className={styles.header}>
                    <h3>🛒 Your Cart</h3>
                    <button onClick={onClose} aria-label="Close cart">✕</button>
                </div>

                {/* CONTENT */}
                <div className={styles.content}>

                    {!hasItems ? (
                        <div className={styles.emptyWrap}>
                            <div className={styles.emptyIcon}>🛒</div>
                            <p className={styles.empty}>Your cart is empty</p>
                            <p className={styles.emptyHint}>Add waterpark tickets or a cottage room to get started</p>
                        </div>
                    ) : (
                        <>
                            {/* ═══ WATERPARK TICKETS SECTION ═══ */}
                            {hasWaterpark && (
                                <div className={styles.cartSection}>
                                    <div className={styles.sectionLabel}>🌊 Water Park Tickets</div>
                                    {Object.entries(cartItems).map(([id, qty]) => {
                                        const ticket = ticketMap[id];
                                        return (
                                            <div key={id} className={styles.ticketItem}>
                                                <div className={styles.ticketInfo}>
                                                    <strong>{ticket?.name}</strong>
                                                    <p>₹{fmt(ticket?.price)} × {qty} = <span>₹{fmt((ticket?.price || 0) * qty)}</span></p>
                                                </div>
                                                <div className={styles.qtyControl}>
                                                    <button onClick={() => updateQty(id, -1)} aria-label="Decrease">−</button>
                                                    <span>{qty}</span>
                                                    <button onClick={() => updateQty(id, 1)} aria-label="Increase">+</button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <div className={styles.sectionSubtotal}>
                                        <span>Subtotal</span>
                                        <strong>₹{fmt(wpTotal)}</strong>
                                    </div>
                                </div>
                            )}

                            {/* ═══ COTTAGE SECTION ═══ */}
                            {hasCottage && (
                                <div className={styles.cartSection}>
                                    <div className={styles.sectionLabel}>🏡 Cottage Room</div>
                                    <div className={styles.cottageCard}>
                                        <div className={styles.cottageRow}>
                                            <div>
                                                <strong className={styles.cottageName}>{cottage.duration}</strong>
                                                {cottage.id === "cottage1day" && cottage.days > 1 && (
                                                    <span className={styles.cottageDays}> × {cottage.days} days</span>
                                                )}
                                                <p className={styles.cottageBase}>₹{fmt(cottage.basePrice)} per day</p>
                                            </div>
                                            <button
                                                className={styles.cottageRemove}
                                                onClick={removeCottage}
                                                aria-label="Remove cottage"
                                            >✕</button>
                                        </div>

                                        {/* Waterpark addons on the cottage */}
                                        {cottage.addons && Object.keys(cottage.addons).length > 0 && (
                                            <div className={styles.cottageAddons}>
                                                {Object.entries(cottage.addons).map(([id, qty]) => {
                                                    const a = WATERPARK_ADDONS.find(x => x.id === id);
                                                    return (
                                                        <div key={id} className={styles.cottageAddonRow}>
                                                            <span>🎟️ {a?.name} × {qty}</span>
                                                            <span>₹{fmt((a?.price || 0) * qty)}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}

                                        <div className={styles.sectionSubtotal}>
                                            <span>Subtotal</span>
                                            <strong>₹{fmt(cottageTotal)}</strong>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* ═══ GRAND TOTAL ═══ */}
                            <div className={styles.totalRow}>
                                <span>Grand Total</span>
                                <strong>₹{fmt(grandTotal)}</strong>
                            </div>

                            {/* ═══ BLINKIT CROSS-SELL ═══ */}
                            <div className={styles.crossSellSection}>
                                <div className={styles.crossSellHeading}>⚡ Add more to your visit</div>
                                {CROSS_SELL.map(item => (
                                    <button
                                        key={item.id}
                                        className={styles.crossSellCard}
                                        onClick={() => { onClose(); navigate(item.link); }}
                                        style={{ "--cross-color": item.color }}
                                        aria-label={`Go to ${item.title}`}
                                    >
                                        <span className={styles.crossSellEmoji}>{item.emoji}</span>
                                        <div className={styles.crossSellText}>
                                            <strong>{item.title}</strong>
                                            <small>{item.subtitle}</small>
                                        </div>
                                        <span className={styles.crossSellArrow}>→</span>
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* FOOTER */}
                {hasItems && (
                    <div className={styles.footer}>
                        <button
                            className={styles.button}
                            onClick={() => {
                                if (onProceed) {
                                    onProceed({
                                        selectedTickets: cartItems,
                                        cottage,
                                        totalAmount: grandTotal,
                                    });
                                }
                            }}
                        >
                            Proceed to Payment · ₹{fmt(grandTotal)} →
                        </button>
                    </div>
                )}
            </div>

        </div>,
        document.body
    );
}