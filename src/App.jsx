import React, { useEffect } from 'react'
import Navbar from './componenet/Navbar'
import { db } from '../firebaseConfig';
import TrendingProducts from './componenet/TrendingProducts'; 
import Hero from './componenet/Hero'
import Features from './componenet/Features'
const App = () => {


  return (
    <>
    <Navbar/>
    <Hero/>
    <Features />
    <TrendingProducts />
    </>
  )
}

export default App