import React from "react";
import Navbar from "../../components/navigation-temp";
import Footer from "../../components/footer-temp";
// import WaterparkHero from "../../components/waterpark/waterpark-hero";
import TicketPricing from "../../components/waterpark/ticket-pricing";
import Attractions from "../../components/waterpark/attractions";
import WaterparkInfo from "../../components/waterpark/waterpark-info";
// import TicketBooking from "../../components/waterpark/ticket-booking";
import styles from "../../styles/waterpark-page.module.css";
import { Helmet } from "react-helmet";

export default function WaterparkPage() {
    return (
        <main className={styles.waterparkPage}>

            <Helmet>
                <title>Best Water Park in Patna | Jungle Resort Waterpark</title>

                <meta
                    name="description"
                    content="Enjoy the best water park in Patna at Jungle Resort with wave pool, rain dance, DJ, water slides & family fun. Book tickets online for best water park in Bihar."
                />

                <meta
                    name="keywords"
                    content="Best Water Park in Patna, Best Water Park in Bihar, Water park Patna, Jungle Resort water park, waterpark, Water park near me, Waterpark near me, Family water park Patna, Water slides Patna, Rain dance Patna, Wave pool Patna"
                />

                {/* Open Graph */}
                <meta property="og:title" content="Best Water Park in Patna | Jungle Resort Waterpark" />
                <meta property="og:description" content="Wave pool, rain dance, DJ & slides – enjoy the best water park in Patna at Jungle Resort." />
                <meta property="og:image" content="https://jungleresortpatna.in/WaterParkAds/6.jpeg" />
                <meta property="og:url" content="https://jungleresortpatna.in/waterpark-in-patna" />
                <meta property="og:type" content="website" />

                {/* Canonical */}
                <link rel="canonical" href="https://jungleresortpatna.in/waterpark-in-patna" />

                {/* Structured Data (SEO BOOST 🚀) */}
                <script type="application/ld+json">
                    {`
{
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Jungle Resort Water Park",
  "image": "https://jungleresortpatna.in/WaterParkAds/6.jpeg",
  "url": "https://jungleresortpatna.in/waterpark-in-patna",
  "telephone": "+91-9031080903",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bypass Thana, Marcha - Mirchi Road, more, Dharamsala",
    "addressLocality": "Patna",
    "addressRegion": "Bihar",
    "postalCode": "800009",
    "addressCountry": "India"
  },
  "description": "Best water park in Patna with wave pool, rain dance, DJ, slides and family fun activities at Jungle Resort."
}
`}
                </script>

            </Helmet>


            <Navbar />
            <TicketPricing />
            <Attractions />
            <WaterparkInfo />
            <Footer />
        </main>
    );
}