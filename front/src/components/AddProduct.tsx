import React, { ChangeEvent, useEffect, useState } from "react";
import { IProduct } from "../interfaces/IProduct";
import ProductService from "../services/product.service";
const emptyProduct = {
  title: "",
  description: "",
  price: 0,

};
const AddProduct = () => {
  const [product, setProduct] = useState<IProduct>(emptyProduct);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, id: key } = event.target;
    setProduct({ ...product, [key]: key === "price" ? parseInt(value) : value });
  }
  useEffect(() => {
    setProduct(prod => ({...prod, categories}))
  }, [categories]);
  const handleSubmit = async () => {
    const r = await ProductService.addProduct(product);
    console.log(r);
  };
  const handleCategoryChange = (event: any) => {
    const { value, key } = event.target;
    setCategory(value);
  }
  const handleCategory = async (event: any) => {
    const { code } = event;
    const { value } = event.target;
    if ((code === "Space" || code === "Enter") && (value !== "" || value !== " ")) {
      setCategories(cats => {
        return [...cats, value]
      });
      setProduct(prod => ({...prod, categories}));
      event.target.value = "";
      setCategory("");
    }
  };
  return (
    <section id="add-product">
      <h3>Lisää tuote</h3>
      <label htmlFor="title">Otsikko</label>
      <input onChange={handleInputChange} type="text" name="title" id="title" /><br />
      <label htmlFor="description">Tarkenne</label>
      <input onChange={handleInputChange} type="text" name="description" id="description" /><br />
      <label htmlFor="tags">Tunnisteet (erottele pilkulla)</label>
      <input onKeyDown={handleCategory} onChange={handleCategoryChange} type="text" name="category" id="category" /><br />
      {categories.map((category, idx) => <em key={idx}>{category} <span id={idx.toString()} onClick={
        (e) => {
          const target = e.target as HTMLSpanElement;
          setCategories(categories.filter((c, i) => i.toString() !== target.id));
        }
      } key={idx}>[x] </span></em>)}
      <br /><label htmlFor="price">Hinta per vrk</label>
      <input onChange={handleInputChange} type="number" name="price" id="price" /><br />
      <button onClick={handleSubmit}>Lisää tuote</button>
      <button>Tyhjennä kentät</button>
    </section>
  )
}
export default AddProduct;