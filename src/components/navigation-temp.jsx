import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";
// import AuthModal from "../components/AuthModal";
import Cart from "./Cart";
import "../styles/Navigation.css";

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
      const total = Object.values(items).reduce((sum, qty) => sum + qty, 0);

      setCartCount(total);
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

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <header className="navbar-header">

      {/* Main Navigation */}
      <nav className={`navbar-main ${isScrolled ? "navbar-blur" : ""}`}>

        <div className="navbar-container navbar-inner">

          {/* Logo */}
          <Link to="/">

            <div className="nav-logo">
              <img src="/images/logo.webp" alt="Jungle Resort Logo" width={34} height={34} />
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
                >
                  {link.label}
                  {link.isCall && <Phone size={18} style={{ marginLeft: "10px" }} />}
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
            <div onClick={() => setCartOpen(true)} className="nav-cart">
              <div style={{ position: "relative" }}>
                <ShoppingCart size={25} />

                {cartCount > 0 && (
                  <span className={`cart-badge ${animateCart ? "cart-bounce" : ""}`}>
                    {cartCount}
                  </span>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X size={26} color="red" />
              ) : (
                <Menu size={26} />
              )}
            </button>

          </div>

        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>

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
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />

    </header>
  );
}