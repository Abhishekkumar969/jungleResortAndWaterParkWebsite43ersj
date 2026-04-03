import React, { useState } from "react";
import styles from "../../styles/gallery-grid.module.css";
import { X } from "lucide-react";

const categories = ["All", "Weddings", "Waterpark", "Birthdays", "Corporate", "Resort"];

const galleryImages = [
    { src: "/images/venue-wedding.jpg", category: "Weddings", title: "Garden Wedding Ceremony" },
    { src: "/images/waterpark-main.jpg", category: "Waterpark", title: "Main Waterpark Area" },
    { src: "/images/gallery-1.jpg", category: "Weddings", title: "Traditional Wedding Setup" },
    { src: "/images/gallery-2.jpg", category: "Waterpark", title: "Family Fun Day" },
    { src: "/images/venue-reception.jpg", category: "Weddings", title: "Reception Dinner" },
    { src: "/images/birthday-stage.jpg", category: "Birthdays", title: "Birthday Stage Decor" },
    { src: "/images/gallery-3.jpg", category: "Weddings", title: "Elegant Reception Hall" },
    { src: "/images/waterpark-wave.jpg", category: "Waterpark", title: "Wave Pool Fun" },
    { src: "/images/birthday-superhero.jpg", category: "Birthdays", title: "Superhero Theme Party" },
    { src: "/images/gallery-5.jpg", category: "Corporate", title: "Corporate Conference" },
    { src: "/images/waterpark-slides.jpg", category: "Waterpark", title: "Thrilling Water Slides" },
    { src: "/images/birthday-princess.jpg", category: "Birthdays", title: "Princess Theme Party" },
    { src: "/images/gallery-4.jpg", category: "Birthdays", title: "Kids Birthday Celebration" },
    { src: "/images/venue-corporate.jpg", category: "Corporate", title: "Business Event Setup" },
    { src: "/images/gallery-6.jpg", category: "Waterpark", title: "Lazy River Experience" },
    { src: "/images/hero-resort.jpg", category: "Resort", title: "Resort Aerial View" },
    { src: "/images/birthday-jungle.jpg", category: "Birthdays", title: "Jungle Safari Theme" },
];

export default function GalleryGrid() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [lightboxImage, setLightboxImage] = useState(null);

    const filteredImages =
        activeCategory === "All"
            ? galleryImages
            : galleryImages.filter((img) => img.category === activeCategory);

    return (
        <section className={styles.section}>
            <div className={styles.container}>

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