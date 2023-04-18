import React, { ChangeEvent, useEffect, useState } from "react";
import { IProduct } from "../interfaces/IProduct";
import { useMutation, useQueryClient } from "react-query";
import productService from "../services/product.service";
const emptyProduct = {
  title: "",
  description: "",
  price: 0,

};
const AddProduct = () => {
  const [product, setProduct] = useState<IProduct>(emptyProduct);
  const [categories, setCategories] = useState<string[]>([]);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, id: key } = event.target;
    setProduct({ ...product, [key]: key === "price" ? parseInt(value) : value });
  }
  const queryClient = useQueryClient();
  const createMutation = useMutation(async (payload: IProduct) => {
    return await productService.createProduct(payload)
  },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products");
        alert("Product added!");
      }
    });
  useEffect(() => {
    setProduct(prod => ({ ...prod, categories }))
  }, [categories]);
  const handleSubmit = async () => {
    createMutation.mutateAsync(product);
  };
  const handleCategory = async (event: any) => {
    const { code } = event;
    const { value } = event.target;
    if ((code === "Space" || code === "Enter") && (value !== "" || value !== " ")) {
      setCategories(cats => {
        return [...cats, value]
      });
      setProduct(prod => ({ ...prod, categories }));
      event.target.value = "";
    }
  };
  return (
    <section id="add-product">
      <h3>Lisää tuote</h3>
      <div className="form-item">
        <label htmlFor="title">Nimi</label>
        <input onChange={handleInputChange} type="text" name="title" id="title" /><br />
      </div>
      <div className="form-item">
        <label htmlFor="description">Tarkenne</label>
        <input onChange={handleInputChange} type="text" name="description" id="description" /><br />
      </div>
      <div className="form-item">
        <label htmlFor="tags">Tunnisteet (erottele pilkulla)</label>
        <input onKeyDown={handleCategory} type="text" name="category" id="category" /><br />
      </div>
      {categories.map((category, idx) => <em key={idx}>{category} <span id={idx.toString()} onClick={
        (e) => {
          const target = e.target as HTMLSpanElement;
          setCategories(categories.filter((c, i) => i.toString() !== target.id));
        }
      } key={idx}>[x] </span></em>)}
      <br />
      <div className="form-item">
        <label htmlFor="price">Hinta per vrk</label>
        <input onChange={handleInputChange} type="number" name="price" id="price" /><br />
      </div>
      <button onClick={handleSubmit}>Lisää tuote</button>
      <button>Tyhjennä kentät</button>
    </section>
  )
}
export default AddProduct;