import React, { useState, useEffect, useRef } from "react";
import Navigation from "../components/navigation-temp";
import QuickBookForm from "../components/quick-book-form";
import { Play } from "lucide-react";

import styles from "../styles/eventspages.module.css";
import useSEO from "../hooks/useSEO";

/**
 * Reusable Event Detail Page
 * Props:
 *  - helmet     : { title, description, keywords, ogImage, canonical }
 *  - hero       : { bg, pill, title, titleHighlight, subtitle, features[] }
 *  - info       : [{ icon, label, value }]  (up to 4-5 items)
 *  - desc       : { label, title, text, highlights[], image }
 *  - gallery    : [{ type:"image"|"video", url, alt }]
 *  - formType   : string for QuickBookForm
 */
export default function EventDetailPage({ helmet, hero, info, desc, gallery, formType }) {
    useSEO({
        title: helmet?.title,
        description: helmet?.description,
        keywords: helmet?.keywords,
        ogImage: helmet?.ogImage,
        ogUrl: helmet?.canonical ? `https://www.jungleresortpatna.in${helmet.canonical}` : undefined,
        canonical: helmet?.canonical ? `https://www.jungleresortpatna.in${helmet.canonical}` : undefined,
    });

    const [selectedIndex, setSelectedIndex] = useState(null);
    const itemRefs = useRef([]);

    const getYouTubeThumbnail = (url) => {
        try {
            const id = url.split("/embed/")[1].split("?")[0];
            return `https://img.youtube.com/vi/${id}/sddefault.webp`;
        } catch { return ""; }
    };

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
            { threshold: 0.15 }
        );
        itemRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, [gallery]);

    const selectedMedia = selectedIndex !== null ? gallery[selectedIndex] : null;

    return (
        <>


            <div className={styles.eventPage}>
                <Navigation />

                {/* ─── HERO ─── */}
                <section className={styles.heroSection}>
                    <div
                        className={styles.heroBg}
                        style={{ backgroundImage: `url(${hero.bg})` }}
                    />
                    <div className={styles.heroOverlay} />

                    <div className={styles.heroContent}>
                        <div className={styles.heroLeft}>
                            {hero.pill && (
                                <span className={styles.heroPill}>✨ {hero.pill}</span>
                            )}
                            <h1 className={styles.heroTitle}>
                                {hero.title}{" "}
                                {hero.titleHighlight && (
                                    <span>{hero.titleHighlight}</span>
                                )}
                            </h1>
                            {hero.subtitle && (
                                <p className={styles.heroSubtitle}>{hero.subtitle}</p>
                            )}
                            {hero.features && hero.features.length > 0 && (
                                <div className={styles.heroFeatures}>
                                    {hero.features.map((f, i) => (
                                        <span key={i} className={styles.heroFeature}>{f}</span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className={styles.heroRight}>
                            <QuickBookForm defaultFunctionType={formType} />
                        </div>
                    </div>
                </section>

                {/* Mobile form */}
                <section className={styles.mobileBook}>
                    <QuickBookForm defaultFunctionType={formType} />
                </section>

                {/* ─── INFO STRIP ─── */}
                {/* {info && info.length > 0 && (
                    <div className={styles.infoStrip}>
                        {info.map((item, i) => (
                            <div key={i} className={styles.infoItem}>
                                <span className={styles.infoIcon}>{item.icon}</span>
                                <span className={styles.infoLabel}>{item.label}</span>
                                <span className={styles.infoValue}>{item.value}</span>
                            </div>
                        ))}
                    </div>
                )} */}

                {/* ─── DESCRIPTION ─── */}
                {desc && (
                    <section className={styles.descSection}>
                        <div className={styles.descLeft}>
                            <div className={styles.descLabel}>{desc.label}</div>
                            <h2 className={styles.descTitle}>{desc.title}</h2>
                            <p className={styles.descText}>{desc.text}</p>
                            {desc.highlights && (
                                <div className={styles.descHighlights}>
                                    {desc.highlights.map((h, i) => (
                                        <div key={i} className={styles.descHighlight}>
                                            <div className={styles.descHighlightDot} />
                                            {h}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className={styles.descRight}>
                            <img
                                src={desc.image}
                                alt={desc.title}
                                className={styles.descImage}
                                loading="lazy"
                            />
                        </div>
                    </section>
                )}

                {/* ─── GALLERY ─── */}
                {gallery && gallery.length > 0 && (
                    <section className={styles.gallerySection}>
                        <div className={styles.gallerySectionHead}>
                            <div className={styles.galleryLabel}>📸 Photo Gallery</div>
                            <h2 className={styles.galleryTitle}>Our Moments</h2>
                        </div>

                        <div className={styles.galleryGrid}>
                            {gallery.map((item, i) => (
                                <div
                                    key={i}
                                    ref={(el) => (itemRefs.current[i] = el)}
                                    className={`${styles.galleryItem} ${styles.animateItem}`}
                                    onClick={() => setSelectedIndex(i)}
                                >
                                    <img
                                        src={item.type === "video" ? getYouTubeThumbnail(item.url) : item.url}
                                        alt={item.alt || "Jungle Resort Event"}
                                        className={styles.galleryImage}
                                        loading="lazy"
                                    />
                                    <div className={styles.galleryOverlay} />
                                    {item.type === "video" && (
                                        <Play className={styles.galleryPlay} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* ─── FULLSCREEN VIEWER ─── */}
                {selectedMedia && (
                    <div className={styles.galleryViewer} onClick={() => setSelectedIndex(null)}>
                        <button className={styles.galleryClose} aria-label="Close">✕</button>
                        <div
                            className={styles.galleryViewerContent}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedMedia.type === "image" ? (
                                <img
                                    src={selectedMedia.url}
                                    className={styles.galleryFullImage}
                                    alt={selectedMedia.alt || "Event"}
                                />
                            ) : (
                                <iframe
                                    src={selectedMedia.url}
                                    width="100%"
                                    height="500"
                                    frameBorder="0"
                                    allowFullScreen
                                    title="Event Video"
                                />
                            )}
                        </div>
                    </div>
                )}

            </div>
        </>
    );
}
