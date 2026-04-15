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






// pages/Blog.jsx --> import React from "react";
// import Navbar from "../components/navigation-temp";
// import Footer from "../components/footer-temp";

// import blogs from "../data/blogData";
// import BlogCard from "../components/BlogCard";

// import styles from "../styles/blog.module.css";

// export default function Blog() {
//     return (
//         <>
//             <Navbar />

//             <div className={styles.blogContainer}>

//                 <h1 className={styles.blogTitle}>
//                     Best Wedding Tips & Venues in Patna
//                 </h1>

//                 <p className={styles.blogSubtitle}>
//                     Explore expert guides on weddings, resorts, water parks, and event planning in Patna.
//                 </p>

//                 <div className={styles.blogGrid}>
//                     {blogs.map((blog, index) => (
//                         <BlogCard key={index} blog={blog} />
//                     ))}
//                 </div>

//             </div>

          

//             <Footer />
//         </>
//     );
// }  BlogDetails.jsx --> import React from "react";
// import Navbar from "../components/navigation-temp";
// import Footer from "../components/footer-temp";
// import { useParams, Link } from "react-router-dom";
// import blogs from "../data/blogData";
// import styles from "../styles/blog.module.css";

// export default function BlogDetails() {
//     const { slug } = useParams();

//     const blog = blogs.find((b) => b.slug === slug);

//     if (!blog) return <h2>Blog not found</h2>;

//     return (
//         <>
//             <Navbar />

//             <div className={styles.blogDetailsContainer}>

//                 <h1 className={styles.blogDetailsTitle}>
//                     {blog.title}
//                 </h1>

//                 <p className={styles.blogDetailsDesc}>
//                     {blog.description}
//                 </p>

//                 <div
//                     className={styles.blogContent}
//                     dangerouslySetInnerHTML={{ __html: blog.content }}
//                 />

//                 <hr className={styles.blogDivider} />

//                 {/* 🔥 Internal Linking CTA */}
//                 <div className={styles.blogCTA}>
//                     Looking for the <strong>best wedding venue in Patna</strong>? Visit{" "}
//                     <Link to="/services">
//                         Jungle Resort & Water Park Services
//                     </Link>
//                 </div>

//             </div>


//             <Footer />
//         </>
//     );
// }  components/BlogCard.jsx  --> import React from "react";
// import { Link } from "react-router-dom";
// import styles from "../styles/blog.module.css";

// export default function BlogCard({ blog }) {
//     return (
//         <div className={styles.blogCard}>

//             <div className={styles.blogCardHead}>
//                 <h2>{blog.title}</h2>
//             </div>

//             <p>{blog.description}</p>

//             <Link
//                 to={`/blog/${blog.slug}`}
//                 className={styles.readMore}
//             >
//                 Read More →
//             </Link>

//         </div>
//     );
// }   data/blogData.js --> i want ki 