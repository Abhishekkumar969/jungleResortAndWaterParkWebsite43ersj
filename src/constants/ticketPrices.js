/* ─── Waterpark Tickets Configuration ─── */
export const WATERPARK_TICKETS = [
    { id: "kidsbelow10years", name: "Kids (Below 5 Yrs)", price: 0, originalPrice: 299, features: ["Wave Pool", "Rain Dance", "DJ", "Water Slides"] },
    // { id: "above5years", name: "child (Above 5 Yrs - 15 Yrs)", price: 199, originalPrice: 449, features: ["Wave Pool", "Rain Dance", "DJ", "Water Slides"] },
    { id: "above5years", name: "Above 5 Yrs", price: 299, originalPrice: 549, features: ["Wave Pool", "Rain Dance", "DJ", "Water Slides"] },
    { id: "groupof5", name: "Group of 5", price: 1495, originalPrice: 2745, features: ["Wave Pool", "Rain Dance", "DJ", "Water Slides"] },
    { id: "groupof10", name: "Group of 10", price: 2990, originalPrice: 5490, features: ["Wave Pool", "Rain Dance", "DJ", "Water Slides"], popular: true },
    { id: "groupof15", name: "Group of 15", price: 4485, originalPrice: 8235, features: ["Wave Pool", "Rain Dance", "DJ", "Water Slides"] },
    { id: "groupof20", name: "Group of 20", price: 5980, originalPrice: 10980, features: ["Wave Pool", "Rain Dance", "DJ", "Water Slides"] },
];

/* ─── Pool Party Tickets Configuration ─── */
export const POOL_PARTY_TICKETS = [
    { id: "pp_stagEntry", name: "STAG ENTRY (BASIC PASS)", price: 599, originalPrice: 799 },
    { id: "pp_stag", name: "STAG ENTRY", price: 799, originalPrice: 999 },
    { id: "pp_couple", name: "COUPLE ENTRY", price: 1499, originalPrice: 1999 },
    { id: "pp_vip_stag", name: "VIP STAG PASS 👑", price: 1999, originalPrice: 2499 },
    { id: "pp_vip_couple", name: "VIP COUPLE PASS 👑", price: 1999, originalPrice: 2499 },
];

/* ─── Helper for quick lookups by ID ─── */
export const TICKET_MAP = [...WATERPARK_TICKETS, ...POOL_PARTY_TICKETS].reduce((acc, ticket) => {
    acc[ticket.id] = { name: ticket.name, price: ticket.price };
    return acc;
}, {});

/* ─── Cottage Add-ons (Prices usually match individual tickets) ─── */
export const WATERPARK_ADDONS = [
    { id: "wpaKids", name: "Kids (Below 5 Yrs)", price: 0, emoji: "👶" },
    // { id: "wpaChild", name: "Child (Above 5 Yrs - 15 Yrs)", price: 199, emoji: "🧑" },
    { id: "wpaAdult", name: "Above 5 Yrs", price: 299, emoji: "🧑" },
    { id: "wpaGroup5", name: "Group of 5", price: 1495, emoji: "👨‍👩‍👧‍👦" },
    { id: "wpaGroup10", name: "Group of 10", price: 2990, emoji: "🎉" },
];

/* ─── Cottage Packages ─── */
export const COTTAGE_PKGS = [
    {
        id: "cottage4hrs",
        duration: "4 Hours",
        price: 1999,
        emoji: "⏰",
        highlights: ["Private AC Cottage Room", "Ideal for Day Rest"],
        waterIncluded: false,
    },
    {
        id: "cottage10hrs",
        duration: "10 Hours",
        price: 2499,
        emoji: "🌅",
        popular: true,
        highlights: ["Private AC Cottage Room", "Extended Day Outing"],
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
