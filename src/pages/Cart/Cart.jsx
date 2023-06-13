import React, { useContext, useEffect } from 'react';
import { db } from '../../../firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';
import { AppContext } from '../../Store/AppContext';
import ItemInCart from './ItemInCart';

const Cart = () => {
  const { user,  setItemsOnTheCart  } = useContext(AppContext);

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

  return <div>
    <ItemInCart />
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