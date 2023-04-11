import React from "react";

const DashboardNavbar = () => {
  const navStyle = {

  };
  return (
    <nav id="dashboard-nav">
      <h2>Dashboard</h2>
      <ul id="nav-items" className="dashboard-nav">
        <li className="nav-link">Lisää tuote</li>
        <li className="nav-link">Uudet varaukset</li>
        <li className="nav-link">Kaikki varaukset</li>
        <li className="nav-link">Tilastot</li>
        <li className="nav-link">Omat varaukset</li>
      </ul>
    </nav>
  )
};
export default DashboardNavbar;