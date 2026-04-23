import React from "react";
import EventDetailPage from "../../components/EventDetailPage";

export default function SangeetDetails() {
    return (
        <EventDetailPage
            formType="Sangeet"
            helmet={{
                title: "Sangeet Ceremony Venue in Patna | Jungle Resort",
                description: "Host an unforgettable Sangeet night at Jungle Resort Patna with DJ, live performances, and grand stage. Book Sangeet venue in Patna today!",
                keywords: "Sangeet night Patna, Sangeet venue Patna, Wedding Sangeet Patna, Dance night Patna, Jungle Resort Sangeet",
                ogImage: "https://jungleresortpatna.in/eventPics/Wed/venue-wedding.webp",
                canonical: "/sangeet",
            }}
            hero={{
                bg: "/eventPics/Wed/venue-wedding.webp",
                pill: "Sangeet Night",
                title: "Epic",
                titleHighlight: "Sangeet Night in Patna",
                subtitle: "Get the beats going! A night of music, dance, and celebration — Sangeet at Jungle Resort Patna is an experience unlike any other.",
                features: ["🎵 Live DJ", "💃 Grand Stage", "🎤 Performances", "✨ Premium Lighting"],
            }}
            info={[
                { icon: "🎵", label: "Music", value: "DJ + Live Acts" },
                { icon: "💃", label: "Dance", value: "Grand Stage Setup" },
                { icon: "📍", label: "Location", value: "Patna, Bihar" },
                { icon: "📞", label: "Enquiry", value: "+91 90653 83838" },
            ]}
            desc={{
                label: "Sangeet Night",
                title: "Dance, Sing & Celebrate the Night Away",
                text: "The Sangeet night is where families come together to sing, dance, and celebrate the upcoming wedding. Jungle Resort Patna provides a grand stage, professional lighting & sound, DJ music, and all arrangements for a truly spectacular Sangeet night.",
                highlights: [
                    "Grand stage with professional lighting & sound system",
                    "Live DJ, dholak and folk music arrangements",
                    "Special performances area for family dances",
                    "Premium décor with fairy lights and florals",
                    "Full catering menu available for the evening",
                ],
                image: "/eventPics/Wed/jungleresort.webp",
            }}
            gallery={[
                { type: "image", url: "/eventPics/Wed/venue-wedding.webp", alt: "Sangeet Venue Patna" },
                { type: "image", url: "/eventPics/Wed/jungleresort.webp", alt: "Sangeet Night Jungle Resort" },
                { type: "image", url: "/eventPics/Wed/jungleresort1.webp", alt: "Sangeet Hall Patna" },
                { type: "image", url: "/eventPics/Wed/unnamed.webp", alt: "Sangeet Ceremony Patna" },
                { type: "image", url: "/eventPics/Wed/Mehendi-sangeet-and-haldi-decoration-ideas-at-home-1.webp", alt: "Sangeet Decoration Patna" },
            ]}
        />
    );
}