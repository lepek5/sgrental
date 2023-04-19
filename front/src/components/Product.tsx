import React, { useState } from "react";
import { IProduct } from "../interfaces/IProduct";
import ProductModal from "./Product.modal";
import { Link } from "react-router-dom";
const Product = ({ product }: { product: IProduct }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  }
  if (!product) return <>no product</>
  return (
    <>
      <div onClick={handleModal} className={"card"} key={product.id}>
        <div className="title"><Link to={"/products/"+product.id.toString()}>{product.title}</Link></div>
        <div className="images">
          <div className="img">IMG</div>
        </div>
        <div className="description">{product.description}</div>
        <div className="price">{product.price}e/vrk</div>
        <div className="buttons">
        <Link to={"/products/"+product.id.toString()}><button>Lisätietoja</button></Link>
        </div>
      </div>
    </>
  )
};
export default Product;