import React from "react"
import Header from "./components/Header";
import LandingPage from "./pages/Landing.page"

import "../public/sgrental.css";
import Footer from "./components/Footer";

const SGRental = () => {
  return (
    <>
      <Header />
      <section id="page-content">
        <LandingPage />
      </section>
      <Footer />
    </>
  )
};
export default SGRental;