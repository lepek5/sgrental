import React from 'react'
import { IReservation } from "../interfaces/IReservation"
import { Link } from "react-router-dom"

const ReservationsList = ({ reservations }: { reservations: IReservation[] }) => {
  if (!reservations || reservations.length < 1) return <>Ei löydy varauksia</>
  return (
    <table id="reservations">
      <thead>
        <tr>
          {Object.keys(reservations[0]).map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {reservations.map((res, idx) => (
          <tr key={idx}>
            {Object.values(res).map((value, valueIdx) => (
                <td style={value === false ? {backgroundColor: "yellow"} : value === true ? {backgroundColor: "green"} : {}} key={`${idx}-${valueIdx}`}><Link to={`../${res.id}`}>{value}</Link></td>              
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ReservationsList