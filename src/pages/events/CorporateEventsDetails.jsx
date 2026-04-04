import React, { useState, useEffect, useRef } from "react";
import Navigation from "../../components/navigation-temp";
import Footer from "../../components/footer-temp";
import QuickBookForm from "../../components/quick-book-form";
import { Play } from "lucide-react";
import styles from "../../styles/eventspages.module.css";
import { Helmet } from "react-helmet";

export default function CorporateEventsDetails() {


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
        { type: "image", category: "Photos", url: "/eventPics/Corporate Event/Corporate Event.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/Corporate Event/Corporate Event1.jpg" },
        // { type: "image", category: "Photos", url: "/eventPics/Corporate Event/Corporate Event2.jpg" },
        // { type: "image", category: "Photos", url: "/eventPics/Corporate Event/Corporate Event3.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/Corporate Event/Corporate Event4.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/Corporate Event/Corporate Event5.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/Corporate Event/Corporate Event7.jpg" },
    ];

    const filtered = media;

    const selectedMedia = selectedIndex !== null ? filtered[selectedIndex] : null;

    return (
        <>
            <Helmet>
                <title>Best Corporate Event Venue in Patna | Jungle Resort</title>

                <meta
                    name="description"
                    content="Host professional corporate events at Jungle Resort Patna with premium venue, conference setup, pool party & team activities. Book now!"
                />

                <meta
                    name="keywords"
                    content="Corporate event venue Patna, Corporate party Patna, Conference hall Patna, Team outing Patna, Office party venue Patna, Jungle Resort corporate event" />

                {/* OG TAGS */}
                <meta property="og:title" content="Best Corporate Event Venue in Patna | Jungle Resort" />
                <meta property="og:description" content="Plan corporate events, meetings & team outings at Jungle Resort Patna." />
                <meta property="og:image" content="https://jungleresortpatna.in/eventPics/Corporate Event/Corporate Event.jpg" />
                <meta property="og:url" content="https://jungleresortpatna.in/corporateevents" />
                <meta property="og:type" content="website" />

                {/* CANONICAL */}
                <link rel="canonical" href="https://jungleresortpatna.in/corporateevents" />

                {/* SCHEMA */}
                <script type="application/ld+json">
                    {`
{
  "@context": "https://schema.org",
  "@type": "EventVenue",
  "name": "Jungle Resort Corporate Event Venue",
  "image": "https://jungleresortpatna.in/eventPics/Corporate Event/Corporate Event.jpg",
  "url": "https://jungleresortpatna.in/corporateevents",
  "telephone": "+91-9065383838",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bypass Thana, Marcha - Mirchi Road, more, Dharamsala",
    "addressLocality": "Patna",
    "addressRegion": "Bihar",
    "postalCode": "800009",
    "addressCountry": "India"
  },
  "description": "Best corporate event venue in Patna for meetings, conferences & team outings at Jungle Resort."
}
`}
                </script>
            </Helmet>

            <div className={styles.eventPage}>

                {/* FIXED BACKGROUND */}
                <div
                    className={styles.pageBg}
                    style={{ backgroundImage: "url(/images/CorporateEvent7.jpg)" }}
                ></div>
                <div className={styles.pageOverlay}></div>

                <Navigation />

                {/* HERO */}
                <section className={styles.heroSection}>

                    <div className={styles.heroContent}>

                        <div className={styles.heroLeft}>
                            <h1 className={styles.heroTitle}>
                                Best <span>Corporate Event</span> Venue in Patna
                            </h1>
                        </div>

                        <div className={styles.heroRight}>
                            <QuickBookForm defaultFunctionType="Corporate Event" />
                        </div>
                    </div>
                </section>

                <section className={styles.mobileBook}>
                    <QuickBookForm defaultFunctionType="Corporate Event" />
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
                                        <img src={item.url} alt="Corporate Event Setup Jungle Resort Patna" className={styles.galleryImage} />
                                        <div className={styles.galleryOverlay}></div>
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src={getYouTubeThumbnail(item.url)}
                                            alt="Corporate Event Setup Jungle Resort Patna"
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
                                <img src={selectedMedia.url} className={styles.galleryFullImage} alt="Corporate Event Setup Jungle Resort Patna" />
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