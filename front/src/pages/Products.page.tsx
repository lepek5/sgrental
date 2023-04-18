import { parse } from "path";
import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import ProductList from "../components/ProductList";
import { IProduct } from "../interfaces/IProduct";
import ProductService from "../services/product.service";
import ProductsDash from "../components/Products.dash";
import { useQuery } from "react-query";
import productService from "../services/product.service";

const Products = () => {
  const { data: products, isLoading } = useQuery(
    'products',
    async () => await productService.getAll()
  );
  if (isLoading) return (<em>Lataan tuotteita..</em>);
  return (
    <main id="products">
      <h2>Tuotteet</h2>
      <nav className="sub-nav">
        <Link to="add">Lisää</Link>
        <Link to="list">Selaa</Link>
        <Link to="list">Etsi</Link>
      </nav>
      <section id="content">
        <Routes>
          <Route path="/" element={<ProductsDash />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="list" element={<ProductList products={products} />} />
        </Routes>
      </section>
    </main>
  )
}
export default Products;