import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Store/AppContext';
import ProductItem from './UI/ProductItem';
import Container from './UI/Container';

const TrendingProducts = () => {
  const { products } = useContext(AppContext);
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const filteredProducts = products.filter(({ item }) => item.category === 'chair');
      setTrendingProducts(filteredProducts);
    }
  }, [products]);

  console.log(trendingProducts);

  return (
    <>
      {trendingProducts.length > 0 && <Container className='sm:grid sm:grid-cols-2 md:gap-3'>
        {trendingProducts.length > 0 && trendingProducts.map(({ id, item }) => {
          return <ProductItem key={id}
            category={item.category}
            productName={item.productName}
            price={item.price}
            imgUrl={item.imgUrl}
          />
        })}
      </Container>}
    </>
  )
};

export default TrendingProducts;
