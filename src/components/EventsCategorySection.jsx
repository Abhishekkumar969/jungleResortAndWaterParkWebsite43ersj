import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function EventsCategorySection() {
    return (
        <div className="home">

            {/* =================== Events Category Section =================== */}
            <section className="event-cards-section">

                <div className="event-cards-grid">
                    {[
                        {
                            img: "/images/weddings4.jpg",
                            title: "Wedding",
                            url: "/event/wedding"
                        },
                        {
                            img: "/images/reception2-300x300.png",
                            title: "Reception",
                            url: "/event/reception"
                        },
                        {
                            img: "/images/b1-300x300.png",
                            title: "Birthday",
                            url: "/event/birthday"
                        },
                        {
                            img: "/images/corporate-2.png",
                            title: "Corporate Event",
                            url: "/event/corporate-event"
                        }
                    ].map((event, i) => (
                        <div key={i} className="event-card">
                            <img src={event.img} alt={event.title} className="event-card-img" />
                            <h3 className="event-card-name">{event.title}</h3>

                            <Link to={event.url} className="event-card-btn">
                                EXPLORE MORE
                            </Link>

                        </div>
                    ))}
                </div>

            </section>

            <section className="event-cards-section">

                <div className="event-cards-grid">
                    {[
                        {
                            img: "/images/New-Project-300x300.png",
                            title: "Baby Shower",
                            url: "/event/BabyShowerDetails",
                            type: "explore"
                        },
                        {
                            img: "/images/New-Project-1-300x300.png",
                            title: "Ring Ceremony",
                            type: "phone"
                        },
                        {
                            img: "/images/New-Project-2-300x300.png",
                            title: "Photography",
                            type: "phone"
                        }
                    ].map((event, i) => (
                        <div key={i} className="event-card">
                            <img src={event.img} alt={event.title} className="event-card-img" />
                            <h3 className="event-card-name">{event.title}</h3>
                            {event.type === "explore" ? (
                                <Link to={event.url} className="event-card-btn">
                                    EXPLORE MORE
                                </Link>
                            ) : (
                                <a href="tel:+917070218080" className="event-card-btn">
                                    BOOK NOW
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
