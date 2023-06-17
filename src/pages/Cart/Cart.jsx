import React, { useContext } from 'react';
import { AppContext } from '../../Store/AppContext';
import ProductTable from './ProductTable';

const Cart = () => {
    const { user,itemsOnTheCart } = useContext(AppContext);


  console.log(itemsOnTheCart)
  return <div className=' '>
    <div className='bg-primarycolor p-3'>
      <h1 className='text-white font-bold text-center my-6'>Shopping Cart</h1>
    </div>
    { !user &&  <h3 className='text-primarycolor text-lg'>please login to add item to cart</h3>}
    { user &&  itemsOnTheCart.length === 0  && <h3 className='text-primarycolor text-lg'>no item added to cart</h3>}
    { user && <ProductTable />}
  </div>;
};

export default Cart;






















