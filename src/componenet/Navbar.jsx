import React, { useState } from 'react'
import bagShoppingLogo from "../assets/bag.png"
import heartIcon from "../assets/heart-solid.svg"
import cartIcon from "../assets/bag-shopping-solid.svg"
import userIcon from "../assets/user-icon.png"
import hamburgermenu from "../assets/hamburgermenu.svg"
const Navbar = () => {
    const [menuCollapse,setMenuCollapse] =useState(false)
    const handleMenuCollapse=() => {
     setMenuCollapse(prv => !prv)
    }
  return (
    <header className='p-3'>
        <nav className='flex justify-between flex-wrap  items-center'>
        <div className='flex'>
        <img className='h-5 w-5' src={bagShoppingLogo} alt='bag shopping' />
        <span className='font-bold text-primarycolor mx-2'>Multimart</span>
        </div>
        <div className='flex items-center justify-between w-1/3'>
         <img className='h-5' src={heartIcon} alt="heart icon" />
         <img className='h-5 ' src={cartIcon} alt="cart icon" />
         <img className='h-6' src={userIcon} alt="user icon" />
         <img onClick={handleMenuCollapse} className='h-5 ' src={hamburgermenu} alt="user icon" />
        </div>
         { menuCollapse &&  <ul className='w-full text-primarycolor  '>
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
        </ul>}
        </nav>
    </header>
  )
}

export default Navbar