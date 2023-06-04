import React from 'react'
import heroImg from "../data/images/hero-img.png"
const Hero = () => {
  return (
    <div className='bg-herobg px-3 pt-12 md:p-6 text-primarycolor'>
        <div>
            <p >Trending product in 2023</p>
            <h1 className='text-3xl my-4 font-medium'>Make Your Interior More Minimalistic & Modern</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat nulla repellat quo eaque alias corporis sunt, facilis nesciunt rem fugit!        </p>
            <button className='uppercase bg-primarycolor text-white py-2 px-3 rounded-md font-medium mt-4'>Shop now</button>
        </div>
        <div>
            <img src={heroImg} alt="some products intro" />
        </div>
    </div>
  )
}

export default Hero