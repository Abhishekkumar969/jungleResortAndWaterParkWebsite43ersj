import React from "react";
import EventDetailPage from "../../components/EventDetailPage";

export default function DestinationWeddingDetails() {
    return (
        <EventDetailPage
            formType="Destination Wedding"
            helmet={{
                title: "Destination Wedding Venue in Patna | Jungle Resort",
                description: "Plan a magical destination wedding at Jungle Resort Patna with lush greenery, luxury décor, and all-inclusive packages. Book today!",
                keywords: "Destination wedding Patna, Wedding resort Bihar, Luxury wedding venue Patna, Jungle Resort destination wedding",
                ogImage: "https://jungleresortpatna.in/eventPics/Wed/venue-wedding.webp",
                canonical: "/destinationwedding",
            }}
            hero={{
                bg: "/eventPics/Wed/jungleresort.webp",
                pill: "Destination Wedding",
                title: "Magical",
                titleHighlight: "Destination Wedding in Patna",
                subtitle: "Escape the ordinary — celebrate your love story surrounded by lush jungle greenery and timeless elegance at Jungle Resort.",
                features: ["🌿 Jungle Setting", "🏰 Luxury Suites", "🍾 All-Inclusive", "📸 Pre-Wedding Setup"],
            }}
            info={[
                { icon: "👥", label: "Capacity", value: "Upto 2000 Guests" },
                { icon: "🌿", label: "Setting", value: "Jungle & Lawn" },
                { icon: "📍", label: "Location", value: "Patna, Bihar" },
                { icon: "📞", label: "Enquiry", value: "+91 90653 83838" },
            ]}
            desc={{
                label: "Destination Wedding",
                title: "Your Love Story Deserves a Jungle Backdrop",
                text: "Jungle Resort Patna offers a unique destination wedding experience — lush greenery, serene ambiance, and world-class hospitality all in one place. From intimate ceremonies to grand celebrations, we make every moment magical.",
                highlights: [
                    "Scenic outdoor lawns and indoor banquet halls",
                    "Premium décor, floral & lighting arrangements",
                    "Multi-cuisine catering with dedicated chefs",
                    "Pre-wedding shoot set-ups included",
                    "Accommodation for guests & family",
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