import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import Shop from './pages/Shop/Shop';
import Navbar from './componenet/Navbar';
import SignUp from './pages/SignUp/SignUp';


const App = () => {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/signup" element={<Cart />} />
          <Route path="/signup" element={<Shop />} />
        </Routes>
    </>
  )
}

export default App