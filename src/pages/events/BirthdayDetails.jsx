import React from "react";
import EventDetailPage from "../../components/EventDetailPage";

export default function BirthdayDetails() {
    return (
        <EventDetailPage
            formType="Birthday"
            helmet={{
                title: "Best Birthday Party Venue in Patna | Birthday Celebration - Jungle Resort",
                description: "Celebrate the best birthday party in Patna at Jungle Resort. We offer pool parties, DJ, custom décor, and delicious food. Book your birthday venue in Patna now!",
                keywords: "birthday party venue in patna, birthday in patna, best birthday celebration in patna, pool party for birthday patna, birthday party hall patna",
                ogImage: "https://jungleresortpatna.in/eventPics/Wed/jungleresort.webp",
                canonical: "/birthday",
            }}
            hero={{
                bg: "/eventPics/Wed/jungleresort.webp",
                pill: "Birthday Celebration",
                title: "Celebrate Your",
                titleHighlight: "Birthday in Style!",
                subtitle: "From kids' parties to milestone birthdays — enjoy DJ, pool party, custom décor, and amazing food at Jungle Resort Patna.",
                features: ["🎂 Custom Cake", "🎉 DJ & Dance", "🌊 Pool Access", "🎈 Balloon Décor"],
            }}
            info={[
                { icon: "🎂", label: "Event Type", value: "Birthday Party" },
                { icon: "🎵", label: "Entertainment", value: "DJ + Pool + Activities" },
                { icon: "📍", label: "Location", value: "Patna, Bihar" },
                { icon: "📞", label: "Enquiry", value: "+91 90653 83838" },
            ]}
            desc={{
                label: "Birthday Party",
                title: "The Ultimate Birthday Experience Awaits",
                text: "Why settle for ordinary when you can have extraordinary? Jungle Resort Patna brings together the best of celebrations — vibrant décor, pool access, DJ, and gourmet food — all in a stunning jungle setting.",
                highlights: [
                    "Customized birthday themes and balloon décor",
                    "DJ night, rain dance & pool party option",
                    "Birthday cake and special food menu",
                    "Fun activities and entertainment for all ages",
                    "Photography setup available on request",
                ],
                image: "/eventPics/Wed/unnamed.webp",
            }}
            gallery={[
                { type: "image", url: "/eventPics/Wed/jungleresort.webp", alt: "Birthday Party Jungle Resort Patna" },
                { type: "image", url: "/eventPics/Wed/venue-wedding.webp", alt: "Birthday Venue Patna" },
                { type: "image", url: "/eventPics/Wed/unnamed.webp", alt: "Birthday Celebration Patna" },
                { type: "image", url: "/eventPics/Wed/jungleresort1.webp", alt: "Birthday Hall Patna" },
                { type: "image", url: "/eventPics/Wed/jungle-resort-kumhrar-patna.webp", alt: "Jungle Resort Birthday" },
            ]}
        />
    );
}