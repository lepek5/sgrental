import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import ReservationsList from "../components/Reservations.list";
import { IReservation } from "../interfaces/IReservation";
import ReservationService from "../services/ReservationService";
import AddReservation from "../components/addReservation";

const ReservationPage = () => {
  const [reservations, setReservations] = useState<IReservation[]>([]);
  useEffect(() => {
    const getReservations = async () => {
      const res = await ReservationService.getAll();
      setReservations(res.data);
    }
    getReservations();
  }, []);
  return (
    <div>ReservationPage
      <Link to="list">Selaa varauksia</Link>
      <Link to="add">Lisää varaus</Link>
      <Routes>
        <Route path="list" element={
          <ReservationsList reservations={reservations} />} />
        <Route path="add" element={<AddReservation />} />
      </Routes>
    </div>
  )
}

export default ReservationPage;