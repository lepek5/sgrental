import React from "react";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  return (
    <nav id="dashboard-nav">
      <ul id="nav-items" className="dashboard-nav">
        <Link to="products"><li className="nav-link">Tuotteet</li></Link>
        <Link to="reservations"><li className="nav-link">Varaukset</li></Link>
        <Link to="customers"><li className="nav-link">Asiakkaat</li></Link>
        <Link to="employees"><li className="nav-link">Työntekijät</li></Link>
      </ul>
    </nav>
  )
};
export default DashboardNavbar;