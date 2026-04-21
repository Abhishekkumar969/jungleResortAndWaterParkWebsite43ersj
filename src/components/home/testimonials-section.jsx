import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import styles from "../../styles/testimonials-section.module.css";

const testimonials = [
    {
        name: "Priya & Rahul Sharma",
        event: "Wedding Ceremony",
        rating: 5,
        text: "Our wedding at Jungle Resort & Water Park was absolutely magical! The venue was breathtaking, the staff was incredibly attentive, and every detail was perfect."
    },
    {
        name: "Amit Patel",
        event: "Corporate Conference",
        rating: 5,
        text: "We hosted our annual company conference here and it exceeded all expectations. The professional setup and seamless coordination made it a huge success."
    },
    {
        name: "Sunita Verma",
        event: "Birthday Celebration",
        rating: 5,
        text: "My son's birthday party at the waterpark was the best decision! The kids had an amazing time on the rides."
    },
    {
        name: "Rajesh & Family",
        event: "Waterpark Visit",
        rating: 5,
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

                        {/* <div className={styles.testimonialImage}>

                            <img
                                src={testimonials[current].image}
                                alt={testimonials[current].event}
                            />

                        </div> */}

                        <div className={styles.testimonialContent} aria-live="polite" aria-atomic="true">

                            <Quote className={styles.quoteIcon} aria-hidden="true" />

                            <div
                              className={styles.testimonialRating}
                              aria-label={`${testimonials[current].rating} out of 5 stars`}
                            >
                                {[...Array(testimonials[current].rating)].map((_, i) => (
                                    <Star key={i} size={18} className={styles.starIcon} aria-hidden="true" />
                                ))}
                            </div>

                            <p className={styles.testimonialText}>
                                "{testimonials[current].text}"
                            </p>

                            <div className={styles.testimonialAuthor}>
                                <p className={styles.testimonialAuthorName}>{testimonials[current].name}</p>
                                <p>{testimonials[current].event}</p>
                            </div>

                            <div className={styles.testimonialNav}>

                                <button onClick={prev} className={styles.navBtn} aria-label="Previous testimonial">
                                    <ChevronLeft size={20} aria-hidden="true" />
                                </button>

                                <div className={styles.testimonialDots} role="group" aria-label="Testimonial navigation">
                                    {testimonials.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrent(i)}
                                            className={`${styles.dot} ${i === current ? styles.active : ""}`}
                                            aria-label={`Go to testimonial ${i + 1}`}
                                            aria-pressed={i === current}
                                        />
                                    ))}
                                </div>

                                <button onClick={next} className={styles.navBtn} aria-label="Next testimonial">
                                    <ChevronRight size={20} aria-hidden="true" />
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}