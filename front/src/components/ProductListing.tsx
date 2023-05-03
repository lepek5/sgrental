import React, { useEffect, useState } from "react";
import { IProduct } from "../interfaces/IProduct";
import ProductService from "../services/product.service";
import ProductsNavbar from "./Products.Navbar";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./Product.details";
import ProductCards from "./Product.cards";
import ProductReservation from "./Product.reservation";

const ProductListing = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filters, setFilters] = useState<string>("");
  const [filtered, setFiltered] = useState<IProduct[]>([]);
  useEffect(() => {
    const getProductData = async () => {
      const request = await ProductService.getAll();
      setProducts(request);
    };
    getProductData();
  }, []);
  useEffect(() => {
    const separatedFilters = filters.split(" ");
    var fal: IProduct[] = [];
    const isElegible = (product: any, filter: string) => {
      Object.values(product).forEach(key => {
        if (key instanceof Array) {
          isElegible(key, filter);
        }
        if (!fal.includes(product) && key.toString().toLowerCase().indexOf(filter.toLowerCase()) > -1) {
          fal.push(product);
          return true;
        }
      });
      return false;
    }
    separatedFilters.forEach(filter => {
      products.forEach(product => {
        do {
          isElegible(product, filter)
        } while (false);
      })
    });
    setFiltered(fal);
  }, [filters]);
  const parseFilters = (filter: string) => {
    setFilters(filter);
  }
  if (!products) return <h3>Lataan tuotteita..</h3>
  return (
    <>
      <main id="products">
        <ProductsNavbar parseFilters={parseFilters} />
        <h2>Vuokrattavat tuotteet</h2>
        <section id="content" style={{display: "flex", gap: "0.4rem", flexDirection: "row", justifyContent: "center"}}>
          <Routes>
            <Route path="/" element={<ProductCards filter={filters} products={products} />} />
            <Route path=":id" element={<ProductDetails />} />
            <Route path=":id/reservation" element={<ProductReservation />} />
          </Routes>
        </section>
      </main>
    </>
  )
}
export default ProductListing;