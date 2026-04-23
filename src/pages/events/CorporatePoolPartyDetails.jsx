import React from "react";
import EventDetailPage from "../../components/EventDetailPage";

export default function CorporatePoolPartyDetails() {
    return (
        <EventDetailPage
            formType="Corporate Pool Party"
            helmet={{
                title: "Corporate Pool Party Venue in Patna | Jungle Resort Waterpark",
                description: "Plan an exciting corporate pool party at Jungle Resort Patna waterpark with DJ, rain dance & team fun activities. Book today!",
                keywords: "Corporate pool party Patna, Office pool party Patna, Team pool party Patna, Jungle Resort waterpark corporate",
                ogImage: "https://jungleresortpatna.in/eventPics/Pool Party/waterparkjungleresort.webp",
                canonical: "/corporatepoolparty",
            }}
            hero={{
                bg: "/eventPics/Pool%20Party/waterparkjungleresort.webp",
                pill: "Corporate Pool Party",
                title: "Splash Into",
                titleHighlight: "Corporate Fun in Patna",
                subtitle: "Beat the heat and boost team spirit with an action-packed corporate pool party at Jungle Resort Waterpark Patna.",
                features: ["🌊 Wave Pool", "🎵 DJ Music", "💦 Rain Dance", "🏊 Team Games"],
            }}
            info={[
                { icon: "🌊", label: "Activities", value: "Pool + Waterpark" },
                { icon: "🎵", label: "Music", value: "Live DJ" },
                { icon: "📍", label: "Location", value: "Patna, Bihar" },
                { icon: "📞", label: "Enquiry", value: "+91 90653 83838" },
            ]}
            desc={{
                label: "Corporate Pool Party",
                title: "The Coolest Corporate Outing of the Year",
                text: "Take your corporate outing to the next level with a pool party at Jungle Resort Waterpark. Featuring a wave pool, rain dance, multiple slides, DJ music, and food — it's the ultimate experience for teams looking to unwind and bond.",
                highlights: [
                    "Private booking for corporate groups",
                    "Wave pool, rain dance, and water slides",
                    "Live DJ and dedicated party area",
                    "Group catering with special menus",
                    "Cottage rooms for overnight corporate stays",
                ],
                image: "/eventPics/Pool Party/waterparkjungleresort.webp",
            }}
            gallery={[
                { type: "image", url: "/eventPics/Pool Party/waterparkjungleresort.webp", alt: "Corporate Pool Party Jungle Resort" },
                { type: "image", url: "/eventPics/Wed/jungleresort.webp", alt: "Jungle Resort Pool Party Patna" },
                { type: "image", url: "/eventPics/Wed/venue-wedding.webp", alt: "Corporate Venue Patna" },
            ]}
        />
    );
}