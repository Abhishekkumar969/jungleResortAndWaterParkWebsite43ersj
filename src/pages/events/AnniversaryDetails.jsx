import React from "react";
import EventDetailPage from "../../components/EventDetailPage";

export default function AnniversaryDetails() {
    return (
        <EventDetailPage
            formType="Anniversary"
            helmet={{
                title: "Anniversary Celebration Venue in Patna | Jungle Resort",
                description: "Celebrate your wedding anniversary at Jungle Resort Patna with romantic décor, candlelight dinner & premium party arrangements. Book today!",
                keywords: "Anniversary party venue Patna, Romantic anniversary Patna, Anniversary celebration Jungle Resort Bihar",
                ogImage: "https://jungleresortpatna.in/eventPics/Wed/venue-wedding.webp",
                canonical: "/anniversary",
            }}
            hero={{
                bg: "/eventPics/Wed/jungleresort.webp",
                pill: "Anniversary Celebration",
                title: "Romantic",
                titleHighlight: "Anniversary Party in Patna",
                subtitle: "Cherish every year of your love story with a beautifully arranged anniversary celebration — intimate or grand, we do it all.",
                features: ["🌹 Romantic Décor", "🕯️ Candlelight Setup", "🎂 Custom Cake", "🍽️ Special Dinner"],
            }}
            info={[
                { icon: "💑", label: "Event Type", value: "Anniversary Party" },
                { icon: "🌹", label: "Ambiance", value: "Romantic & Elegant" },
                { icon: "📍", label: "Location", value: "Patna, Bihar" },
                { icon: "📞", label: "Enquiry", value: "+91 90653 83838" },
            ]}
            desc={{
                label: "Anniversary",
                title: "Celebrate Years of Love in Style",
                text: "Whether it's your 1st anniversary or your 25th, every milestone deserves a special celebration. Let us turn your anniversary into a beautiful memory with our romantic setups, personalized décor, and exceptional dining experience.",
                highlights: [
                    "Romantic floral and candle décor setups",
                    "Customized anniversary theme and banners",
                    "Candlelight dinner with gourmet menu",
                    "Special surprise arrangements on request",
                    "Photography setup available",
                ],
                image: "/eventPics/Wed/Mehendi-sangeet-and-haldi-decoration-ideas-at-home-1.webp",
            }}
            gallery={[
                { type: "image", url: "/eventPics/Wed/venue-wedding.webp", alt: "Anniversary Venue Patna" },
                { type: "image", url: "/eventPics/Wed/jungleresort.webp", alt: "Jungle Resort Anniversary" },
                { type: "image", url: "/eventPics/Wed/unnamed.webp", alt: "Anniversary Party Patna" },
                { type: "image", url: "/eventPics/Wed/Mehendi-sangeet-and-haldi-decoration-ideas-at-home-1.webp", alt: "Romantic décor Patna" },
                { type: "image", url: "/eventPics/Wed/jungleresort1.webp", alt: "Anniversary Banquet Patna" },
            ]}
        />
    );
}