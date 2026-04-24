import React, { useEffect } from "react"
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

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => { });
  });
}

function App() {
  useScrollReveal();
  useDisableInspect();

  return (
    <Router>
      <ScrollProgress />
      <GlobalSchema />
      <BookingModal />
      <Layout>
        <ScrollToTop />


        <Routes>

          <Route path="/" element={<Suspense fallback={<Loader />}>  <Home /> </Suspense>} />

          <Route path="/auth" element={<AuthModal />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />

          <Route path="/cart" element={<Suspense fallback={<Loader />}> <Cart /> </Suspense>} />
          <Route path="/checkout" element={<Suspense fallback={<Loader />}>  <Checkout /> </Suspense>} />
          <Route path="/dashboard" element={<Suspense fallback={<Loader />}>  <UserDashboard /> </Suspense>} />
          <Route path="/my-tickets" element={<Suspense fallback={<Loader />}>  <MyTickets /> </Suspense>} />

          <Route path="/about-us" element={<Suspense fallback={<Loader />}>  <AboutUs /> </Suspense>} />
          <Route path="/services" element={<Suspense fallback={<Loader />}>  <Services /> </Suspense>} />

          <Route path="/waterpark-in-patna" element={<Suspense fallback={<Loader />}>  <Waterpark /> </Suspense>} />
          <Route path="/cottage-in-patna" element={<Suspense fallback={<Loader />}>  <CottageInPatna /> </Suspense>} />
          <Route path="/cottage-booking" element={<Navigate to="/cottage-in-patna" replace />} />
          <Route path="/fun-park" element={<Suspense fallback={<Loader />}>  <FunPark /> </Suspense>} />

          <Route path="/birthday-ceremony" element={<Suspense fallback={<Loader />}>  <BirthdayCeremony /> </Suspense>} />


          <Route path="/contact" element={<Suspense fallback={<Loader />}>  <Contact /> </Suspense>} />
          <Route path="/gallery" element={<Suspense fallback={<Loader />}>  <Gallery /> </Suspense>} />

          <Route path="/destination-wedding" element={<Suspense fallback={<Loader />}>  <DestinationWeddingDetails /> </Suspense>} />
          <Route path="/wedding" element={<Suspense fallback={<Loader />}>  <WeddingDetails /> </Suspense>} />
          <Route path="/reception" element={<Suspense fallback={<Loader />}>  <ReceptionDetails /> </Suspense>} />
          <Route path="/theme-party" element={<Suspense fallback={<Loader />}>  <ThemePartyDetails /> </Suspense>} />

          <Route path="/birthday" element={<Suspense fallback={<Loader />}>  <BirthdayDetails /> </Suspense>} />

          <Route path="/birthday-explore-btn" element={<Suspense fallback={<Loader />}>  <BirthdayExploreBtn /> </Suspense>} />
          <Route path="/birthday-explore" element={<Suspense fallback={<Loader />}>  <BirthdayExplore /> </Suspense>} />

          <Route path="/anniversary" element={<Suspense fallback={<Loader />}>  <AnniversaryDetails /> </Suspense>} />
          <Route path="/ring-ceremony" element={<Suspense fallback={<Loader />}>  <RingCeremonyDetails /> </Suspense>} />

          <Route path="/corporate-events" element={<Suspense fallback={<Loader />}>  <CorporateEventsDetails /> </Suspense>} />
          <Route path="/pool-party" element={<Suspense fallback={<Loader />}>  <PoolPartyDetails /> </Suspense>} />

          <Route path="/haldi" element={<Suspense fallback={<Loader />}>  <HaldiDetails /> </Suspense>} />
          <Route path="/mehndi" element={<Suspense fallback={<Loader />}>  <MehndiDetails /> </Suspense>} />
          <Route path="/sangeet" element={<Suspense fallback={<Loader />}>  <SangeetDetails /> </Suspense>} />
          <Route path="/engagement" element={<Suspense fallback={<Loader />}>  <EngagementDetails /> </Suspense>} />

          <Route path="/get-together" element={<Suspense fallback={<Loader />}>  <GetTogetherDetails /> </Suspense>} />
          <Route path="/kitty-party" element={<Suspense fallback={<Loader />}>  <KittyPartyDetails /> </Suspense>} />
          <Route path="/corporate-party" element={<Suspense fallback={<Loader />}>  <CorporatePartyDetails /> </Suspense>} />
          <Route path="/corporate-pool-party" element={<Suspense fallback={<Loader />}>  <CorporatePoolPartyDetails /> </Suspense>} />

          <Route path="/blog" element={<Suspense fallback={<Loader />}> <Blog /> </Suspense>} />
          <Route path="/blog/:slug" element={<Suspense fallback={<Loader />}> <BlogDetails /> </Suspense>} />

        </Routes>


        <FloatingContact />
        <FloatingCartPill />
      </Layout>
    </Router>
  )
}

export default App
