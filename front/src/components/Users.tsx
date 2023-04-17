import React from 'react'
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div className="link-buttons">
      <button className="link-button"><Link to="add">Lisää asiakas</Link></button>
      <button className="link-button"><Link to="list">Selaa asiakkaita</Link></button>
    </div>
  )
};

export default Users;