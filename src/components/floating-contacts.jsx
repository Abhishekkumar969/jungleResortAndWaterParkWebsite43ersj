import React, { useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import "../styles/FloatingContacts.css";

let alreadyMounted = false; // prevents duplicates

export default function FloatingContacts() {
  useEffect(() => {
    if (alreadyMounted) return;
    alreadyMounted = true;

    document.body.classList.add("show-floating");
    return () => {
      document.body.classList.remove("show-floating");
      alreadyMounted = false;
    };
  }, []);

  return (
    <div id="floating-contacts">
      {/* Call Button (bottom-left) */}
      <a
        href="tel:+917070218080"
        className="floating-btn call animate-bounce-slow"
        title="Call us"
      >
        <Phone size={22} />
      </a>

      {/* WhatsApp Button (bottom-right) */}
      <a
        href="https://wa.me/917070218080"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp animate-bounce-slow"
        title="WhatsApp us"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
