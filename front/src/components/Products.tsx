import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProductData = async () => {
      const request = await fetch('https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}')
      const response = await request.json();
      const res = response.data.products.edges.map((r: { node: any; }) => r.node);
      setProducts(res);
    };
    getProductData();
  },[]);
  const getProducts = () => {
    return products.map(p => {
      console.log(p)
      return p
    });
  }

  if (products.length < 1) return (<><p>Loading...</p></>);
  return (
    <section id="products">{
      getProducts().map(p => <Product product={p} />)
    }
    </section>
  )
}
export default Products;