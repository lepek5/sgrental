import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Urheiluvälinevuokraamo Oy</h1>
      <div className="div" style={{display: "flex", gap: "0.9rem"}}>
        <Link className="main-nav" to="/">Etusivu</Link>
        <Link className="main-nav" to="/contact">Ota yhteyttä</Link>
      </div>
      <Navbar />
    </header>
  )
};
export default Header;