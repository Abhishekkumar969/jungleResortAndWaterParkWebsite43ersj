import React, { useState } from "react";
import styles from "../../styles/tickets.module.css";
import { Check, Star, Users, Baby, Crown, Sparkles } from "lucide-react";

const tickets = [
    {
        id: "adult",
        name: "Adult Ticket",
        icon: Users,
        price: 699,
        originalPrice: 899,
        description: "Full day access to all water attractions",
        features: [
            "All Water Slides",
            "Wave Pool Access",
            "Lazy River",
            "Locker Room Access",
            "Free Parking"
        ],
        popular: false
    },
    {
        id: "child",
        name: "Child Ticket",
        icon: Baby,
        price: 499,
        originalPrice: 649,
        description: "For kids below 12 years (height < 4.5 ft)",
        features: [
            "Kids Water Zone",
            "Safe Splash Areas",
            "Mini Slides",
            "Shallow Pools",
            "Free Parking"
        ],
        popular: false
    },
    {
        id: "family",
        name: "Family Pack",
        icon: Star,
        price: 2199,
        originalPrice: 2799,
        description: "2 Adults + 2 Children - Best Value!",
        features: [
            "All Water Attractions",
            "Wave Pool & Lazy River",
            "Family Cabana (2 hrs)",
            "Priority Entry",
            "Free Parking",
            "Complimentary Snacks"
        ],
        popular: true
    },
    {
        id: "vip",
        name: "VIP Access",
        icon: Crown,
        price: 1499,
        originalPrice: 1999,
        description: "Premium experience with exclusive perks",
        features: [
            "All Water Attractions",
            "Private Cabana (Full Day)",
            "Skip-the-Line Access",
            "Complimentary Lunch",
            "Towel & Locker Included",
            "Personal Attendant"
        ],
        popular: false
    },
    {
        id: "couple",
        name: "Couple Special",
        icon: Sparkles,
        price: 1299,
        originalPrice: 1599,
        description: "Perfect for a romantic splash date",
        features: [
            "All Water Attractions",
            "Private Cabana (4 hrs)",
            "Couple Photo Session",
            "Complimentary Drinks",
            "Premium Locker"
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
                const newState = { ...prev };
                delete newState[id];
                return newState;
            }

            return { ...prev, [id]: newQty };
        });
    };

    const totalAmount = Object.entries(selectedTickets).reduce((sum, [id, qty]) => {
        const ticket = tickets.find(t => t.id === id);
        return sum + (ticket?.price || 0) * qty;
    }, 0);

    return (
        <section className={styles.ticketsSection}>
            <div className={styles.ticketsContainer}>

                <div className={styles.ticketsHeader}>
                    <span className={styles.subtitle}>Ticket Pricing</span>

                    <h2>
                        Choose Your <span>Adventure</span>
                    </h2>

                    <p>
                        Select from our range of ticket options designed for individuals,
                        families, and groups.
                    </p>
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

                                    <div className={styles.iconBox}>
                                        <Icon size={28} />
                                    </div>

                                    <h3>{ticket.name}</h3>

                                    <p className={styles.ticketDesc}>{ticket.description}</p>

                                </div>

                                <div className={styles.priceBox}>
                                    <span className={styles.old}>₹ {ticket.originalPrice}</span>
                                    <div className={styles.price}>₹ {ticket.price}</div>
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

                        <div className={styles.cartLeft}>

                            <h3>Your Selection</h3>

                            <div className={styles.cartItems}>
                                {Object.entries(selectedTickets).map(([id, qty]) => {
                                    const ticket = tickets.find(t => t.id === id);

                                    return (
                                        <span key={id}>
                                            {ticket?.name} x {qty}
                                        </span>
                                    );
                                })}
                            </div>

                        </div>

                        <div className={styles.cartRight}>
                            <div className={styles.label}>Total Amount</div>
                            <div className={styles.amount}>₹ {totalAmount}</div>
                        </div>

                        <button className={styles.checkoutBtn}>
                            Proceed to Checkout
                        </button>

                    </div>

                )}

            </div>
        </section>
    );

}