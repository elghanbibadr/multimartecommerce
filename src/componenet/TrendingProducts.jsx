import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Store/AppContext';

const TrendingProducts = () => {
  const { products } = useContext(AppContext);
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const filteredProducts = products.filter(({ item }) => item.category === 'watch');
      setTrendingProducts(filteredProducts);
    }
  }, [products]);

  console.log(trendingProducts);

  return <div>TrendingProducts</div>;
};

export default TrendingProducts;
