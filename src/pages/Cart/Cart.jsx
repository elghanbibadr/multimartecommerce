import React, { useContext } from 'react';
import { AppContext } from '../../Store/AppContext';
import ProductTable from './ProductTable';
import Container from "../../componenet/UI/Container"

const Cart = () => {
    const { user,itemsOnTheCart } = useContext(AppContext);


  console.log(itemsOnTheCart)
  return <div className=' '>
    <div className='bg-primarycolor p-3'>
      <h1 className='text-white font-bold text-center my-6'>Shopping Cart</h1>
    </div>
    <Container>
      { !user &&  <h3 className='text-primarycolor text-lg'>please login to add item to cart</h3>}
      { user &&  itemsOnTheCart.length === 0  && <h3 className='text-primarycolor text-lg'>no item added to cart</h3>}
      { user && <ProductTable />}
      <div className='mt-6'>
        <div className='flex justify-between items-center'>
          <div >
            <h2>Subtotal</h2>
            <p className='text-smalltextcolor w-[80%]'>taxes and shipping will calculate in checkout</p>
          </div>
          <h1 className='text-xl font-bold text-primarycolor'>$0</h1>
        </div>
      </div>
    </Container>
  </div>;
};

export default Cart;






















