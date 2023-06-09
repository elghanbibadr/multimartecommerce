import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Store/AppContext';

const TrendingProducts = () => {
  const { products } = useContext(AppContext);
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const filteredProducts = products.filter(({ item }) => item.category === 'sofa');
      setTrendingProducts(filteredProducts);
    }
  }, [products]);

  console.log(trendingProducts);
  
  return(
    <>
    {trendingProducts.length > 0 &&  <div>
      <h1 className='text-black'>hello</h1>
   </div>}
    </>
  )
};

export default TrendingProducts;
