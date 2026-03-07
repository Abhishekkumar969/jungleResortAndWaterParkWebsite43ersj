import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import "../styles/Footer.css";

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* Main Footer */}
      <div className="footer-container">

        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">

            <div className="footer-logo">
              <img src="/images/logo.png" alt="Jungle Resort Logo" />
            </div>

            <p className="footer-text">
              Experience the perfect blend of luxury events and thrilling
              waterpark adventures, all surrounded by the serene beauty of nature.
            </p>

            <div className="footer-social">

              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook size={18} />
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} />
              </a>

              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube size={18} />
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter size={18} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">

            <h4 className="footer-title">Quick Links</h4>

            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/venues">Event Venues</Link></li>
              <li><Link to="/waterpark">Waterpark</Link></li>
              <li><Link to="/birthdays">Birthday Stages</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>

          </div>

          {/* Our Services */}
          <div className="footer-section">

            <h4 className="footer-title">Our Services</h4>

            <ul className="footer-links">
              <li>Wedding Ceremonies</li>
              <li>Reception Parties</li>
              <li>Corporate Events</li>
              <li>Birthday Celebrations</li>
              <li>Waterpark Tickets</li>
              <li>Room Bookings</li>
            </ul>

          </div>

          {/* Contact Info */}
          <div className="footer-section">

            <h4 className="footer-title">Contact Us</h4>

            <ul className="footer-contact">

              <li>
                <MapPin size={18} color="#ad8216" />
                <span>
                  Jungle Resort & WaterPark, Near Forest Highway,
                  Nature Valley, State - 123456
                </span>
              </li>

              <li>
                <Phone size={18} color="#ad8216" />
                <a href="tel:+919876543210">
                  +91 98765 43210
                </a>
              </li>

              <li>
                <Mail size={18} color="#ad8216" />
                <a href="mailto:info@jungleparadise.com">
                  info@jungleresort&waterpark.com
                </a>
              </li>

              <li>
                <Clock size={18} color="#ad8216" />
                <span>Open 24/7</span>
              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {year} Jungle Resort & Waterpark. All rights reserved.
          </p>

          <div className="footer-policy">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms & Conditions</Link>
            <Link to="/">Refund Policy</Link>
          </div>

        </div>

      </div>

    </footer>
  );
}