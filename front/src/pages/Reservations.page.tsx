import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import ReservationsList from "../components/Reservations.list";
import { IReservation } from "../interfaces/IReservation";
import ReservationService from "../services/reservation.service";
import AddReservation from "../components/addReservation";
import Reservations from "../components/Reservations";

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
      <nav className="sub-nav">
        <Link to="list">Selaa varauksia</Link>
        <Link to="add">Lisää varaus</Link>
      </nav>
      <section id="content">
        <Routes>
          <Route path="/" element={<Reservations />} />
          <Route path="list" element={
            <ReservationsList reservations={reservations} />} />
          <Route path="add" element={<AddReservation />} />
        </Routes>
      </section>
    </main>
  )
}


export default ReservationPage;