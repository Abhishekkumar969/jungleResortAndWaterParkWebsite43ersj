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
                <title>Top Waterpark in Patna - Tickets & Timings | Jungle Resort & Waterpark</title>
                <meta
                    name="description"
                    content="Experience the thrill of the best water park in Patna at Jungle Resort & Waterpark. Enjoy our massive wave pool, water slides, rain dance, and DJ. Book your tickets online today!"
                />
                <meta
                    name="keywords"
                    content="water park in patna, best water park in patna, water park patna tickets, jungle resort water park, water park timings patna, ticket price water park patna"
                />

                <meta property="og:title" content="Top Waterpark in Patna | Jungle Resort & Waterpark" />
                <meta property="og:description" content="Wave pool, rain dance, DJ & slides – enjoy the most exciting water park in Patna at Jungle Resort & Waterpark." />
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
   "name": "Water Park Tickets Price",
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