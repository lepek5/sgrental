import React, { useState } from "react";
import { IProductUI } from "../interfaces/IProduct";
import ProductModal from "./Product.modal";
const Product = ({ product }: { product: IProductUI }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  }
  if (!product) return <>no product</>
  return (
    <>
      <div onClick={handleModal} className={modalOpen ? "card" : "card"} key={product.id}>
        <div className="title">{product.title}</div>
        <div className="description">{product.description}</div>
        <div className="price">{product.price}</div>
        <em>{product?.tags?.join(", ")}</em>
      </div>
    </>
  )
};
export default Product;