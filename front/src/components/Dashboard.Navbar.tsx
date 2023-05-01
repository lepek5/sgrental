import React from "react";
import { Link } from "react-router-dom";
import { getUser } from "../utils/helpers";

const DashboardNavbar = () => {
  const user = getUser();
  if (!user) return (<p>Lataan</p>);
  return (
    <nav id="dashboard-nav">
      <ul id="nav-items" className="dashboard-nav">
        {user.type === "employee"
          ? (
            <>
              <Link to="products"><li className="nav-link">Tuotteet</li></Link>
              <Link to="reservations"><li className="nav-link">Varaukset</li></Link>
              <Link to="customers"><li className="nav-link">Asiakkaat</li></Link>
              <Link to="employees"><li className="nav-link">Työntekijät</li></Link>
            </>
          )
          : (
            <>
              <Link to="user/reservations"><li className="nav-link">Omat varaukset</li></Link>
              <Link to="user/details"><li className="nav-link">Omat tiedot</li></Link>
            </>
          )
        }

      </ul>
    </nav>
  )
};
export default DashboardNavbar;