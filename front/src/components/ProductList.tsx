import React from 'react'
import { IProduct } from "../interfaces/IProduct"
import Helpers from "../utils/helpers";

const ProductList = ({ products }: { products: IProduct[] }) => {
  if (products.length < 1) return <h3>Loading...</h3>
  const keys = Object.keys(products[0]);
  return (
    <div id="product-list">
      <h3>Tuotelista</h3>
      <table id="users">
        <tbody>
          <tr>
            {keys.map((key, idx) => <th key={idx}>{key}</th>)}
          </tr>
          { }
          {products.map(product => (
            <tr key={product.id}>
              {Object.entries(product).map(entry => {
                const { key, value } = Helpers.parse.fromEntry(entry);
                return (
                  <td key={value.toString()}>{
                    key !== "categories" ? value : value.join(", ")
                  }</td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList