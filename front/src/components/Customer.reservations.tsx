import React from 'react'
import { useQuery } from "react-query";
import reservationService from "../services/reservation.service";
import { IReservation } from "../interfaces/IReservation";
import { Link } from "react-router-dom";

const CustomerReservations = () => {
  const { data: reservations, isLoading } = useQuery<IReservation[] | any[]>("reservations", async () => {
    return await reservationService.getByCustomer();
  });
  if (isLoading) return <>Lataan paskaa...</>
  console.log("reservations", reservations)
  return (
    <div>
      <h3>Omat varaukset</h3>
      <table id="reservations">
        <thead>
          <tr>
          <th>Tuote</th>
          <th>Hinta (per vrk)</th>
          <th>Aloitus PVM</th>
          <th>Viimeinen PVM</th>
          <th>Varmistettu</th>
          <th>Maksettu</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, idx) => {
            const {startAt, endAt, completed, confirmed, product } = reservation;
            const dateDifference = new Date(endAt).getTime() - new Date(startAt).getTime();
            const days = Math.ceil(dateDifference / (1000 * 3600 * 24));
            console.log("start", startAt, "newdate", new Date(startAt) ,"days", days, "firre", dateDifference)
            return (
              <tr key={`${idx}`}>
                <td><Link to={`/products/${product.id}`}>{product.title}</Link></td>
                <td>{product.price * days} ({product.price})</td>
                <td>{startAt}</td>
                <td>{endAt}</td>
                <td style={confirmed === true ? {backgroundColor: "green"}:{backgroundColor: "red"}}> </td>
                <td style={completed === true ? {backgroundColor: "green"}:{backgroundColor: "red"}}> </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerReservations;