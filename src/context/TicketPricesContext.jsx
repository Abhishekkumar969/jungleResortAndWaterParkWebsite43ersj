import React, { createContext, useContext, useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { WATERPARK_TICKETS, COTTAGE_PKGS, POOL_PARTY_TICKETS } from "../constants/ticketPrices";

const TicketPricesContext = createContext(null);

export function TicketPricesProvider({ children }) {
    const [tickets, setTickets] = useState(WATERPARK_TICKETS);
    const [cottagePkgs, setCottagePkgs] = useState(COTTAGE_PKGS);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const docRef = doc(db, "ticketPrices", "active");
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            try {
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    if (data.waterparkTickets && data.waterparkTickets.length > 0) {
                        setTickets(data.waterparkTickets);
                    }
                    if (data.cottagePackages && data.cottagePackages.length > 0) {
                        setCottagePkgs(data.cottagePackages);
                    }
                }
            } catch (err) {
                console.error("Error processing ticket prices update:", err);
            } finally {
                setLoading(false);
            }
        }, (err) => {
            console.error("Error in ticket prices onSnapshot listener:", err);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Helper: TICKET_MAP equivalent
    const ticketMap = [...tickets, ...POOL_PARTY_TICKETS].reduce((acc, ticket) => {
        acc[ticket.id] = { name: ticket.name, price: ticket.price };
        return acc;
    }, {});

    // Helper: WATERPARK_ADDONS equivalent (dynamically derived from tickets where applicable)
    const findTicketPrice = (name) => {
        const match = tickets.find(t => t.name.toLowerCase() === name.toLowerCase());
        return match ? match.price : null;
    };

    const waterparkAddons = [
        { id: "wpaKids", name: "Kids (Below 5 Yrs)", price: findTicketPrice("Kids (Below 5 Yrs)") ?? 0, emoji: "👶" },
        { id: "wpaAdult", name: "Above 5 Yrs", price: findTicketPrice("Above 5 Yrs") ?? 299, emoji: "🧑" },
        { id: "wpaGroup5", name: "Group of 5", price: findTicketPrice("Group of 5") ?? 1495, emoji: "👨‍👩‍👧‍👦" },
        { id: "wpaGroup10", name: "Group of 10", price: findTicketPrice("Group of 10") ?? 2990, emoji: "🎉" },
    ];

    return (
        <TicketPricesContext.Provider value={{ tickets, cottagePkgs, ticketMap, waterparkAddons, loading }}>
            {children}
        </TicketPricesContext.Provider>
    );
}

export function useTicketPrices() {
    const context = useContext(TicketPricesContext);
    if (!context) {
        throw new Error("useTicketPrices must be used within a TicketPricesProvider");
    }
    return context;
}
