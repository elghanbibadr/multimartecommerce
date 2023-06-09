import React, { useContext, useEffect } from 'react'

import { AppContext } from '../Store/AppContext'
const TrendingProducts = () => {
  const {products}=useContext(AppContext)

  console.log(products)
  return (
    <div>TrendingProducts</div>
  )
}

export default TrendingProducts