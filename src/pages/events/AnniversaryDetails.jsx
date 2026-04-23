import React, { useState, useEffect, useRef } from "react";
import Navigation from "../../components/navigation-temp";
import Footer from "../../components/footer-temp";
import QuickBookForm from "../../components/quick-book-form";
import { Play } from "lucide-react";
import styles from "../../styles/eventspages.module.css";
import { Helmet } from "react-helmet";

export default function AnniversaryDetails() {

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
        { type: "image", category: "Photos", url: "/eventPics/Anniversary/Anniversary.webp" },
        // { type: "image", category: "Photos", url: "/eventPics/Anniversary/Anniversary2.webp" },
        // { type: "image", category: "Photos", url: "/eventPics/Anniversary/Anniversary3.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Anniversary/Anniversary4.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Anniversary/Anniversary5.webp" },
        // { type: "image", category: "Photos", url: "/eventPics/Anniversary/Anniversary6.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Anniversary/Anniversary7.webp" },
        { type: "image", category: "Photos", url: "/eventPics/Anniversary/Anniversary8.webp" },

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
                <title>Best Anniversary Celebration Place in Patna | Jungle Resort</title>

                <meta
                    name="description"
                    content="Celebrate your anniversary in style at Jungle Resort Patna with decoration, DJ, pool party & romantic ambiance. Book best anniversary venue today!"
                />

                <meta
                    name="keywords"
                    content="Anniversary celebration Patna, Anniversary party venue Patna, Romantic resort Patna, Anniversary dinner Patna, Couple celebration Patna, Jungle Resort anniversary" />

                {/* OG TAGS */}
                <meta property="og:title" content="Best Anniversary Celebration Place in Patna | Jungle Resort" />
                <meta property="og:description" content="Celebrate your anniversary with DJ, pool & decoration at Jungle Resort Patna." />
                <meta property="og:image" content="https://jungleresortpatna.in/eventPics/Anniversary/Anniversary.webp" />
                <meta property="og:url" content="https://jungleresortpatna.in/anniversary" />
                <meta property="og:type" content="website" />

                {/* CANONICAL */}
                <link rel="canonical" href="https://jungleresortpatna.in/anniversary" />

                {/* SCHEMA */}
                <script type="application/ld+json">
                    {`
{
  "@context": "https://schema.org",
  "@type": "EventVenue",
  "name": "Jungle Resort Anniversary Celebration",
  "image": "https://jungleresortpatna.in/eventPics/Anniversary/Anniversary.webp",
  "url": "https://jungleresortpatna.in/anniversary",
  "telephone": "+91-9065383838",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bypass Thana, Marcha - Mirchi Road, more, Dharamsala",
    "addressLocality": "Patna",
    "addressRegion": "Bihar",
    "postalCode": "800009",
    "addressCountry": "India"
  },
  "description": "Best anniversary celebration place in Patna with DJ, pool party & romantic decoration at Jungle Resort."
}
`}
                </script>
            </Helmet>

            <div className={styles.eventPage}>

                {/* FIXED BACKGROUND */}
                <div
                    className={styles.pageBg}
                    style={{ backgroundImage: "url(/eventPics/Anniversary/Anniversary7.webp)" }}
                ></div>
                <div className={styles.pageOverlay}></div>

                <Navigation />

                {/* HERO */}
                <section className={styles.heroSection}>

                    <div className={styles.heroContent}>

                        <div className={styles.heroLeft}>
                            <h1 className={styles.heroTitle}>
                                Best <span>Anniversary Celebration</span> Place in Patna                            </h1>
                        </div>

                        <div className={styles.heroRight}>
                            <QuickBookForm defaultFunctionType="Anniversary" />
                        </div>
                    </div>
                </section>

                <section className={styles.mobileBook}>
                    <QuickBookForm defaultFunctionType="Anniversary" />
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
                                        <img src={item.url} alt="Anniversary Decoration Jungle Resort Patna" className={styles.galleryImage} />
                                        <div className={styles.galleryOverlay}></div>
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src={getYouTubeThumbnail(item.url)}
                                            alt="Anniversary Decoration Jungle Resort Patna"
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
                                <img src={selectedMedia.url} className={styles.galleryFullImage} alt="Anniversary Decoration Jungle Resort Patna" />
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