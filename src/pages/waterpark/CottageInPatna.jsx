import React from "react";
import Navbar from "../../components/navigation-temp";
import Footer from "../../components/footer-temp";
import CottagePricing from "../../components/waterpark/cottage-pricing";
import CottageInfo from "../../components/waterpark/CottageInfo";
import styles from "../../styles/waterpark-page.module.css";
import { Helmet } from "react-helmet";

export default function CottageInPatna() {
    return (
        <main className={styles.waterparkPage}>
            <Helmet>
                <title>Luxury Cottage Stay in Patna - Book Now | Jungle Resort & Waterpark</title>
                <meta
                    name="description"
                    content="Book the finest luxury cottage stay in Patna at Jungle Resort & Waterpark. Enjoy private AC rooms, beautiful ambiance, and premium amenities. Perfect for families and couples."
                />
                <meta
                    name="keywords"
                    content="cottage stay in patna, best resort in patna for stay, luxury cottages patna, jungle resort rooms, couple friendly stay patna, resort room booking patna"
                />
                <meta property="og:title" content="Luxury Cottage Stay in Patna | Jungle Resort & Waterpark" />
                <meta property="og:description" content="Private AC cottages, beautiful ambiance & premium luxury – experience the best stay in Patna at Jungle Resort & Waterpark." />
                <meta property="og:image" content="https://www.jungleresortpatna.in/images/cottage-main.webp" />
                <meta property="og:url" content="https://www.jungleresortpatna.in/cottage-in-patna" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.jungleresortpatna.in/cottage-in-patna" />

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
   "name": "Luxury Cottage Stay In Patna",
   "item": "https://www.jungleresortpatna.in/cottage-in-patna"
  }
 ]
}
`}
                </script>
            </Helmet>
            <Navbar />
            <CottagePricing style={{ marginTop: "70px" }} />
            <CottageInfo />
            <Footer />
        </main>
    );
}
