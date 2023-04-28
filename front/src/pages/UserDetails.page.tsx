import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useParams } from "react-router-dom";
import UserService from "../services/user.service";
import AddReservation from "../components/addReservation";
import UserDetailsDash from "../components/UserDetails.dash";
import UserDetails from "../components/UserDetails";
import CustomerReservations from "../components/Customer.reservations";

const UserDetailsPage = () => {
  return (
    <main id="reservations">
      <h2>Hallintapaneeli</h2>
      <nav className="sub-nav">
        <Link to="details">Omat tiedot</Link>
        <Link to="reservations">Omat varaukset</Link>
      </nav>
      <section id="content">
        <Routes>
          <Route path="/" element={<UserDetailsDash />} />
          <Route path="details" element={<UserDetails />} />
          <Route path="reservations" element={<CustomerReservations />} />
        </Routes>
      </section>
    </main>
  )
}
export default UserDetailsPage;