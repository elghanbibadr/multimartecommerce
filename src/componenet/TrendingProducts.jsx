import React, { useEffect } from 'react'
import { db } from '../../firebaseConfig'
import { getDocs,collection} from 'firebase/firestore'
const TrendingProducts = () => {
    const retrieveProducts = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'products'));
          querySnapshot.forEach((doc) => {
            console.log('Product ID:', doc.id);
            console.log('Product data:', doc.data());
          });
        } catch (error) {
          console.error('Error retrieving products:', error);
        }
      };
 // let's fetch the trending products from firebase
 
 useEffect(() =>{
   return () => retrieveProducts()
 },[])
  return (
    <div>TrendingProducts</div>
  )
}

export default TrendingProducts