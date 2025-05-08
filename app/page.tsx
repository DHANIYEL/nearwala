import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import OurServices from "./components/OurServices";
import Offers from "./components/Offers";
import Testimonials from "./components/Testimonials";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";
import DiscountPopup from "./components/DiscountPopup";
import Achievement from "./components/Achievement";
import NCoinsSection from "./components/NCoinSection";
import Location from "./components/Location";
import LaunchingSoon from "./components/LaunchingSoon";

const page = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <OurServices />
      <NCoinsSection />
      <Offers />
      <Achievement />
      <Location />
      <LaunchingSoon />
      <Testimonials />
      <DownloadApp />
      <Footer />
      <DiscountPopup />
    </div>
  );
};

export default page;
