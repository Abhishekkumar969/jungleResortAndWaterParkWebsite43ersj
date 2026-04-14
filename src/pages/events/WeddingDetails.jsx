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
        return `https://img.youtube.com/vi/${id}/sddefault.webp`;
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
        { type: "image", category: "Photos", url: "/eventPics/Wed/venue-wedding.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Wed/unnamed.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Wed/1565185162_FB_IMG_1565185053943.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Wed/Mehendi-sangeet-and-haldi-decoration-ideas-at-home-1.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Wed/jungleresort.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Wed/jungleresort1.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Wed/unnamjms.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Wed/jungle-resort-kumhrar-patna.webp" },

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
                <title>Best Wedding Venue in Patna | Jungle Resort & Banquet Hall</title>

                <meta
                    name="description"
                    content="Plan your dream wedding at Jungle Resort Patna with luxury banquet hall, lawn, decoration & premium services. Book best wedding venue today!"
                />

                <meta
                    name="keywords"
                    content="Wedding venue Patna, Banquet hall Patna, Marriage hall Patna, Jungle Resort wedding"
                />

                {/* OG TAGS */}
                <meta property="og:title" content="Best Wedding Venue in Patna | Jungle Resort & Banquet Hall" />
                <meta property="og:description" content="Celebrate your wedding with luxury lawn & banquet hall at Jungle Resort Patna." />
                <meta property="og:image" content="https://jungleresortpatna.in/eventPics/Wed/venue-wedding.webp" />
                <meta property="og:url" content="https://jungleresortpatna.in/wedding" />
                <meta property="og:type" content="website" />

                {/* CANONICAL */}
                <link rel="canonical" href="https://jungleresortpatna.in/wedding" />

                {/* SCHEMA */}
                <script type="application/ld+json">
                    {`
{
  "@context": "https://schema.org",
  "@type": "EventVenue",
  "name": "Jungle Resort Wedding Venue",
  "image": "https://jungleresortpatna.in/eventPics/Wed/venue-wedding.webp",
  "url": "https://jungleresortpatna.in/wedding",
  "telephone": "+91-9065383838",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bypass Thana, Marcha - Mirchi Road, more, Dharamsala",
    "addressLocality": "Patna",
    "addressRegion": "Bihar",
    "postalCode": "800009",
    "addressCountry": "India"
  },
  "description": "Best wedding venue in Patna with banquet hall, lawn & decoration at Jungle Resort."
}
`}
                </script>
            </Helmet>

            <div className={styles.eventPage}>

                {/* FIXED BACKGROUND */}
                <div
                    className={styles.pageBg}
                    style={{ backgroundImage: "url(/images/venue-wedding.webp)" }}
                ></div>

                <div className={styles.pageOverlay}></div>

                <Navigation />

                {/* HERO */}
                <section className={styles.heroSection}>

                    <div className={styles.heroContent}>

                        <div className={styles.heroLeft}>
                            <h1 className={styles.heroTitle}>
                                Best <span>Wedding</span> Venue in Patna
                            </h1>
                        </div>

                        <div className={styles.heroRight}>
                            <QuickBookForm defaultFunctionType="Wedding" />
                        </div>
                    </div>
                </section>

                <section className={styles.mobileBook}>
                    <QuickBookForm defaultFunctionType="Wedding" />
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
                                        <img src={item.url} alt="Wedding Venue Jungle Resort Patna" className={styles.galleryImage} />
                                        <div className={styles.galleryOverlay}></div>
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src={getYouTubeThumbnail(item.url)}
                                            alt="Wedding Venue Jungle Resort Patna"
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
                                <img src={selectedMedia.url} className={styles.galleryFullImage} alt="Wedding Venue Jungle Resort Patna" />
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