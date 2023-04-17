import React from 'react'
import { Link } from "react-router-dom";

const Customers = () => {
  return (
    <div className="link-buttons">
      <button className="link-button"><Link to="add">Lisää asiakas</Link></button>
      <button className="link-button"><Link to="list">Selaa asiakkaita</Link></button>
    </div>
  )
};

export default Customers;