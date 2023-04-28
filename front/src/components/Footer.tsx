import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="top">
          <p>Ota yhteyttä!</p>
        </div>
        <div className="bottom">
          Urheiluvälinevuokraamo Oy (c) {new Date().getFullYear()}
        </div>
      </footer>
    </>
  )
};
export default Footer;