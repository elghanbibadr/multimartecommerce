import React from 'react'
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
    const { id } = useParams();

    console.log(id)

  return (
    <div>PorductDetail</div>
  )
}

export default ProductDetail