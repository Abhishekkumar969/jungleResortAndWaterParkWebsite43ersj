import React from "react";
import EventDetailPage from "../../components/EventDetailPage";

export default function MehndiDetails() {
    return (
        <EventDetailPage
            formType="Mehndi"
            helmet={{
                title: "Mehndi Ceremony Venue in Patna | Jungle Resort",
                description: "Host a beautiful Mehndi night at Jungle Resort Patna with elegant décor, live music & catering. Book Mehndi venue in Patna today!",
                keywords: "Mehndi ceremony Patna, Mehndi night venue Patna, Mehndi sangeet Patna, Jungle Resort Mehndi",
                ogImage: "https://jungleresortpatna.in/eventPics/Wed/Mehendi-sangeet-and-haldi-decoration-ideas-at-home-1.webp",
                canonical: "/mehndi",
            }}
            hero={{
                bg: "/eventPics/Wed/Mehendi-sangeet-and-haldi-decoration-ideas-at-home-1.webp",
                pill: "Mehndi Night",
                title: "Beautiful",
                titleHighlight: "Mehndi Night in Patna",
                subtitle: "An evening filled with color, music, dance, and the art of Mehndi — celebrate this pre-wedding tradition in style at Jungle Resort.",
                features: ["🌸 Flower Décor", "🎵 Sangeet Music", "💃 Dance Floor", "🎨 Mehndi Artists"],
            }}
            info={[
                { icon: "🌸", label: "Ceremony", value: "Mehndi Night" },
                { icon: "💃", label: "Entertainment", value: "Music + Dance" },
                { icon: "📍", label: "Location", value: "Patna, Bihar" },
                { icon: "📞", label: "Enquiry", value: "+91 90653 83838" },
            ]}
            desc={{
                label: "Mehndi Night",
                title: "Color, Music & Love — The Perfect Mehndi Night",
                text: "The Mehndi night is one of the most colorful and joyful pre-wedding functions. At Jungle Resort Patna, we create a magical atmosphere with stunning floral décor, Mehndi artists, live music, and dance — making it a night to remember forever.",
                highlights: [
                    "Premium floral and fairy light decorations",
                    "Professional Mehndi artists available",
                    "Live music, DJ, and Sangeet setup",
                    "Special food menu for the evening",
                    "Photography and video coverage available",
                ],
                image: "/eventPics/Wed/Mehendi-sangeet-and-haldi-decoration-ideas-at-home-1.webp",
            }}
            gallery={[
                { type: "image", url: "/eventPics/Wed/Mehendi-sangeet-and-haldi-decoration-ideas-at-home-1.webp", alt: "Mehndi Night Patna" },
                { type: "image", url: "/eventPics/Wed/venue-wedding.webp", alt: "Mehndi Venue Patna" },
                { type: "image", url: "/eventPics/Wed/jungleresort.webp", alt: "Jungle Resort Mehndi" },
                { type: "image", url: "/eventPics/Wed/1565185162_FB_IMG_1565185053943.webp", alt: "Mehndi Decoration" },
            ]}
        />
    );
}