import React, { useState, useEffect } from "react";
import EventDetailPage from "../components/EventDetailPage";
import styles from "./PoolParty.module.css";
import ticketStyles from "../styles/tickets.module.css";
import { Check, User, Users, Crown, Ticket } from "lucide-react";

const poolPartyTickets = [
  {
    id: "pp_stag",
    name: "STAG ENTRY",
    originalPrice: 999,
    price: 799,
    icon: User,
    features: [
      "Entry for 1 person",
      "Pool access 💦",
      "Complimentary welcome drink 🥤",
      "Live DJ & music experience 🎧",
      "Party activities & entertainment",
      "Access to general food zone",
      "Event photography 📸"
    ]
  },
  {
    id: "pp_couple",
    name: "COUPLE ENTRY",
    originalPrice: 1999,
    price: 1499,
    icon: Users,
    popular: true,
    features: [
      "Entry for 2 people ❤️",
      "Pool access",
      "Complimentary welcome drinks for both 🥤🥤",
      "Live DJ & complete party experience",
      "Party activities & entertainment",
      "Access to general food zone",
      "Event photography 📸"
    ]
  },
  {
    id: "pp_vip_stag",
    name: "VIP STAG PASS 👑",
    originalPrice: 2499,
    price: 1999,
    icon: Crown,
    features: [
      "VIP entry for 1 person",
      "Complimentary welcome drink 🥂",
      "Starter included 🍽️",
      "Separate VIP pool access with wave experience 🌊",
      "Exclusive VIP sitting area",
      "Separate VIP food zone",
      "VIP stage access 🎧🔥",
      "Premium party experience"
    ]
  },
  {
    id: "pp_vip_couple",
    name: "VIP COUPLE PASS 👑",
    originalPrice: 2499,
    price: 1999,
    icon: Crown,
    features: [
      "VIP entry for 2 people",
      "Complimentary welcome drinks 🥂",
      "Starter included 🍽️",
      "Separate VIP pool access with wave experience 🌊",
      "Exclusive VIP sitting area",
      "Separate VIP food zone",
      "VIP stage access 🎧🔥",
      "Premium VELORA experience ✨"
    ]
  }
];

const savings = (orig, price) => Math.round(((orig - price) / orig) * 100);

