import React from 'react'
import { Link } from "react-router-dom";

const CustomersDash = () => {
  return (
    <div className="link-buttons">
      <Link to="add"><button className="link-button">Lisää asiakas</button></Link>
      <Link to="list"><button className="link-button">Selaa asiakkaita</button></Link>
    </div>
  )
};

export default CustomersDash;