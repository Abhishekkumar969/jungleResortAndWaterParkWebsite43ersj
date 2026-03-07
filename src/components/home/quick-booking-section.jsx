import React from "react";
import { Phone, MessageCircle, Clock } from "lucide-react";
import BookingForm from "../booking-form";
import styles from "../../styles/quick-booking-section.module.css";

export default function QuickBookingSection() {
  return (
    <section className={styles.quickBookingSection}>

      <div className="container">

        <div className={styles.bookingGrid}>

          {/* LEFT CONTENT */}

          <div className={styles.bookingContent}>

            <span className={styles.bookingLabel}>Book Now</span>

            <h2 className={styles.bookingTitle}>
              Ready to Create <span>Memories?</span>
            </h2>

            <p className={styles.bookingDesc}>
              Fill out the form and our team will get back to you within 24 hours.
              For immediate assistance, reach out to us directly.
            </p>

            {/* Contact Options */}

            <div className={styles.bookingContact}>

              {/* Phone */}

              <div className={styles.contactCard}>

                <div className={styles.contactIcon}>
                  <Phone size={22} />
                </div>

                <div>
                  <h4>Call Us</h4>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>

              </div>

              {/* WhatsApp */}

              <div className={styles.contactCard}>

                <div className={`${styles.contactIcon} ${styles.whatsapp}`}>
                  <MessageCircle size={22} />
                </div>

                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/919876543210">Chat with us</a>
                </div>

              </div>

              {/* Working Hours */}

              <div className={styles.contactCard}>

                <div className={styles.contactIcon}>
                  <Clock size={22} />
                </div>

                <div>
                  <h4>Working Hours</h4>
                  <p>Open 24/7 for inquiries</p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT FORM */}

          <div className={styles.bookingFormWrapper}>
            <BookingForm title="Quick Booking Request" />
          </div>

        </div>

      </div>

    </section>
  );
}