export default function PoolParty() {
  const [selectedTickets, setSelectedTickets] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || {};
    return stored.items || {};
  });

  useEffect(() => {
    const onCartUpdated = () => {
      const stored = JSON.parse(localStorage.getItem("cart")) || {};
      setSelectedTickets(stored.items || {});
    };
    window.addEventListener("cartUpdated", onCartUpdated);
    return () => window.removeEventListener("cartUpdated", onCartUpdated);
  }, []);

  const updateQuantity = (id, delta) => {
    const newQty = Math.max(0, (selectedTickets[id] || 0) + delta);
    let updated;
    if (newQty === 0) {
      updated = { ...selectedTickets };
      delete updated[id];
    } else {
      updated = { ...selectedTickets, [id]: newQty };
    }

    setSelectedTickets(updated);

    const stored = JSON.parse(localStorage.getItem("cart")) || {};
    localStorage.setItem("cart", JSON.stringify({ ...stored, items: updated }));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const totalItems = Object.values(selectedTickets).reduce((a, b) => a + b, 0);

  const handleCheckout = () => {
    window.dispatchEvent(new Event("openCart"));
  };

  return (
    <EventDetailPage
      formType="Pool Party"
      helmet={{
        title: "VELORA - Summer Escape Pool Party | Jungle Resort Patna",
        description: "A premium night experience with live DJ, tropical pool vibes, exclusive crowd, curated partners, and luxury resort atmosphere in Patna.",
        keywords: "Pool Party Venue in Patna, Best Resort in Patna, Resort in Patna, Luxury Resort in Patna, VELORA pool party, DJ pool party Patna",
        ogImage: "/images/pool.webp",
        canonical: "/pool-party",
      }}
      hideForm={true}
      theme="gold"
      hero={{
        bg: "/images/pool.webp",
        pill: "VELORA EXPERIENCES × JUNGLE RESORT PATNA",
        title: "Summer Escape",
        titleHighlight: "Premium Tropical Pool Experience",
        date: "17.07.2026",
        subtitle: "A premium night experience with live DJ, tropical pool vibes, exclusive crowd, curated partners, and luxury resort atmosphere in Patna.",
        buttons: [
          { text: "Book Pass", action: "#booking", primary: true },
          { text: "View Experience", action: "#experience", primary: false }
        ]
      }}
      info={[
        { icon: "🎫", label: "Event Type", value: "Premium Pool Party" },
        { icon: "🎵", label: "Entertainment", value: "DJ + Pool + Night Energy" },
        { icon: "📍", label: "Location", value: "Patna, Bihar" },
        { icon: "📞", label: "Enquiry", value: "+91 9608013588" },
      ]}
      gallery={[
        { type: "image", url: "/images/pool.webp", alt: "Pool Party Patna" },
        { type: "image", url: "/images/poolparty.webp", alt: "Tropical Pool Party" },
        { type: "image", url: "/images/PoolParty6.webp", alt: "Night Pool Party" },
      ]}
    >
      {/* ─── WHAT YOU'LL EXPERIENCE (DARK THEME) ─── */}
      <section id="experience" className={styles.experienceDarkSection}>
        <div className={styles.expHeader}>
          <h2>What You'll Experience</h2>
          <p>Not just a pool party — a premium social experience designed for people who want better weekends in Patna.</p>
        </div>
        <div className={styles.expCards}>
          <div className={styles.expCard}>
            <h3>Live DJ</h3>
            <p>Premium music, lighting, stage, and night energy.</p>
          </div>
          <div className={styles.expCard}>
            <h3>Tropical Pool Night</h3>
            <p>Warm lights, pool reflections, lounge zones, and exclusive vibe.</p>
          </div>
          <div className={styles.expCard}>
            <h3>Limited Entry</h3>
            <p>Curated crowd and controlled entry for a better experience.</p>
          </div>
          <div className={styles.expCard}>
            <h3>Partner Experience</h3>
            <p>Food, beverage, fashion, fitness, wellness, and lifestyle activations.</p>
          </div>
        </div>
      </section>

      <section id="booking" className={ticketStyles.ticketsSection} style={{ background: "#f8fafc", paddingTop: "5rem" }}>
        <div className={ticketStyles.ticketsContainer}>
          <div className={ticketStyles.ticketsHeader}>
            <div className={ticketStyles.sectionIcon}><Ticket size={24} /></div>
            <h2>Book Your <span>Pass</span></h2>
            <p>Choose your pass and complete payment securely. Confirmation will be shared on WhatsApp.</p>
          </div>

          <div className={ticketStyles.ticketsGrid}>
            {poolPartyTickets.map(ticket => {
              const Icon = ticket.icon;
              const qty = selectedTickets[ticket.id] || 0;
              const save = savings(ticket.originalPrice, ticket.price);
              return (
                <div
                  key={ticket.id}
                  className={`${ticketStyles.ticketCard} ${ticket.popular ? ticketStyles.popular : ""}`}
                >
                  {ticket.popular && <div className={ticketStyles.cardBadge}>Popular Choice</div>}
                  <div className={ticketStyles.ticketTop}>
                    <div className={ticketStyles.iconCircle}><Icon size={20} color="#0ea5e9" /></div>
                    <h3>{ticket.name}</h3>
                  </div>
                  <div className={ticketStyles.priceBox}>
                    <span className={ticketStyles.old}>₹{ticket.originalPrice}</span>
                    <span className={ticketStyles.price}>₹{ticket.price}</span>
                    <span className={ticketStyles.savingPill}>{save}% off</span>
                  </div>
                  <ul className={ticketStyles.features}>
                    {ticket.features.map(f => (
                      <li key={f}><Check size={13} color="#2ecc71" /> {f}</li>
                    ))}
                  </ul>
                  <div className={ticketStyles.qtyBox}>
                    <button onClick={() => updateQuantity(ticket.id, -1)} disabled={qty === 0}>−</button>
                    <span className={qty > 0 ? ticketStyles.activeQty : ""}>{qty}</span>
                    <button onClick={() => updateQuantity(ticket.id, 1)}>+</button>
                  </div>
                </div>
              );
            })}
          </div>

          {totalItems > 0 && (
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <button
                onClick={handleCheckout}
                style={{
                  background: "#e91e8c",
                  color: "#fff",
                  border: "none",
                  padding: "1rem 2rem",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  borderRadius: "50px",
                  cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(233, 30, 140, 0.4)",
                  transition: "transform 0.2s"
                }}
              >
                Proceed to Checkout ({totalItems} items)
              </button>
            </div>
          )}
        </div>
      </section>

      <section className={styles.partnersSection} style={{ marginBottom: "5rem" }}>
        <h2>Official Partners</h2>
        <p>Hosted in association with Jungle Resort Patna and supported by premium lifestyle, fitness, wellness, food, and beverage partners.</p>
        <div className={styles.contactInfo}>
          VELORA Experiences | @theveloraexperiences | veloraexperience18@gmail.com | +91 9608013588
        </div>
      </section>
    </EventDetailPage>
  );
}
