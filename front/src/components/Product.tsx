import React from "react";
interface Product {
  id: string,
  title: string,
  description: string,
  featuredImage: fImage
}
interface fImage {
  id: string,
  url: string
}
const Product = ({ product }: { product: Product }) => {
  const { id, title, description, featuredImage } = product;
  console.log(id, title, description, featuredImage.url);
  return (
    <>
      <div className="card" key={id}>
        <img src={featuredImage.url} alt="product image" />
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </>
  )
};
export default Product;