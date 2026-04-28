import React from "react";
import EventDetailPage from "../../components/EventDetailPage";

export default function WeddingDetails() {
    return (
        <EventDetailPage
            formType="Wedding"
            helmet={{
                title: "Luxury Wedding Banquet Hall in Patna | Jungle Resort & Waterpark",
                description: "Book the finest wedding banquet hall and marriage lawn in Patna at Jungle Resort & Waterpark. Luxury interiors, grand open lawns, and world-class catering for your special day.",
                keywords: "wedding banquet hall patna, marriage hall in patna, best wedding lawn patna, luxury marriage venue patna, jungle resort wedding banquet",
                ogImage: "https://www.jungleresortpatna.in/eventPics/Wed/venue-wedding.webp",
                canonical: "/wedding",
            }}
            hero={{
                bg: "/eventPics/Wed/venue-wedding.webp",
                pill: "Jungle Resort & Waterpark Patna",
                title: "Luxury",
                titleHighlight: "Wedding Banquet Hall in Patna",
                subtitle: "Celebrate your grand wedding at Patna's most elegant venue with luxury banquet halls, open lawns, and premium décor at Jungle Resort & Waterpark.",
                features: ["💐 Designer Décor", "🎊 Grand Banquet & Lawn", "🍽️ Royal Catering", "📸 Photography Setup"],
            }}
            info={[
                { icon: "👥", label: "Capacity", value: "Upto 2000 Guests" },
                { icon: "🏛️", label: "Venue", value: "Grand Hall + Lawn" },
                { icon: "📍", label: "Location", value: "Patna, Bihar" },
                { icon: "📞", label: "Enquiry", value: "+91 90653 83838" },
            ]}
            desc={{
                label: "Luxury Weddings",
                title: "Your Dream Wedding Awaits at Jungle Resort & Waterpark",
                text: "Make your wedding day truly unforgettable at Jungle Resort & Waterpark Patna. Our venue combines modern luxury with classic elegance — perfect for grand celebrations and intimate ceremonies alike.",
                highlights: [
                    "Grand royal banquet halls and open lawns",
                    "Customized designer décor and floral arrangements",
                    "Exquisite multi-cuisine catering menus",
                    "Dedicated event coordinators for seamless planning",
                    "Ample parking and luxury guest accommodation",
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