import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/blog.module.css";

export default function BlogCard({ blog }) {
    return (
        <div className={styles.blogCard}>

            <div className={styles.blogCardHead}>
                <h2>{blog.title}</h2>
            </div>

            <p>{blog.description}</p>

            <Link
                to={`/blog/${blog.slug}`}
                className={styles.readMore}
            >
                Read More →
            </Link>

        </div>
    );
}