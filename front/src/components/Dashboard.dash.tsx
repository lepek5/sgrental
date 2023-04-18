import React from 'react'
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <main id="dashboard">
      <h2>Hallintapaneeli</h2>
      <nav className="sub-nav">
        <Link to="products">Tuotteet</Link>
        <Link to="reservations">Varaukset</Link>
        <Link to="customers">Asiakkaat</Link>
        <Link to="employees">Työntekijät</Link>
      </nav>
      <section id="content">
        <div className="link-buttons">
          <Link to="products"><button className="link-button">Tuotteet</button></Link>
          <Link to="reservations"><button className="link-button">Varaukset</button></Link>
          <Link to="customers"><button className="link-button">Asiakkaat</button></Link>
          <Link to="employees"><button className="link-button">Työntekijät</button></Link>
        </div>
      </section>

    </main>
  )
}

export default Dashboard;