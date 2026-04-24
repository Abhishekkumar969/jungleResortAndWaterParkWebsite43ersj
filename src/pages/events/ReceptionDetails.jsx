import React from "react";
import EventDetailPage from "../../components/EventDetailPage";

export default function ReceptionDetails() {
    return (
        <EventDetailPage
            formType="Reception"
            helmet={{
                title: "Best Reception Venue in Patna | Jungle Resort Banquet Hall",
                description: "Host a grand reception at Jungle Resort Patna with elegant décor, spacious banquet hall & open lawns. Book the best reception venue today!",
                keywords: "Reception venue Patna, Wedding reception hall Patna, Banquet reception Patna, Jungle Resort reception",
                ogImage: "https://jungleresortpatna.in/eventPics/Wed/venue-wedding.webp",
                canonical: "/reception",
            }}
            hero={{
                bg: "/eventPics/Wed/venue-wedding.webp",
                pill: "Wedding Reception",
                title: "Grand",
                titleHighlight: "Reception Venue in Patna",
                subtitle: "Celebrate the beginning of your new journey with a grand reception party at Jungle Resort's stunning banquet and lawn venues.",
                features: ["🎊 Grand Décor", "🕺 Dance Floor", "🍾 Premium Bar", "🎵 Live Music Setup"],
            }}
            info={[
                { icon: "👥", label: "Capacity", value: "Upto 2000 Guests" },
                { icon: "🏛️", label: "Venue", value: "Banquet + Lawn" },
                { icon: "📍", label: "Location", value: "Patna, Bihar" },
                { icon: "📞", label: "Enquiry", value: "+91 90653 83838" },
            ]}
            desc={{
                label: "Reception Party",
                title: "Make Your Reception Night Unforgettable",
                text: "A reception is your first big celebration as a married couple — and it deserves to be extraordinary. At Jungle Resort Patna, we combine elegant décor, gourmet dining, and a vibrant atmosphere to create the perfect reception experience.",
                highlights: [
                    "Grand stage with premium lighting & flower walls",
                    "Dedicated dance floor and DJ/live music setup",
                    "Multi-cuisine dinner buffet for all guests",
                    "Professional event management team",
                    "Valet parking and accommodation available",
                ],
                image: "/eventPics/Wed/jungleresort1.webp",
            }}
            gallery={[
                { type: "image", url: "/eventPics/Wed/venue-wedding.webp", alt: "Reception Venue Patna" },
                { type: "image", url: "/eventPics/Wed/jungleresort.webp", alt: "Jungle Resort Reception" },
                { type: "image", url: "/eventPics/Wed/unnamjms.webp", alt: "Reception Hall Patna" },
                { type: "image", url: "/eventPics/Wed/jungleresort1.webp", alt: "Jungle Resort Banquet" },
                { type: "image", url: "/eventPics/Wed/jungle-resort-kumhrar-patna.webp", alt: "Jungle Resort Patna" },
                { type: "image", url: "/eventPics/Wed/unnamed.webp", alt: "Reception Party Patna" },
            ]}
        />
    );
}