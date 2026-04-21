import { useEffect } from "react";

/**
 * Global scroll-reveal hook.
 * Observes all elements with [data-animate] attribute.
 * Adds "in-view" class when they enter the viewport.
 * Uses a single IntersectionObserver for performance.
 */
export default function useScrollReveal() {
    useEffect(() => {
        // Respect prefers-reduced-motion — skip all animations
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) {
            // Make all animated elements immediately visible
            document.querySelectorAll("[data-animate]").forEach((el) => {
                el.classList.add("in-view");
            });
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const delay = el.getAttribute("data-delay") || "0";
                        el.style.transitionDelay = `${delay}ms`;
                        el.classList.add("in-view");
                        // Unobserve after reveal — no continuous polling
                        observer.unobserve(el);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );

        // Observe all current elements
        const observe = () => {
            document.querySelectorAll("[data-animate]:not(.in-view)").forEach((el) => {
                observer.observe(el);
            });
        };

        observe();

        // Re-observe on route changes (React SPA — DOM updates after navigation)
        const mutationObserver = new MutationObserver(observe);
        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);
}
