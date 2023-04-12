import React, { useState } from 'react'

const ProductFilter = ({readFilter}: {readFilter: any}) => {
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");
  const [price, setPrice] = useState(0);
  const [filter, setFilter] = useState({title, description, price});
  return (
    <div>ProductFilter</div>
  )
};

export default ProductFilter;