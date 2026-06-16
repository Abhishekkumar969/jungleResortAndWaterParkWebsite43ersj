import { useEffect } from "react";

/**
 * useSEO — lightweight hook to set document.title and meta tags per page.
 * Replaces react-helmet without adding any dependency.
 *
 * @param {{ title?: string, description?: string, keywords?: string, canonical?: string, ogTitle?: string, ogDescription?: string, ogImage?: string, ogUrl?: string }} seo
 */
export default function useSEO({
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
} = {}) {
    useEffect(() => {
        // Store originals to restore on unmount
        const prevTitle = document.title;

        if (title) document.title = title;

        const setMeta = (attr, key, content) => {
            if (!content) return;
            let el = document.querySelector(`meta[${attr}="${key}"]`);
            if (!el) {
                el = document.createElement("meta");
                el.setAttribute(attr, key);
                document.head.appendChild(el);
            }
            el.setAttribute("content", content);
        };

        setMeta("name", "description", description);
        setMeta("name", "keywords", keywords);
        setMeta("property", "og:title", ogTitle || title);
        setMeta("property", "og:description", ogDescription || description);
        if (ogImage) setMeta("property", "og:image", ogImage);
        if (ogUrl) setMeta("property", "og:url", ogUrl);
        setMeta("property", "og:type", "website");
        setMeta("name", "twitter:title", ogTitle || title);
        setMeta("name", "twitter:description", ogDescription || description);
        if (ogImage) setMeta("name", "twitter:image", ogImage);

        // Canonical link
        if (canonical) {
            let link = document.querySelector('link[rel="canonical"]');
            if (!link) {
                link = document.createElement("link");
                link.setAttribute("rel", "canonical");
                document.head.appendChild(link);
            }
            link.setAttribute("href", canonical);
        }

        return () => {
            document.title = prevTitle;
        };
    }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogUrl]);
}
