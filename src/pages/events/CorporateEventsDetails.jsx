import React from "react";
import EventDetailPage from "../../components/EventDetailPage";

export default function CorporateEventsDetails() {
    return (
        <EventDetailPage
            formType="Corporate Event"
            helmet={{
                title: "Corporate Event Venue in Patna | Jungle Resort",
                description: "Host corporate meetings, conferences & team events at Jungle Resort Patna. Premium AV setup, catering & team-building activities.",
                keywords: "Corporate Event Venue in Patna, Best Resort in Patna, Banquet Hall in Patna, Resort in Patna, Luxury Resort in Patna, Wedding Venue in Patna, Birthday Party Venue in Patna",
                ogImage: "https://jungleresortpatna.in/eventPics/Wed/venue-wedding.webp",
                canonical: "/corporate-events",
            }}
            hero={{
                bg: "/eventPics/Wed/venue-wedding.webp",
                pill: "Corporate Events",
                title: "Premium",
                titleHighlight: "Corporate Events in Patna",
                subtitle: "From conferences to team outings — Jungle Resort Patna provides a professional and refreshing corporate event experience in a unique jungle setting.",
                features: ["📊 Conference Setup", "🎯 Team Building", "🍽️ Corporate Catering", "🏊 Recreational Activities"],
            }}
            info={[
                { icon: "👔", label: "Event Type", value: "Corporate / Conference" },
                { icon: "💼", label: "Capacity", value: "Upto 1000 Guests" },
                { icon: "📍", label: "Location", value: "Patna, Bihar" },
                { icon: "📞", label: "Enquiry", value: "+91 90653 83838" },
            ]}
            desc={{
                label: "Corporate Events",
                title: "Where Productivity Meets Serenity",
                text: "Jungle Resort Patna is the ideal venue for your next corporate event. Step away from the city and into a refreshing jungle environment — perfect for productive meetings, inspiring conferences, and fun team-building activities.",
                highlights: [
                    "Air-conditioned conference hall with AV equipment",
                    "Team building activities and games",
                    "Waterpark access for recreational breaks",
                    "Corporate catering with premium buffet",
                    "Cottage rooms for outstation team members",
                ],
                image: "/eventPics/Wed/jungleresort.webp",
            }}
            gallery={[
                { type: "image", url: "/eventPics/Wed/venue-wedding.webp", alt: "Corporate Event Venue Patna" },
                { type: "image", url: "/eventPics/Wed/jungleresort.webp", alt: "Corporate Venue Jungle Resort" },
                { type: "image", url: "/eventPics/Wed/jungleresort1.webp", alt: "Conference Hall Patna" },
                { type: "image", url: "/eventPics/Pool Party/waterparkjungleresort.webp", alt: "Corporate Team Outing Patna" },
            ]}
        />
    );
}