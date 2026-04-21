import React from "react";
import EventDetailPage from "../../components/EventDetailPage";

export default function KittyPartyDetails() {
    return (
        <EventDetailPage
            formType="Kitty Party"
            helmet={{
                title: "Kitty Party Venue in Patna | Jungle Resort",
                description: "Host a fun and luxurious kitty party at Jungle Resort Patna with themed décor, lunch buffet, games & entertainment. Book today!",
                keywords: "Kitty party venue Patna, Ladies party Patna, Kitty party lunch Patna, Jungle Resort kitty party",
                ogImage: "https://jungleresortpatna.in/eventPics/Wed/venue-wedding.webp",
                canonical: "/kittyparty",
            }}
            hero={{
                bg: "/eventPics/Wed/venue-wedding.webp",
                pill: "Kitty Party",
                title: "Glamorous",
                titleHighlight: "Kitty Party in Patna",
                subtitle: "Treat yourself and your friends to a luxurious kitty party surrounded by beautiful décor, delicious food, and loads of fun at Jungle Resort.",
                features: ["🌸 Themed Décor", "🍽️ Lunch Buffet", "🎭 Fun Games", "💃 Dance & Music"],
            }}
            info={[
                { icon: "💃", label: "Event Type", value: "Kitty Party" },
                { icon: "🌸", label: "Vibe", value: "Glamorous & Fun" },
                { icon: "📍", label: "Location", value: "Patna, Bihar" },
                { icon: "📞", label: "Enquiry", value: "+91 90653 83838" },
            ]}
            desc={{
                label: "Kitty Party",
                title: "The Ultimate Ladies' Afternoon Out",
                text: "Jungle Resort Patna offers a premium kitty party experience — luxurious ambiance, themed décor, gourmet lunch buffets, and exciting games and entertainment. Make your next kitty party the most memorable one yet!",
                highlights: [
                    "Themed décor with customization options",
                    "Gourmet lunch or high-tea buffet",
                    "Fun games, lucky draws, and prizes",
                    "Dance and music arrangements",
                    "Photo booth and decoration props",
                ],
                image: "/eventPics/Wed/Mehendi-sangeet-and-haldi-decoration-ideas-at-home-1.webp",
            }}
            gallery={[
                { type: "image", url: "/eventPics/Wed/venue-wedding.webp", alt: "Kitty Party Venue Patna" },
                { type: "image", url: "/eventPics/Wed/jungleresort.webp", alt: "Kitty Party Jungle Resort" },
                { type: "image", url: "/eventPics/Wed/Mehendi-sangeet-and-haldi-decoration-ideas-at-home-1.webp", alt: "Ladies Party Patna" },
                { type: "image", url: "/eventPics/Wed/unnamed.webp", alt: "Kitty Party Decoration Patna" },
            ]}
        />
    );
}