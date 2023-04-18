import React, { useContext } from 'react'
import { useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/use-auth";

const Dashboard = () => {
  const user = useContext(UserContext);
  return (
    <main id="dashboard">
      <h2>Hallintapaneeli</h2>
      <nav className="sub-nav">
        {user.type === "employee"
          ? (
            <>
              <Link to="products">Tuotteet</Link>
              <Link to="reservations">Varaukset</Link>
              <Link to="customers">Asiakkaat</Link>
              <Link to="employees">Työntekijät</Link>
            </>
          )
          : (
            <>
              <Link to="user/details">Omat tiedot</Link>
              <Link to="user/reservations">Omat varaukset</Link>
            </>
          )}
      </nav>
      <section id="content">
        <div className="link-buttons">
          {
            user.type === "employee"
              ? (
                <>
                  <Link to="products"><button className="link-button">Tuotteet</button></Link>
                  <Link to="reservations"><button className="link-button">Varaukset</button></Link>
                  <Link to="customers"><button className="link-button">Asiakkaat</button></Link>
                  <Link to="employees"><button className="link-button">Työntekijät</button></Link>
                </>
              )
              : (
                <>
                  <Link to="user/details"><button className="link-button">Omat tiedot</button></Link>
                  <Link to="user/reservations"><button className="link-button">Omat varaukset</button></Link>
                  
                </>
              )
          }
        </div>
      </section>
    </main>
  )
}

export default Dashboard;