import React, { CSSProperties } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import productService from "../services/product.service";
const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, isLoading } = useQuery(["products", id], async () => {
    return await productService.getById(id);
  });
  if (isLoading) return (<em>Ladataan..</em>);
  if (!product) return (<em>Tuotetta ei löydy</em>);
  return (
    <div className="product-details">
      <div className="title">{product.title}</div>
      <div className="body">
        <div className="images">
        <div className="img">mock</div>
        <div className="img">mock</div>
        <div className="img">mock</div></div>
        <div className="description">{product.description}</div>
        <div className="price">Hinta per vuorokausi <span>{product.price}e</span></div>
      </div>
      <div className="tags">
        {product.categories.join(", ")}
      </div>
      <div className="buttons">
        <Link to="reservation"><button>Vuokraa</button></Link>
        <button onClick={() => navigate(-1)}>Palaa takaisin</button>
      </div>
    </div>
  )
}

export default ProductDetails;