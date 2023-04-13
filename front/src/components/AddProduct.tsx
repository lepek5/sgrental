import React, { ChangeEvent, useState } from "react";
import { IProduct } from "../interfaces/IProduct";
import ProductService from "../services/ProductService";
const emptyProduct = {
  title: "",
  description: "",
  price: 0
};

const AddProduct = () => {
  const [product, setProduct] = useState<IProduct>(emptyProduct);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    var value = event.target.value;
    var key = event.target.id;
    setProduct({...product, [key]: key === "price" ? parseInt(value) : value});
  }
  const tagsToArray = (tags: string) => {
    return tags.split(",");
  }
  const handleSubmit = async (event: any) => {
    const r = await ProductService.addProduct(product);
    console.log(r);
    const pr = await ProductService.getAll();
    console.log(pr.data)
  
  }
  return (
    <section id="add-product">
      <h3>Lisää tuote</h3>
      <label htmlFor="title">Otsikko</label>
      <input onChange={handleInputChange} type="text" name="title" id="title" /><br />
      <label htmlFor="description">Tarkenne</label>
      <input onChange={handleInputChange} type="text" name="description" id="description" /><br />
      <label htmlFor="tags">Tunnisteet (erottele pilkulla)</label>
      <input onChange={handleInputChange} type="text" name="tags" id="tags" /><br />
      <label htmlFor="price">Hinta per vrk</label>
      <input onChange={handleInputChange} type="number" name="price" id="price" /><br />
      <button onClick={handleSubmit}>Lisää tuote</button>
      <button>Tyhjennä kentät</button>
    </section>
  )
}
export default AddProduct;