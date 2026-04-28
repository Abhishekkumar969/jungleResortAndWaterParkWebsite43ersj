import React from "react";
import EventDetailPage from "../../components/EventDetailPage";

export default function DestinationWeddingDetails() {
    return (
        <EventDetailPage
            formType="Destination Wedding"
            helmet={{
                title: "Best Destination Wedding Venue in Patna | Jungle Resort & Waterpark",
                description: "Experience the ultimate destination wedding at Jungle Resort & Waterpark Patna. Luxury banquet halls, scenic outdoor lawns, and personalized wedding packages for a magical love story.",
                keywords: "destination wedding venue patna, best destination wedding in patna, luxury wedding resort patna, royal wedding venue patna, jungle resort wedding",
                ogImage: "https://www.jungleresortpatna.in/eventPics/Wed/venue-wedding.webp",
                canonical: "/destination-wedding",
            }}
            hero={{
                bg: "/eventPics/Wed/jungleresort.webp",
                pill: "Destination Wedding",
                title: "Best",
                titleHighlight: "Destination Wedding Venue in Patna",
                subtitle: "Escape the ordinary — celebrate your love story surrounded by lush greenery and timeless elegance at Jungle Resort & Waterpark.",
                features: ["✨ Luxury Venue", "🏰 Luxury Suites", "🍾 All-Inclusive", "📸 Pre-Wedding Setup"],
            }}
            info={[
                { icon: "👥", label: "Capacity", value: "Upto 2000 Guests" },
                { icon: "🏰", label: "Venue", value: "Palace & Lawn" },
                { icon: "📍", label: "Location", value: "Patna, Bihar" },
                { icon: "📞", label: "Enquiry", value: "+91 90653 83838" },
            ]}
            desc={{
                label: "Destination Wedding",
                title: "Your Love Story Deserves a Scenic Backdrop",
                text: "Jungle Resort & Waterpark Patna offers an unparalleled destination wedding experience — beautiful architecture, serene ambiance, and world-class hospitality. From intimate ceremonies to grand celebrations, we make every moment truly majestic.",
                highlights: [
                    "Scenic outdoor lawns and royal banquet halls",
                    "Premium designer décor & lighting",
                    "Exquisite multi-cuisine catering",
                    "Pre-wedding shoot set-ups included",
                    "Luxury accommodation for guests",
                ],
                image: "/eventPics/Wed/venue-wedding.webp",
            }}
            gallery={[
                { type: "image", url: "/eventPics/Wed/venue-wedding.webp", alt: "Destination Wedding Jungle Resort" },
                { type: "image", url: "/eventPics/Wed/unnamed.webp", alt: "Wedding Venue Patna" },
                { type: "image", url: "/eventPics/Wed/jungleresort.webp", alt: "Jungle Resort Wedding" },
                { type: "image", url: "/eventPics/Wed/jungleresort1.webp", alt: "Jungle Resort Wedding Hall" },
                { type: "image", url: "/eventPics/Wed/1565185162_FB_IMG_1565185053943.webp", alt: "Wedding Decoration" },
                { type: "image", url: "/eventPics/Wed/jungle-resort-kumhrar-patna.webp", alt: "Jungle Resort Kumhrar" },
            ]}
        />
    );
}