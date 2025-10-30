import React from "react";
import Header from "../Compnets/Header";
import Herosection from "../Compnets/Herosection";
import OurServices from "../Compnets/OurServices";
import Testimonals from "../Compnets/Testimonals";
import Gallery from "../Compnets/Gallery";
import Footer from "../Compnets/Footer";
import WhyChoose from "../Compnets/WhyChoose";

function Home() {
  return (
    <div className="">
      <Header />
      <Herosection />
      <OurServices />
      <WhyChoose />
      <Gallery />
      <Testimonals />
      <Footer />
    </div>
  );
}

export default Home;
