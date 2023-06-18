import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Store/AppContext';


const userFilterProductByCategory = (category) => {
  const { products } = useContext(AppContext);
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const filteredProducts = products.filter(({ item }) => item.category === category);
      setTrendingProducts(filteredProducts);
    }
  }, [category, products]);

  return trendingProducts;
};

export default userFilterProductByCategory