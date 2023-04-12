import React, { useState } from "react";
import { Link } from "react-router-dom";
interface Filter {
  id?: string,
  title?: string,
  description?: string,
  tags?: string | string[],
  price?: number
}
const ProductsNavbar = ({ parseFilters }: { parseFilters: any }) => {
  const [filter, setFilter] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  const inputStyle = {
    width: isActive || filter.length > 0 ? "50vw" : "2rem",
    height: "2rem",
    justifySelf: "start",
    transition: "all 300ms linear",
    marginLeft: isActive || filter.length > 0 ? "1rem" : "0",
  }
  const searchStyle = {
    display: "flex",
  }
  return (
    <nav id="dashboard-nav">
        <div style={searchStyle}>
            <input onChange={(e) => {
              setFilter(e.target.value);
              parseFilters(e.target.value);
            }} style={inputStyle} value={filter} onBlur={() => setIsActive(false)} onFocus={() => setIsActive(true)} type="text" name="filter" id="filter"></input>
          <button onClick={() => setIsActive(true)} className="nav-link">Hae</button>
        </div>
      <ul id="nav-items" className="dashboard-nav">
        <li className="nav-link">Suodata</li>
      </ul>
    </nav>
  )
};
export default ProductsNavbar;