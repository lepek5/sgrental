import React, { useEffect, useState } from "react";
import { IProduct } from "../interfaces/IProduct";
import ProductService from "../services/ProductService";
import Product from "./Product";
import ProductModal from "./Product.modal";
import ProductsNavbar from "./Products.Navbar";

const Products = () => {
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
  if (!products) return <h3>FUCK YOU! NOT PRODUCTS FOR YOU!</h3>
  if (products.length < 1) return (<><p>Loading...</p></>);
  return (
    <>
      <section id="products">
        <ProductsNavbar parseFilters={parseFilters} />
        {filtered.length > 0 ? filtered.map(f => <Product key={f.id} product={f} />) : products.map(f => <Product key={f.id} product={f} />)}
        <ProductModal visible={true} />
      </section>
    </>
  )
}
export default Products;