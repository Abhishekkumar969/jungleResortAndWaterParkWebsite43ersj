import React from "react";
import EventDetailPage from "../../components/EventDetailPage";

export default function CorporatePartyDetails() {
    return (
        <EventDetailPage
            formType="Corporate Party"
            helmet={{
                title: "Corporate Party Venue in Patna | Jungle Resort",
                description: "Organize an exciting corporate party at Jungle Resort Patna with DJ, pool access, catering & team fun. Book corporate party venue today!",
                keywords: "Corporate party Patna, Office party Patna, Company party venue Patna, Jungle Resort corporate party",
                ogImage: "https://jungleresortpatna.in/eventPics/Wed/jungleresort.webp",
                canonical: "/corporateparty",
            }}
            hero={{
                bg: "/eventPics/Wed/jungleresort.webp",
                pill: "Corporate Party",
                title: "Ultimate",
                titleHighlight: "Corporate Party in Patna",
                subtitle: "Reward your team with an unforgettable corporate party — DJ music, pool access, outdoor activities, and premium dining at Jungle Resort.",
                features: ["🎵 DJ Night", "🌊 Pool Access", "🍽️ Team Dinner", "🎯 Fun Activities"],
            }}
            info={[
                { icon: "🎊", label: "Event Type", value: "Corporate Party" },
                { icon: "👥", label: "Capacity", value: "Upto 1000 Guests" },
                { icon: "📍", label: "Location", value: "Patna, Bihar" },
                { icon: "📞", label: "Enquiry", value: "+91 90653 83838" },
            ]}
            desc={{
                label: "Corporate Party",
                title: "Celebrate Your Team's Success",
                text: "A great corporate party boosts morale, strengthens bonds, and creates lasting memories. Jungle Resort Patna offers an ideal blend of professionalism and fun — DJ nights, waterpark access, team games, and gourmet dining for your entire team.",
                highlights: [
                    "Live DJ and dance floor setup",
                    "Waterpark and pool access for team fun",
                    "Corporate dinner buffet with premium menu",
                    "Fun team activities and competitions",
                    "Group cottage accommodation available",
                ],
                image: "/eventPics/Wed/jungleresort1.webp",
            }}
            gallery={[
                { type: "image", url: "/eventPics/Wed/jungleresort.webp", alt: "Corporate Party Jungle Resort" },
                { type: "image", url: "/eventPics/Wed/venue-wedding.webp", alt: "Corporate Party Venue Patna" },
                { type: "image", url: "/eventPics/Pool Party/waterparkjungleresort.webp", alt: "Corporate Pool Party Patna" },
                { type: "image", url: "/eventPics/Wed/jungleresort1.webp", alt: "Corporate Dinner Patna" },
            ]}
        />
    );
}