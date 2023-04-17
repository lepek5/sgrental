import React from 'react'
import { Link } from "react-router-dom";

const Reservations = () => {
  return (
    <div className="link-buttons">
      <button className="link-button"><Link to="add">Lisää varaus</Link></button>
      <button className="link-button"><Link to="list">Selaa varauksia</Link></button>
    </div>
  )
};

export default Reservations;