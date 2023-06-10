import React from 'react'
import trackIcon from "../../assets/tracking.png"

const FeatureCard = ({title,subtitle,bg}) => {

    return (
  
      <div  className={`flex items-center  mx-auto rounded-lg mt-3 h-fit p-3 `} style={{ backgroundColor: bg }}>
          <div className='bg-primarycolor rounded-full p-1 mr-3'><img className='h-7' src={trackIcon} alt="track icon" /></div>
          <div>
              <h4 className='text-primarycolor text-[1.1rem] font-medium '>{title}</h4>
              <p className='text-smalltextcolor'>{subtitle}</p>
          </div>
      </div>
    
  )
}

export default FeatureCard