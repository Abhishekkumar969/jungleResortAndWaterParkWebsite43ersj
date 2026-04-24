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
                <title>Luxury Cottage Stay in Patna | Best Resort for Stay - Jungle Resort</title>
                <meta
                    name="description"
                    content="Experience the best luxury cottage stay in Patna at Jungle Resort. Perfect for families and couples with private AC rooms and a peaceful jungle vibe. Book your stay now!"
                />
                <meta
                    name="keywords"
                    content="cottage in patna, resort in patna for stay, best cottage in patna, luxury room in patna, jungle resort stay, couple friendly resort patna"
                />
                <meta property="og:title" content="Luxury Cottage Stay in Patna | Jungle Resort Patna" />
                <meta property="og:description" content="Private AC cottages, peaceful jungle ambiance & water park access – enjoy the best stay in Patna at Jungle Resort." />
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
   "name": "Cottage Stay",
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
