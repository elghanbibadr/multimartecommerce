import React from 'react'
import item from "../../data/images/arm-chair-01.jpg"

const ProductItem = () => {
  return (
    <div className='w-[300px]'>
        <img className=' w-full' src={item} alt="product image" />
        <h3 className='text-primarycolor text-[1.2rem] font-semibold'>Stone and Bream Westview</h3>
        <p className='text-smalltextcolor my-[8px] font-medium'>sofa</p>
        <div className='flex justify-between'>
            <h6 className='text-[1rem] text-primarycolor font-semibold'>$193</h6>
            <div className='bg-primarycolor cursor-pointer h-[30px] w-[30px] text-white font-medium text-lg text-center rounded-full'>
                +
            </div>
        </div>
    </div>
  )
}

export default ProductItem