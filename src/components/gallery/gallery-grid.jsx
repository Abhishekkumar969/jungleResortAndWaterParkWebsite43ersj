import React, { useState } from "react";
import styles from "../../styles/gallery-grid.module.css";
import { X } from "lucide-react";

const categories = ["All", "Weddings", "Waterpark", "Birthdays", "Corporate", "Resort"];

const galleryImages = [
    { src: "/eventPics/Wed/jungle-resort-kumhrar-patna.webp", category: "Weddings", title: "Garden Wedding Ceremony" },
    { src: "/eventPics/Pool Party/waterparkjungleresort.webp", category: "Waterpark", title: "Main Waterpark Area" },
    { src: "/eventPics/Wed/venue-wedding.webp", category: "Weddings", title: "Traditional Wedding Setup" },
    // { src: "/eventPics/Pool Party/waterparkjungleresort.webp", category: "Waterpark", title: "Family Fun Day" },
    { src: "/eventPics/Wed/1565185162_FB_IMG_1565185053943.webp", category: "Weddings", title: "Reception Dinner" },
    { src: "/images/birthday-stage.webp", category: "Birthdays", title: "Birthday Stage Decor" },
    { src: "/eventPics/Wed/Mehendi-sangeet-and-haldi-decoration-ideas-at-home-1.webp", category: "Weddings", title: "Elegant Reception Hall" },
    // { src: "/images/waterpark-wave.webp", category: "Waterpark", title: "Wave Pool Fun" },
    // { src: "/images/birthday-superhero.webp", category: "Birthdays", title: "Superhero Theme Party" },
    { src: "/images/CorporateEvent7.webp", category: "Corporate", title: "Corporate Conference" },
    // { src: "/images/waterpark-slides.webp", category: "Waterpark", title: "Thrilling Water Slides" },
    { src: "/images/birthday-princess.webp", category: "Birthdays", title: "Princess Theme Party" },
    // { src: "/images/gallery-4.webp", category: "Birthdays", title: "Kids Birthday Celebration" },
    { src: "/images/CorporateEvent8.webp", category: "Corporate", title: "Business Event Setup" },
    // { src: "/images/gallery-6.webp", category: "Waterpark", title: "Lazy River Experience" },
    { src: "/images/birthday-jungle.webp", category: "Birthdays", title: "Jungle Safari Theme" },
    { src: "/images/jungle-resort-kumhrar-patna.webp", category: "Resort", title: "Resort Aerial View" },
    { src: "/images/3.webp", category: "Resort", title: "Resort Water Park View" },
];

export default function GalleryGrid() {
    const [activeCategory, setActiveCategory] = useState("Weddings");
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
                <div className={styles.filters}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ""
                                }`}
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
                            className={`${styles.card} ${index % 5 === 0 ? styles.large : ""
                                }`}
                            onClick={() => setLightboxImage(image.src)}
                        >
                            <img src={image.src} alt={image.title} />

                            <div className={styles.overlay}>
                                <span>{image.category}</span>
                                <h3>{image.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                {lightboxImage && (
                    <div
                        className={styles.lightbox}
                        onClick={() => setLightboxImage(null)}
                    >
                        <button
                            className={styles.close}
                            onClick={() => setLightboxImage(null)}
                        >
                            <X size={30} />
                        </button>

                        <img src={lightboxImage} alt="Gallery" className={styles.lightboxImg} />
                    </div>
                )}

            </div>
        </section>
    );
}