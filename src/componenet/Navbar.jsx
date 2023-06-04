import React from 'react'
import bagShoppingLogo from "../assets/bag-shopping-solid.svg"
const Navbar = () => {
  return (
    <header className='p-2'>
        <nav>
        <div className='flex'>
        <img className='h-5 w-5' src={bagShoppingLogo} alt='bag shopping' />
        <span className='font-bold text-blue-950 mx-2'>Multimart</span>
        </div>
        </nav>
    </header>
  )
}

export default Navbar