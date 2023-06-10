import React, { useContext } from 'react'
import heroImg from "../data/images/hero-img.png"
import { AppContext } from '../Store/AppContext'
const Hero = () => {
  const {user}=useContext(AppContext)

  return (
    <div className='bg-herobg px-3 pt-12 md:p-6 text-primarycolor '>
        <div className='max-w-[1500px] mx-auto md:grid md:grid-cols-2 md:gap-x-16'>
            <div className=' self-center'>
                <p className='text-lg md:text-xl' >Trending product in 2023</p>
                { user &&  <p className='text-primarycolor'>hello {user.username}</p>}
                <h1 className='text-3xl my-4 font-medium'>Make Your Interior More Minimalistic & Modern</h1>
                <p className=''>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat nulla repellat quo eaque alias corporis sunt, facilis nesciunt rem fugit!        </p>
                <button className='uppercase bg-primarycolor text-white py-3 px-6 rounded-md font-medium mt-4'>Shop now</button>
            </div>
            <div className='justify-self-end'>
                <img src={heroImg} alt="some products intro" />
            </div>
        </div>
    </div>
  )
}

export default Hero