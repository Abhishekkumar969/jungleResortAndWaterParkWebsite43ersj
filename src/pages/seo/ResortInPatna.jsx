import React from 'react';
import SEOLandingPage from '../../components/SEOLandingPage';

export default function ResortInPatna() {
    const seo = {
        title: "Best Resort in Patna | Luxury Stay & Waterpark - Jungle Resort",
        description: "Looking for the best resort in Patna? Jungle Resort offers luxury stays, a thrilling water park, banquet halls, and lush wedding lawns in Patna, Bihar. Book your getaway today!",
        keywords: "Resort in Patna, Best Resort in Patna, Luxury Resort in Patna, Water Park in Patna, Stay in Patna, Weekend Getaway Patna, Patna Resorts",
        canonical: "https://www.jungleresortpatna.in/resort-in-patna"
    };

    const hero = {
        bgImage: "/videos/hero.webp",
        title: "The Best Resort in Patna",
        subtitle: "Experience luxury, nature, and thrilling water park adventures at Jungle Resort Patna — the ultimate destination for your weekend getaway or grand celebration.",
        formType: "Resort Booking"
    };

    const sections = [
        {
            heading: "Welcome to the Best Resort in Patna",
            content: (
                <>
                    <p>When searching for a <strong>Resort in Patna</strong>, your ultimate destination for relaxation, luxury, and entertainment is Jungle Resort & Water Park. Situated away from the chaotic city noise yet easily accessible, our luxury resort offers a pristine environment where nature meets modern elegance. Whether you are planning a peaceful weekend staycation with your family, a romantic getaway, or a grand celebration, Jungle Resort stands out as the premier choice among resorts in Patna.</p>
                    <p>We believe that luxury is not just about expensive decor, but about the experience. From the moment you step into our expansive property, you are greeted with lush greenery, beautifully manicured lawns, and a sense of serenity. Our eco-friendly architecture blends seamlessly with the natural surroundings, making us not just the best resort in Patna, but a true sanctuary for nature lovers. Our dedicated staff ensures that every aspect of your stay is personalized, comfortable, and memorable.</p>
                    <p>In addition to our serene environment, we offer world-class amenities including a massive outdoor swimming pool, fully air-conditioned luxury cottages, and a thrilling water park that is perfect for kids and adults alike. There is simply no other resort in Patna that combines a tranquil retreat with such high-energy entertainment options.</p>
                </>
            ),
            image: "/images/cottage-main.webp"
        },
        {
            heading: "Luxury Accommodation & Cottage Rooms",
            content: (
                <>
                    <p>Accommodation at Jungle Resort redefines luxury living in Bihar. As the leading <strong>luxury resort in Patna</strong>, we offer beautifully designed Cottage Rooms that provide privacy, comfort, and direct access to nature. Each cottage is equipped with modern amenities including high-speed Wi-Fi, flat-screen TVs, plush king-sized beds, and premium toiletries.</p>
                    <p>Waking up to the sound of chirping birds and stepping out onto your private veranda to sip morning tea is an experience our guests cherish. Unlike typical city hotels, our cottages are spread out across the property, ensuring that you have your own private oasis. Whether you are here for a single night or an extended vacation, our accommodations are designed to make you feel right at home.</p>
                    <p>We also offer special honeymoon suites and family cottages. If you are hosting an event, our resort can accommodate a large number of guests, ensuring that everyone attending your destination wedding or corporate retreat enjoys a comfortable and luxurious stay. It is this commitment to hospitality that makes us the most sought-after resort in Patna.</p>
                </>
            ),
            image: "/images/gallery-1.webp"
        },
        {
            heading: "More Than Just a Resort: The Ultimate Water Park Experience",
            content: (
                <>
                    <p>What truly sets Jungle Resort apart from any other <strong>resort in Patna</strong> is our spectacular in-house water park. Perfect for beating the summer heat, our water park features thrilling slides, a massive wave pool, rain dance areas, and dedicated safe zones for toddlers and young children. </p>
                    <p>Guests staying at our resort get exclusive access to these facilities. Imagine spending your morning relaxing in your luxury cottage, your afternoon screaming with joy on our high-speed water slides, and your evening enjoying a quiet dinner under the stars. This comprehensive entertainment package makes us the best resort in Patna for families and thrill-seekers.</p>
                    <p>Safety is our top priority. Our water park is monitored by certified lifeguards at all times, and our water filtration systems are state-of-the-art, ensuring a clean and hygienic environment for all our guests.</p>
                </>
            ),
            image: "/eventPics/Pool Party/waterparkjungleresort.webp"
        },
        {
            heading: "The Perfect Venue for Grand Events & Weddings",
            content: (
                <>
                    <p>Jungle Resort is not only a place to stay; it is the most prestigious <strong>wedding resort in Patna</strong>. With sprawling wedding lawns that can accommodate thousands of guests and fully air-conditioned premium banquet halls, we are the preferred choice for destination weddings in Bihar.</p>
                    <p>Our expert event management team handles everything from floral decorations and thematic lighting to gourmet catering and guest logistics. We understand that a wedding is a once-in-a-lifetime event, and we go above and beyond to make it flawless. By choosing the best resort in Patna for your wedding, you are guaranteeing a magical experience for yourself and your guests.</p>
                    <p>Beyond weddings, our resort in Patna is an ideal location for corporate retreats, team-building exercises, and large birthday celebrations. The combination of our conference facilities, open lawns, and recreational activities provides a balanced environment for both work and play.</p>
                </>
            ),
            image: "/images/venue-wedding.webp"
        },
        {
            heading: "Gourmet Dining at Jungle Resort",
            content: (
                <>
                    <p>No luxury resort experience is complete without exceptional culinary offerings. At Jungle Resort Patna, our in-house restaurants and catering services serve a delectable array of Indian, Chinese, Continental, and local Bihari cuisines. Our master chefs use only the freshest ingredients to craft dishes that tantalize your taste buds.</p>
                    <p>Whether you are enjoying a romantic candlelit dinner by the pool, a hearty buffet breakfast, or bespoke catering for your wedding event, the food at our resort is consistently rated as excellent by our guests. We also cater to special dietary requirements upon request, ensuring that everyone has a delightful dining experience.</p>
                    <p>Come and taste the difference at the best resort in Patna, where every meal is a celebration of flavor and hospitality.</p>
                </>
            ),
            image: "/images/birthday-stage.webp"
        }
    ];

    const gallery = [
        { url: "/images/cottage-main.webp", alt: "Cottage at Resort in Patna" },
        { url: "/images/venue-wedding.webp", alt: "Wedding Resort in Patna" },
        { url: "/images/gallery-1.webp", alt: "Luxury Resort in Patna" },
        { url: "/images/gallery-2.webp", alt: "Best Resort in Patna" },
        { url: "/eventPics/Pool Party/waterparkjungleresort.webp", alt: "Water Park Resort Patna" },
        { url: "/eventPics/Wed/jungleresort.webp", alt: "Jungle Resort Patna" },
        { url: "/eventPics/Wed/jungleresort1.webp", alt: "Jungle Resort Patna Events" },
        { url: "/eventPics/Corporate Event/Corporate Event5.webp", alt: "Corporate Resort Patna" },
        { url: "/eventPics/Birthday/05.webp", alt: "Birthday Resort Patna" },
        { url: "/eventPics/Haldi/01.webp", alt: "Haldi at Resort" },
        { url: "/eventPics/Mehndi/01.webp", alt: "Mehndi at Resort" },
        { url: "/eventPics/Sangeet/02.webp", alt: "Sangeet at Resort" },
        { url: "/eventPics/Reception/03.webp", alt: "Reception at Resort" },
        { url: "/WaterParkAds/6.jpeg", alt: "Resort Swimming Pool" },
        { url: "/eventPics/Wed/unnamed.webp", alt: "Resort Night View" },
        { url: "/eventPics/Pool Party/2.webp", alt: "Pool Party Resort" }
    ];

    const faqs = [
        {
            q: "Which is the best resort in Patna?",
            a: "Jungle Resort & Water Park is widely considered the best resort in Patna due to its combination of luxury cottages, a massive water park, expansive wedding lawns, and premium banquet halls."
        },
        {
            q: "Does the resort in Patna have a swimming pool?",
            a: "Yes, Jungle Resort features a world-class water park and large swimming pools, complete with wave pools and slides, making it the perfect luxury resort in Patna for families."
        },
        {
            q: "Can I book this resort for a wedding in Patna?",
            a: "Absolutely! We are the premier wedding resort in Patna, offering massive open lawns and air-conditioned banquet halls perfect for destination weddings, receptions, and pre-wedding functions."
        },
        {
            q: "What are the accommodation options at the resort?",
            a: "We offer beautifully designed, fully air-conditioned luxury cottage rooms that provide a perfect blend of comfort and nature, making us the top choice for a staycation in Patna."
        },
        {
            q: "Is Jungle Resort suitable for corporate events?",
            a: "Yes, our resort in Patna is an excellent venue for corporate events, team outings, and conferences, offering both meeting spaces and recreational activities."
        }
    ];

    const reviews = [
        { stars: 5, text: "Absolutely the best resort in Patna! The cottages are beautiful, the water park is incredibly fun, and the staff is extremely hospitable. We had a wonderful weekend stay here.", author: "Rahul K." },
        { stars: 5, text: "We booked Jungle Resort for our destination wedding and it was magical. The wedding lawn is huge and the catering was delicious. Truly a luxury resort in Patna.", author: "Priya S." },
        { stars: 5, text: "A hidden gem in Bihar! If you are looking for a resort in Patna to relax away from the city, this is it. The pool and rain dance were the highlights for my kids.", author: "Amit V." }
    ];

    const internalLinks = [
        { label: "Banquet Hall in Patna", path: "/banquet-hall-in-patna" },
        { label: "Destination Wedding in Patna", path: "/destination-wedding-in-patna" },
        { label: "Marriage Hall in Patna", path: "/marriage-hall-in-patna" },
        { label: "Corporate Event Venue in Patna", path: "/corporate-event-venue-in-patna" },
        { label: "Wedding Lawn in Patna", path: "/wedding-lawn-in-patna" },
        { label: "Birthday Party Venue in Patna", path: "/birthday-party-venue-in-patna" }
    ];

    return (
        <SEOLandingPage 
            seo={seo}
            hero={hero}
            sections={sections}
            gallery={gallery}
            faqs={faqs}
            reviews={reviews}
            internalLinks={internalLinks}
        />
    );
}
