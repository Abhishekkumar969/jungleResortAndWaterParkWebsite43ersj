import React from "react";
import { Helmet } from "react-helmet";
import { Utensils, Car, Wifi, Camera, Music, Flower, Users, Shield } from "lucide-react";

import Navbar from "../components/navigation-temp";
import Footer from "../components/footer-temp";
import styles from "../styles/services-section.module.css";
import { Link } from "react-router-dom";

const services = [
    {
        icon: Utensils,
        title: "Gourmet Catering",
        description: "Delicious multi-cuisine menu with veg and non-veg options prepared by expert chefs."
    },
    {
        icon: Camera,
        title: "Photography & Video",
        description: "Professional photography and cinematography to capture every precious moment."
    },
    {
        icon: Flower,
        title: "Decor & Themes",
        description: "Stunning floral arrangements and custom themed decorations for your event."
    },
    {
        icon: Music,
        title: "Entertainment",
        description: "DJ, live bands, and entertainment setups to keep the celebration going."
    },
    {
        icon: Car,
        title: "Valet Parking",
        description: "Complimentary valet parking with ample space for all your guests."
    },
    {
        icon: Wifi,
        title: "Modern Amenities",
        description: "High-speed WiFi, AC halls, and state-of-the-art audio-visual equipment."
    },
    {
        icon: Users,
        title: "Event Management",
        description: "Dedicated event coordinators to handle every detail of your celebration."
    },
    {
        icon: Shield,
        title: "Safety & Security",
        description: "24/7 security with CCTV surveillance for your peace of mind."
    }
];


