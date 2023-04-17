import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import ReservationsList from "../components/Reservations.list";
import { IReservation } from "../interfaces/IReservation";
import ReservationService from "../services/reservation.service";
import AddReservation from "../components/addReservation";
import ReservationsDash from "../components/Reservations.dash";

const ReservationPage = () => {
  const [reservations, setReservations] = useState<IReservation[]>([]);
  useEffect(() => {
    const getReservations = async () => {
      const res = await ReservationService.getAll();
      setReservations(res);
    }
    getReservations();
  }, []);
  return (
    <main id="reservations">
      <h2>Varaukset</h2>
      <nav className="sub-nav">
        <Link to="add">Lisää</Link>
        <Link to="list">Selaa</Link>
      </nav>
      <section id="content">
        <Routes>
          <Route path="/" element={<ReservationsDash />} />
          <Route path="list" element={
            <ReservationsList reservations={reservations} />} />
          <Route path="add" element={<AddReservation />} />
        </Routes>
      </section>
    </main>
  )
}


export default ReservationPage;