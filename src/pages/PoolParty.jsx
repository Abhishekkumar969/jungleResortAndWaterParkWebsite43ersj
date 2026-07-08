import React, { useState, useEffect } from "react";
import Navigation from "../components/navigation-temp";
import styles from "./PoolParty.module.css";
import ticketStyles from "../styles/tickets.module.css";
import { Check, User, Users, Crown, Ticket } from "lucide-react";
import useSEO from "../hooks/useSEO";
import TicketSearch from "../components/TicketSearch";
import InfluencerForm from "../components/waterpark/InfluencerForm";

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
  useSEO({
    title: "VELORA - Summer Escape Pool Party | Jungle Resort Patna",
    description: "A premium night experience with live DJ, tropical pool vibes, exclusive crowd, curated partners, and luxury resort atmosphere in Patna.",
    keywords: "Pool Party Venue in Patna, Best Resort in Patna, Resort in Patna, Luxury Resort in Patna, VELORA pool party, DJ pool party Patna",
    ogImage: "/images/pool.webp",
    ogUrl: "https://www.jungleresortpatna.in/pool-party",
    canonical: "/pool-party",
  });

  const [selectedTickets, setSelectedTickets] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || {};
    return stored.items || {};
  });

  const [showInfluencerForm, setShowInfluencerForm] = useState(false);

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
    <div className={styles.poolPartyPage}>
      <Navigation />

      {/* ═══════════════════════════════════════════ */}
      {/* ─── DISCO HERO BANNER ─── */}
      {/* ═══════════════════════════════════════════ */}
      <section className={styles.discoHero} style={{ backgroundImage: "url('/images/pool.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className={styles.discoHeroOverlay}></div>

        <div className={styles.discoHeader}>
          <div className={styles.discoLogoLeft}>
            <img src="/images/velora.jpeg" alt="Velora" />
            <div className={styles.veloraText}>
              <h2>VELORA</h2>
              <span>— EXPERIENCES —</span>
            </div>
          </div>
          <div className={styles.discoLogoRight}>
            <div className={styles.jungleTextWrapper}>
              <div className={styles.jungleText}>
                <h2>JUNGLE RESORT</h2>
                <span>— VENUE PARTNER —</span>
              </div>
            </div>
            <img src="/images/jungle-reosrt-logo.png" alt="Jungle Resort Patna" className={styles.jungleLogo} />
          </div>
        </div>

        <div className={styles.discoCenterContent}>
          <p className={styles.discoExtraordinary}>SOMETHING EXTRAORDINARY</p>
          <h3 className={styles.discoComing}>is coming to Patna</h3>

          <p className={styles.discoGetReady}>GET READY FOR</p>
          <h1 className={styles.discoUnforgettable}>UNFORGETTABLE</h1>
          <h2 className={styles.discoNights}>Nights</h2>

          <p className={styles.discoTagline}>PREMIUM. EXCLUSIVE. UNFORGETTABLE.</p>

          <div className={styles.discoDateBox}>
            <div className={styles.discoSaveDate}>
              <span>SAVE THE DATE</span>
            </div>
            <div className={styles.discoDateNum}>17.07.26</div>
            <div className={styles.discoLimitless}>One Night. Limitless Memories.</div>
          </div>
        </div>

        {/* Left Floating Badge */}
        <div className={styles.discoLeftBadge}>
          <div className={styles.discoGoodVibes}>
            <span className={styles.vibesPink}>Good Vibes</span>
            <span className={styles.vibesBlue}>Only</span>
          </div>
          <div className={styles.discoRingBadge}>
            <span>PREMIUM<br />VENUE</span>
            <span className={styles.ringStar}>★</span>
            <span>SECURE<br />ENVIRONMENT</span>
            <span className={styles.ringStar}>★</span>
            <span>CURATED<br />EXPERIENCE</span>
          </div>
        </div>

        {/* Right Floating Badge */}
        <div className={styles.discoRightBadge}>
          <div className={styles.safetyItem}>
            <div className={styles.safetyIconBlue}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
            </div>
            <div className={styles.safetyText}>SAFETY<br />FIRST</div>
          </div>
          <div className={styles.safetyItem}>
            <div className={styles.safetyIconPink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            </div>
            <div className={styles.safetyText}>TRAINED<br />STAFF</div>
          </div>
          <div className={styles.safetyItem}>
            <div className={styles.safetyIconPinkOutline}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24"><rect x="3" y="8" width="18" height="12" rx="2" ry="2" /><path d="M16 8V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M9 14h6" /><path d="M12 11v6" /></svg>
            </div>
            <div className={styles.safetyText}>FIRST AID<br />AVAILABLE</div>
          </div>
        </div>

        {/* Big V background neon letter */}
        <div className={styles.discoBigVLeft}>V</div>
        <div className={styles.discoBigVRight}>V</div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ─── WHAT YOU'LL EXPERIENCE ─── */}
      {/* ═══════════════════════════════════════════ */}
      <section id="experience" className={styles.experienceDarkSection} style={{ backgroundImage: "url('/images/velora2.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
        <div className={styles.discoHeroOverlay}></div>

        {/* Floating Party Elements */}
        <div className={styles.floatingElement} style={{ top: '10%', left: '5%' }}>✨</div>
        <div className={styles.floatingElement} style={{ top: '30%', right: '10%', animationDelay: '1s' }}>🥂</div>
        <div className={styles.floatingElement} style={{ top: '70%', left: '15%', animationDelay: '2s' }}>🎶</div>
        <div className={styles.floatingElement} style={{ top: '80%', right: '5%', animationDelay: '3s' }}>🌴</div>
        <div className={styles.floatingElement} style={{ top: '40%', left: '50%', animationDelay: '1.5s', opacity: 0.1, fontSize: '6rem' }}>🎉</div>

        <div className={styles.discoCenterContent} style={{ position: "relative", zIndex: 2, marginTop: 0, marginBottom: "4rem" }}>
          <p className={styles.discoGetReady}>DISCOVER</p>
          <h1 className={styles.discoUnforgettable} style={{ fontSize: "clamp(40px, 7vw, 70px)" }}>WHAT YOU'LL</h1>
          <h2 className={styles.discoNights} style={{ fontSize: "clamp(50px, 9vw, 85px)" }}>Experience</h2>
          <p className={styles.discoTagline} style={{ maxWidth: "600px", margin: "20px auto 0", textTransform: "none", fontSize: "1.1rem", lineHeight: "1.6", letterSpacing: "normal" }}>
            Not just a pool party — a premium social experience designed for people who want better weekends in Patna.
          </p>
        </div>
        <div className={styles.expCards} style={{ position: "relative", zIndex: 2 }}>
          <div className={styles.expCard}>
            <div className={styles.expIcon}>🎧</div>
            <h3>Live DJ</h3>
            <p>Premium music, lighting, stage, and night energy.</p>
          </div>
          <div className={styles.expCard}>
            <div className={styles.expIcon}>🌴</div>
            <h3>Tropical Pool Night</h3>
            <p>Warm lights, pool reflections, lounge zones, and exclusive vibe.</p>
          </div>
          <div className={styles.expCard}>
            <div className={styles.expIcon}>🎫</div>
            <h3>Limited Entry</h3>
            <p>Curated crowd and controlled entry for a better experience.</p>
          </div>
          <div className={styles.expCard}>
            <div className={styles.expIcon}>✨</div>
            <h3>Partner Experience</h3>
            <p>Food, beverage, fashion, fitness, wellness, and lifestyle activations.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ─── BOOK YOUR PASS ─── */}
      {/* ═══════════════════════════════════════════ */}
      <section id="booking" className={`${ticketStyles.ticketsSection} ${styles.darkBookingSection}`} style={{ backgroundImage: "url('/images/velora3.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
        <div className={styles.discoHeroOverlay}></div>

        {/* Floating Party Elements */}
        <div className={styles.floatingElement} style={{ top: '15%', right: '8%' }}>✨</div>
        <div className={styles.floatingElement} style={{ top: '40%', left: '8%', animationDelay: '2.5s' }}>💦</div>
        <div className={styles.floatingElement} style={{ top: '75%', right: '12%', animationDelay: '0.5s' }}>🎶</div>
        <div className={styles.floatingElement} style={{ top: '85%', left: '10%', animationDelay: '1.8s' }}>🥂</div>
        <div className={styles.floatingElement} style={{ top: '50%', right: '40%', animationDelay: '2.2s', opacity: 0.1, fontSize: '6rem' }}>🎵</div>
        <div className={ticketStyles.ticketsContainer} style={{ position: "relative", zIndex: 2 }}>
          <div className={styles.discoCenterContent} style={{ marginTop: 0, marginBottom: "4rem" }}>
            <p className={styles.discoGetReady}>SECURE ENTRY</p>
            <h1 className={styles.discoUnforgettable} style={{ fontSize: "clamp(40px, 7vw, 70px)" }}>BOOK YOUR</h1>
            <h2 className={styles.discoNights} style={{ fontSize: "clamp(50px, 9vw, 85px)" }}>Pass</h2>
            <p className={styles.discoTagline} style={{ maxWidth: "600px", margin: "20px auto 0", textTransform: "none", fontSize: "1.1rem", lineHeight: "1.6", letterSpacing: "normal" }}>
              Choose your pass and complete payment securely. Confirmation will be shared on WhatsApp.
            </p>
          </div>

          <div className={ticketStyles.ticketsGrid}>
            {poolPartyTickets.map(ticket => {
              const Icon = ticket.icon;
              const qty = selectedTickets[ticket.id] || 0;
              const save = savings(ticket.originalPrice, ticket.price);
              return (
                <div
                  key={ticket.id}
                  className={`${ticketStyles.ticketCard} ${styles.darkTicketCard} ${ticket.popular ? ticketStyles.popular : ""}`}
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

          {/* INFLUENCER BANNER */}
          <div style={{
            background: "#de3a942e",
            borderRadius: "15px",
            padding: "2rem",
            marginTop: "4rem",
            textAlign: "center",
            color: "#fff",
            boxShadow: "0 8px 32px rgba(233, 30, 142, 0.3)",
            position: "relative",
            overflow: "hidden",
            border: "2px solid #de3a946a"
          }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "900", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "1px" }}>Are You an Influencer?</h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "20px", maxWidth: "600px", margin: "0 auto 20px" }}>
              Are you a female influencer with 5K+ followers? Apply here for a FREE Pool Party Ticket! Only female influencers are eligible.
            </p>
            <button
              onClick={() => setShowInfluencerForm(true)}
              style={{
                background: "#fff",
                color: "#e91e8c",
                border: "none",
                padding: "12px 24px",
                fontSize: "1.1rem",
                fontWeight: "bold",
                borderRadius: "30px",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
              }}
            >
              Apply Now
            </button>
          </div>

          {showInfluencerForm && (
            <InfluencerForm onClose={() => setShowInfluencerForm(false)} />
          )}

          {/* DOWNLOAD TICKET SECTION */}
          <div className={ticketStyles.ticketsHeader} style={{ marginTop: "4rem", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "3rem" }}>
            <div className={ticketStyles.sectionIcon}><Ticket size={24} color="#e91e8c" /></div>
            <h2 style={{ color: "#fff" }}>Already have a <span style={{ color: "#e91e8c" }}>Booking?</span></h2>
            <p style={{ color: "#ccc" }}>Download your Pool Party passes here.</p>
            <div className={ticketStyles.searchWrap} data-booking-form="true">
              <TicketSearch fixedDate="2026-07-17" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ─── OUR PARTNERS ─── */}
      {/* ═══════════════════════════════════════════ */}
      <section className={styles.partnersSection} style={{ backgroundImage: 'linear-gradient(#00000022, #000000ff), url(/images/velora4.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 className={styles.partnersTitle}>OUR PARTNERS</h2>
        <div className={styles.partnerGrid}>
          {/* FITNESS PARTNER */}
          <div className={styles.partnerCategory}>
            <div className={styles.categoryLabel}>★ FITNESS PARTNER</div>
            <div className={styles.categoryBrands}>
              <div className={styles.brandRowImageCentered}>
                <img src="/images/crossfit.png" alt="Crossfit Studio" className={styles.partnerLogo} />
                <div className={styles.brandLocationCentered}>PATLIPUTRA</div>
              </div>
              <div className={styles.brandDivider}></div>
              <div className={styles.brandRowImageCentered}>
                <img src="/images/crossfit.png" alt="Crossfit Studio" className={styles.partnerLogo} />
                <div className={styles.brandLocationCentered}>AG COLONY</div>
              </div>
            </div>
          </div>

          {/* FASHION & LIFESTYLE PARTNER */}
          <div className={styles.partnerCategory}>
            <div className={styles.categoryLabel}>★ FASHION & LIFESTYLE PARTNER</div>
            <div className={styles.categoryBrands}>
              <div className={styles.brandRowImageCentered}>
                <img src="/images/reliance.png" alt="Reliance Fashion World" className={styles.partnerLogoWide} />
              </div>
              <div className={styles.brandDivider}></div>
              <div className={styles.brandRowImageSide}>
                <img src="/images/rangriti.png" alt="Rangriti" className={styles.partnerLogoSmall} />
                <div className={styles.brandLocationSide}>
                  <span>Rangriti</span>
                  <span>Rajapul Road</span>
                </div>
              </div>
            </div>
          </div>

          {/* WELLNESS PARTNER */}
          <div className={styles.partnerCategory}>
            <div className={styles.categoryLabel}>★ WELLNESS PARTNER</div>
            <div className={styles.categoryBrands} style={{ height: '100%', justifyContent: 'center', flex: 1 }}>
              <div className={styles.brandRowImageCentered}>
                <img src="/images/himalaya.jpeg" alt="Himalaya Since 1930" className={styles.partnerLogoLarge} />
              </div>
            </div>
          </div>

          {/* Waterpark & Fun zone Partner */}
          <div className={styles.partnerCategory}>
            <div className={styles.categoryLabel}>★ Water Park & Fun Zone Partner</div>
            <div className={styles.categoryBrands} style={{ height: '100%', justifyContent: 'center', flex: 1 }}>
              <div className={styles.brandRowImageCentered}>
                <img src="/images/castabill.png" alt="castabill" className={styles.partnerLogoLarge} />
              </div>
            </div>
          </div>

        </div>



        {/* Bottom Footer */}
        <div className={styles.partnerFooter}>
          <div className={styles.partnerProud}>
            <span>PROUD PARTNER OF</span>
            <img src="/images/velora.jpeg" alt="Velora" className={styles.veloraFooterLogo} />
            <span className={styles.veloraFooterText}>VELORA<br /><small>EXPERIENCES</small></span>
          </div>
          <div className={styles.partnerSocial}>
            FOLLOW FOR MORE UPDATES &nbsp;|&nbsp; <span style={{ fontSize: '13px' }}>📷</span> @theveloraexperiences
          </div>
        </div>
      </section>
    </div>
  );
}
