import { Link } from "react-router-dom";
import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";
import Checkout from "./waterpark/Checkout";
import "../styles/Navigation.css";

// Cart is lazy-loaded — Firebase/Firestore only loads when cart is opened
const Cart = lazy(() => import("./Cart"));

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/AboutUs", label: "ABOUT US" },
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

  // ── Checkout state (lifted here so it persists after Cart unmounts) ──
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutData, setCheckoutData] = useState(null);

  // Apply/remove inert when menu opens/closes
  // inert makes ALL children non-focusable — fixes aria-hidden + focusable descendants
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    if (isOpen) {
      menu.removeAttribute("inert");
    } else {
      menu.setAttribute("inert", "");
    }
  }, [isOpen]);

  useEffect(() => {
    if (cartCount > 0) {
      setAnimateCart(true);

      setTimeout(() => {
        setAnimateCart(false);
      }, 300); // animation duration
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

    // custom event listener
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

      {/* Mobile Menu — inert applied via ref when closed */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        aria-hidden={!isOpen}
      >

        {navLinks.map((link) =>
          link.isExternal ? (
            <a
              className={link.className}
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          )
        )}

      </div>

      {/* <AuthModal isOpen={openAuth} onClose={() => setOpenAuth(false)} /> */}
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

      {/* Checkout — mounted independently so it persists after Cart closes */}
      <Checkout
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        data={checkoutData}
      />

    </header>
  );
}