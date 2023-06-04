import React from 'react'
import bagShoppingLogo from "../assets/bag.png"
import heartIcon from "../assets/heart-solid.svg"
import cartIcon from "../assets/bag-shopping-solid.svg"
import userIcon from "../assets/user-icon.png"
import hamburgermenu from "../assets/hamburgermenu.svg"
const Navbar = () => {
  return (
    <header className='p-2'>
        <nav className='flex justify-between items-center'>
        <div className='flex'>
        <img className='h-5 w-5' src={bagShoppingLogo} alt='bag shopping' />
        <span className='font-bold text-primarycolor mx-2'>Multimart</span>
        </div>
        <div className='flex items-center justify-between w-1/3'>
         <img className='h-5' src={heartIcon} alt="heart icon" />
         <img className='h-5 ' src={cartIcon} alt="cart icon" />
         <img className='h-5' src={userIcon} alt="user icon" />
         <img className='h-5' src={hamburgermenu} alt="user icon" />
        </div>
        </nav>
    </header>
  )
}

export default Navbar