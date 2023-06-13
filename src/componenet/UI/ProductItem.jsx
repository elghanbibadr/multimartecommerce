import React, { useContext, useId } from 'react'
import item from "../../data/images/arm-chair-01.jpg"
import { db } from '../../../firebaseConfig'
import { doc,updateDoc ,getDoc} from 'firebase/firestore'
import { AppContext } from '../../Store/AppContext'

const ProductItem = ({category,productName,imgUrl,price}) => {
  const {user}=useContext(AppContext)
  const handleProductAddedToCart=async(userId)=>{
    console.log(userId)
    const userRef = doc(db, 'users', userId);

    // Get the user document from Firestore
    const userSnap = await getDoc(userRef);
    const userData = userSnap.data();
  
    // Add the item to the cart array
    // const updatedCart = [...userData.cart, item];
  
    // Update the user document with the new cart array
    await updateDoc(userRef, { cart: [] });
  
    console.log('Item added to cart successfully!');
    }
  
  return (
    <>
    
    {productName && <div className='max-w-[340px] '>
        <img className=' w-full mb-6' src={imgUrl} alt="product image" />
        <h3 className='text-primarycolor text-[1.2rem] font-semibold'>{productName}</h3>
        <p className='text-smalltextcolor my-[8px] font-medium'>{category}</p>
        <div className='flex justify-between items-center '>
            <h6 className='text-[1.2rem] text-primarycolor font-semibold'>${price}</h6>
            <div onClick={()=> handleProductAddedToCart(user.uid)} className='bg-primarycolor cursor-pointer  h-[30px] mr-10 w-[30px] text-white  text-lg text-center rounded-full'>
                +
            </div>
        </div>
    </div>
    
  }
    </>
  )
  
}

export default ProductItem