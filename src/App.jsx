import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SignIn from './routes/SignIn'
import { auth } from './firebase/firebaseConfig'
import SignUp from './routes/SignUp'
import Account from './routes/Account'
import Home from './routes/Home'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      // User logged out successfully
    } catch (error) {
      console.log(error);
      // Handle error during logout
    }
    // setUserLogout(true)
  };



  return (
    <>
    <div className='font-bold flex items-center justify-between bg-black text-white p-6'>
      <h1>Multimart</h1>
       <div className='flex cursor-pointer'>
        <Link to='/signin'>
          {!auth?.currentUser?.email  &&  <p className='mx-6'>sign in</p>}
        </Link>
        <Link to="/signup">
         {!auth?.currentUser?.email && <p>sign up</p>}       
 </Link>
        <Link to="/account">
         {auth?.currentUser?.email && <p className='mx-4'>account </p>}       
 </Link>
         {auth?.currentUser?.email && <p onClick={handleLogout}>log out </p>}       
 
       </div>
    </div>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/account' element={<Account />} />
      {/* <Route path="/coin/:id" element={<CoinDetail/>}/> */}
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    </>
  )
}

export default App