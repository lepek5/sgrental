import React from "react";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  const navStyle = {

  };
  return (
    <nav id="dashboard-nav">
      <ul id="nav-items" className="dashboard-nav">
        <li className="nav-link"><Link to="products">Tuotteet</Link></li>
        <li className="nav-link"><Link to="reservations">Varaukset</Link></li>
        <li className="nav-link"><Link to="customers">Asiakkaat</Link></li>
        <li className="nav-link"><Link to="users">Käyttäjät</Link></li>
      </ul>
    </nav>
  )
};
export default DashboardNavbar;