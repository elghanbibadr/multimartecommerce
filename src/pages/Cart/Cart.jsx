import React, { useContext } from 'react';
import { AppContext } from '../../Store/AppContext';
import ItemInCart from './ItemInCart';

const Cart = () => {
  const { user,itemsOnTheCart } = useContext(AppContext);


  console.log(itemsOnTheCart)
  return <div className=' '>
    <div className='bg-primarycolor p-3'>
      <h1 className='text-white font-bold text-center my-6'>Shopping Cart</h1>
    </div>
    { !user &&   <h3 className='text-primarycolor text-lg'>please login to add item to cart</h3>}
    { user &&   itemsOnTheCart.length === 0  && <h3 className='text-primarycolor text-lg'>no item added to cart</h3>}
    { user &&    itemsOnTheCart.map(({productName,price,imgUrl},index)=>{
      return <ItemInCart  key={index} productName={productName} price={price} img={imgUrl} />
    }) }
    
  </div>;
};

export default Cart;























// import React, { useContext, useEffect } from 'react'
// import { db } from '../../../firebaseConfig'
// import { getDoc,doc } from 'firebase/firestore';
// import { AppContext } from '../../Store/AppContext';

// const Cart = () => {
//   const {user}=useContext(AppContext)
//   const userRef = doc(db, 'users', user.uid);


//   const getdata=async () =>{   
//     if (!user)return 
//       // Get the user document from Firestore
//       const userSnap = await getDoc(userRef);
//       const userData = userSnap.data();
//       console.log(userData)
      
    
//   }
//   useEffect( () =>{
//     getdata()
//   },[])

//   return (
//     <div>Cart</div>
//   )
// }

// export default Cart