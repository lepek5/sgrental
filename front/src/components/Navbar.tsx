import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul id="nav-items">
          <li className="nav-item"><Link to="/products">Selaa tuotteita</Link></li>
          <li className="nav-item">Luo tunnus</li>
          <li className="nav-item"><Link to="/dash">Dashboard</Link></li>
        </ul>
      </nav>
    </>
  )
};
export default Navbar;