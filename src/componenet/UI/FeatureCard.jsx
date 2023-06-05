import React from 'react'
import trackIcon from "../../assets/tracking.png"
const FeatureCard = () => {
  return (
    <div className='flex items-center bg-cardbg01 p-4 '>
        <div className='bg-primarycolor rounded-full p-2'><img className='h-8' src={trackIcon} alt="track icon" /></div>
        <div>
            <h4 className='text-primarycolor text-[1.1rem] font-semibold'>Free Shipping</h4>
            <p>Lorem ipsum dolor sit amet</p>
        </div>
    </div>
  )
}

export default FeatureCard