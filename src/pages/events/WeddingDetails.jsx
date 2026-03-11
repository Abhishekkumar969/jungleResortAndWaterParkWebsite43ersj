import React, { useState, useEffect, useRef } from "react";
import Navigation from "../../components/navigation-temp";
import Footer from "../../components/footer-temp";
import QuickBookForm from "../../components/quick-book-form";
import { Play } from "lucide-react";
import FloatingContacts from "../../components/floating-contacts";
import styles from "../../styles/eventspages.module.css";

export default function WeddingDetails() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const bannerImages = [
        { url: "/images/banner.jpg", alt: "Wedding Hall" },
        { url: "/images/banner.jpg", alt: "Corporate Event" },
        { url: "/images/banner.jpg", alt: "Birthday Party" },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [bannerImages.length]);

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
        { type: "image", category: "Photos", url: "/images/weddings1.jpg" },
        { type: "image", category: "Photos", url: "/images/weddings2.jpg" },
        { type: "image", category: "Photos", url: "/images/weddings3.jpg" },
        { type: "image", category: "Photos", url: "/images/weddings4.jpg" },
        { type: "image", category: "Photos", url: "/images/weddings5.jpg" },
        { type: "image", category: "Photos", url: "/images/weddings6.jpg" },

        { type: "video", category: "Videos", url: "https://www.youtube.com/embed/j3mVk4QBc40" },
        { type: "video", category: "Videos", url: "https://www.youtube.com/embed/q5TWK4_dHoo" },
        { type: "video", category: "Videos", url: "https://www.youtube.com/embed/RNOTMAzo5_M" },
        { type: "video", category: "Videos", url: "https://www.youtube.com/embed/DzThR9h15Js" },
        { type: "video", category: "Videos", url: "https://www.youtube.com/embed/nsYtMbs0P6k" },
        { type: "video", category: "Videos", url: "https://www.youtube.com/embed/HAhSASuW28E" },
    ];

    const filtered = media;

    const selectedMedia = selectedIndex !== null ? filtered[selectedIndex] : null;

    return (
        <div className={styles.eventPage}>

            <Navigation />
            <FloatingContacts />

            {/* HERO */}
            <section className={styles.heroSection}>

                <div className={styles.heroSlider}>

                    {bannerImages.map((image, index) => (

                        <div
                            key={index}
                            className={`${styles.heroSlide} ${index === currentSlide ? styles.active : ""}`}
                        >

                            <img src={image.url} alt={image.alt} className={styles.heroImage} />

                            <div className={styles.heroOverlay}></div>

                        </div>

                    ))}

                    <div className={styles.heroDots}>
                        {bannerImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`${styles.dot} ${index === currentSlide ? styles.active : ""}`}
                            />
                        ))}
                    </div>

                </div>

                <div className={styles.heroContent}>

                    <div className={styles.heroLeft}>
                        <h1 className={styles.heroTitle}>
                            About <span>Wedding</span> Events
                        </h1>
                    </div>

                    <div className={styles.heroRight}>
                        <QuickBookForm defaultFunctionType="Wedding" />
                    </div>

                </div>

            </section>

            {/* GALLERY */}

            <div className={styles.galleryContent}>

                <div className={styles.galleryHeader}>
                    <h1 className={styles.galleryTitle}>Gallery</h1>
                    <p className={styles.gallerySubtitle}>
                        Explore our collection of stunning events and decorations
                    </p>
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

            <section className={styles.mobileBook}>
                <QuickBookForm defaultFunctionType="Wedding" />
            </section>

            <Footer />

        </div>
    );
}