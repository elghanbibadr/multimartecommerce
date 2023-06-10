import React, { useState ,useEffect} from 'react'
import bagShoppingLogo from "../assets/bag.png"
import heartIcon from "../assets/heart-solid.svg"
import { Link } from 'react-router-dom'
import cartIcon from "../assets/bag-shopping-solid.svg"
import Container from './UI/Container'
import userIcon from "../assets/user-icon.png"
import hamburgermenu from "../assets/hamburgermenu.svg"

const Navbar = () => {
    const [menuCollapse,setMenuCollapse] =useState(false)
    const [userClickOnProfileIcon,setUserClickOnProfileIcon] = useState(false)
    const handleMenuCollapse=() => {
     setMenuCollapse(prv => !prv)
    }
    useEffect(() => {
        const handleResize = () => {
          setMenuCollapse(window.innerWidth >= 780);
        };
    
        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);
    
        // Check the initial width of the window
        handleResize();
    
        // Clean up the event listener when the component is unmounted
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <header >
        <Container>
            <nav className='flex justify-between flex-wrap md:flex-nowrap  items-center'>
            <div className='flex'>
            <img className='h-5 w-5 md:w-6 md:h-6' src={bagShoppingLogo} alt='bag shopping' />
            <span className='font-bold text-primarycolor text-lg mx-2'>Multimart</span>
            </div>
            <div className='flex items-center  md:order-3 justify-between w-1/3 md:w-[130px]'>
             <img className='h-5' src={heartIcon} alt="heart icon" />
             <img className='h-5 ' src={cartIcon} alt="cart icon" />
             <div className='relative'>
               <Link to="/signup">
               <img  className='h-6 ' src={userIcon} alt="user icon" />
               </Link>
              { userClickOnProfileIcon &&  <div className='bg-cardbg01 p-2 rounded-md top-10 right-2 text-sm text-primarycolor absolute'>
                <p>login</p>
                <p>sign up</p>
                <p>dashboard</p>
               </div>}
             </div>
             <img onClick={handleMenuCollapse} className='h-5 md:hidden ' src={hamburgermenu} alt="user icon" />
            </div>
             { menuCollapse &&  <ul className='w-full font-medium md:max-w-[240px] md:order-2 md:flex md:justify-between text-primarycolor  '>
                <Link to="/home">
                  <li className='cursor-pointer'>Home</li>
                </Link>
                <Link to="/shop">
                  <li className='cursor-pointer'>Shop</li>
                </Link>
                <Link to="/cart">
                  <li className='cursor-pointer'>Cart</li>
                </Link>
            </ul>}
            </nav>
        </Container>
    </header>
  )
}

export default Navbar