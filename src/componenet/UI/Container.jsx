import React from 'react'

const Container = ({children}) => {
  return (
    <div className='p-3 md:p-6 max-w-[1500px] mx-auto'>{children}</div>
  )
}

export default Container