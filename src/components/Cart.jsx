import React, { useState, useEffect } from "react";
import styles from "../styles/Cart.module.css";
import Checkout from "./waterpark/Checkout";

const ticketMap = {
    kidsbelow10years: { name: "Kids Below 10 Years", price: 299 },
    above10years: { name: "Above 10 Years", price: 399 },
    groupof5: { name: "Group Of 5", price: 1849 },
    groupof10: { name: "Group Of 10", price: 3250 },
    groupof15: { name: "Group Of 15", price: 4500 },
    groupof20: { name: "Group Of 20", price: 5500 }
};

export default function Cart({ isOpen, onClose }) {
    const [cartItems, setCartItems] = useState({});
    const [showCheckout, setShowCheckout] = useState(false);

    // ✅ LOAD CART PROPERLY
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
        setCartItems(storedCart.items || {});
    }, [isOpen]);

    // ✅ TOTAL CALCULATE (dynamic)
    const totalAmount = Object.entries(cartItems).reduce(
        (sum, [id, qty]) => sum + (ticketMap[id]?.price || 0) * qty,
        0
    );

    // ✅ QTY UPDATE
    const updateQty = (id, change) => {
        const updated = { ...cartItems };

        updated[id] = (updated[id] || 0) + change;

        if (updated[id] <= 0) {
            delete updated[id];
        }

        setCartItems(updated);

        localStorage.setItem("cart", JSON.stringify({
            items: updated
        }));

        window.dispatchEvent(new Event("cartUpdated"));
    };

    const formatINR = (amount) => {
        return new Intl.NumberFormat("en-IN").format(amount);
    };

    return (
        <div>
            {/* Overlay */}
            <div className={`${styles.overlay} ${isOpen ? styles.show : ""}`} onClick={onClose} />

            {/* Drawer */}
            <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>

                {/* HEADER */}
                <div className={styles.header}>
                    <h3>Your Cart</h3>
                    <button onClick={onClose}>✕</button>
                </div>

                {/* CONTENT */}
                <div className={styles.content}>

                    {Object.keys(cartItems).length === 0 ? (
                        <p className={styles.empty}>Cart is empty</p>
                    ) : (
                        <>
                            {Object.entries(cartItems).map(([id, qty]) => {

                                const ticket = ticketMap[id];

                                return (
                                    <div key={id} className={styles.ticketItem}>

                                        <div>
                                            <strong>{ticket?.name}</strong>
                                            <p style={{ marginTop: "5px" }}>₹ {formatINR(ticket?.price)} x {qty} =  <span style={{ fontWeight: "700", color: "#0080b7" }}>  ₹ {formatINR(ticket?.price * qty)} </span> </p>
                                        </div>

                                        <div style={{ display: "block", }} >

                                            <div className={styles.qtyControl}>
                                                <button onClick={() => updateQty(id, -1)}>-</button>
                                                <span>{qty}</span>
                                                <button onClick={() => updateQty(id, 1)}>+</button>
                                            </div>

                                        </div>

                                    </div>
                                );
                            })}
                        </>
                    )}

                    <div style={{ fontWeight: "800", display: "flex", alignItems: "end", justifyContent: "end", marginTop: "20px", color: "#0080b7", fontSize: "19px" }}>
                        Total : ₹ {formatINR(totalAmount)}
                    </div>
                </div>

                {/* FOOTER */}
                {Object.keys(cartItems).length !== 0 && (
                    <div className={styles.footer}>

                        <button
                            className={styles.button}
                            onClick={() => {
                                onClose(); // cart band
                                setShowCheckout(true); // checkout open
                            }}
                        >
                            Proceed Now
                        </button>
                    </div>
                )}

            </div>

            <Checkout
                isOpen={showCheckout}
                onClose={() => setShowCheckout(false)}
                data={{
                    selectedTickets: cartItems,
                    totalAmount
                }}
            />
        </div>
    );
}