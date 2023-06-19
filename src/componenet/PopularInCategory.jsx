import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Store/AppContext';
import ProductItem from './UI/ProductItem';
import Container from './UI/Container';

const PopularInCategory = () => {
  const { products } = useContext(AppContext);
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const filteredProducts = products.filter(({ item }) => item.category === 'watch' );
      setTrendingProducts(filteredProducts);
    }
  }, [products]);

  return (
    <>
    <h2 className='text-primarycolor text-3xl mt-20 text-center font-medium'>Popular in Category</h2>
      {trendingProducts.length > 0 && <Container className='sm:grid sm:grid-cols-2 md:gap-10 lg:grid-cols-4'>
        {trendingProducts.length > 0 && trendingProducts.sort((a,b) => b.item.price - a.item.price).map(({ id, item }) => {
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

export default PopularInCategory;
