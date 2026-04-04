import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Twitter, Hotel } from "lucide-react";
import "../styles/Footer.css";

export default function Footer() {
  const [promptEvent, setPromptEvent] = useState(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setPromptEvent(e);
    });
  }, []);

  const handleInstall = () => {
    if (promptEvent) {
      promptEvent.prompt();
    }
  };

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
              <li><Link to="/waterpark-in-patna">Waterpark</Link></li>
              <li><Link to="/birthdays">Birthday Stages</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-section">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/wedding">Wedding Ceremonies</Link></li>

              <li><Link to="/reception">Reception Parties</Link></li>
              <li><Link to="/corporateevents">Corporate Events</Link></li>
              <li><Link to="/birthday">Birthday Celebrations</Link></li>
              <li><Link to="/Waterpark">Waterpark Tickets</Link></li>
              <li><Link to="/">Cottage Bookings</Link></li>

            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={27} color="#ffffff" />
                <span>
                  Jungle Resort & WaterPark, Bypass Thana, Marcha - Mirchi Road, more, Dharamsala, Patna, Bihar 800009
                </span>
              </li>

              <div className="Contact-Seperator">
                <div style={{ marginBottom: "10px" }}> <Hotel size={18} color="#ffffff" style={{ marginRight: "10px" }} />Enquiry for Resort</div>
                <li>
                  <Phone size={18} color="#ffffff" />
                  <a href="tel:+919031080901" style={{ whiteSpace: "nowrap" }}>+91 9031080901</a>,<a style={{ whiteSpace: "nowrap" }} href="tel:+919031080902">+91 9031080902</a>
                </li>
              </div>

              <div className="Contact-Seperator">
                <div style={{ marginBottom: "10px" }}> <Hotel size={18} color="#ffffff" style={{ marginRight: "10px" }} />Enquiry for Waterpark</div>
                <li>
                  <Phone size={18} color="#ffffff" />
                  <a href="tel:+919031080903" style={{ whiteSpace: "nowrap" }}>+91 90 3108 0903</a>,<a style={{ whiteSpace: "nowrap" }} href="tel:+919031080904">+91 90 3108 0904</a>
                </li>
              </div>

              <div className="Contact-Seperator">
                <div style={{ marginBottom: "10px" }}> <Hotel size={18} color="#ffffff" style={{ marginRight: "10px" }} />For Complain & Feedback</div>
                <li>
                  <Phone size={18} color="#ffffff" />
                  <a href="tel:+919065383838" style={{ whiteSpace: "nowrap" }}>+91 9065383838</a>
                </li>
              </div>

              <li>
                <Mail size={18} color="#ffffff" />
                <a href="mailto:jungleresort.patna@gmail.com">
                  jungleresort.patna@gmail.com
                </a>
              </li>

              <li>
                <Clock size={18} color="#ffffff" />
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
            © 2025 Jungle Resort Patna – Best Wedding Venue & Waterpark
          </p>
          <button onClick={handleInstall} className="install-btn">
            Install App
          </button>
        </div>
      </div>

    </footer>
  );
}