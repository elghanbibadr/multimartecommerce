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

  return (
    <>
      {trendingProducts.length > 0 && <div>
        {console.log(trendingProducts.slice(0, 4))}
        {trendingProducts.length > 0 && trendingProducts.map(({ id, item }) => {
          return <ProductItem key={id}
            category={item.category}
            productName={item.productName}
            price={item.price}
            imgUrl={item.imgUrl}
          />
        })}
      </div>}
    </>
  )
};

export default TrendingProducts;
