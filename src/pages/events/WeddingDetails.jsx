import React from "react";
import EventDetailPage from "../../components/EventDetailPage";

export default function WeddingDetails() {
    return (
        <EventDetailPage
            formType="Wedding"
            helmet={{
                title: "Top Wedding Venue in Patna | Best Marriage Hall & Lawn - Jungle Resort",
                description: "Book the best wedding venue in Patna at Jungle Resort. Luxury banquet hall, open lawn, and premium catering for your special day. Check wedding packages now!",
                keywords: "Wedding Venue in Patna, Marriage Hall in Patna, Best Resort in Patna, Banquet Hall in Patna, Destination Wedding in Patna, Wedding Lawn in Patna, Resort for Wedding in Patna, Wedding Resort in Patna, Luxury Resort in Patna",
                ogImage: "https://jungleresortpatna.in/eventPics/Wed/venue-wedding.webp",
                canonical: "/wedding",
            }}
            hero={{
                bg: "/eventPics/Wed/venue-wedding.webp",
                pill: "Jungle Resort Patna",
                title: "Best",
                titleHighlight: "Wedding Venue in Patna",
                subtitle: "Celebrate your dream wedding with luxury banquet hall, open lawns, and world-class décor at Jungle Resort Patna.",
                features: ["💐 Luxury Décor", "🎊 Banquet & Lawn", "🍽️ Catering", "📸 Photography Setup"],
            }}
            info={[
                { icon: "👥", label: "Capacity", value: "Upto 2000 Guests" },
                { icon: "🏛️", label: "Venue", value: "Indoor + Outdoor" },
                { icon: "📍", label: "Location", value: "Patna, Bihar" },
                { icon: "📞", label: "Enquiry", value: "+91 90653 83838" },
            ]}
            desc={{
                label: "Why Choose Us",
                title: "Your Dream Wedding Awaits at Jungle Resort",
                text: "Make your wedding day truly unforgettable at Jungle Resort Patna. Nestled in a serene jungle setting, our venue combines natural beauty with modern luxury — perfect for intimate ceremonies and grand celebrations alike.",
                highlights: [
                    "Grand banquet halls and open lawns for all event scales",
                    "Customized décor and floral arrangements",
                    "Multi-cuisine catering with premium menu",
                    "Dedicated event coordinator for seamless planning",
                    "Ample parking and accommodation facilities",
                ],
                image: "/eventPics/Wed/jungleresort.webp",
            }}
            gallery={[
                { type: "image", url: "/eventPics/Wed/venue-wedding.webp", alt: "Wedding Venue Jungle Resort Patna" },
                { type: "image", url: "/eventPics/Wed/unnamed.webp", alt: "Wedding Jungle Resort Patna" },
                { type: "image", url: "/eventPics/Wed/1565185162_FB_IMG_1565185053943.webp", alt: "Wedding Decoration Jungle Resort" },
                { type: "image", url: "/eventPics/Wed/Mehendi-sangeet-and-haldi-decoration-ideas-at-home-1.webp", alt: "Wedding Decoration" },
                { type: "image", url: "/eventPics/Wed/jungleresort.webp", alt: "Jungle Resort Patna Wedding" },
                { type: "image", url: "/eventPics/Wed/jungleresort1.webp", alt: "Jungle Resort Wedding Hall" },
                { type: "image", url: "/eventPics/Wed/unnamjms.webp", alt: "Wedding Ceremony Jungle Resort" },
                { type: "image", url: "/eventPics/Wed/jungle-resort-kumhrar-patna.webp", alt: "Jungle Resort Kumhrar Patna" },
            ]}
        />
    );
}