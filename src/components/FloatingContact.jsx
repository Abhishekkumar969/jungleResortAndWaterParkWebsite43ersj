import { Phone } from "lucide-react";
import "../styles/FloatingContact.css";

export default function FloatingContact() {
    return (
        <div className="floating-contact">

            <a href="tel:+919065383838" className="floating-call">
                <Phone size={27} />
            </a>

            <a
                href="https://wa.me/919065383838"
                target="_blank"
                rel="noopener noreferrer"
                className="floating-whatsapp"
            >
                <img src="/images/whatsapp.webp" alt="WhatsApp" className="whatsapp-icon" />
            </a>

        </div>
    );
}