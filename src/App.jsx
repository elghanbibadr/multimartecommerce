import React, { useEffect } from 'react'
import Navbar from './componenet/Navbar'
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Hero from './componenet/Hero'
import Features from './componenet/Features'
import products from './data/products';
const App = () => {
  useEffect(()  =>{
    products.forEach(async (product) => {
      try {
        const docRef = await addDoc(collection(db, 'products'), product);
        console.log('Product document created with ID:', docRef.id);
      } catch (error) {
        console.error('Error creating product document:', error);
      }
    });
  },[])

  return (

    <>
    
    <Navbar/>
    <Hero/>
    <Features />
    </>
  )
}

export default App