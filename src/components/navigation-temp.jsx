import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import "../styles/Navigation.css";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/AboutUs", label: "ABOUT US" },
  { href: "/services", label: "SERVICES" },
  { href: "/venues", label: "VENUES" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/contact", label: "ENQUIRY NOW", className: "btn-outlines" }
];

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <header className="navbar-header">

      {/* Top Bar */}
      <div
        className="navbar-top"
        style={{
          background: `
            linear-gradient(to right, #0fb400 ${scrollProgress}%, #0c9600 ${scrollProgress}%)
          `
        }}
      >
        <div className="navbar-container navbar-top-inner">

          <div className="navbar-contact">
            <a href="tel:+919876543210" style={{ color: "white" }}>
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </a>

            <a href="mailto:info@jungleparadise.com" style={{ color: "white" }}>
              <Mail size={16} />
              <span>info@jungleparadise.com</span>
            </a>
          </div>

          <div className="navbar-open">
            Open 24/7 for Bookings
          </div>

        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`navbar-main ${isScrolled ? "navbar-blur" : ""}`}>

        <div className="navbar-container navbar-inner">

          {/* Logo */}
          <Link to="/">

            <div className="nav-logo">
              <img src="/images/logo.png" alt="Jungle Resort Logo" />
            </div>

          </Link>

          {/* Desktop Menu */}
          <div className="navbar-links">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={link.className || ""}
              >
                {link.label}
              </Link>
            ))}

          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ?
              <X size={26}
                color="red" /> :
              <Menu size={26}
                color="#0284c7"
              />
            }
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>

        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}

      </div>

    </header>
  );
}