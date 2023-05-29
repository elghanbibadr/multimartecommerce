import React from 'react'
import { Link } from 'react-router-dom'
import Login from './routes/Login'
import SignUp from './routes/SignUp'
import Home from './routes/Home'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <>
    <div className='font-bold flex items-center justify-between bg-black text-white p-6'>
      <h1>Multimart</h1>
       <div className='flex cursor-pointer'>
        <Link to='/login'>
          <p className='mx-6'>login</p>
        </Link>
        <Link to="/signup">
          <p>sign up</p>
        </Link>
       </div>
    </div>

    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path="/coin/:id" element={<CoinDetail/>}/> */}
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    </>
  )
}

export default App