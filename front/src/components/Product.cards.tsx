import React from 'react'
import { IProduct } from "../interfaces/IProduct";
import Product from "./Product";
interface Props {
  products: IProduct[] | null,
  filter: string | null
}
const ProductCards: React.FC<Props> = ({ products }) => {
  if(products[0]?.title === undefined) return <></>
  if (!products || products.length === 0 || products === undefined) return <></>
  return (
    <>
      {
        products.map(f => f.id === undefined ? <></> : <Product key={`${f.id}-${f.title}`} product={f} />)
      }
    </>
  )
}

export default ProductCards;