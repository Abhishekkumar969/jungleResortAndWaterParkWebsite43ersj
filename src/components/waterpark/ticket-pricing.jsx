import React, { useState, useEffect } from "react";
import { Check, Star, Users, Baby, Crown, Sparkles } from "lucide-react";
import styles from "../../styles/tickets.module.css";
import { Helmet } from "react-helmet";
import TicketSearch from "../TicketSearch";

const tickets = [
    {
        id: "kidsbelow10years",
        name: "Kids Below 10 Years",
        icon: Baby,
        price: 299,
        originalPrice: 499,
        features: [
            "Wave Pool",
            "Rain Dance",
            "DJ",
            "Water Slides"
        ],
        popular: false
    },
    {
        id: "above10years",
        name: "Above 10 Years",
        icon: Users,
        price: 399,
        originalPrice: 549,
        features: [
            "Wave Pool",
            "Rain Dance",
            "DJ",
            "Water Slides"
        ],
        popular: false
    },
    {
        id: "groupof5",
        name: "Group Of 5",
        icon: Star,
        price: 1849,
        originalPrice: 2745,
        features: [
            "Wave Pool",
            "Rain Dance",
            "DJ",
            "Water Slides"
        ],
        popular: false
    },
    {
        id: "groupof10",
        name: "Group Of 10",
        icon: Crown,
        price: 3250,
        originalPrice: 5490,
        features: [
            "Wave Pool",
            "Rain Dance",
            "DJ",
            "Water Slides"
        ],
        popular: true
    },
    {
        id: "groupof15",
        name: "Group Of 15",
        icon: Sparkles,
        price: 4500,
        originalPrice: 8235,
        features: [
            "Wave Pool",
            "Rain Dance",
            "DJ",
            "Water Slides"
        ],
        popular: false
    },
    {
        id: "groupof20",
        name: "Group Of 20",
        icon: Sparkles,
        price: 5500,
        originalPrice: 10980,
        features: [
            "Wave Pool",
            "Rain Dance",
            "DJ",
            "Water Slides"
        ],
        popular: false
    }
];

export default function TicketPricing() {
    const [selectedTickets, setSelectedTickets] = useState({});

    const updateQuantity = (id, delta) => {
        setSelectedTickets(prev => {
            const newQty = Math.max(0, (prev[id] || 0) + delta);

            if (newQty === 0) {
                const updated = { ...prev };
                delete updated[id];
                return updated;
            }

            return { ...prev, [id]: newQty };
        });
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify({
            items: selectedTickets
        }));

        window.dispatchEvent(new Event("cartUpdated"));
    }, [selectedTickets]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
        setSelectedTickets(storedCart.items || {});
    }, []);

    const totalAmount = Object.entries(selectedTickets || {}).reduce((sum, [id, qty]) => {
        const ticket = tickets.find(t => t.id === id);
        return sum + (ticket?.price || 0) * qty;
    }, 0);

    const formatINR = (amount) => {
        return new Intl.NumberFormat("en-IN").format(amount);
    };

    return (
        <>
            <Helmet>
                <title>Best Waterpark in Patna | Jungle Resort</title>
                <meta
                    name="description"
                    content="Enjoy best waterpark in Patna with slides, rain dance & family fun at Jungle Resort."
                />
            </Helmet>

            <section className={styles.ticketsSection}>
                <div className={styles.ticketsContainer}>

                    <div className={styles.ticketsHeader}>
                        <div style={{ marginTop: "50px" }}></div>

                        <h2>
                            Choose Your <span>Water Park Tickets</span>
                        </h2>

                        <p>
                            Select ticket options designed for individuals, groups, and families.
                        </p>

                        <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
                            <TicketSearch />
                        </div>
                    </div>

                    <div className={styles.ticketsGrid}>
                        {tickets.map(ticket => {
                            const Icon = ticket.icon;

                            return (
                                <div
                                    key={ticket.id}
                                    className={`${styles.ticketCard} ${ticket.popular ? styles.popular : ""}`}
                                >

                                    {ticket.popular && <div className={styles.badge}>Best Value</div>}

                                    <div className={styles.ticketTop}>
                                        <h3>  <Icon size={28} color="#00bfff" /> {ticket.name}</h3>
                                    </div>

                                    <div className={styles.priceBox}>
                                        <div className={styles.price}> <span className={styles.old}>₹ {ticket.originalPrice}</span> ₹ {ticket.price}</div>
                                    </div>

                                    <ul className={styles.features}>
                                        {ticket.features.map(feature => (
                                            <li key={feature}>
                                                <Check size={16} /> {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className={styles.qtyBox}>

                                        <button
                                            onClick={() => updateQuantity(ticket.id, -1)}
                                            disabled={!selectedTickets[ticket.id]}
                                        >
                                            -
                                        </button>

                                        <span>{selectedTickets[ticket.id] || 0}</span>

                                        <button onClick={() => updateQuantity(ticket.id, 1)}>
                                            +
                                        </button>

                                    </div>

                                </div>
                            );
                        })}
                    </div>

                    {totalAmount > 0 && (

                        <div className={styles.cartBox}>

                            {/* LEFT SIDE */}
                            <div className={styles.cartLeft}>

                                <h3>Your Selection</h3>

                                <div className={styles.cartItems}>

                                    {Object.entries(selectedTickets).map(([id, qty]) => {
                                        const ticket = tickets.find(t => t.id === id);

                                        return (
                                            <div key={id} className={styles.cartItemRow}>

                                                {/* NAME + PRICE */}
                                                <div>
                                                    <strong>{ticket?.name}</strong>
                                                    <p >₹ {formatINR(ticket?.price)} each x {qty} </p>
                                                </div>


                                                {/* ITEM TOTAL */}
                                                <div className={styles.itemTotal}>
                                                    ₹ {formatINR(ticket?.price * qty)}
                                                </div>


                                                {/* QTY CONTROL */}
                                                <div className={styles.qtyControl}>

                                                    <button
                                                        onClick={() => updateQuantity(id, -1)}
                                                    >
                                                        -
                                                    </button>

                                                    <span>{qty}</span>

                                                    <button
                                                        onClick={() => updateQuantity(id, 1)}
                                                    >
                                                        +
                                                    </button>

                                                </div>

                                            </div>
                                        );
                                    })}

                                </div>

                            </div>

                            {/* RIGHT SIDE */}

                            <div className={styles.cartRight}>

                                <div>
                                    <div style={{ display: "flex", alignContent: "center", justifyContent: "space-between" }}>
                                        <div className={styles.label} style={{ placeContent: 'center', color: "#00a8ff", fontSize: "18px", fontWeight: "800" }}>Total Amount</div>
                                        <div className={styles.amount}>₹ {formatINR(totalAmount)}</div>
                                    </div>

                                    <button
                                        className={styles.checkoutBtn}
                                        style={{ fontSize: "15px", fontWeight: "800" }}
                                        onClick={() => {

                                            // ✅ FINAL CART SAVE
                                            localStorage.setItem("cart", JSON.stringify({
                                                items: selectedTickets
                                            }));

                                            // ✅ ADD THIS
                                            window.dispatchEvent(new Event("openCart"));
                                            window.dispatchEvent(new Event("cartUpdated"));
                                        }}
                                    >
                                        VIEW CART
                                    </button>

                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
