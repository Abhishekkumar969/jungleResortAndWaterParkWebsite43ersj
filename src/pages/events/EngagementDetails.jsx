import React, { useState, useEffect, useRef } from "react";
import Navigation from "../../components/navigation-temp";
import Footer from "../../components/footer-temp";
import QuickBookForm from "../../components/quick-book-form";
import { Play } from "lucide-react";
import styles from "../../styles/eventspages.module.css";
import { Helmet } from "react-helmet";

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
        { type: "image", category: "Photos", url: "/eventPics/DestWed/3f4ce4265b717aacce9b6b8378018292.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/DestWed/132.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/DestWed/unnamed.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/Anniversary/Anniversary6.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/DestWed/0903809001493963548.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/DestWed/image10(57).jpeg" },
        { type: "image", category: "Photos", url: "/eventPics/DestWed/hero.webp" },
        { type: "image", category: "Photos", url: "/eventPics/DestWed/1485498619_595x400.png" },

        // { type: "video", category: "Videos", url: "https://www.youtube.com/embed/j3mVk4QBc40" },
        // { type: "video", category: "Videos", url: "https://www.youtube.com/embed/q5TWK4_dHoo" },
        // { type: "video", category: "Videos", url: "https://www.youtube.com/embed/RNOTMAzo5_M" },
        // { type: "video", category: "Videos", url: "https://www.youtube.com/embed/DzThR9h15Js" },
        // { type: "video", category: "Videos", url: "https://www.youtube.com/embed/nsYtMbs0P6k" },
        // { type: "video", category: "Videos", url: "https://www.youtube.com/embed/HAhSASuW28E" },
    ];

    const filtered = media;

    const selectedMedia = selectedIndex !== null ? filtered[selectedIndex] : null;

    return (
        <>
            <Helmet>
                <title>Best Engagement Ceremony Venue in Patna | Jungle Resort</title>

                <meta
                    name="description"
                    content="Celebrate your engagement ceremony at Jungle Resort Patna with decoration, DJ, luxury venue & memorable setup. Book best engagement venue today!"
                />

                <meta
                    name="keywords"
                    content="Engagement venue Patna, Ring ceremony Patna, Engagement party Patna, Jungle Resort engagement"
                />

                {/* OG TAGS */}
                <meta property="og:title" content="Best Engagement Ceremony Venue in Patna | Jungle Resort" />
                <meta property="og:description" content="Celebrate engagement ceremony with decoration & luxury setup at Jungle Resort Patna." />
                <meta property="og:image" content="https://jungleresortpatna.in/images/weddings1.jpg" />
                <meta property="og:url" content="https://jungleresortpatna.in/engagement" />
                <meta property="og:type" content="website" />

                {/* CANONICAL */}
                <link rel="canonical" href="https://jungleresortpatna.in/engagement" />

                {/* SCHEMA */}
                <script type="application/ld+json">
                    {`
{
  "@context": "https://schema.org",
  "@type": "EventVenue",
  "name": "Jungle Resort Engagement Ceremony",
  "image": "https://jungleresortpatna.in/images/weddings1.jpg",
  "url": "https://jungleresortpatna.in/engagement",
  "telephone": "+91-9065383838",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bypass Thana, Marcha - Mirchi Road, more, Dharamsala",
    "addressLocality": "Patna",
    "addressRegion": "Bihar",
    "postalCode": "800009",
    "addressCountry": "India"
  },
  "description": "Best engagement ceremony venue in Patna with decoration & premium setup at Jungle Resort."
}
`}
                </script>
            </Helmet>

            <div className={styles.eventPage}>


                {/* FIXED BACKGROUND */}
                <div
                    className={styles.pageBg}
                    style={{ backgroundImage: "url(/images/engagement.jpg)" }}
                ></div>
                <div className={styles.pageOverlay}></div>

                <Navigation />

                {/* HERO */}
                <section className={styles.heroSection}>

                    <div className={styles.heroContent}>

                        <div className={styles.heroLeft}>
                            <h1 className={styles.heroTitle}>
                                Best <span>Engagement Ceremony</span> Venue in Patna
                            </h1>
                        </div>

                        <div className={styles.heroRight}>
                            <QuickBookForm defaultFunctionType="Engagement" />
                        </div>
                    </div>
                </section>

                <section className={styles.mobileBook}>
                    <QuickBookForm defaultFunctionType="Engagement" />
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
                                        <img src={item.url} alt="Engagement Ceremony Jungle Resort Patna" className={styles.galleryImage} />
                                        <div className={styles.galleryOverlay}></div>
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src={getYouTubeThumbnail(item.url)}
                                            alt="Engagement Ceremony Jungle Resort Patna"
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
                                <img src={selectedMedia.url} className={styles.galleryFullImage} alt="Engagement Ceremony Jungle Resort Patna" />
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
        </>
    );
}