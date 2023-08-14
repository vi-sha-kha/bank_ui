import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation_Bar from "../components/nav/Navbar";
import AllCollapse from "../components/accordion/Accordion";
import Navbar2 from "../components/nav/Navbar2";
import Header from "../components/nav/Header";
import Individual from "../components/Individual";
import Business from "../components/Business";
import Nbank from "../components/Nbank";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Currency from "../components/Currency";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigation_Bar />} /> */}
          <Route path="/" element={<Navbar2 />} />
          <Route path="/n" element={<Header />} />
          <Route path="/individual/currency" element={<Currency />} />

          {/* <Route path="/nav/individual" element={<Individual />} />
          <Route path="/nav/business" element={<Business />} /> */}
          <Route path="/services" element={<Services />} />
          {/* <Route path="/nbank" element={<Nbank />} /> */}
          <Route path="/footer" element={<Footer />} />
          <Route path="/accordion" element={<AllCollapse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
