import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Layout from "./Layout"
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

import ScrollToTop from "./components/ScrollToTop";
import FloatingContact from "./components/FloatingContact";
import FloatingCartPill from "./components/FloatingCartPill";
import useScrollReveal from "./hooks/useScrollReveal";
import useDisableInspect from "./hooks/useDisableInspect";
import GlobalSchema from "./components/SEO/GlobalSchema";
import ScrollProgress from "./components/ScrollProgress";
import BookingModal from "./components/BookingModal";
import Breadcrumb from "./components/Breadcrumb";
import Navbar from "./components/navigation-temp";
import Footer from "./components/footer-temp";
import { TicketPricesProvider } from "./context/TicketPricesContext";

const Blog = lazy(() => import("./pages/Blog"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const Home = lazy(() => import("./pages/Home"));
const AuthModal = lazy(() => import("./components/AuthModal"));
const CompleteProfile = lazy(() => import("./pages/CompleteProfile"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/waterpark/Checkout"));
const UserDashboard = lazy(() => import("./pages/UserDashboard"));
const MyTickets = lazy(() => import("./pages/MyTickets"));
const Gallery = lazy(() => import("./pages/gallery/Gallery"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const AboutUs = lazy(() => import("./pages/about-section"));
const Services = lazy(() => import("./pages/services"));
const Waterpark = lazy(() => import("./pages/waterpark/Waterpark"));
const CottageInPatna = lazy(() => import("./pages/waterpark/CottageInPatna"));
const FunPark = lazy(() => import("./pages/events/FunParkDetails"));
const BirthdayCeremony = lazy(() => import("./pages/birthdays/Birthdays"));
const DestinationWeddingDetails = lazy(() => import("./pages/events/DestinationWeddingDetails"));
const WeddingDetails = lazy(() => import("./pages/events/WeddingDetails"));
const ReceptionDetails = lazy(() => import("./pages/events/ReceptionDetails"));
const ThemePartyDetails = lazy(() => import("./pages/events/ThemePartyDetails"));
const BirthdayDetails = lazy(() => import("./pages/events/BirthdayDetails"));
const AnniversaryDetails = lazy(() => import("./pages/events/AnniversaryDetails"));
const RingCeremonyDetails = lazy(() => import("./pages/events/RingCeremonyDetails"));
const CorporateEventsDetails = lazy(() => import("./pages/events/CorporateEventsDetails"));
const PoolPartyDetails = lazy(() => import("./pages/events/PoolPartyDetails"));
const HaldiDetails = lazy(() => import("./pages/events/HaldiDetails"));
const MehndiDetails = lazy(() => import("./pages/events/MehndiDetails"));
const SangeetDetails = lazy(() => import("./pages/events/SangeetDetails"));
const EngagementDetails = lazy(() => import("./pages/events/EngagementDetails"));
const GetTogetherDetails = lazy(() => import("./pages/events/GetTogetherDetails"));
const KittyPartyDetails = lazy(() => import("./pages/events/KittyPartyDetails"));
const CorporatePartyDetails = lazy(() => import("./pages/events/CorporatePartyDetails"));
const CorporatePoolPartyDetails = lazy(() => import("./pages/events/CorporatePoolPartyDetails"));
const BirthdayExplore = lazy(() => import("./components/home/BirthdayExplore"));
const BirthdayExploreBtn = lazy(() => import("./components/home/BirthdayExploreBtn"));
// const PoolParty = lazy(() => import("./pages/PoolParty"));

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => { });
  });
}

function App() {
  useScrollReveal();
  useDisableInspect();

  return (
    <TicketPricesProvider>
      <Router>
        <ScrollProgress />
        <GlobalSchema />
        <BookingModal />
        <Layout>
          <ScrollToTop />
          <Navbar />
          <Breadcrumb />

          <div className="page-content">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<AuthModal />} />
                <Route path="/complete-profile" element={<CompleteProfile />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route path="/my-tickets" element={<MyTickets />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/waterpark-in-patna" element={<Waterpark />} />
                <Route path="/cottage-in-patna" element={<CottageInPatna />} />
                <Route path="/cottage-booking" element={<Navigate to="/cottage-in-patna" replace />} />
                <Route path="/fun-park" element={<FunPark />} />
                <Route path="/birthday-ceremony" element={<BirthdayCeremony />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/destination-wedding-venue-in-patna" element={<DestinationWeddingDetails />} />
                <Route path="/wedding-venue-in-patna" element={<WeddingDetails />} />
                <Route path="/reception-venue-in-patna" element={<ReceptionDetails />} />
                <Route path="/theme-party-venue-in-patna" element={<ThemePartyDetails />} />
                <Route path="/birthday-party-venue-in-patna" element={<BirthdayDetails />} />
                <Route path="/birthday-explore-btn" element={<BirthdayExploreBtn />} />
                <Route path="/birthday-explore" element={<BirthdayExplore />} />
                <Route path="/anniversary-venue-in-patna" element={<AnniversaryDetails />} />
                <Route path="/ring-ceremony-venue-in-patna" element={<RingCeremonyDetails />} />
                <Route path="/corporate-event-venue-in-patna" element={<CorporateEventsDetails />} />
                <Route path="/pool-party-venue-in-patna" element={<PoolPartyDetails />} />
                <Route path="/haldi-venue-in-patna" element={<HaldiDetails />} />
                <Route path="/mehndi-venue-in-patna" element={<MehndiDetails />} />
                <Route path="/sangeet-venue-in-patna" element={<SangeetDetails />} />
                <Route path="/engagement-venue-in-patna" element={<EngagementDetails />} />
                <Route path="/get-together-venue-in-patna" element={<GetTogetherDetails />} />
                <Route path="/kitty-party-venue-in-patna" element={<KittyPartyDetails />} />
                <Route path="/corporate-party-venue-in-patna" element={<CorporatePartyDetails />} />
                <Route path="/corporate-pool-party-venue-in-patna" element={<CorporatePoolPartyDetails />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetails />} />
                {/* <Route path="/pool-party" element={<PoolParty />} /> */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </div>

          <Footer />
          <FloatingContact />
          <FloatingCartPill />
        </Layout>
      </Router>
    </TicketPricesProvider>
  )
}

export default App
