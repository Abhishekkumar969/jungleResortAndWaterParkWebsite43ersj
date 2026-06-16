import React, { useEffect, useState } from "react";
import Navbar from "../components/navigation-temp";
import Footer from "../components/footer-temp";

import { getAllBlogs } from "../services/blogService";
import BlogCard from "../components/BlogCard";

import styles from "../styles/blog.module.css";
import useSEO from "../hooks/useSEO";

export default function Blog() {
    useSEO({
        title: "Blog | Best Resort in Patna - Wedding Tips, Events & Venues - Jungle Resort",
        description: "Read expert guides on weddings, destination weddings in Patna, best resort tips, banquet hall events, birthday party ideas & corporate event planning at Jungle Resort Patna.",
        keywords: "Resort in Patna, Best Resort in Patna, Wedding Venue in Patna, Destination Wedding in Patna, Banquet Hall in Patna, Marriage Hall in Patna, Birthday Party Venue in Patna",
        canonical: "https://www.jungleresortpatna.in/blog",
    });

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