import React from 'react'
import { IProduct } from "../interfaces/IProduct";
import Product from "./Product";
interface Props {
  products: IProduct[] | null,
  filter: string | null
}
const ProductCards: React.FC<Props> = ({ products }) => {
  return (
    <>
      {
        products.map(f => <Product key={f.id} product={f} />)
      }
    </>
  )
}

export default ProductCards;