export default function ServicesSection() {
    return (
        <>
            <Helmet>
                <title>Our Services | Jungle Resort & Water Park Patna</title>
                <meta
                    name="description"
                    content="Explore our comprehensive services including gourmet catering, photography, event management, and more at Jungle Resort & Waterpark Patna."
                />
                <link rel="canonical" href="https://www.jungleresortpatna.in/services" />
            </Helmet>
            <Navbar />
            <section className={styles.servicesSection}>

                <div className="container">

                    <h1 style={{ display: "none" }}>
                        Best Wedding Resort in Patna | Jungle Resort & Water Park
                    </h1>

                    <h2 className={styles.hiddenSeo}>
                        Best Wedding Resort in Patna | Jungle Resort & Water Park | Banquet Hall & Water Park Bihar
                    </h2>

                    <div className={styles.servicesHeader}>

                        <span className={styles.servicesLabel}>Our Services</span>

                        <h2 className={styles.servicesTitle}>
                            Everything You Need <span>Under One Roof</span>
                        </h2>

                        <p className={styles.servicesDesc}>
                            From catering to entertainment, we provide comprehensive services
                            to make your event truly special and hassle-free.
                        </p>

                    </div>

                    <div className={styles.servicesGrid}>

                        {services.map((service, index) => {

                            const Icon = service.icon;

                            return (
                                <div key={index} className={styles.serviceCard}>

                                    <div className={styles.serviceIcon}>
                                        <Icon size={28} />
                                    </div>

                                    <h3>{service.title}</h3>

                                    <p>{service.description}</p>

                                </div>
                            );

                        })}

                    </div>

                    <section className={styles.servicesSeoContent}>

                        <strong>Best wedding venue in Patna with water park and luxury resort facilities</strong>

                        <p>
                            <strong>Jungle Resort & Water Park in Patna, Bihar</strong> offers a complete range of <strong>wedding, event, and celebration services</strong> designed to create unforgettable experiences. Whether you are planning a <strong>grand wedding in Patna</strong>, a <strong>birthday party</strong>, a <strong>corporate event</strong>, or a <strong>pool party at a water park</strong>, our resort provides everything you need under one roof. With a perfect combination of <i>luxury, nature, and modern facilities</i>, we ensure that every event becomes truly special and stress-free.
                        </p>



                        <p>
                            Our <strong>gourmet catering services</strong> are one of the highlights of our resort. We offer a wide variety of <strong>multi-cuisine menus</strong>, including both veg and non-veg options, prepared by <i>experienced and professional chefs</i>. From traditional Indian wedding meals to modern fusion dishes, our catering team ensures that your guests enjoy <strong>high-quality food and exceptional taste</strong>. Food plays a major role in any celebration, and we make sure it becomes one of the most memorable parts of your event.
                        </p>

                        <p>
                            We also provide <strong>professional photography and videography services</strong> to capture every precious moment of your special day. Our team uses <i>modern cameras, drones, and cinematic techniques</i> to create beautiful memories that last forever. Whether it’s a wedding, reception, or corporate event, we ensure that every important moment is captured with perfection and creativity.
                        </p>

                        <p>
                            When it comes to decoration, our <strong>custom decor and theme services</strong> make your event visually stunning. From <strong>luxury wedding decorations</strong> to <strong>birthday themes and corporate setups</strong>, we design everything according to your preferences. Our team specializes in <i>floral arrangements, stage design, lighting, and creative concepts</i> that enhance the overall ambiance of your celebration.
                        </p>

                        <p>
                            Entertainment is another key part of any successful event. At <strong>Jungle Resort & Water Park Patna</strong>, we provide <strong>DJ services, live bands, and entertainment setups</strong> to keep your guests engaged and energized. Whether you want a <i>high-energy dance floor</i> or a <i>relaxing musical evening</i>, we have the right arrangements to match your event style.
                        </p>

                        <p>
                            Our resort also offers <strong>valet parking and guest management services</strong> to ensure a smooth and comfortable experience for all your visitors. With <strong>ample parking space</strong> and trained staff, we take care of every detail so that your guests feel welcomed and relaxed from the moment they arrive.
                        </p>

                        <p>
                            We are equipped with <strong>modern amenities</strong> such as <strong>high-speed WiFi, fully air-conditioned halls, and advanced audio-visual systems</strong>. These facilities make our resort ideal for <strong>corporate events, conferences, and business meetings in Patna</strong>. Our infrastructure is designed to support both entertainment and professional gatherings with equal efficiency.
                        </p>

                        <p>
                            One of the biggest advantages of choosing us is our <strong>complete event management service</strong>. Our dedicated team of <i>event planners and coordinators</i> handles everything from planning to execution. Whether it’s a small private gathering or a large-scale wedding with thousands of guests, we ensure that every detail is managed perfectly. This allows you to enjoy your event without worrying about logistics or arrangements.
                        </p>

                        <p>
                            Safety is also a top priority at our resort. We provide <strong>24/7 security services with CCTV surveillance</strong> to ensure a safe and secure environment for all guests. Our trained staff and security systems make us one of the <strong>most reliable and trusted event venues in Patna</strong>.
                        </p>

                        <p>
                            What truly sets <strong>Jungle Resort & Water Park</strong> apart is its unique combination of a <strong>luxury resort and an exciting water park in Patna</strong>. Guests can enjoy <strong>pool parties, water rides, and fun-filled activities</strong> along with their celebrations. This makes it a perfect destination for <i>family outings, summer parties, and destination-style weddings</i> within the city.
                        </p>

                        <p>
                            If you are searching for the <strong>best wedding venue in Patna</strong>, a <strong>top banquet hall in Bihar</strong>, or a <strong>resort with water park facilities</strong>, Jungle Resort & Water Park is your ideal destination. With our <strong>premium services, experienced team, and beautiful natural surroundings</strong>, we ensure that every event becomes a memorable experience. <strong>Book your event today</strong> and enjoy world-class hospitality, exceptional service, and unforgettable celebrations at one of the finest resorts in Patna.
                        </p>

                        <p>
                            Looking for a <strong>wedding venue in Patna</strong>? Explore our{" "}
                            <Link to="/about-us"><strong>Jungle Resort & Water Park</strong></Link>{" "}
                            to know more about our premium facilities.
                        </p>

                        <p>
                            You can also check our{" "}
                            <Link to="/gallery"><strong>event gallery</strong></Link>{" "}
                            to see real wedding, birthday, and corporate event setups.
                        </p>

                        <p>
                            Planning fun activities? Visit our{" "}
                            <Link to="/waterpark-in-patna"><strong>water park in Patna</strong></Link>{" "}
                            for pool parties and summer events.
                        </p>

                    </section >

                    <div className={styles.servicesSeoContent} >

                        <h3 style={{ color: "#e72e77" }}>Why Jungle Resort & Water Park is the Best in Patna</h3>

                        <ul>

                            <li><strong>Top Rated Banquet Hall in Patna</strong> with 4.6+ Google rating</li>
                            <li><strong>Located at Bypass Thana, Marcha - Mirchi Road, Patna</strong></li>
                            <li><strong>Capacity of 10,000+ guests</strong> for grand weddings</li>
                            <li><strong>Luxury resort with natural surroundings</strong></li>
                            <li><strong>Perfect for weddings, receptions, birthdays & corporate events</strong></li>

                            <li>Premium AC banquet halls</li>
                            <li>Massive open lawns for outdoor weddings</li>
                            <li>Beautiful stage decoration setup</li>
                            <li>Fully customizable wedding themes</li>
                            <li>Affordable to luxury pricing options</li>

                            <li>Best destination wedding resort in Patna</li>
                            <li>Water park facility for fun & entertainment</li>
                            <li>Ideal for pool parties and summer events</li>
                            <li>Family-friendly environment</li>
                            <li>Clean and hygienic infrastructure</li>

                            <li>Professional event management team</li>
                            <li>In-house catering with multi-cuisine menu</li>
                            <li>Veg & non-veg options available</li>
                            <li>High-quality food service</li>
                            <li>Guest satisfaction focused service</li>

                            <li>24/7 security with CCTV surveillance</li>
                            <li>Large parking space available</li>
                            <li>Easy accessibility from all parts of Patna</li>
                            <li>Close to main city location</li>
                            <li>Well-connected road access</li>

                            <li>Perfect for destination weddings in Bihar</li>
                            <li>Best resort for engagement ceremonies</li>
                            <li>Top venue for mehndi and haldi functions</li>
                            <li>Ideal for birthday and anniversary celebrations</li>
                            <li>Corporate event friendly infrastructure</li>

                            <li>DJ, music and entertainment setup</li>
                            <li>Lighting and decoration services</li>
                            <li>Photography & videography support</li>
                            <li>Custom event planning options</li>
                            <li>Luxury experience at affordable pricing</li>

                            <li>Highly rated by customers</li>
                            <li>Trusted wedding venue in Patna</li>
                            <li>Best marriage garden in Patna</li>
                            <li>Top resort for wedding events</li>
                            <li>One-stop solution for all events</li>

                            <li>Indoor and outdoor venue options</li>
                            <li>Poolside event setup available</li>
                            <li>Unique combination of resort + water park</li>
                            <li>Relaxing environment surrounded by greenery</li>
                            <li>Perfect for day and night events</li>

                            <li>Flexible booking options</li>
                            <li>Customized packages for every budget</li>
                            <li>Experienced staff and support team</li>
                            <li>Well-maintained property</li>
                            <li>Excellent customer reviews</li>

                            <li>Ideal for large-scale wedding planning</li>
                            <li>Best venue for luxury weddings in Bihar</li>
                            <li>Affordable wedding packages available</li>
                            <li>Modern infrastructure with traditional touch</li>
                            <li>Premium event experience guaranteed</li>

                        </ul>
                    </div>

                </div>

            </section>
            <Footer />
        </>
    );
}