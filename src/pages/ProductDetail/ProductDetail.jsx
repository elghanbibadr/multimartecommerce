import React from 'react'
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
    const { productName } = useParams();


  return (
    <h1 className='text-black text-xl'>{productName}</h1>
  )
}

export default ProductDetail