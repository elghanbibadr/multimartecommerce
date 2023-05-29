import React from 'react'
import products from './data/products'
const App = () => {
  return (
    <>
    <div className='font-bold flex items-center justify-between bg-black text-white p-6'>
      <h1>Multimart</h1>
       <div className='flex cursor-pointer'>
        <p className='mx-6'>login</p>
        <p>sign up</p>
       </div>
    </div>
    <div className='grid p-10 grid-cols-4 gap-12'>
      {products.map(({id,price,productName,imgUrl}) => {
        return <div key={id} className='my-10'>
          <h1 className='text-xl font-bold'>{productName}</h1>
          <img className='h-[70%] w-[70%]' src={imgUrl} alt="product image" />
          <p>{price}$</p>
        </div>
      })}
    </div> 
    </>
  )
}

export default App