import React, { useContext, useEffect } from 'react';
import { db } from '../../../firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';
import { AppContext } from '../../Store/AppContext';
import ItemInCart from './ItemInCart';

const Cart = () => {
  const { user,  setItemsOnTheCart,itemsOnTheCart,userdelete  } = useContext(AppContext);

  useEffect(() => {
    const getData = async () => {
      if (user && user.uid) {
        const userRef = doc(db, 'users', user.uid);

        try {
          const userSnap = await getDoc(userRef);
          const userData = userSnap.data();
          setItemsOnTheCart(userData.cart)
          
        } catch (error) {
          console.alert('Error fetching user data:', error);
        }
      }
    };

    getData();
  }, [user]);



  return <div className='bg-red-900 h-[100px]'>
    {itemsOnTheCart.length ===0  && <h3 className='text-primarycolor text-lg'>no item added to cart</h3>}
    {itemsOnTheCart  && itemsOnTheCart.map(({productName,price,imgUrl},index)=>{
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