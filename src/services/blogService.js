import { db } from "../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

// ✅ All blogs
export const getAllBlogs = async () => {
    const snapshot = await getDocs(collection(db, "blogs"));

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));
};

// ✅ Single blog by slug
export const getBlogBySlug = async (slug) => {
    const q = query(
        collection(db, "blogs"),
        where("slug", "==", slug)
    );

    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
        return snapshot.docs[0].data();
    }

    return null;
};