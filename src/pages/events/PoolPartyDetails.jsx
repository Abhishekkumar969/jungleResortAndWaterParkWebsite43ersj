import React from "react";
import EventDetailPage from "../../components/EventDetailPage";

export default function PoolPartyDetails() {
    return (
        <EventDetailPage
            formType="Pool Party"
            helmet={{
                title: "Best Pool Party Venue in Patna | Jungle Resort & Waterpark",
                description: "Enjoy pool party at Jungle Resort Patna with DJ, rain dance, water fun & exciting activities. Book best pool party venue today!",
                keywords: "Pool party Patna, Rain dance Patna, Water party Patna, Jungle Resort pool party",
                ogImage: "https://jungleresortpatna.in/eventPics/Pool Party/waterparkjungleresort.webp",
                canonical: "/poolparty",
            }}
            hero={{
                bg: "/eventPics/Pool%20Party/waterparkjungleresort.webp",
                pill: "Pool Party",
                title: "Epic",
                titleHighlight: "Pool Party in Patna",
                subtitle: "Dive into fun with DJ music, rain dance, wave pool, and unlimited water activities at Jungle Resort Patna.",
                features: ["🌊 Wave Pool", "🎵 DJ Music", "💦 Rain Dance", "🎢 Water Slides"],
            }}
            info={[
                { icon: "🌊", label: "Attractions", value: "Wave Pool + Slides" },
                { icon: "🎵", label: "Music", value: "Live DJ Night" },
                { icon: "📍", label: "Location", value: "Patna, Bihar" },
                { icon: "📞", label: "Enquiry", value: "+91 90653 83838" },
            ]}
            desc={{
                label: "Pool Party",
                title: "The Wildest Pool Party Experience in Patna",
                text: "Jungle Resort Waterpark is Patna's favorite destination for pool parties. With a wave pool, rain dance area, DJ platform, water slides, and private cottage options, we offer an unbeatable party experience for groups of all sizes.",
                highlights: [
                    "Private pool party booking available",
                    "Live DJ and rain dance included",
                    "Wave pool and multiple water slides",
                    "Food & beverage packages available",
                    "Cottage rooms for overnight stays",
                ],
                image: "/eventPics/Pool Party/waterparkjungleresort.webp",
            }}
            gallery={[
                { type: "image", url: "/eventPics/Pool Party/waterparkjungleresort.webp", alt: "Pool Party Jungle Resort Patna" },
                { type: "image", url: "/eventPics/Wed/jungleresort.webp", alt: "Pool Party Venue Patna" },
                { type: "image", url: "/eventPics/Wed/venue-wedding.webp", alt: "Jungle Resort Waterpark" },
            ]}
        />
    );
}