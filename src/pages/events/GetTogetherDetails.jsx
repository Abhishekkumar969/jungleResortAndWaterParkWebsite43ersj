import React, { useState, useEffect, useRef } from "react";
import Navigation from "../../components/navigation-temp";
import Footer from "../../components/footer-temp";
import QuickBookForm from "../../components/quick-book-form";
import { Play } from "lucide-react";
import styles from "../../styles/eventspages.module.css";

export default function WeddingDetails() {

    const [selectedIndex, setSelectedIndex] = useState(null);

    const getYouTubeThumbnail = (url) => {
        const id = url.split("/embed/")[1].split("?")[0];
        return `https://img.youtube.com/vi/${id}/sddefault.jpg`;
    };

    const itemRefs = useRef([]);

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.show);
                        observer.unobserve(entry.target);
                    }

                });

            },
            { threshold: 0.2 }
        );

        itemRefs.current.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();

    }, []);

    const media = [
        { type: "image", category: "Photos", url: "/eventPics/Wed/jungleresort.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/Wed/jungleresort1.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/Wed/unnamjms.png" },
        { type: "image", category: "Photos", url: "/eventPics/Wed/jungle-resort-kumhrar-patna.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/DestWed/0903809001493963548.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/DestWed/image10(57).jpeg" },
        { type: "image", category: "Photos", url: "/eventPics/DestWed/hero.webp" },
        { type: "image", category: "Photos", url: "/eventPics/DestWed/1485498619_595x400.png" },
    ];

    const filtered = media;

    const selectedMedia = selectedIndex !== null ? filtered[selectedIndex] : null;

    return (
        <div className={styles.eventPage}>

            {/* FIXED BACKGROUND */}
            <div
                className={styles.pageBg}
                style={{ backgroundImage: "url(/images/gettogether.jpg)" }}
            ></div>

            <div className={styles.pageOverlay}></div>

            <Navigation />

            {/* HERO */}
            <section className={styles.heroSection}>

                <div className={styles.heroContent}>

                    <div className={styles.heroLeft}>
                        <h1 className={styles.heroTitle}>
                            Your Dream <span>Get Together</span> Starts Here
                        </h1>
                    </div>

                    <div className={styles.heroRight}>
                        <QuickBookForm defaultFunctionType="Get Together" />
                    </div>
                </div>
            </section>

            <section className={styles.mobileBook}>
                <QuickBookForm defaultFunctionType="Get Together" />
            </section>

            {/* GALLERY */}
            <div className={styles.galleryContent}>

                <div className={styles.galleryHeader}>
                    <h1 className={styles.galleryTitle}>Gallery</h1>
                </div>

                <div className={styles.galleryGrid}>

                    {media.map((item, i) => (

                        <div
                            key={i}
                            ref={(el) => (itemRefs.current[i] = el)}
                            className={`${styles.galleryItem} ${styles.animateItem}`}
                            onClick={() => setSelectedIndex(i)}
                        >

                            {item.type === "image" ? (
                                <>
                                    <img src={item.url} alt="" className={styles.galleryImage} />
                                    <div className={styles.galleryOverlay}></div>
                                </>
                            ) : (
                                <>
                                    <img
                                        src={getYouTubeThumbnail(item.url)}
                                        alt=""
                                        className={styles.galleryImage}
                                    />
                                    <div className={styles.galleryOverlay}></div>
                                    <Play className={styles.galleryPlay} />
                                </>
                            )}

                        </div>

                    ))}

                </div>

            </div>

            {selectedMedia && (

                <div className={styles.galleryViewer} onClick={() => setSelectedIndex(null)}>

                    <button className={styles.galleryClose}>✕</button>

                    <div
                        className={styles.galleryViewerContent}
                        onClick={(e) => e.stopPropagation()}
                    >

                        {selectedMedia.type === "image" ? (
                            <img src={selectedMedia.url} className={styles.galleryFullImage} alt="" />
                        ) : (
                            <iframe
                                src={selectedMedia.url}
                                width="100%"
                                height="600"
                                frameBorder="0"
                                allowFullScreen
                                title="video"
                            />
                        )}

                    </div>

                </div>

            )}

            <Footer />

        </div>
    );
}