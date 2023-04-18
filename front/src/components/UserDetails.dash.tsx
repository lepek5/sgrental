import React from 'react'
import { Link } from "react-router-dom";

const UserDetailsDash = () => {
  return (
    <div className="link-buttons">
      <Link to="details"><button className="link-button">Omat tiedot</button></Link>
      <Link to="reservations"><button className="link-button">Omat varaukset</button></Link>
    </div>
  )
}
export default UserDetailsDash;