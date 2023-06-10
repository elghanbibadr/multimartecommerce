import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
const App = () => {
  return (
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Routes>
  )
}

export default App