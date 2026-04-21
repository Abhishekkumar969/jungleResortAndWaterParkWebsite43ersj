import React from "react";
import EventDetailPage from "../../components/EventDetailPage";

export default function HaldiDetails() {
    return (
        <EventDetailPage
            formType="Haldi"
            helmet={{
                title: "Haldi Ceremony Venue in Patna | Jungle Resort",
                description: "Host a vibrant Haldi ceremony at Jungle Resort Patna with beautiful floral setups, music & catering. Book your Haldi venue today!",
                keywords: "Haldi ceremony Patna, Haldi venue Patna, Wedding Haldi Patna, Jungle Resort Haldi ceremony",
                ogImage: "https://jungleresortpatna.in/eventPics/Wed/Mehendi-sangeet-and-haldi-decoration-ideas-at-home-1.webp",
                canonical: "/haldi",
            }}
            hero={{
                bg: "/eventPics/Wed/Mehendi-sangeet-and-haldi-decoration-ideas-at-home-1.webp",
                pill: "Haldi Ceremony",
                title: "Vibrant",
                titleHighlight: "Haldi Ceremony in Patna",
                subtitle: "Start the wedding festivities with a colorful, joyful Haldi ceremony at our beautifully decorated outdoor venues.",
                features: ["🌼 Floral Décor", "🎵 Music Setup", "🍋 Haldi Theme", "📸 Photography"],
            }}
            info={[
                { icon: "🌼", label: "Ceremony", value: "Traditional Haldi" },
                { icon: "🌿", label: "Setting", value: "Garden & Lawn" },
                { icon: "📍", label: "Location", value: "Patna, Bihar" },
                { icon: "📞", label: "Enquiry", value: "+91 90653 83838" },
            ]}
            desc={{
                label: "Haldi Ceremony",
                title: "Begin Your Wedding Festivities with Joy",
                text: "A Haldi ceremony is the first step of your wedding celebrations, filled with laughter, color, and love. Jungle Resort Patna provides the perfect open-air lawn settings with vibrant floral setups, traditional décor, and all the fun you need.",
                highlights: [
                    "Yellow & white marigold floral decorations",
                    "Traditional Haldi theme with customization options",
                    "Live music and dhol arrangements",
                    "Light refreshments and catering available",
                    "Professional photography setup",
                ],
                image: "/eventPics/Wed/Mehendi-sangeet-and-haldi-decoration-ideas-at-home-1.webp",
            }}
            gallery={[
                { type: "image", url: "/eventPics/Wed/Mehendi-sangeet-and-haldi-decoration-ideas-at-home-1.webp", alt: "Haldi Ceremony Patna" },
                { type: "image", url: "/eventPics/Wed/venue-wedding.webp", alt: "Haldi Venue Patna" },
                { type: "image", url: "/eventPics/Wed/jungleresort.webp", alt: "Jungle Resort Haldi" },
                { type: "image", url: "/eventPics/Wed/unnamjms.webp", alt: "Haldi Decoration Patna" },
            ]}
        />
    );
}