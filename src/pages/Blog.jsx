import React, { useEffect, useState } from "react";
import Navbar from "../components/navigation-temp";
import Footer from "../components/footer-temp";

import { getAllBlogs } from "../services/blogService";
import BlogCard from "../components/BlogCard";

import styles from "../styles/blog.module.css";

export default function Blog() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const data = await getAllBlogs();
            setBlogs(data);
        };

        fetchBlogs();
    }, []);

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
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>

            </div>

            <Footer />
        </>
    );
}