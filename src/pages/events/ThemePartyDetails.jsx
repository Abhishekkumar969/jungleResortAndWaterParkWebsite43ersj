import React from "react";
import EventDetailPage from "../../components/EventDetailPage";

export default function ThemePartyDetails() {
    return (
        <EventDetailPage
            formType="Theme Party"
            helmet={{
                title: "Theme Party Venue in Patna | Jungle Resort",
                description: "Host an exciting theme party at Jungle Resort Patna with creative décor, DJ, pool party & customized setups for all themes.",
                keywords: "Theme party venue Patna, Costume party Patna, Themed event Patna, Jungle Resort theme party",
                ogImage: "https://jungleresortpatna.in/eventPics/Wed/jungleresort.webp",
                canonical: "/themeparty",
            }}
            hero={{
                bg: "/eventPics/Wed/jungleresort.webp",
                pill: "Theme Party",
                title: "Epic",
                titleHighlight: "Theme Party in Patna",
                subtitle: "From jungle themes to Bollywood nights — bring your creative vision to life with Jungle Resort's fully customizable theme party packages.",
                features: ["🎭 Custom Themes", "🎵 DJ Setup", "🎊 Props & Décor", "🌊 Pool Option"],
            }}
            info={[
                { icon: "🎭", label: "Party Type", value: "Fully Customizable" },
                { icon: "🎵", label: "Music", value: "DJ + Theme Music" },
                { icon: "📍", label: "Location", value: "Patna, Bihar" },
                { icon: "📞", label: "Enquiry", value: "+91 90653 83838" },
            ]}
            desc={{
                label: "Theme Party",
                title: "Your Theme, Our Expertise",
                text: "Every great party has a great theme. Whether it's a Bollywood night, jungle safari, retro bash, or a Hawaiian pool party — Jungle Resort Patna turns your imagination into a fully immersive themed experience.",
                highlights: [
                    "Fully customizable theme décor and props",
                    "DJ with theme-specific music compilation",
                    "Waterpark and pool access for outdoor themes",
                    "Catering with themed food & mocktail menu",
                    "Professional event planners to execute your vision",
                ],
                image: "/eventPics/Wed/jungleresort1.webp",
            }}
            gallery={[
                { type: "image", url: "/eventPics/Wed/jungleresort.webp", alt: "Theme Party Jungle Resort Patna" },
                { type: "image", url: "/eventPics/Wed/venue-wedding.webp", alt: "Theme Party Venue Patna" },
                { type: "image", url: "/eventPics/Wed/jungleresort1.webp", alt: "Theme Party Hall Patna" },
                { type: "image", url: "/eventPics/Pool Party/waterparkjungleresort.webp", alt: "Theme Pool Party Patna" },
            ]}
        />
    );
}