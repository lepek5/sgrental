import React from 'react'
import { IReservation } from "../interfaces/IReservation"
import { useMutation, useQueryClient } from "react-query";
import reservationService from "../services/reservation.service";

const AddReservation = () => {
  const reservation: IReservation = {
    product_id: 1,
    user_id: 2,
    employee_id: 0,
    start_at: "",
    confirmed: false,
    completed: false
  };
  const queryClient = useQueryClient();
  const createMutation = useMutation(async (payload: IReservation) => {
    return await reservationService.createReservation(payload)
  },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("reservations");
        alert("Reservation added!");
      }
    });
  const handleReservationSubmit = async () => {
    createMutation.mutateAsync(reservation);
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