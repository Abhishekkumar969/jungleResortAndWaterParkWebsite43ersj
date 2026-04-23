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
  }
 ]
}
`}
                </script>

            </Helmet>

            <Navbar />



            <TicketPricing />

            <div style={{ display: "flex", justifyContent: "center", color: "#0290d2" }}>
                <h1>Best Waterpark in Patna</h1>
            </div>

            <div style={{ display: "flex", justifyContent: "center", color: "#ff00e6", margin: "auto 20px" }}>
                <p>
                    Jungle Resort Waterpark is the best waterpark in Patna offering exciting water slides, wave pool,
                    rain dance, DJ music, and family entertainment. Located in Patna, Bihar, it is the perfect place
                    for weekend fun, birthday parties, and group outings. Book your tickets online and enjoy the most
                    thrilling water park experience in Patna.
                </p>
            </div>

            <Attractions />
            <WaterparkInfo />
            <Footer />
        </main>
    );
}