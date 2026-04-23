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
                <title>Luxury Cottage Stay in Patna | Jungle Resort Patna</title>
                <meta
                    name="description"
                    content="Book the best luxury cottage stay in Patna at Jungle Resort. Private AC rooms, peaceful jungle ambiance, and water park access. Best resort in Patna for families and couples."
                />
                <meta
                    name="keywords"
                    content="Cottage in Patna, Resort in Patna, Best Cottage in Patna, Luxury Stay Patna, Jungle Resort Cottage, Private Room Patna, Family Resort Patna, Couple Stay Patna"
                />
                <meta property="og:title" content="Luxury Cottage Stay in Patna | Jungle Resort Patna" />
                <meta property="og:description" content="Private AC cottages, peaceful jungle ambiance & water park access – enjoy the best stay in Patna at Jungle Resort." />
                <meta property="og:image" content="https://jungleresortpatna.in/images/cottage-main.webp" />
                <meta property="og:url" content="https://jungleresortpatna.in/cottage-in-patna" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://jungleresortpatna.in/cottage-in-patna" />

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
   "name": "Cottage Stay",
   "item": "https://jungleresortpatna.in/cottage-in-patna"
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
