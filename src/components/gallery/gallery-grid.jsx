import React, { useState } from "react";
import styles from "../../styles/gallery-grid.module.css";
import { X } from "lucide-react";

const categories = ["All", "Destination Weddings", "Cottage", "Waterpark", "Birthdays", "Corporate", "Resort"];

const galleryImages = [
    // { src: "/eventPics/Wed/jungle-resort-kumhrar-patna.webp", category: "Destination Weddings", title: "Garden Wedding Ceremony" },
    { src: "/eventPics/Wed/venue-wedding.webp", category: "Destination Weddings", title: "Traditional Wedding Setup" },
    { src: "/eventPics/Wed/1565185162_FB_IMG_1565185053943.webp", category: "Destination Weddings", title: "Reception Dinner" },
    { src: "/eventPics/Wed/Mehendi-sangeet-and-haldi-decoration-ideas-at-home-1.webp", category: "Destination Weddings", title: "Elegant Reception Hall" },

    { src: "/images/cottage-room.webp", category: "Cottage", title: "Luxury Cottage Interior" },
    { src: "/images/cottage-exterior.webp", category: "Cottage", title: "Cottage Exterior View" },

    { src: "/eventPics/Pool Party/waterparkjungleresort.webp", category: "Waterpark", title: "Main Waterpark Area" },

    { src: "/images/birthday-stage.webp", category: "Birthdays", title: "Birthday Stage Decor" },
    { src: "/images/birthday-princess.webp", category: "Birthdays", title: "Princess Theme Party" },
    { src: "/images/birthday-jungle.webp", category: "Birthdays", title: "Jungle Safari Theme" },

    { src: "/images/CorporateEvent7.webp", category: "Corporate", title: "Corporate Conference" },
    { src: "/images/CorporateEvent8.webp", category: "Corporate", title: "Business Event Setup" },

    { src: "/images/jungle-resort-kumhrar-patna.webp", category: "Resort", title: "Resort Aerial View" },
    { src: "/images/3.webp", category: "Resort", title: "Resort Water Park View" },
];

export default function GalleryGrid() {
    const [activeCategory, setActiveCategory] = useState("Destination Weddings");
    const [lightboxImage, setLightboxImage] = useState(null);

    const filteredImages =
        activeCategory === "All"
            ? galleryImages
            : galleryImages.filter((img) => img.category === activeCategory);

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <div className={styles.contentdiv}>
                    <div className={styles.content}>

                        <span className={styles.subtitle}>Our Memories</span>

                        <h2 className={styles.title}>Photo Gallery</h2>

                    </div>
                </div>

                {/* Category Filters */}
                <div className={styles.filters} role="group" aria-label="Filter gallery by category">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ""}`}
                            aria-pressed={activeCategory === category}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className={styles.grid}>
                    {filteredImages.map((image, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${index % 5 === 0 ? styles.large : ""}`}
                            onClick={() => setLightboxImage(image)}
                            onKeyDown={(e) => e.key === "Enter" && setLightboxImage(image)}
                            role="button"
                            tabIndex={0}
                            aria-label={`View photo: ${image.title}`}
                        >
                            <img src={image.src} alt={image.title} loading="lazy" width="400" height="300" />
                            {/* aria-hidden: heading inside button violates ARIA spec */}
                            <div className={styles.overlay} aria-hidden="true">
                                <span>{image.category}</span>
                                <p>{image.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                {lightboxImage && (
                    <div
                        className={styles.lightbox}
                        onClick={() => setLightboxImage(null)}
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Gallery image: ${lightboxImage.title || "full view"}`}
                    >
                        <button
                            className={styles.close}
                            onClick={() => setLightboxImage(null)}
                            aria-label="Close image viewer"
                        >
                            <X size={30} aria-hidden="true" />
                        </button>

                        <img
                            src={lightboxImage.src || lightboxImage}
                            alt={lightboxImage.title || "Gallery image"}
                            className={styles.lightboxImg}
                        />
                    </div>
                )}

            </div>
        </section>
    );
}