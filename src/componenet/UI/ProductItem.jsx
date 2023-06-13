import React, { useContext, useId } from 'react'
import item from "../../data/images/arm-chair-01.jpg"
import { db } from '../../../firebaseConfig'
import { doc,updateDoc ,getDoc,setDoc} from 'firebase/firestore'
import { AppContext } from '../../Store/AppContext'

const ProductItem = ({category,productName,imgUrl,price}) => {
  const {user}=useContext(AppContext)

  const handleProductAddedToCart=async(userId)=>{
    console.log(user)
    // if the user not logged in return
    if (!user) {
      alert('please log in to add product to cart')
    return
    }
    const userRef = doc(db, 'users', userId);

    // Get the user document from Firestore
    const userSnap = await getDoc(userRef);
    const userData = userSnap.data();
  
    // Check if the cart property exists, initialize it if it doesn't
    // const cart = userData.cart || [];
    // console.log(userData)
  
    // Add the item to the cart array with additional properties
  
  
    // Update the user document with the new cart array
    if (userData.cart){
      await setDoc(userRef, { email: userData.email, profilePhotoUrl: userData.profilePhotoUrl, uid: userData.uid, cart: [...userData.cart, productName]});
    }else {
      await setDoc(userRef, { email: userData.email, profilePhotoUrl: userData.profilePhotoUrl, uid: userData.uid, cart: [productName]});

    }

    // await updateDoc(userRef, { cart: updatedCart });
  
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
            <div onClick={() => handleProductAddedToCart(user.uid)} className='bg-primarycolor cursor-pointer  h-[30px] mr-10 w-[30px] text-white  text-lg text-center rounded-full'>
                +
            </div>
        </div>
    </div>
    
  }
    </>
  )
  
}

export default ProductItem