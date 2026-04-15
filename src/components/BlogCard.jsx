import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/blog.module.css";

export default function BlogCard({ blog }) {
    return (
        <div className={styles.blogCard}>

            <Link style={{textDecoration:"none"}}
                to={`/blog/${blog.slug}`} className={styles.blogCardContent}>

                {/* LEFT TEXT */}
                <div className={styles.blogText}>
                    <div className={styles.blogCardHead}>
                        <h2>{blog.title}</h2>
                    </div>

                    <p>{blog.metaDescription}</p>

                    <Link
                        to={`/blog/${blog.slug}`}
                        className={styles.readMore}
                    >
                        Read More →
                    </Link>
                </div>

                {/* RIGHT IMAGE */}
                {blog.image && (
                    <div className={styles.blogImageWrapper}>
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className={styles.blogCardImage}
                        />
                    </div>
                )}

            </Link>

        </div>
    );
}