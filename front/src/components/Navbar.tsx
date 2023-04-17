import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul id="nav-items">
          <Link to="/products"><li className="nav-item">Selaa tuotteita</li></Link>
          <Link to="/login"><li className="nav-item">Kirjaudu sisään</li></Link>
          <Link to="/dash"><li className="nav-item">Dashboard</li></Link>
        </ul>
      </nav>
    </>
  )
};
export default Navbar;