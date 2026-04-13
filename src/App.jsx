import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"

import useSecurity from "./components/useSecurity";

import AuthModal from "./components/AuthModal";
import CompleteProfile from "./pages/CompleteProfile";
import Cart from "./components/Cart";
import Checkout from "./components/waterpark/Checkout";

import UserDashboard from "./pages/UserDashboard";
import MyTickets from "./pages/MyTickets";

import ScrollToTop from "./components/ScrollToTop";
import FloatingContact from "./components/FloatingContact";

import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import AboutUs from "./pages/about-section";
import Services from "./pages/services-section";

import Waterpark from "./pages/waterpark/Waterpark";
import FunPark from "./pages/events/FunParkDetails";
import BirthdayCeremony from "./pages/birthdays/Birthdays";

import DestinationWeddingDetails from "./pages/events/DestinationWeddingDetails";
import WeddingDetails from "./pages/events/WeddingDetails";
import ReceptionDetails from "./pages/events/ReceptionDetails";
import ThemePartyDetails from "./pages/events/ThemePartyDetails";
import BirthdayDetails from "./pages/events/BirthdayDetails";
import AnniversaryDetails from "./pages/events/AnniversaryDetails";
import RingCeremonyDetails from "./pages/events/RingCeremonyDetails";

import CorporateEventsDetails from "./pages/events/CorporateEventsDetails";
import PoolPartyDetails from "./pages/events/PoolPartyDetails";

import HaldiDetails from "./pages/events/HaldiDetails";
import MehndiDetails from "./pages/events/MehndiDetails";
import SangeetDetails from "./pages/events/SangeetDetails";
import EngagementDetails from "./pages/events/EngagementDetails";
import GetTogetherDetails from "./pages/events/GetTogetherDetails";
import KittyPartyDetails from "./pages/events/KittyPartyDetails";
import CorporatePartyDetails from "./pages/events/CorporatePartyDetails";
import CorporatePoolPartyDetails from "./pages/events/CorporatePoolPartyDetails";

import BirthdayExplore from "./components/home/BirthdayExplore";
import BirthdayExploreBtn from "./components/home/BirthdayExploreBtn";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js")
      .then(() => console.log("PWA Ready 🔥"))
      .catch((err) => console.log(err));
  });
}

function App() {

  useSecurity();

  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthModal />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/mytickets" element={<MyTickets />} />

          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />

          <Route path="/waterpark-in-patna" element={<Waterpark />} />
          <Route path="/FunPark" element={<FunPark />} />

          <Route path="/BirthdayCeremony" element={<BirthdayCeremony />} />


          {/* <Route path="/birthday-details" element={<BirthdayDetails />} /> */}


          <Route path="/Contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />

          <Route path="/destinationwedding" element={<DestinationWeddingDetails />} />
          <Route path="/wedding" element={<WeddingDetails />} />
          <Route path="/reception" element={<ReceptionDetails />} />
          <Route path="/themeparty" element={<ThemePartyDetails />} />

          <Route path="/birthday" element={<BirthdayDetails />} />

          <Route path="/birthdayexplorebtn" element={<BirthdayExploreBtn />} />
          <Route path="/birthdayexplore" element={<BirthdayExplore />} />

          <Route path="/anniversary" element={<AnniversaryDetails />} />
          <Route path="/ringceremony" element={<RingCeremonyDetails />} />

          <Route path="/corporateevents" element={<CorporateEventsDetails />} />
          <Route path="/poolparty" element={<PoolPartyDetails />} />

          <Route path="/haldi" element={<HaldiDetails />} />
          <Route path="/mehndi" element={<MehndiDetails />} />
          <Route path="/sangeet" element={<SangeetDetails />} />
          <Route path="/engagement" element={<EngagementDetails />} />

          <Route path="/gettogether" element={<GetTogetherDetails />} />
          <Route path="/kittyparty" element={<KittyPartyDetails />} />
          <Route path="/corporateparty" element={<CorporatePartyDetails />} />
          <Route path="/corporatepoolparty" element={<CorporatePoolPartyDetails />} />

        </Routes>
        <FloatingContact />
      </Layout>
    </Router>
  )
}

export default App
