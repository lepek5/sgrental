import React from 'react'
import { Link } from "react-router-dom";

const ReservationsDash = () => {
  return (
    <div className="link-buttons">
      <Link to="list"><button className="link-button">Selaa varauksia</button></Link>
    </div>
  )
};

export default ReservationsDash;