import React from "react"
import Header from "./components/Header";
import LandingPage from "./pages/Landing.page"

import "../public/sgrental.css";
import Footer from "./components/Footer";
import EmployeePage from "./pages/Employee.page";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DashboardPage from "./pages/Dashboard.page";
import Products from "./components/Products";
import ReservationPage from "./pages/Reservations.page";
import LoginPage from "./pages/Login.page";

const SGRental = () => {
  return (
    <>
        <Router>
          <Header />
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="dash/*" element={<DashboardPage />} />
            <Route path="employee" element={<EmployeePage />} />
            <Route path="products/*" element={<Products />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Router>
      <Footer />
      <div id="modal"></div>
    </>
  )
};
export default SGRental;