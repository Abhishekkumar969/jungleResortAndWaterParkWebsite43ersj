import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"

import ScrollToTop from "./components/ScrollToTop";
import FloatingContact from "./components/FloatingContact";

import Waterpark from "./pages/waterpark/Waterpark";
import Birthdays from "./pages/birthdays/Birthdays";
import Venues from "./pages/venues/Venues";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";


import WeddingDetails from "./pages/events/WeddingDetails";


function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Waterpark" element={<Waterpark />} />
          <Route path="/Birthdays" element={<Birthdays />} />
          <Route path="/Venues" element={<Venues />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />

          <Route path="/WeddingDetails" element={<WeddingDetails />} />

        </Routes>
        <FloatingContact />
      </Layout>
    </Router>
  )
}

export default App
