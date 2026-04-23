import React from "react";
import EventDetailPage from "../../components/EventDetailPage";

export default function RingCeremonyDetails() {
    return (
        <EventDetailPage
            formType="Ring Ceremony"
            helmet={{
                title: "Ring Ceremony Venue in Patna | Jungle Resort Banquet Hall",
                description: "Host a memorable ring ceremony or sagai at Jungle Resort Patna with premium décor, catering & event planning services.",
                keywords: "Ring ceremony Patna, Sagai venue Patna, Ring ceremony banquet hall Patna, Jungle Resort ring ceremony",
                ogImage: "https://jungleresortpatna.in/eventPics/Wed/venue-wedding.webp",
                canonical: "/ringceremony",
            }}
            hero={{
                bg: "/eventPics/Wed/jungleresort1.webp",
                pill: "Ring Ceremony / Sagai",
                title: "Celebrate Your",
                titleHighlight: "Ring Ceremony in Patna",
                subtitle: "Exchange rings surrounded by loved ones in a beautifully decorated setting — elegant, intimate, and unforgettable.",
                features: ["💍 Ring Ceremony Stage", "🌹 Floral Backdrop", "🍾 Celebration Bar", "📸 Photography"],
            }}
            info={[
                { icon: "💍", label: "Event", value: "Ring / Sagai" },
                { icon: "🏛️", label: "Venue", value: "Banquet + Lawn" },
                { icon: "📍", label: "Location", value: "Patna, Bihar" },
                { icon: "📞", label: "Enquiry", value: "+91 90653 83838" },
            ]}
            desc={{
                label: "Ring Ceremony",
                title: "A Perfect Start to Forever",
                text: "The ring ceremony is a cherished tradition — a moment of love, commitment, and joy shared with family. Jungle Resort Patna ensures every detail is perfect: from the floral backdrop to the grand stage, catering, and photography.",
                highlights: [
                    "Premium stage setup with floral arch and lighting",
                    "Customized themes for intimate to large ceremonies",
                    "Full catering and hospitality management",
                    "Photography and video packages available",
                    "Easy access + ample parking",
                ],
                image: "/eventPics/Wed/venue-wedding.webp",
            }}
            gallery={[
                { type: "image", url: "/eventPics/Wed/jungleresort1.webp", alt: "Ring Ceremony Patna" },
                { type: "image", url: "/eventPics/Wed/venue-wedding.webp", alt: "Ring Ceremony Venue Patna" },
                { type: "image", url: "/eventPics/Wed/jungleresort.webp", alt: "Jungle Resort Sagai" },
                { type: "image", url: "/eventPics/Wed/unnamed.webp", alt: "Sagai Ceremony Patna" },
            ]}
        />
    );
}