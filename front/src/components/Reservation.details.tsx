import React from 'react'
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import reservationService from "../services/reservation.service";

const ReservationDetails: React.FC = () => {
  const { id } = useParams();
  const { data: reservation, isLoading } = useQuery(["reservations", id], async () => {
    return await reservationService.getById(id);
  });
  if (isLoading) return (<>Lataan...</>);
  console.error(reservation)
  return (

    <div>
      Reservation.details
    </div>
  )
}

export default ReservationDetails;