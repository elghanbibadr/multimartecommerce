import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Store/AppContext';
import ProductItem from '../../componenet/UI/ProductItem';
import Container from '../../componenet/UI/Container';

const ProductsShowsUp = ({ category, category2, sectionTitle }) => {
  const { products } = useContext(AppContext);
  const [productsInThisSection, setProductsInThisSection] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const filteredProducts = products.filter(({ item }) => item.category === category || item.category===category2);
      setProductsInThisSection(filteredProducts);
    }
  }, [products, category]);

  return (
    <>
      <h2 className='text-primarycolor text-3xl mt-20 text-center font-medium'>{sectionTitle}</h2>
      {productsInThisSection.length > 0 && (
        <Container className='sm:grid sm:grid-cols-2 md:gap-10 lg:grid-cols-4'>
          {productsInThisSection.sort((a, b) => b.item.price - a.item.price).map(({ id, item }) => (
            <ProductItem
              key={id}
              category={item.category}
              productName={item.productName}
              price={item.price}
              imgUrl={item.imgUrl}
            />
          ))}
        </Container>
      )}
    </>
  );
};

export default ProductsShowsUp;
