import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Container from '../../componenet/UI/Container';
import { AppContext } from '../../Store/AppContext';
const ProductDetail = () => {
    const { productName } = useParams();
    const { products}=useContext(AppContext)

  const currentProduct =products.find(({id,item}) => item.productName ===productName)
  console.log(currentProduct)
  return (
    <>
    { currentProduct &&  <Container>
       <div className="grid grid-cols-1  justify-items-center text-[#111]">
        <img className='' src={currentProduct.item.imgUrl} alt="product image" />
        <div className=''>
          <h1 className=' font-medium text-xl'>{currentProduct.item.productName}</h1>
          <div>
            <p className='my-4 '><span className='text-orange-400'>({currentProduct.item.avgRating}) </span>ratings</p>
          </div>
          <div className='flex justify-between'>
            <h3 className='text-xl font-semibold'>${currentProduct.item.price}</h3>
            <p className=''>Category: {currentProduct.item.category}</p>
          </div>
          <p className='text-smalltextcolor'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, eaque.</p>
        </div>
       </div>
     </Container>}
    </>
  )
}

export default ProductDetail