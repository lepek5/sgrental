import React, { CSSProperties, useEffect, useState } from "react";
import { useQuery } from "react-query";
import productService from "../services/product.service";
import {ICategory} from "../interfaces/ICategory";
interface Filter {
  id?: string,
  title?: string,
  description?: string,
  tags?: string | string[],
  price?: number
}
const ProductsNavbar = ({ parseFilters }: { parseFilters: any }) => {
  const { data: categories, isLoading } = useQuery(
    'products',
    async () => await productService.getAllCategories()
  );
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
  const categorieFilterStyle = {
    opacity: isFiltering ? 1 : 0,
    visibility: isFiltering ? "visible" : "hidden"
  } as CSSProperties;
  useEffect(() => parseFilters(filter),[filter]);
  return (
    <>
    <nav id="dashboard-nav">
        <div style={searchStyle}>
            <input onChange={(e) => {
              setFilter(e.target.value);
            }} style={inputStyle} value={filter} onBlur={() => setIsActive(false)} onFocus={() => setIsActive(true)} type="text" name="filter" id="filter"></input>
          <button onClick={() => setIsActive(true)} className="nav-link">Hae</button>
        </div>
      <ul id="nav-items" className="dashboard-nav">
        { filter.length < 1 ? <></> : <li onClick={() => {
          setFilter("");
          setIsFiltering(false);
        }} className="nav-link">Nollaa suodattimet</li>}
        <li onClick={() => setIsFiltering(!isFiltering)} className="nav-link">Suodata</li>
      </ul>
    </nav>
    <div style={categorieFilterStyle} className="categories-filter">
      <h4>Kategoriat</h4>
      { isLoading ? <>loading..</> : <>
      {categories.map((category: ICategory) => {
        return <p style={{cursor: "pointer"}} key={`${category.id}-${category.category}`} onClick={() => setFilter(category.category)}>{category.category}</p>
      })}
      </> }
    </div>
    </>
  )
};
export default ProductsNavbar;