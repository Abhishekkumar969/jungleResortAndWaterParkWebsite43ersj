import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import Navbar from './navigation-temp';
import Footer from './footer-temp';
import QuickBookForm from './quick-book-form';
import styles from '../styles/seo-landing.module.css';

/**
 * SEOLandingPage
 * A highly optimized component for massive SEO landing pages.
 */
export default function SEOLandingPage({ seo, hero, sections, gallery, faqs, reviews, internalLinks }) {
    useSEO(seo);

    const openBooking = () => {
        window.dispatchEvent(new CustomEvent("openBooking"));
    };

    return (
        <div className={styles.pageContainer}>
            <Navbar />

            {/* HERO SECTION */}
            <section className={styles.hero} style={{ backgroundImage: `url(${hero.bgImage})` }}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>{hero.title}</h1>
                    <p className={styles.heroSubtitle}>{hero.subtitle}</p>
                    <button className={styles.heroBtn} onClick={openBooking}>
                        Check Availability & Prices
                    </button>
                </div>
            </section>

            {/* QUICK BOOK STRIP */}
            <div style={{ background: '#fff', padding: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', position: 'relative', zIndex: 10 }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <QuickBookForm defaultFunctionType={hero.formType || 'Other'} />
                </div>
            </div>

            {/* CONTENT SECTIONS (Text + Images for 1200+ words) */}
            {sections && sections.map((sec, idx) => (
                <section key={idx} className={styles.contentSection}>
                    <div className={`${styles.container} ${styles.twoColLayout} ${idx % 2 !== 0 ? styles.reverse : ''}`}>
                        <div className={styles.textContent}>
                            <h2>{sec.heading}</h2>
                            {sec.content}
                        </div>
                        {sec.image && (
                            <div className={styles.imageContent}>
                                <img src={sec.image} alt={sec.alt || sec.heading} loading="lazy" />
                            </div>
                        )}
                    </div>
                </section>
            ))}

            {/* MASSIVE GALLERY (15+ Images) */}
            {gallery && gallery.length > 0 && (
                <section className={styles.gallerySection}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Our Photo Gallery</h2>
                        <div className={styles.galleryGrid}>
                            {gallery.map((img, i) => (
                                <img key={i} src={img.url} alt={img.alt || "Jungle Resort Gallery Image"} className={styles.galleryImage} loading="lazy" />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ SECTION */}
            {faqs && faqs.length > 0 && (
                <section className={styles.faqSection}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                        <div className={styles.faqList}>
                            {faqs.map((faq, i) => (
                                <FAQItem key={i} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </div>
                    {/* Inject FAQ Schema */}
                    <script type="application/ld+json" dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": faqs.map(f => ({
                                "@type": "Question",
                                "name": f.q,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": f.a
                                }
                            }))
                        })
                    }} />
                </section>
            )}

            {/* REVIEWS SECTION */}
            {reviews && reviews.length > 0 && (
                <section className={styles.reviewsSection}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>What Our Guests Say</h2>
                        <div className={styles.reviewsGrid}>
                            {reviews.map((rev, i) => (
                                <div key={i} className={styles.reviewCard}>
                                    <div className={styles.reviewStars}>
                                        {[...Array(rev.stars || 5)].map((_, s) => <Star key={s} fill="currentColor" size={18} />)}
                                    </div>
                                    <p className={styles.reviewText}>"{rev.text}"</p>
                                    <p className={styles.reviewAuthor}>— {rev.author}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* INTERNAL LINKS (SEO SILO) */}
            {internalLinks && internalLinks.length > 0 && (
                <section className={styles.internalLinks}>
                    <div className={styles.container}>
                        <h2>Explore More Options in Patna</h2>
                        <div className={styles.linksGrid}>
                            {internalLinks.map((link, i) => (
                                <Link key={i} to={link.path} className={styles.linkItem}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </div>
    );
}

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.faqItem}>
            <div className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
                {question}
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {isOpen && <div className={styles.faqAnswer} dangerouslySetInnerHTML={{ __html: answer }} />}
        </div>
    );
}
