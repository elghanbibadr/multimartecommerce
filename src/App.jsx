import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SignIn from './routes/SignIn'
import { auth } from './firebase/firebaseConfig'
import SignUp from './routes/SignUp'
import Account from './routes/Account'
import Home from './routes/Home'
import { Routes,Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
const App = () => {
const [user,setUser]=useState(null)
const [isLoading,setIsLoading] = useState(false)

useEffect(() => {
  const listen=onAuthStateChanged(auth,(user)=>{
    console.log(user)
    if(user){
      setUser(user)
    }else{
      setUser(null)
    }
  })
},[])

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
          {!user  &&  <p className='mx-6'>sign in</p>}
        </Link>
        <Link to="/signup">
         {!user && <p>sign up</p>}       
 </Link>
        <Link to="/account">
         {user && <p className='mx-4'>account </p>}       
 </Link>
         {user && <p onClick={handleLogout}>log out </p>}       
 
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