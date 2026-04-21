import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/navigation-temp";
import Footer from "../../components/footer-temp";
import CottageBookingPage from "../../components/waterpark/CottageBookingPage";

export default function CottagePage() {
    return (
        <main>
            <Helmet>
                <title>Book Cottage Rooms | Jungle Resort & Waterpark Patna</title>
                <meta
                    name="description"
                    content="Book private AC cottage rooms at Jungle Resort Patna. Available for 4 Hours, 10 Hours, or 1 Full Day. 1-Day package includes Waterpark, Wave Pool, Rain Dance & Water Slides. Book online with Razorpay."
                />
                <meta
                    name="keywords"
                    content="cottage booking Patna, resort cottage Patna, Jungle resort cottage room, AC cottage, waterpark cottage package, cottage near Patna"
                />
                <meta property="og:title" content="Book Cottage Rooms | Jungle Resort Patna" />
                <meta property="og:description" content="5 private AC cottages — 4Hr, 10Hr & 1-Day packages. 1-Day includes full waterpark access." />
                <meta property="og:image" content="https://jungleresortpatna.in/images/cottage-exterior.webp" />
                <meta property="og:url" content="https://jungleresortpatna.in/cottage-booking" />
                <link rel="canonical" href="https://jungleresortpatna.in/cottage-booking" />
            </Helmet>

            <Navbar />
            <div style={{ paddingTop: "60px" }}>
                <CottageBookingPage />
            </div>
            <Footer />
        </main>
    );
}
