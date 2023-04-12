import React from "react";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  const navStyle = {

  };
  return (
    <nav id="dashboard-nav">
      <ul id="nav-items" className="dashboard-nav">
        <li className="nav-link"><Link to="add-product">Lisää tuote</Link></li>
        <li className="nav-link"><Link to="reservations">Varaukset</Link></li>
        <li className="nav-link">Tuotteet</li>
        <li className="nav-link">Tilastot</li>
        <li className="nav-link">Omat varaukset</li>
      </ul>
    </nav>
  )
};
export default DashboardNavbar;