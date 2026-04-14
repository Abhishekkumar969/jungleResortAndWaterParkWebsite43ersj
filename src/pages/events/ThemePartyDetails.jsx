import React, { useState, useEffect, useRef } from "react";
import Navigation from "../../components/navigation-temp";
import Footer from "../../components/footer-temp";
import QuickBookForm from "../../components/quick-book-form";
import { Play } from "lucide-react";
import styles from "../../styles/eventspages.module.css";
import { Helmet } from "react-helmet";

export default function RingCeremonyDetails() {

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
        { type: "image", category: "Photos", url: "/eventPics/Theme Party/birthday-princess.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Theme Party/birthday-jungle.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Theme Party/Theme Party.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Theme Party/Theme Party3.webp" },
        // { type: "image", category: "Photos", url: "/eventPics/Theme Party/Theme Party4.webp" },
        // { type: "image", category: "Photos", url: "/eventPics/Theme Party/Theme Party5.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Theme Party/Theme Party7.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Theme Party/Theme Party6.webp" },
    ];

    const filtered = media;

    const selectedMedia = selectedIndex !== null ? filtered[selectedIndex] : null;

    return (
        <>

            <Helmet>
                <title>Best Theme Party Venue in Patna | Jungle Resort</title>

                <meta
                    name="description"
                    content="Celebrate unique theme parties at Jungle Resort Patna with creative decoration, DJ, pool & fun activities. Book best theme party venue today!"
                />

                <meta
                    name="keywords"
                    content="Theme party Patna, Birthday theme party Patna, Kids theme party Patna, Jungle Resort theme party"
                />

                {/* OG TAGS */}
                <meta property="og:title" content="Best Theme Party Venue in Patna | Jungle Resort" />
                <meta property="og:description" content="Enjoy creative theme parties with decoration & fun at Jungle Resort Patna." />
                <meta property="og:image" content="https://jungleresortpatna.in/images/birthday-princess.webp" />
                <meta property="og:url" content="https://jungleresortpatna.in/themeparty" />
                <meta property="og:type" content="website" />

                {/* CANONICAL */}
                <link rel="canonical" href="https://jungleresortpatna.in/themeparty" />

                {/* SCHEMA */}
                <script type="application/ld+json">
                    {`
{
  "@context": "https://schema.org",
  "@type": "EventVenue",
  "name": "Jungle Resort Theme Party Venue",
  "image": "https://jungleresortpatna.in/images/birthday-princess.webp",
  "url": "https://jungleresortpatna.in/themeparty",
  "telephone": "+91-9065383838",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bypass Thana, Marcha - Mirchi Road, more, Dharamsala",
    "addressLocality": "Patna",
    "addressRegion": "Bihar",
    "postalCode": "800009",
    "addressCountry": "India"
  },
  "description": "Best theme party venue in Patna with creative decoration & fun setup at Jungle Resort."
}
`}
                </script>
            </Helmet>

            <div className={styles.eventPage}>


                {/* FIXED BACKGROUND */}
                <div
                    className={styles.pageBg}
                    style={{ backgroundImage: "url(/images/birthday-princess.webp)" }}
                ></div>

                <div className={styles.pageOverlay}></div>

                <Navigation />

                {/* HERO */}
                <section className={styles.heroSection}>

                    <div className={styles.heroContent}>

                        <div className={styles.heroLeft}>
                            <h1 className={styles.heroTitle}>
                                Best <span>Theme Party</span> Venue in Patna
                            </h1>
                        </div>

                        <div className={styles.heroRight}>
                            <QuickBookForm defaultFunctionType="Theme Party" />
                        </div>
                    </div>
                </section>

                <section className={styles.mobileBook}>
                    <QuickBookForm defaultFunctionType="Theme Party" />
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
                                        <img src={item.url} alt="Theme Party Jungle Resort Patna" className={styles.galleryImage} />
                                        <div className={styles.galleryOverlay}></div>
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src={getYouTubeThumbnail(item.url)}
                                            alt="Theme Party Jungle Resort Patna"
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
                                <img src={selectedMedia.url} className={styles.galleryFullImage} alt="Theme Party Jungle Resort Patna" />
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