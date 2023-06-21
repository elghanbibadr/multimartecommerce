import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../Store/AppContext'

const ProductItem = ({ id,category, productName, imgUrl, price }) => {
  const { user, setItemsOnTheCart} = useContext(AppContext)

  const handleProductAddedToCart = async () => {
    console.log(user)
    // if the user not logged in return
    if (!user) {
      alert('please log in to add product to cart')
      return
    }
    // add product to local array
    const addedProduct = { productName: productName, price: price, category: category, imgUrl: imgUrl }
    setItemsOnTheCart (prv => [...prv ,addedProduct])   
  }

  console.log(id)
  return (
    <>

      {productName && <Link to={`shop/${id}`}>
        <img className=' w-[80%]  ' src={imgUrl} alt="product image" />
        <h3 className='text-primarycolor text-[1rem] font-medium'>{productName}</h3>
        <p className='text-smalltextcolor my-[8px] font-medium'>{category}</p>
        <div className='flex justify-between items-center '>
          <h6 className='text-[1.1rem] text-primarycolor font-semibold '>${price}</h6>
          <div onClick={ handleProductAddedToCart} className='bg-primarycolor mr-20 cursor-pointer  h-[24px]  w-[24px] text-white  text-sm text-center flex items-center justify-center rounded-full'>
            +
          </div>
        </div>
      </Link>

      }
    </>
  )

}

export default ProductItem