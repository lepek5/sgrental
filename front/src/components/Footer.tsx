import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="top">
          <Link to="/contact"><p>Ota yhteyttä!</p></Link>
          <Link to="/contact-info"><p>Yhteystiedot</p></Link>
        </div>
        <div className="bottom">
          Urheiluvälinevuokraamo Oy (c) {new Date().getFullYear()}
        </div>
      </footer>
    </>
  )
};
export default Footer;