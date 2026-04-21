import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Twitter, Hotel } from "lucide-react";
import "../styles/Footer.css";

export default function Footer() {
  const [promptEvent, setPromptEvent] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setPromptEvent(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = () => {
    if (promptEvent) promptEvent.prompt();
  };

  return (
    <footer className="footer">

      {/* Main Footer */}
      <div className="footer-container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/images/jungle-reosrt.png" alt="Jungle Resort Patna logo" loading="lazy" width="100" height="100" />
            </div>
            <p className="footer-text">
              Jungle Resort Patna is the best destination for wedding venues, banquet halls,
              and waterpark fun in Patna, Bihar. Explore our gallery, book waterpark tickets,
              and enjoy premium resort experiences.
            </p>
            <ul className="footer-social" aria-label="Social media links">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                  <Facebook size={18} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                  <Instagram size={18} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Watch us on YouTube">
                  <Youtube size={18} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter / X">
                  <Twitter size={18} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <p className="footer-title">Quick Links</p>
            <ul className="footer-links">
              <li><Link to="/">Jungle Resort Patna Home</Link></li>
              <li><Link to="/venues">Best Banquet Hall in Patna</Link></li>
              <li><Link to="/waterpark-in-patna">Best Waterpark in Patna</Link></li>
              <li><Link to="/birthdays">Birthday Party Venue in Patna</Link></li>
              <li><Link to="/gallery">Jungle Resort Patna Gallery</Link></li>
              <li><Link to="/contact">Contact Jungle Resort Patna</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-section">
            <p className="footer-title">Our Services</p>
            <ul className="footer-links">
              <li><Link to="/wedding">Wedding Venue in Patna</Link></li>
              <li><Link to="/reception">Reception Party Venue in Patna</Link></li>
              <li><Link to="/corporateevents">Corporate Event Venue in Patna</Link></li>
              <li><Link to="/birthday">Birthday Party Venue in Patna</Link></li>
              <li><Link to="/waterpark-in-patna">Best Waterpark in Patna</Link></li>
              <li><Link to="/">Resort Cottage Booking in Patna</Link></li>
            </ul>
          </div>

          {/* Contact Info — fixed: no <div> or foreign elements inside <ul> */}
          <div className="footer-section">
            <p className="footer-title">Contact Us</p>
            <ul className="footer-contact">

              <li>
                <MapPin size={18} aria-hidden="true" />
                <span>Bypass Thana, Marcha - Mirchi Road, Dharamsala, Patna, Bihar 800009</span>
              </li>

              <li>
                <Hotel size={18} aria-hidden="true" />
                <span>Enquiry for Resort</span>
              </li>
              <li>
                <Phone size={18} aria-hidden="true" />
                <a href="tel:+919031080901" style={{ whiteSpace: "nowrap" }}>+91 9031080901</a>,&nbsp;
                <a href="tel:+919031080902" style={{ whiteSpace: "nowrap" }}>+91 9031080902</a>
              </li>

              <li>
                <Hotel size={18} aria-hidden="true" />
                <span>Enquiry for Waterpark</span>
              </li>
              <li>
                <Phone size={18} aria-hidden="true" />
                <a href="tel:+919031080903" style={{ whiteSpace: "nowrap" }}>+91 90 3108 0903</a>,&nbsp;
                <a href="tel:+919031080904" style={{ whiteSpace: "nowrap" }}>+91 90 3108 0904</a>
              </li>

              <li>
                <Hotel size={18} aria-hidden="true" />
                <span>For Complaint &amp; Feedback</span>
              </li>
              <li>
                <Phone size={18} aria-hidden="true" />
                <a href="tel:+919065383838" style={{ whiteSpace: "nowrap" }}>+91 9065383838</a>
              </li>

              <li>
                <Mail size={18} aria-hidden="true" />
                <a href="mailto:jungleresort.patna@gmail.com">jungleresort.patna@gmail.com</a>
              </li>

              <li>
                <Clock size={18} aria-hidden="true" />
                <span>Open 24/7</span>
              </li>

            </ul>
          </div>

          <button onClick={handleInstall} className="install-btn" aria-label="Install Jungle Resort app on your device">
            Install App
          </button>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© 2025 Jungle Resort Patna – Best Wedding Venue &amp; Waterpark</p>
        </div>
      </div>

    </footer>
  );
}