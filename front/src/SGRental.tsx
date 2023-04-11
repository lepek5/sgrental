import React from "react"
import Header from "./components/Header";
import LandingPage from "./pages/Landing.page"

import "../public/sgrental.css";
import Footer from "./components/Footer";
import EmployeePage from "./pages/Employee.page";
import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import DashboardPage from "./pages/Dashboard.page";

const SGRental = () => {
  return (
    <>
      <Header />
      <section id="page-content">
        <Router>
          <Routes>
            <Route path="dash/*" element={<DashboardPage />} />
            <Route path="employee" element={<EmployeePage />} />
            <Route path="/" element={<LandingPage  />} />
          </Routes>
        </Router>
      </section>
      <Footer />
    </>
  )
};
export default SGRental;