import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Store/AppContext';
import ProductItem from './UI/ProductItem';

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
    {trendingProducts.length > 0 &&  <ProductItem /> }
    </>
  )
};

export default TrendingProducts;
