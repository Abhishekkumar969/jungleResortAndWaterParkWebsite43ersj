import React, { useEffect, useState } from "react";
import Navbar from "../components/navigation-temp";
import Footer from "../components/footer-temp";
import { useParams, Link } from "react-router-dom";
import { getBlogBySlug } from "../services/blogService";
import styles from "../styles/blog.module.css";

export default function BlogDetails() {

    const { slug } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            const data = await getBlogBySlug(slug);
            setBlog(data);
        };

        fetchBlog();
    }, [slug]);

    // ✅ SEO
    useEffect(() => {
        if (blog) {
            document.title = blog.metaTitle || blog.title;

            const meta = document.querySelector("meta[name='description']");
            if (meta) {
                meta.setAttribute("content", blog.metaDescription || "");
            }
        }
    }, [blog]);

    if (!blog) return <h2>Loading...</h2>;

    return (
        <>
            <Navbar />

            <div className={styles.blogDetailsContainer}>

                <h1 className={styles.blogDetailsTitle}>
                    {blog.title}
                </h1>

                <p className={styles.blogDetailsDesc}>
                    {blog.metaDescription}
                </p>

                {/* 🔥 Image from Firestore */}
                {blog.image && (
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className={styles.blogImage}
                    />
                )}

                <div
                    className={styles.blogContent}
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                <hr className={styles.blogDivider} />

                <div className={styles.blogCTA}>
                    Looking for the <strong>best wedding venue in Patna</strong>? Visit{" "}
                    <Link to="/services">
                        Jungle Resort & Water Park Services
                    </Link>
                </div>

            </div>

            <Footer />
        </>
    );
}