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
        { type: "image", category: "Photos", url: "/eventPics/Corporate Event/Corporate Event5.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Corporate Event/Corporate Event6.webp" },
        // { type: "image", category: "Photos", url: "/eventPics/Corporate Event/Corporate Event3.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Corporate Event/Corporate Event4.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Corporate Event/Corporate Event7.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Corporate Event/Corporate Event.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Corporate Event/Corporate Event1.webp" },
        // { type: "image", category: "Photos", url: "/eventPics/Corporate Event/Corporate Event2.webp" },
    ];

    const filtered = media;

    const selectedMedia = selectedIndex !== null ? filtered[selectedIndex] : null;

    return (
        <>
            <Helmet>
                <title>Best Corporate Party Venue in Patna | Jungle Resort</title>

                <meta
                    name="description"
                    content="Host amazing corporate parties at Jungle Resort Patna with DJ, pool party, team activities & premium setup. Book best corporate party venue today!"
                />

                <meta
                    name="keywords"
                    content="Corporate party Patna, Office party venue Patna, Corporate event Patna, Team outing Patna, Office get together Patna, Jungle Resort corporate party" />

                {/* OG TAGS */}
                <meta property="og:title" content="Best Corporate Party Venue in Patna | Jungle Resort" />
                <meta property="og:description" content="Plan your corporate party with DJ, pool & premium setup at Jungle Resort Patna." />
                <meta property="og:image" content="https://jungleresortpatna.in/eventPics/Corporate Event/Corporate Event.webp" />
                <meta property="og:url" content="https://jungleresortpatna.in/corporateparty" />
                <meta property="og:type" content="website" />

                {/* CANONICAL */}
                <link rel="canonical" href="https://jungleresortpatna.in/corporateparty" />

                {/* SCHEMA */}
                <script type="application/ld+json">
                    {`
{
  "@context": "https://schema.org",
  "@type": "EventVenue",
  "name": "Jungle Resort Corporate Party Venue",
  "image": "https://jungleresortpatna.in/eventPics/Corporate Event/Corporate Event.webp",
  "url": "https://jungleresortpatna.in/corporateparty",
  "telephone": "+91-9065383838",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bypass Thana, Marcha - Mirchi Road, more, Dharamsala",
    "addressLocality": "Patna",
    "addressRegion": "Bihar",
    "postalCode": "800009",
    "addressCountry": "India"
  },
  "description": "Best corporate party venue in Patna with DJ, pool party & team activities at Jungle Resort."
}
`}
                </script>
            </Helmet>

            <div className={styles.eventPage}>

                {/* FIXED BACKGROUND */}
                <div
                    className={styles.pageBg}
                    style={{ backgroundImage: "url(/images/CorporateParty.webp)" }}
                ></div>
                <div className={styles.pageOverlay}></div>

                <Navigation />

                {/* HERO */}
                <section className={styles.heroSection}>

                    <div className={styles.heroContent}>

                        <div className={styles.heroLeft}>
                            <h1 className={styles.heroTitle}>
                                Best <span>Corporate Party</span> Venue in Patna
                            </h1>
                        </div>

                        <div className={styles.heroRight}>
                            <QuickBookForm defaultFunctionType="Corporate Party" />
                        </div>
                    </div>
                </section>

                <section className={styles.mobileBook}>
                    <QuickBookForm defaultFunctionType="Corporate Party" />
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
                                        <img src={item.url} alt="Corporate Party Jungle Resort Patna" className={styles.galleryImage} />
                                        <div className={styles.galleryOverlay}></div>
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src={getYouTubeThumbnail(item.url)}
                                            alt="Corporate Party Jungle Resort Patna"
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
                                <img src={selectedMedia.url} className={styles.galleryFullImage} alt="Corporate Party Jungle Resort Patna" />
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