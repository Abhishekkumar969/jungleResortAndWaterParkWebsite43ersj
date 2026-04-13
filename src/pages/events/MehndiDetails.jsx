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
        { type: "image", category: "Photos", url: "/eventPics/Mehndi/jungle resort Mehndi.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/Mehndi/jungle resort Mehndi 2.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/Mehndi/jungle resort Mehndi 3.jpg" },
        // { type: "image", category: "Photos", url: "/eventPics/Mehndi/jungle resort Mehndi 4.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/Mehndi/jungle resort Mehndi 5.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/Mehndi/jungle resort Mehndi 6.jpg" },
        { type: "image", category: "Photos", url: "/eventPics/Mehndi/jungle resort Mehndi 7.jpg" },
        // { type: "image", category: "Photos", url: "/eventPics/Mehndi/jungle resort Mehndi 8.jpg" },

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
                <title>Best Mehndi Ceremony Venue in Patna | Jungle Resort</title>

                <meta
                    name="description"
                    content="Celebrate your Mehndi ceremony at Jungle Resort Patna with vibrant decoration, music, dance & joyful atmosphere. Book best Mehndi venue today!"
                />

                <meta
                    name="keywords"
                    content="Mehndi ceremony Patna, Mehndi function venue Patna, Wedding Mehndi Patna, Jungle Resort Mehndi"
                />

                {/* OG TAGS */}
                <meta property="og:title" content="Best Mehndi Ceremony Venue in Patna | Jungle Resort" />
                <meta property="og:description" content="Celebrate colorful Mehndi ceremony with music & decoration at Jungle Resort Patna." />
                <meta property="og:image" content="https://jungleresortpatna.in/images/mehndi.jpg" />
                <meta property="og:url" content="https://jungleresortpatna.in/mehndi" />
                <meta property="og:type" content="website" />

                {/* CANONICAL */}
                <link rel="canonical" href="https://jungleresortpatna.in/mehndi" />

                {/* SCHEMA */}
                <script type="application/ld+json">
                    {`
{
  "@context": "https://schema.org",
  "@type": "EventVenue",
  "name": "Jungle Resort Mehndi Ceremony Venue",
  "image": "https://jungleresortpatna.in/images/mehndi.jpg",
  "url": "https://jungleresortpatna.in/mehndi",
  "telephone": "+91-9065383838",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bypass Thana, Marcha - Mirchi Road, more, Dharamsala",
    "addressLocality": "Patna",
    "addressRegion": "Bihar",
    "postalCode": "800009",
    "addressCountry": "India"
  },
  "description": "Best Mehndi ceremony venue in Patna with decoration & music at Jungle Resort."
}
`}
                </script>
            </Helmet>



            <div className={styles.eventPage}>


                {/* FIXED BACKGROUND */}
                <div
                    className={styles.pageBg}
                    style={{ backgroundImage: "url(/images/mehndi.jpg)" }}
                ></div>
                <div className={styles.pageOverlay}></div>

                <Navigation />

                {/* HERO */}
                <section className={styles.heroSection}>

                    <div className={styles.heroContent}>

                        <div className={styles.heroLeft} style={{ color: "white" }}>
                            <h1 className={styles.heroTitle}>
                                Best <span>Mehndi Ceremony</span> Venue in Patna
                            </h1>

                            <h2>Celebrate Mehndi Ceremony at Jungle Resort Patna</h2>

                            <p>
                                Jungle Resort Patna offers the best Mehndi ceremony venue in Patna with vibrant
                                decorations, music, dance, and a joyful atmosphere. Our spacious banquet halls
                                and open lawn areas are perfect for hosting traditional Mehndi functions.
                            </p>

                            <p>
                                We provide complete event planning including Mehndi decor, catering services,
                                DJ music, and customized themes. Whether it’s an intimate gathering or a grand
                                celebration, Jungle Resort ensures a memorable Mehndi experience in Patna.
                            </p>
                        </div>

                        <div className={styles.heroRight}>
                            <QuickBookForm defaultFunctionType="Mehndi" />
                        </div>
                    </div>
                </section>

                <section className={styles.mobileBook}>
                    <QuickBookForm defaultFunctionType="Mehndi" />
                </section>

                {/* GALLERY */}

                <div className={styles.galleryContent}>

                    <div className={styles.galleryHeader}>
                        <h2 className={styles.galleryTitle}>Gallery</h2>
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
                                        <img src={item.url} alt="Mehndi Ceremony Jungle Resort Patna" className={styles.galleryImage} />
                                        <div className={styles.galleryOverlay}></div>
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src={getYouTubeThumbnail(item.url)}
                                            alt="Mehndi Ceremony Jungle Resort Patna"
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
                                <img src={selectedMedia.url} className={styles.galleryFullImage} alt="Mehndi Ceremony Jungle Resort Patna" />
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