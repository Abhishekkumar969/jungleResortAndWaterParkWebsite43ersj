import React from "react";
import Navbar from "../components/navigation-temp";
import Footer from "../components/footer-temp";

import blogs from "../data/blogData";
import BlogCard from "../components/BlogCard";

import styles from "../styles/blog.module.css";

export default function Blog() {
    return (
        <>
            <Navbar />

            <div className={styles.blogContainer}>

                <h1 className={styles.blogTitle}>
                    Best Wedding Tips & Venues in Patna
                </h1>

                <p className={styles.blogSubtitle}>
                    Explore expert guides on weddings, resorts, water parks, and event planning in Patna.
                </p>

                <div className={styles.blogGrid}>
                    {blogs.map((blog, index) => (
                        <BlogCard key={index} blog={blog} />
                    ))}
                </div>

            </div>

          

            <Footer />
        </>
    );
}