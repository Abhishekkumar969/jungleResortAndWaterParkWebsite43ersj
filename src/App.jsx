import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"

import ScrollToTop from "./components/ScrollToTop";
import FloatingContact from "./components/FloatingContact";

import Venues from "./pages/venues/Venues";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import AboutUs from "./pages/about-section";
import Services from "./pages/services-section";

import Waterpark from "./pages/waterpark/Waterpark";
import BirthdayCeremony from "./pages/birthdays/Birthdays";

import DestinationWeddingDetails from "./pages/events/DestinationWeddingDetails";
import WeddingDetails from "./pages/events/WeddingDetails";
import ReceptionDetails from "./pages/events/ReceptionDetails";
import ThemePartyDetails from "./pages/events/ThemePartyDetails";
import BirthdayDetails from "./pages/events/BirthdayDetails";
import AnniversaryDetails from "./pages/events/AnniversaryDetails";
import RingCeremonyDetails from "./pages/events/RingCeremonyDetails";
import BabyShowerDetails from "./pages/events/BabyShowerDetails";
import CorporateEventsDetails from "./pages/events/CorporateEventsDetails";
import PoolPartyDetails from "./pages/events/PoolPartyDetails";

import HaldiDetails from "./pages/events/HaldiDetails";
import MehndiDetails from "./pages/events/MehendiDetails";
import SangeetDetails from "./pages/events/SangeetDetails";
import EngagementDetails from "./pages/events/EngagementDetails";
import GetTogetherDetails from "./pages/events/GetTogetherDetails";
import KittyPartyDetails from "./pages/events/KittyPartyDetails";
import CorporatePartyDetails from "./pages/events/CorporatePartyDetails";
import CorporatePoolPartyDetails from "./pages/events/CorporatePoolPartyDetails";

import BirthdayExplore from "./components/home/BirthdayExplore";
import BirthdayExploreBtn from "./components/home/BirthdayExploreBtn";

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />

          <Route path="/Waterpark" element={<Waterpark />} />
          <Route path="/BirthdayCeremony" element={<BirthdayCeremony />} />
          <Route path="/Venues" element={<Venues />} />
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
          <Route path="/babyshower" element={<BabyShowerDetails />} />
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
