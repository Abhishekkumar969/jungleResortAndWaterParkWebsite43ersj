import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

// import Home from "./pages/Home"

// import useSecurity from "./components/useSecurity";

// import AuthModal from "./components/AuthModal";
// import CompleteProfile from "./pages/CompleteProfile";
// import Cart from "./components/Cart";
// import Checkout from "./components/waterpark/Checkout";

// import UserDashboard from "./pages/UserDashboard";
// import MyTickets from "./pages/MyTickets";

import ScrollToTop from "./components/ScrollToTop";
import FloatingContact from "./components/FloatingContact";

// import Gallery from "./pages/gallery/Gallery";
// import Contact from "./pages/contact/Contact";
// import AboutUs from "./pages/about-section";
// import Services from "./pages/services-section";

// import Waterpark from "./pages/waterpark/Waterpark";
// import FunPark from "./pages/events/FunParkDetails";
// import BirthdayCeremony from "./pages/birthdays/Birthdays";

// import DestinationWeddingDetails from "./pages/events/DestinationWeddingDetails";
// import WeddingDetails from "./pages/events/WeddingDetails";
// import ReceptionDetails from "./pages/events/ReceptionDetails";
// import ThemePartyDetails from "./pages/events/ThemePartyDetails";
// import BirthdayDetails from "./pages/events/BirthdayDetails";
// import AnniversaryDetails from "./pages/events/AnniversaryDetails";
// import RingCeremonyDetails from "./pages/events/RingCeremonyDetails";

// import CorporateEventsDetails from "./pages/events/CorporateEventsDetails";
// import PoolPartyDetails from "./pages/events/PoolPartyDetails";

// import HaldiDetails from "./pages/events/HaldiDetails";
// import MehndiDetails from "./pages/events/MehndiDetails";
// import SangeetDetails from "./pages/events/SangeetDetails";
// import EngagementDetails from "./pages/events/EngagementDetails";
// import GetTogetherDetails from "./pages/events/GetTogetherDetails";
// import KittyPartyDetails from "./pages/events/KittyPartyDetails";
// import CorporatePartyDetails from "./pages/events/CorporatePartyDetails";
// import CorporatePoolPartyDetails from "./pages/events/CorporatePoolPartyDetails";

// import BirthdayExplore from "./components/home/BirthdayExplore";
// import BirthdayExploreBtn from "./components/home/BirthdayExploreBtn";


import Home from "./pages/Home";


const AuthModal = lazy(() => import("./components/AuthModal"));
const CompleteProfile = lazy(() => import("./pages/CompleteProfile"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/waterpark/Checkout"));
const UserDashboard = lazy(() => import("./pages/UserDashboard"));
const MyTickets = lazy(() => import("./pages/MyTickets"));

const Gallery = lazy(() => import("./pages/gallery/Gallery"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const AboutUs = lazy(() => import("./pages/about-section"));
const Services = lazy(() => import("./pages/services-section"));

const Waterpark = lazy(() => import("./pages/waterpark/Waterpark"));
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

// const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
// const FloatingContact = lazy(() => import("./components/FloatingContact"));




if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js")
      .then(() => console.log("PWA Ready 🔥"))
      .catch((err) => console.log(err));
  });
}

function App() {

  // useSecurity();

  return (
    <Router>
      <Layout>
        <ScrollToTop />



        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/auth" element={<AuthModal />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />

          <Route path="/cart" element={<Suspense fallback={<Loader />}> <Cart /> </Suspense>} />
          <Route path="/checkout" element={<Suspense fallback={<Loader />}>  <Checkout /> </Suspense>} />
          <Route path="/dashboard" element={<Suspense fallback={<Loader />}>  <UserDashboard /> </Suspense>} />
          <Route path="/mytickets" element={<Suspense fallback={<Loader />}>  <MyTickets /> </Suspense>} />

          <Route path="/AboutUs" element={<Suspense fallback={<Loader />}>  <AboutUs /> </Suspense>} />
          <Route path="/Services" element={<Suspense fallback={<Loader />}>  <Services /> </Suspense>} />

          <Route path="/waterpark-in-patna" element={<Suspense fallback={<Loader />}>  <Waterpark /> </Suspense>} />
          <Route path="/FunPark" element={<Suspense fallback={<Loader />}>  <FunPark /> </Suspense>} />

          <Route path="/BirthdayCeremony" element={<Suspense fallback={<Loader />}>  <BirthdayCeremony /> </Suspense>} />


          {/* <Route path="/birthday-details" element={<BirthdayDetails />} /> */}


          <Route path="/Contact" element={<Suspense fallback={<Loader />}>  <Contact /> </Suspense>} />
          <Route path="/Gallery" element={<Suspense fallback={<Loader />}>  <Gallery /> </Suspense>} />

          <Route path="/destinationwedding" element={<Suspense fallback={<Loader />}>  <DestinationWeddingDetails /> </Suspense>} />
          <Route path="/wedding" element={<Suspense fallback={<Loader />}>  <WeddingDetails /> </Suspense>} />
          <Route path="/reception" element={<Suspense fallback={<Loader />}>  <ReceptionDetails /> </Suspense>} />
          <Route path="/themeparty" element={<Suspense fallback={<Loader />}>  <ThemePartyDetails /> </Suspense>} />

          <Route path="/birthday" element={<Suspense fallback={<Loader />}>  <BirthdayDetails /> </Suspense>} />

          <Route path="/birthdayexplorebtn" element={<Suspense fallback={<Loader />}>  <BirthdayExploreBtn /> </Suspense>} />
          <Route path="/birthdayexplore" element={<Suspense fallback={<Loader />}>  <BirthdayExplore /> </Suspense>} />

          <Route path="/anniversary" element={<Suspense fallback={<Loader />}>  <AnniversaryDetails /> </Suspense>} />
          <Route path="/ringceremony" element={<Suspense fallback={<Loader />}>  <RingCeremonyDetails /> </Suspense>} />

          <Route path="/corporateevents" element={<Suspense fallback={<Loader />}>  <CorporateEventsDetails /> </Suspense>} />
          <Route path="/poolparty" element={<Suspense fallback={<Loader />}>  <PoolPartyDetails /> </Suspense>} />

          <Route path="/haldi" element={<Suspense fallback={<Loader />}>  <HaldiDetails /> </Suspense>} />
          <Route path="/mehndi" element={<Suspense fallback={<Loader />}>  <MehndiDetails /> </Suspense>} />
          <Route path="/sangeet" element={<Suspense fallback={<Loader />}>  <SangeetDetails /> </Suspense>} />
          <Route path="/engagement" element={<Suspense fallback={<Loader />}>  <EngagementDetails /> </Suspense>} />

          <Route path="/gettogether" element={<Suspense fallback={<Loader />}>  <GetTogetherDetails /> </Suspense>} />
          <Route path="/kittyparty" element={<Suspense fallback={<Loader />}>  <KittyPartyDetails /> </Suspense>} />
          <Route path="/corporateparty" element={<Suspense fallback={<Loader />}>  <CorporatePartyDetails /> </Suspense>} />
          <Route path="/corporatepoolparty" element={<Suspense fallback={<Loader />}>  <CorporatePoolPartyDetails /> </Suspense>} />

        </Routes>


        <FloatingContact />
      </Layout>
    </Router>
  )
}

export default App
