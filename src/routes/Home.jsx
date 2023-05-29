import React from 'react'
import products from '../data/products'
const Home = () => {
  return (
    <div className='grid p-10 grid-cols-4 gap-12'>
    {products.map(({id,price,productName,imgUrl}) => {
      return <div key={id} className='my-10'>
        <h1 className='text-xl font-bold'>{productName}</h1>
        <img className='h-[70%] w-[70%]' src={imgUrl} alt="product image" />
        <p>{price}$</p>
      </div>
    })}
  </div> 
  )
}

export default Home