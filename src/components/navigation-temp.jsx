import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import "../styles/Navigation.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/venues", label: "Event Venues" },
  { href: "/waterpark", label: "Waterpark" },
  { href: "/birthdays", label: "Birthday Stages" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-header">

      {/* Top Bar */}
      <div className="navbar-top">
        <div className="navbar-container navbar-top-inner">

          <div className="navbar-contact">
            <a href="tel:+919876543210">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </a>

            <a href="mailto:info@jungleparadise.com">
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
      <nav className="navbar-main">

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
              <Link key={link.href} to={link.href}>
                {link.label}
              </Link>
            ))}

          </div>

          {/* Buttons */}
          <div className="navbar-buttons">

            <Link to="/venues" className="btn-outlines">
              Book Event
            </Link>

            <Link to="/waterpark" className="btn-primarys">
              Waterpark Tickets
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (

        <div className="mobile-menu">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="mobile-buttons">

            <Link to="/venues" className="btn-outlines">
              Book Event
            </Link>

            <Link to="/waterpark" className="btn-primarys">
              Waterpark Tickets
            </Link>

          </div>

        </div>

      )}

    </header>
  );
}