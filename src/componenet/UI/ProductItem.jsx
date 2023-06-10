import React from 'react'
import item from "../../data/images/arm-chair-01.jpg"

const ProductItem = ({category,productName,imgUrl,price}) => {
  
  
  return (
    <>
    
    {productName && <div className='max-w-[340px] '>
        <img className=' w-full mb-6' src={imgUrl} alt="product image" />
        <h3 className='text-primarycolor text-[1.2rem] font-semibold'>{productName}</h3>
        <p className='text-smalltextcolor my-[8px] font-medium'>{category}</p>
        <div className='flex justify-between items-center '>
            <h6 className='text-[1.2rem] text-primarycolor font-semibold'>${price}</h6>
            <div className='bg-primarycolor cursor-pointer  h-[30px] mr-10 w-[30px] text-white  text-lg text-center rounded-full'>
                +
            </div>
        </div>
    </div>
    
  }
    </>
  )
  
}

export default ProductItem