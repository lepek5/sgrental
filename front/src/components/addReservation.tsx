import React from 'react'
import { IReservation } from "../interfaces/IReservation"
import ReservationService from "../services/ReservationService"

const AddReservation = () => {
  var startDate = new Date();
  const reservation: IReservation = {
    product_id: 1,
    user_id: 2,
    is_valid: false,
    is_payed: false,
    start_date: startDate
  }
  const handleReservationSubmit = async () => {
    const res = await ReservationService.createReservation(reservation);
  }
  return (
    <div onClick={handleReservationSubmit}>
      
      AddReservation</div>
  )
}
export default AddReservation;