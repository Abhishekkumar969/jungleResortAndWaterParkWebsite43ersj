import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";
import styles from "../styles/FloatingCartPill.module.css";

import { TICKET_MAP } from "../constants/ticketPrices";

// Flatten TICKET_MAP for easier use in this component
const ticketMap = Object.entries(TICKET_MAP).reduce((acc, [id, data]) => {
    acc[id] = data.price;
    return acc;
}, {});

const EXCLUDED_ROUTES = [];

const fmt = (n) => new Intl.NumberFormat("en-IN").format(n);

export default function FloatingCartPill() {
    const location = useLocation();
    const [cartCount, setCartCount] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const [cartIsOpen, setCartIsOpen] = useState(false);

    const syncCart = () => {
        const stored = JSON.parse(localStorage.getItem("cart")) || {};
        const items = stored.items || {};
        const wpCount = Object.values(items).reduce((a, b) => a + b, 0);
        const wpTotal = Object.entries(items).reduce(
            (sum, [id, qty]) => sum + (ticketMap[id] || 0) * qty, 0
        );
        const cottage = stored.cottage;
        const cottageTotal = cottage?.total || 0;
        const cottageCount = cottage ? 1 : 0;
        setCartCount(wpCount + cottageCount);
        setGrandTotal(wpTotal + cottageTotal);
    };

    useEffect(() => {
        syncCart();
        window.addEventListener("cartUpdated", syncCart);
        return () => window.removeEventListener("cartUpdated", syncCart);
    }, []);

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

    // Hide if cart is empty, cart drawer is open, or on a page with its own pill
    const isExcluded = EXCLUDED_ROUTES.includes(location.pathname);
    if (cartCount === 0 || cartIsOpen || isExcluded) return null;

    return ReactDOM.createPortal(
        <div
            className={styles.pill}
            onClick={() => window.dispatchEvent(new Event("openCart"))}
            role="button"
            aria-label="View cart"
        >
            <div className={styles.left}>
                <span className={styles.count}>{cartCount} {cartCount === 1 ? "item" : "items"}</span>
                <span className={styles.total}>₹{fmt(grandTotal)}</span>
            </div>
            <span className={styles.cta}>View Cart →</span>
        </div>,
        document.body
    );
}
