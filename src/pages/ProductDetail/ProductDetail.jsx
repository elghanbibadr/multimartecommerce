import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import Container from '../../componenet/UI/Container';
import { AppContext } from '../../Store/AppContext';
const ProductDetail = () => {
    const { id} = useParams();
    const [isDescriptionActive,setIsDescriptionActive]=useState(false)
    const { products}=useContext(AppContext)

    console.log(id)
    const handleDescriptionClicked=() => setIsDescriptionActive(true)
    const handleReviewsClicked=() => setIsDescriptionActive(false)
  const currentProduct =products.find((product) => product.id ===id)
  console.log(currentProduct)
  return (
    <>
    { currentProduct &&  <Container>
       <div className="grid grid-cols-1  text-[#111] md:grid-cols-2 ">
        <img className='max-w-[400px]  justify-self-center lg:w-full' src={currentProduct.item.imgUrl} alt="product image" />
        <div className='self-center'>
          <h1 className=' font-medium text-xl'>{currentProduct.item.productName}</h1>
          <div>
            <p className='my-4 '><span className='text-orange-400'>({currentProduct.item.avgRating}) </span>ratings</p>
          </div>
          <div className='flex justify-between sm:w-1/2 my-3'>
            <h3 className='text-xl font-semibold'>${currentProduct.item.price}</h3>
            <p className=''>Category: {currentProduct.item.category}</p>
          </div>
          <p className='text-smalltextcolor'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, eaque.</p>
        <button className='capitalize bg-primarycolor text-white py-3 px-6 rounded-md font-medium mt-4'>Add to Cart</button>
        </div>

       </div>
       {/* reviews and desc */}
       <div>
         <div className='mt-8 flex font-medium  '>
          <h4 onClick={handleDescriptionClicked} className={`${isDescriptionActive ? "text-primarycolor" :"text-[#111]"} cursor-pointer`}>Description</h4>
          <h4 onClick={handleReviewsClicked} className={`${!isDescriptionActive ? "text-primarycolor" :"text-[#111]"} ml-6 cursor-pointer`}>Reviews ({currentProduct.item.reviews.length})</h4>
         </div>
          { isDescriptionActive &&  <p className='mt-6 text-smalltextcolor text-base' > {currentProduct.item.description} </p> }
          { !isDescriptionActive && currentProduct.item.reviews.map(({text,rating}) =>{
            return  <div className='mt-6'>
               <h4 className='text-[1.2rem] text-[#111]'>John Doe</h4>
               <p className='text-orange-400'> {rating} (rating) </p>
               <p className='text-smalltextcolor  mt-2'>{text}</p>
            </div>
          } ) 
           
           }
       </div>
     </Container>}
    </>
  )
}

export default ProductDetail