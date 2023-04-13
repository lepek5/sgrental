import React from 'react'
import { IReservation } from "../interfaces/IReservation"
import ReservationService from "../services/ReservationService"

const AddReservation = () => {
  var startDate = new Date();
  const reservation: IReservation = {
    product_id: 1,
    user_id: 2,
    employee_id: 0,
    start_at: "",
    confirmed: false,
    completed: false
  }
  const handleReservationSubmit = async () => {
    const res = await ReservationService.createReservation(reservation);
  }
  return (
    <div onClick={handleReservationSubmit}>
      <form>
        <div className="input-set">
          <label htmlFor=""></label>
        </div>
      </form>
      AddReservation</div>
  )
}
export default AddReservation;