import { Link } from "react-router-dom";
import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";
import Checkout from "./waterpark/Checkout";
import "../styles/Navigation.css";

// Cart is lazy-loaded — Firebase/Firestore only loads when cart is opened
const Cart = lazy(() => import("./Cart"));

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about-us", label: "ABOUT US" },
  { href: "/services", label: "SERVICES" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/blog", label: "BLOG" },
  {
    href: "tel:9065383838",
    label: "ENQUIRY NOW",
    className: "btn-outlines",
    isExternal: true,
    isCall: true
  }
];

const mobileNavLinks = [
  { href: "/", label: "HOME" },
  { href: "/destination-wedding", label: "DESTINATION WEDDING" },
  { href: "/cottage-in-patna", label: "COTTAGE ROOMS" },
  { href: "/waterpark-in-patna", label: "WATER PARK" },
  { href: "/about-us", label: "ABOUT US" },
  { href: "/services", label: "SERVICES" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/blog", label: "BLOG" },
];

const waterparkNavLinks = [
  { href: "/waterpark-in-patna", label: "WATER PARK TICKETS", className: "waterpark-btn-outlines" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [animateCart, setAnimateCart] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  // ── Checkout state (lifted here so it persists after Cart unmounts) ──
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutData, setCheckoutData] = useState(null);

  // Apply/remove inert when menu opens/closes
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    if (isOpen) {
      menu.removeAttribute("inert");
    } else {
      menu.setAttribute("inert", "");
    }
  }, [isOpen]);

  // Click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        btnRef.current &&
        !btnRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (cartCount > 0) {
      setAnimateCart(true);
      setTimeout(() => {
        setAnimateCart(false);
      }, 300);
    }
  }, [cartCount]);

  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
      const items = storedCart.items || {};
      const wpTotal = Object.values(items).reduce((sum, qty) => sum + qty, 0);
      const cottageCount = storedCart.cottage ? 1 : 0;
      setCartCount(wpTotal + cottageCount);
    };

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  useEffect(() => {
    const handleOpenCart = () => {
      setCartOpen(true);
    };
    window.addEventListener("openCart", handleOpenCart);
    return () => window.removeEventListener("openCart", handleOpenCart);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar-header">

      {/* Main Navigation */}
      <nav className={`navbar-main ${isScrolled ? "navbar-blur" : ""}`} aria-label="Main navigation">

        <div className="navbar-container navbar-inner">

          {/* Logo */}
          <Link to="/" aria-label="Jungle Resort Patna — Go to homepage">
            <div className="nav-logo">
              <img src="/images/jungle-reosrt.png" alt="Jungle Resort Patna logo" width={34} height={34} />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-links">
            {navLinks.map((link) =>
              link.isExternal ? (
                <a
                  key={link.href}
                  href={link.href}
                  className={link.className || ""}
                  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                  aria-label={link.isCall ? `Call us: ${link.label}` : link.label}
                >
                  {link.label}
                  {link.isCall && <Phone size={18} aria-hidden="true" style={{ marginLeft: "10px" }} />}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={link.className || ""}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="nav-right">

            {/* Waterpark Button */}
            <div>
              {waterparkNavLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={link.className || ""}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CART */}
            <button
              onClick={() => setCartOpen(true)}
              className="nav-cart"
              aria-label="Open cart"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
            >
              <div style={{ position: "relative" }}>
                <ShoppingCart size={25} aria-hidden="true" />
                {cartCount > 0 && (
                  <span
                    className={`cart-badge ${animateCart ? "cart-bounce" : ""}`}
                    aria-live="polite"
                  >
                    {cartCount}
                  </span>
                )}
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              ref={btnRef}
              className="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X size={26} color="white" aria-hidden="true" />
              ) : (
                <Menu size={26} aria-hidden="true" />
              )}
            </button>

          </div>

        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        aria-hidden={!isOpen}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
          {mobileNavLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Enquiry Link in Mobile - Pink Button at Bottom */}
        <div style={{ padding: "15px 10px", borderTop: "1px solid #f0f0f0" }}>
          <a
            href="tel:9065383838"
            onClick={() => setIsOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#e72e77",
              color: "#fff",
              padding: "8px",
              borderRadius: "40px",
              fontWeight: "800",
              fontSize: "17px",
              textDecoration: "none",
              boxShadow: "0 4px 12px #e91e8c4d"
            }}
          >
            ENQUIRY NOW
          </a>
        </div>
      </div>

      {cartOpen && (
        <Suspense fallback={null}>
          <Cart
            isOpen={cartOpen}
            onClose={() => {
              setCartOpen(false);
              window.dispatchEvent(new Event("closeCart"));
            }}
            onProceed={(data) => {
              setCheckoutData(data);
              setCartOpen(false);
              window.dispatchEvent(new Event("closeCart"));
              setShowCheckout(true);
            }}
          />
        </Suspense>
      )}

      <Checkout
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        data={checkoutData}
      />

    </header>
  );
}