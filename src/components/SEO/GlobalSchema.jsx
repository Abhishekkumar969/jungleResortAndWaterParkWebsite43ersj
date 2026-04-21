import React from 'react';
import { Helmet } from 'react-helmet';

export default function GlobalSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Jungle Resort and Waterpark Patna",
    "alternateName": "Jungle Resort Patna",
    "url": "https://jungleresortpatna.in",
    "logo": "https://jungleresortpatna.in/images/logo.png",
    "image": [
      "https://jungleresortpatna.in/images/gallery-1.webp",
      "https://jungleresortpatna.in/images/venue-wedding.webp",
      "https://jungleresortpatna.in/eventPics/Pool%20Party/waterparkjungleresort.webp"
    ],
    "description": "Jungle Resort and Waterpark in Patna offers the best wedding venue, luxury banquet hall, birthday party packages, and a thrilling waterpark. Book now for an unforgettable experience.",
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
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://jungleresortpatna.in",
    "name": "Jungle Resort Patna",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://jungleresortpatna.in/?s={search_term_string}"
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
        "item": "https://jungleresortpatna.in/" 
      },
      { 
        "@type": "ListItem", 
        "position": 2, 
        "name": "Waterpark", 
        "item": "https://jungleresortpatna.in/waterpark-in-patna" 
      },
      { 
        "@type": "ListItem", 
        "position": 3, 
        "name": "Destination Wedding", 
        "item": "https://jungleresortpatna.in/destinationwedding" 
      },
      { 
        "@type": "ListItem", 
        "position": 4, 
        "name": "Weddings", 
        "item": "https://jungleresortpatna.in/wedding" 
      },
      { 
        "@type": "ListItem", 
        "position": 5, 
        "name": "Corporate Events", 
        "item": "https://jungleresortpatna.in/corporateevents" 
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}
