import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Header from "./Compnets/Header";
import Footer from "./Compnets/Footer";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import AllGallery from "./Pages/AllGallery";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Header />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <Header />
              <AllGallery />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
