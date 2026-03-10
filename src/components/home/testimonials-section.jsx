import { useEffect } from "react";
import styles from "../../styles/testimonials-section.module.css";

export default function GoogleReviews() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://elfsightcdn.com/platform.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <section className={styles.googleReviewsSection}>
            <div className={styles.googleReviewsContainer}>
                <div
                    className="elfsight-app-01e88011-40a6-4790-a26b-541d85ac57bb"
                    data-elfsight-app-lazy
                ></div>
            </div>
        </section>
    );
}