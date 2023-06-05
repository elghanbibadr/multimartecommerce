import React from 'react'
import trackIcon from "../../assets/tracking.png"
const FeatureCard = () => {
  return (
    <div className='flex items-center w-[80%] mx-auto rounded-md mt-3 bg-cardbg01 p-3 '>
        <div className='bg-primarycolor rounded-full p-1 mr-3'><img className='h-7' src={trackIcon} alt="track icon" /></div>
        <div>
            <h4 className='text-primarycolor text-[1.1rem] font-medium '>Free Shipping</h4>
            <p className='text-smalltextcolor'>Lorem ipsum dolor sit amet</p>
        </div>
    </div>
  )
}

export default FeatureCard