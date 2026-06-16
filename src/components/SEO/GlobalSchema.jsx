import React from 'react';

export default function GlobalSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Jungle Resort and Waterpark Patna",
    "alternateName": ["Best Resort in Patna", "Banquet Hall in Patna", "Wedding Venue in Patna", "Marriage Hall in Patna", "Jungle Resort Patna"],
    "url": "https://www.jungleresortpatna.in",
    "logo": "https://www.jungleresortpatna.in/images/logo.png",
    "image": [
      "https://www.jungleresortpatna.in/images/gallery-1.webp",
      "https://www.jungleresortpatna.in/images/venue-wedding.webp",
      "https://www.jungleresortpatna.in/eventPics/Pool%20Party/waterparkjungleresort.webp"
    ],
    "description": "Jungle Resort & Waterpark is the best resort in Patna offering luxury banquet hall, wedding venue, destination wedding, marriage hall, birthday party venue, corporate event venue & wedding lawn in Patna, Bihar.",
    "telephone": "+919031080903",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bypass Thana, Marcha - Mirchi Road, more, Dharamsala",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "postalCode": "800009",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.5647007,
      "longitude": 85.1843187
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "09:00",
      "closes": "22:00"
    },
    "sameAs": [
      "https://www.instagram.com/jungleresort.patna",
      "https://www.facebook.com/jungleresortpatna"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Event Services",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Destination Wedding in Patna"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Wedding Venue & Marriage Hall in Patna"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Banquet Hall in Patna"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Birthday Party Venue in Patna"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Corporate Event Venue in Patna"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Water Park in Patna"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Resort for Wedding in Patna"}}
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.jungleresortpatna.in",
    "name": "Jungle Resort Patna",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.jungleresortpatna.in/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { 
        "@type": "ListItem", 
        "position": 1, 
        "name": "Home", 
        "item": "https://www.jungleresortpatna.in/" 
      },
      { 
        "@type": "ListItem", 
        "position": 2, 
        "name": "Waterpark", 
        "item": "https://www.jungleresortpatna.in/waterpark-in-patna" 
      },
      { 
        "@type": "ListItem", 
        "position": 3, 
        "name": "Destination Wedding", 
        "item": "https://www.jungleresortpatna.in/destination-wedding" 
      },
      { 
        "@type": "ListItem", 
        "position": 4, 
        "name": "Weddings", 
        "item": "https://www.jungleresortpatna.in/wedding" 
      },
      { 
        "@type": "ListItem", 
        "position": 5, 
        "name": "Corporate Events", 
        "item": "https://www.jungleresortpatna.in/corporate-events" 
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
