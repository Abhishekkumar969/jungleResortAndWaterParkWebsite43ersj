import React from "react";
import Navbar from "../../components/navigation-temp";
import Footer from "../../components/footer-temp";
import TicketPricing from "../../components/waterpark/ticket-pricing";
import WaterparkInfo from "../../components/waterpark/waterpark-info";
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

                <meta property="og:title" content="Best Water Park in Patna | Jungle Resort Waterpark" />
                <meta property="og:description" content="Wave pool, rain dance, DJ & slides – enjoy the best water park in Patna at Jungle Resort." />
                <meta property="og:image" content="https://jungleresortpatna.in/WaterParkAds/6.jpeg" />
                <meta property="og:url" content="https://jungleresortpatna.in/waterpark-in-patna" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://jungleresortpatna.in/waterpark-in-patna" />

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
            <WaterparkInfo />
            <Footer />
        </main>
    );
}