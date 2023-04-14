import { parse } from "path";
import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import ProductList from "../components/ProductList";
import { IProduct } from "../interfaces/IProduct";
import ProductService from "../services/product.service";

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const getProductData = async () => {
      const request = await ProductService.getAll();
      setProducts(request);
    };
    getProductData();
  }, []);
  return (
    <main id="products">
      <nav className="sub-nav">
        <Link to="add">Lisää tuote </Link>
        <Link to="list">Selaa tuotteita</Link>
        <Link to="list">Etsi tuotteita</Link>
      </nav>
      <section id="content">
        <Routes>
          <Route path="add" element={<AddProduct />} />
          <Route path="list" element={<ProductList products={products} />} />
        </Routes>
      </section>
    </main>
  )
}
export default Products;