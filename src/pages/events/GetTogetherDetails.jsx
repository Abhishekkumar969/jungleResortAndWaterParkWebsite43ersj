import React from "react";
import EventDetailPage from "../../components/EventDetailPage";

export default function GetTogetherDetails() {
    return (
        <EventDetailPage
            formType="Get Together"
            helmet={{
                title: "Get Together Venue in Patna | Jungle Resort",
                description: "Host a memorable get together or family reunion at Jungle Resort Patna with excellent food, fun activities & beautiful ambiance.",
                keywords: "Get together venue Patna, Family reunion Patna, Friends gathering Patna, Jungle Resort get together",
                ogImage: "https://jungleresortpatna.in/eventPics/Wed/jungleresort.webp",
                canonical: "/get-together",
            }}
            hero={{
                bg: "/eventPics/Wed/jungleresort.webp",
                pill: "Get Together",
                title: "Unforgettable",
                titleHighlight: "Get Together in Patna",
                subtitle: "Reconnect with friends and family in the most beautiful jungle setting in Patna — great food, fun activities, and priceless memories.",
                features: ["🎊 Fun Activities", "🍽️ Great Food", "🌊 Pool Access", "📸 Photography"],
            }}
            info={[
                { icon: "🎊", label: "Event Type", value: "Get Together" },
                { icon: "🌿", label: "Setting", value: "Jungle & Lawn" },
                { icon: "📍", label: "Location", value: "Patna, Bihar" },
                { icon: "📞", label: "Enquiry", value: "+91 90653 83838" },
            ]}
            desc={{
                label: "Get Together",
                title: "Because Some Moments Need to Be Celebrated",
                text: "Whether it's a college reunion, a family get-together, or a friends' hangout — Jungle Resort Patna is the perfect place to create memories. With waterpark access, outdoor lawn spaces, great food, and music, the fun never stops.",
                highlights: [
                    "Outdoor lawn and indoor hall options",
                    "Waterpark and pool access for groups",
                    "Custom food and beverage packages",
                    "Fun games and team activities",
                    "Photography setups available",
                ],
                image: "/eventPics/Wed/unnamed.webp",
            }}
            gallery={[
                { type: "image", url: "/eventPics/Wed/jungleresort.webp", alt: "Get Together Jungle Resort" },
                { type: "image", url: "/eventPics/Wed/venue-wedding.webp", alt: "Get Together Venue Patna" },
                { type: "image", url: "/eventPics/Wed/unnamed.webp", alt: "Family Gathering Patna" },
                { type: "image", url: "/eventPics/Pool Party/waterparkjungleresort.webp", alt: "Pool Party Get Together" },
            ]}
        />
    );
}