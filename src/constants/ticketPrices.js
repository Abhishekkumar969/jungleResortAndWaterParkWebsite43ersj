/* ─── Waterpark Tickets Configuration ─── */
export const WATERPARK_TICKETS = [
    { id: "kidsbelow10years", name: "Kids (Below 5 Yrs)", price: 0, originalPrice: 499, features: ["Wave Pool", "Rain Dance", "DJ", "Water Slides"] },
    { id: "above10years", name: "Adult (Above 5 Yrs)", price: 199, originalPrice: 549, features: ["Wave Pool", "Rain Dance", "DJ", "Water Slides"] },
    { id: "groupof5", name: "Group of 5", price: 995, originalPrice: 2745, features: ["Wave Pool", "Rain Dance", "DJ", "Water Slides"] },
    { id: "groupof10", name: "Group of 10", price: 1990, originalPrice: 5490, features: ["Wave Pool", "Rain Dance", "DJ", "Water Slides"], popular: true },
    { id: "groupof15", name: "Group of 15", price: 2985, originalPrice: 8235, features: ["Wave Pool", "Rain Dance", "DJ", "Water Slides"] },
    { id: "groupof20", name: "Group of 20", price: 3980, originalPrice: 10980, features: ["Wave Pool", "Rain Dance", "DJ", "Water Slides"] },
];

/* ─── Helper for quick lookups by ID ─── */
export const TICKET_MAP = WATERPARK_TICKETS.reduce((acc, ticket) => {
    acc[ticket.id] = { name: ticket.name, price: ticket.price };
    return acc;
}, {});

/* ─── Cottage Add-ons (Prices usually match individual tickets) ─── */
export const WATERPARK_ADDONS = [
    { id: "wpaKids", name: "Kids (Below 5 Yrs)", price: 0, emoji: "👶" },
    { id: "wpaAdult", name: "Adult (Above 5 Yrs)", price: 199, emoji: "🧑" },
    { id: "wpaGroup5", name: "Group of 5", price: 995, emoji: "👨‍👩‍👧‍👦" },
    { id: "wpaGroup10", name: "Group of 10", price: 1990, emoji: "🎉" },
];

/* ─── Cottage Packages ─── */
export const COTTAGE_PKGS = [
    {
        id: "cottage4hrs",
        duration: "4 Hours",
        price: 1999,
        emoji: "⏰",
        highlights: ["Private AC Cottage Room", "Peaceful Jungle Ambiance", "Ideal for Day Rest"],
        waterIncluded: false,
    },
    {
        id: "cottage10hrs",
        duration: "10 Hours",
        price: 2499,
        emoji: "🌅",
        popular: true,
        highlights: ["Private AC Cottage Room", "Peaceful Jungle Ambiance", "Extended Day Outing"],
        waterIncluded: false,
    },
    {
        id: "cottage1day",
        duration: "1 Full Day",
        price: 3999,
        emoji: "🏆",
        highlights: ["Private AC Cottage Room", "✅ Wave Pool", "✅ Rain Dance", "✅ Water Slides"],
        waterIncluded: true,
    },
];
