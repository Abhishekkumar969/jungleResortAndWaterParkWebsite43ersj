import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import styles from "../../styles/testimonials-section.module.css";

const testimonials = [
    {
        name: "Priya & Rahul Sharma",
        event: "Wedding Ceremony",
        rating: 5,
        image: "/images/venue-wedding.jpg",
        text: "Our wedding at Jungle Paradise was absolutely magical! The venue was breathtaking, the staff was incredibly attentive, and every detail was perfect."
    },
    {
        name: "Amit Patel",
        event: "Corporate Conference",
        rating: 5,
        image: "/images/venue-corporate.jpg",
        text: "We hosted our annual company conference here and it exceeded all expectations. The professional setup and seamless coordination made it a huge success."
    },
    {
        name: "Sunita Verma",
        event: "Birthday Celebration",
        rating: 5,
        image: "/images/birthday-stage.jpg",
        text: "My son's birthday party at the waterpark was the best decision! The kids had an amazing time on the rides."
    },
    {
        name: "Rajesh & Family",
        event: "Waterpark Visit",
        rating: 5,
        image: "/images/waterpark-main.jpg",
        text: "A perfect family day out! The wave pool was fantastic, kids loved the slides, and the food was delicious."
    }
];

export default function TestimonialsSection() {

    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className={styles.testimonialsSection}>

            <div className="container">

                <div className={styles.testimonialsHeader}>

                    <span className={styles.testimonialsLabel}>Testimonials</span>

                    <h2 className={styles.testimonialsTitle}>
                        What Our <span>Guests Say</span>
                    </h2>

                    <p className={styles.testimonialsDesc}>
                        Hear from the families and organizations who have celebrated with us.
                    </p>

                </div>

                <div className={styles.testimonialWrapper}>

                    <div className={styles.testimonialCard}>

                        <div className={styles.testimonialImage}>

                            <img
                                src={testimonials[current].image}
                                alt={testimonials[current].event}
                            />

                        </div>

                        <div className={styles.testimonialContent}>

                            <Quote className={styles.quoteIcon} />

                            <div className={styles.testimonialRating}>

                                {[...Array(testimonials[current].rating)].map((_, i) => (
                                    <Star key={i} size={18} className={styles.starIcon} />
                                ))}

                            </div>

                            <p className={styles.testimonialText}>
                                "{testimonials[current].text}"
                            </p>

                            <div className={styles.testimonialAuthor}>

                                <h4>{testimonials[current].name}</h4>

                                <p>{testimonials[current].event}</p>

                            </div>

                            <div className={styles.testimonialNav}>

                                <button onClick={prev} className={styles.navBtn}>
                                    <ChevronLeft size={20} />
                                </button>

                                <div className={styles.testimonialDots}>

                                    {testimonials.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrent(i)}
                                            className={`${styles.dot} ${i === current ? styles.active : ""}`}
                                        />
                                    ))}

                                </div>

                                <button onClick={next} className={styles.navBtn}>
                                    <ChevronRight size={20} />
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}