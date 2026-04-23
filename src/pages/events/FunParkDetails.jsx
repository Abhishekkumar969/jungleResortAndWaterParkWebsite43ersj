import React from "react";
import EventDetailPage from "../../components/EventDetailPage";

export default function FunParkDetails() {
    return (
        <EventDetailPage
            formType="Fun Park"
            helmet={{
                title: "Fun Park in Patna | Jungle Resort Waterpark & Fun Zone",
                description: "Visit Jungle Resort Fun Park Patna for waterpark rides, rain dance, DJ, amusement activities & family fun. Book your fun day today!",
                keywords: "Fun park Patna, Amusement park Patna, Family fun Patna, Jungle Resort fun park, Water fun Patna",
                ogImage: "https://jungleresortpatna.in/eventPics/Pool Party/waterparkjungleresort.webp",
                canonical: "/FunPark",
            }}
            hero={{
                bg: "/eventPics/Pool Party/waterparkjungleresort.webp",
                pill: "Fun Park",
                title: "Patna's Most",
                titleHighlight: "Exciting Fun Park!",
                subtitle: "A world of thrills awaits — waterpark slides, wave pool, rain dance, DJ, and non-stop family fun at Jungle Resort Patna.",
                features: ["🎢 Water Slides", "🌊 Wave Pool", "💦 Rain Dance", "🎵 DJ Music"],
            }}
            info={[
                { icon: "🎢", label: "Attractions", value: "10+ Activities" },
                { icon: "👨‍👩‍👧‍👦", label: "For", value: "All Ages" },
                { icon: "📍", label: "Location", value: "Patna, Bihar" },
                { icon: "📞", label: "Tickets", value: "+91 90653 83838" },
            ]}
            desc={{
                label: "Fun Park",
                title: "A Whole Day of Non-Stop Fun & Thrills",
                text: "Jungle Resort Fun Park is Patna's go-to destination for family outings, college trips, and birthday celebrations. With a waterpark, wave pool, DJ, rain dance, and more — there's something exciting for everyone.",
                highlights: [
                    "Multiple water slides for all age groups",
                    "Wave pool and rain dance arena",
                    "Live DJ music and dance performances",
                    "Separate kids' play zone",
                    "Food court and refreshment stalls",
                ],
                image: "/eventPics/Pool Party/waterparkjungleresort.webp",
            }}
            gallery={[
                { type: "image", url: "/eventPics/Pool Party/waterparkjungleresort.webp", alt: "Fun Park Jungle Resort Patna" },
                { type: "image", url: "/eventPics/Wed/jungleresort.webp", alt: "Fun Park Patna" },
                { type: "image", url: "/eventPics/Wed/venue-wedding.webp", alt: "Jungle Resort Fun Zone" },
            ]}
        />
    );
}