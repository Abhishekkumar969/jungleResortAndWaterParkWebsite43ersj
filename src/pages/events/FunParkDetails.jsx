import React, { useState, useEffect, useRef } from "react";
import Navigation from "../../components/navigation-temp";
import Footer from "../../components/footer-temp";
import QuickBookForm from "../../components/quick-book-form";
import { Play } from "lucide-react";
import styles from "../../styles/eventspages.module.css";
import { Helmet } from "react-helmet";

export default function DestinationWeddingDetails() {

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
        { type: "image", category: "Photos", url: "/eventPics/Pool Party/New/2.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/Pool Party/New/3.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/Pool Party/New/4.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/Pool Party/New/6.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/Pool Party/New/7.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/Pool Party/New/8.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/Pool Party/New/10.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/Pool Party/New/11.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/Pool Party/New/12.jpg" },
    ];

    const filtered = media;

    const selectedMedia = selectedIndex !== null ? filtered[selectedIndex] : null;

    return (
        <>
            <Helmet>
                <title>Best Fun Park in Patna | Jungle Resort & Waterpark</title>

                <meta
                    name="description"
                    content="Enjoy fun park rides, water activities, DJ, rain dance & family entertainment at Jungle Resort Patna. Book best fun park experience today!"
                />

                <meta
                    name="keywords"
                    content="Fun park Patna, Amusement park Patna, Water rides Patna, Jungle Resort fun park"
                />

                {/* OG TAGS */}
                <meta property="og:title" content="Best Fun Park in Patna | Jungle Resort & Waterpark" />
                <meta property="og:description" content="Enjoy fun rides, water park & DJ at Jungle Resort Patna." />
                <meta property="og:image" content="https://jungleresortpatna.in/images/funpark.jpg" />
                <meta property="og:url" content="https://jungleresortpatna.in/funpark" />
                <meta property="og:type" content="website" />

                {/* CANONICAL */}
                <link rel="canonical" href="https://jungleresortpatna.in/funpark" />

                {/* SCHEMA */}
                <script type="application/ld+json">
                    {`
{
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Jungle Resort Fun Park",
  "image": "https://jungleresortpatna.in/images/funpark.jpg",
  "url": "https://jungleresortpatna.in/funpark",
  "telephone": "+91-9065383838",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bypass Thana, Marcha - Mirchi Road, more, Dharamsala",
    "addressLocality": "Patna",
    "addressRegion": "Bihar",
    "postalCode": "800009",
    "addressCountry": "India"
  },
  "description": "Best fun park in Patna with rides, water activities & entertainment at Jungle Resort."
}
`}
                </script>
            </Helmet>

            <div className={styles.eventPage}>


                {/* FIXED BACKGROUND */}
                <div
                    className={styles.pageBg}
                    style={{ backgroundImage: "url(/images/funpark.jpg)" }}
                ></div>
                <div className={styles.pageOverlay}></div>

                <Navigation />

                {/* HERO */}
                <section className={styles.heroSection}>

                    <div className={styles.heroContent}>

                        <div className={styles.heroLeft}>
                            <h1 className={styles.heroTitle}>
                                Best <span>Fun Park</span> in Patna
                            </h1>
                        </div>

                        <div className={styles.heroRight}>
                            <QuickBookForm defaultFunctionType="FunPark" />
                        </div>
                    </div>
                </section>

                <section className={styles.mobileBook}>
                    <QuickBookForm defaultFunctionType="FunPark" />
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
                                        <img src={item.url} alt="Fun Park Jungle Resort Patna" className={styles.galleryImage} />
                                        <div className={styles.galleryOverlay}></div>
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src={getYouTubeThumbnail(item.url)}
                                            alt="Fun Park Jungle Resort Patna"
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
                                <img src={selectedMedia.url} className={styles.galleryFullImage} alt="Fun Park Jungle Resort Patna" />
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