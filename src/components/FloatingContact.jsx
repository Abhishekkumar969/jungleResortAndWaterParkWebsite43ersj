import { Home, CalendarDays, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "../styles/FloatingContact.css";

export default function FloatingContact() {
    const location = useLocation();

    return (
        <div className="bottom-nav">

            <Link to="/" className={`bottom-item ${location.pathname === "/" ? "active" : ""}`}>
                <Home size={22} />
                <span>Home</span>
            </Link>

            <Link to="/booking" className={`bottom-item center ${location.pathname === "/booking" ? "active" : ""}`}>
                <CalendarDays size={22} />
                <span>Book Now</span>
            </Link>

            <a
                href="https://wa.me/919065383838"
                target="_blank"
                rel="noopener noreferrer"
                className="bottom-item"
            >
                <i className="fa-brands fa-whatsapp"></i>
                <span>WhatsApp</span>
            </a>

            <a href="tel:+919065383838" className="bottom-item">
                <Phone size={22} />
                <span>Call</span>
            </a>

        </div>
    );
}