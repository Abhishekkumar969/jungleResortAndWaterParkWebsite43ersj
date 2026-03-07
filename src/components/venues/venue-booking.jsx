import React from "react";
import styles from "../../styles/venue-booking.module.css";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import BookingForm from "../booking-form";

export default function VenueBooking() {
    const images = [
        "/images/venue-wedding.jpg",
        "/images/venue-reception.jpg",
        "/images/venue-corporate.jpg"
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>

                    {/* Info Section */}
                    <div>
                        <h2 className={styles.title}>
                            Book Your <span>Dream Venue</span>
                        </h2>

                        <p className={styles.description}>
                            Ready to host your special event? Fill out the form and our team
                            will contact you within 24 hours with a customized quote and venue availability.
                        </p>

                        {/* Contact Info */}
                        <div className={styles.contactList}>

                            <div className={styles.contactItem}>
                                <div className={styles.iconBox}>
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className={styles.label}>Call us</p>
                                    <a href="tel:+919876543210" className={styles.link}>
                                        +91 98765 43210
                                    </a>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconBox}>
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className={styles.label}>Email us</p>
                                    <a
                                        href="mailto:events@jungleparadise.com"
                                        className={styles.link}
                                    >
                                        events@jungleparadise.com
                                    </a>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconBox}>
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className={styles.label}>Visit hours</p>
                                    <span className={styles.link}>
                                        10 AM - 8 PM (Site Visits)
                                    </span>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconBox}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className={styles.label}>Address</p>
                                    <span className={styles.link}>
                                        Jungle Paradise Resort, Near Forest Highway, Nature Valley
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Mini Gallery */}
                        <div className={styles.gallery}>
                            {images.map((img, i) => (
                                <div key={i} className={styles.imageBox}>
                                    <img src={img} alt={`Venue ${i + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Booking Form */}
                    <BookingForm
                        title="Request Event Quote"
                        eventTypes={[
                            "Wedding",
                            "Reception",
                            "Ring Ceremony",
                            "Corporate Event",
                            "Baby Shower",
                            "Anniversary",
                            "Birthday Party",
                            "Other"
                        ]}
                    />

                </div>
            </div>
        </section>
    );
}