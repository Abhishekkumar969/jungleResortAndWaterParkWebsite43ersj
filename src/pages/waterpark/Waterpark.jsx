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
                <title>Best Water Park in Patna | Water Park in Patna - Jungle Resort</title>
                <meta
                    name="description"
                    content="Visit the best water park in Patna at Jungle Resort. Wave pool, water slides, rain dance, and family fun. Book your water park tickets online in Patna today!"
                />
                <meta
                    name="keywords"
                    content="water park in patna, best water park in patna, water park patna, jungle resort water park, water park near me patna, ticket price water park patna"
                />

                <meta property="og:title" content="Best Water Park in Patna | Jungle Resort Water Park" />
                <meta property="og:description" content="Wave pool, rain dance, DJ & slides – enjoy the best water park in Patna at Jungle Resort." />
                <meta property="og:image" content="https://www.jungleresortpatna.in/WaterParkAds/6.jpeg" />
                <meta property="og:url" content="https://www.jungleresortpatna.in/waterpark-in-patna" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.jungleresortpatna.in/waterpark-in-patna" />

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
   "item": "https://www.jungleresortpatna.in/"
  },
  {
   "@type": "ListItem",
   "position": 2,
   "name": "Waterpark",
   "item": "https://www.jungleresortpatna.in/waterpark-in-patna"
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