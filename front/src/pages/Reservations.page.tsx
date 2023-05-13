import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import ReservationsList from "../components/Reservations.list";
import AddReservation from "../components/addReservation";
import ReservationsDash from "../components/Reservations.dash";
import { useQuery } from "react-query";
import reservationService from "../services/reservation.service";
import ReservationDetails from "../components/Reservation.details";

const ReservationPage = () => {
  const { data: reservations, isLoading } = useQuery(
    "reservations",
    async () => await reservationService.getAll()
  );
  return (
    <main id="reservations">
      <h2>Varaukset</h2>
      <nav className="sub-nav">
        <Link to="list">Selaa</Link>
      </nav>
      <section id="content">
        {isLoading ? (<em>Lataan varauksia..</em>) : (
          <Routes>
            <Route path="/" element={<ReservationsDash />} />
            <Route path="list" element={
              <ReservationsList reservations={reservations} />} />
            <Route path="add" element={<AddReservation />} />
            <Route path=":id" element={<ReservationDetails />} />
          </Routes>
        )}
      </section>
    </main>
  )
}


export default ReservationPage;