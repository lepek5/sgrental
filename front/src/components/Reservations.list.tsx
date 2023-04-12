import React from 'react'
import { IReservation } from "../interfaces/IReservation"

const ReservationsList = ({ reservations }: { reservations: IReservation[] }) => {
  return (
    <table>
      {
        reservations.map(r => (
        <>
        <tr>{Object.keys(r).map(k => <th>{k}</th>)}</tr>
        <tr>{Object.values(r).map(v => <td>{v}</td>)}</tr>
        </>
        ))
      }
    </table>
  )
}

export default ReservationsList