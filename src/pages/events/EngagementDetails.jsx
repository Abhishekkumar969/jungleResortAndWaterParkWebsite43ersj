import React from "react";
import EventDetailPage from "../../components/EventDetailPage";

export default function EngagementDetails() {
    return (
        <EventDetailPage
            formType="Engagement"
            helmet={{
                title: "Engagement Ceremony Venue in Patna | Jungle Resort",
                description: "Host your ring ceremony or engagement at Jungle Resort Patna with elegant décor, catering & event management. Book Engagement venue today!",
                keywords: "Engagement venue Patna, Ring ceremony Patna, Sagai venue Patna, Jungle Resort engagement",
                ogImage: "https://jungleresortpatna.in/eventPics/Wed/venue-wedding.webp",
                canonical: "/engagement",
            }}
            hero={{
                bg: "/eventPics/Wed/venue-wedding.webp",
                pill: "Engagement Ceremony",
                title: "Beautiful",
                titleHighlight: "Engagement Venue in Patna",
                subtitle: "Mark the beginning of your forever with a beautifully arranged engagement ceremony at Jungle Resort Patna.",
                features: ["💍 Ring Ceremony Setup", "🌸 Floral Décor", "📸 Photography", "🍽️ Catering"],
            }}
            info={[
                { icon: "💍", label: "Ceremony", value: "Ring Ceremony" },
                { icon: "🌸", label: "Décor", value: "Elegant Floral" },
                { icon: "📍", label: "Location", value: "Patna, Bihar" },
                { icon: "📞", label: "Enquiry", value: "+91 90653 83838" },
            ]}
            desc={{
                label: "Engagement",
                title: "Say Yes to Forever in Style",
                text: "Your engagement is the first step of a lifelong journey — make it count. Jungle Resort Patna offers intimate and grand engagement setups with stunning floral backdrops, premium catering, and moment-capturing photography arrangements.",
                highlights: [
                    "Custom floral arch and backdrop setups",
                    "Ring ceremony stage with premium lighting",
                    "Multi-cuisine catering for all guests",
                    "Photography and videography setup",
                    "Accommodation for out-of-town guests",
                ],
                image: "/eventPics/Wed/1565185162_FB_IMG_1565185053943.webp",
            }}
            gallery={[
                { type: "image", url: "/eventPics/Wed/venue-wedding.webp", alt: "Engagement Venue Patna" },
                { type: "image", url: "/eventPics/Wed/jungleresort.webp", alt: "Jungle Resort Engagement" },
                { type: "image", url: "/eventPics/Wed/1565185162_FB_IMG_1565185053943.webp", alt: "Engagement Ceremony Patna" },
                { type: "image", url: "/eventPics/Wed/unnamed.webp", alt: "Ring Ceremony Patna" },
            ]}
        />
    );
}