import React from 'react';
import { Helmet } from 'react-helmet';

export default function GlobalSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Jungle Resort & Waterpark",
    "alternateName": "Jungle Resort Patna",
    "url": "https://www.jungleresortpatna.in",
    "logo": "https://www.jungleresortpatna.in/eventPics/Wed/jungle-resort-kumhrar-patna.webp",
    "image": [
      "https://www.jungleresortpatna.in/images/gallery-1.webp",
      "https://www.jungleresortpatna.in/images/venue-wedding.webp"
    ],
    "description": "Jungle Resort & Waterpark in Patna offers the best destination wedding venue, luxury banquet halls, and premium cottage stays. Experience nature and luxury for your special events.",
    "telephone": "+919065383838",
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
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.instagram.com/jungleresort.patna",
      "https://www.facebook.com/jungleresortpatna"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.jungleresortpatna.in",
    "name": "Jungle Resort & Waterpark",
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
        "name": "Best Destination Wedding Venue",
        "item": "https://www.jungleresortpatna.in/destination-wedding"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Luxury Wedding Banquet Hall",
        "item": "https://www.jungleresortpatna.in/wedding"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Water Park Tickets Price",
        "item": "https://www.jungleresortpatna.in/waterpark-in-patna"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Luxury Cottage Stay In Patna",
        "item": "https://www.jungleresortpatna.in/cottage-in-patna"
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
