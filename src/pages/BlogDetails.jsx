import React from "react";
import Navbar from "../components/navigation-temp";
import Footer from "../components/footer-temp";
import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogData";
import styles from "../styles/blog.module.css";

export default function BlogDetails() {
    const { slug } = useParams();

    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) return <h2>Blog not found</h2>;

    return (
        <>
            <Navbar />

            <div className={styles.blogDetailsContainer}>

                <h1 className={styles.blogDetailsTitle}>
                    {blog.title}
                </h1>

                <p className={styles.blogDetailsDesc}>
                    {blog.description}
                </p>

                <div
                    className={styles.blogContent}
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                <hr className={styles.blogDivider} />

                {/* 🔥 Internal Linking CTA */}
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