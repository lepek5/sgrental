import React from 'react'
import { Link } from "react-router-dom";

const ProductsDash = () => {
  return (
    <div className="link-buttons">
      <Link to="add"><button className="link-button">Lisää tuote</button></Link>
      <Link to="list"><button className="link-button">Selaa tuotteita</button></Link>
      <Link to="search"><button className="link-button">Etsi tuotteita</button></Link>
    </div>
  )
};
export default ProductsDash;