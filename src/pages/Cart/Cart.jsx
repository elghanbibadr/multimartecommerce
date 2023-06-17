import React, { useContext, useEffect,useState } from 'react';
import { AppContext } from '../../Store/AppContext';
import ProductTable from './ProductTable';
import Container from "../../componenet/UI/Container"

const Cart = () => {
    const { user,itemsOnTheCart } = useContext(AppContext);
    const [subtotal,setSubtotal] = useState(undefined)

   
    useEffect(() =>{
      const subtotalPrice = itemsOnTheCart.reduce((accumulator, currentItem) => accumulator + Number(currentItem.price), 0);
      console.log(subtotalPrice)
      setSubtotal(subtotalPrice)
    },[itemsOnTheCart])

  console.log(itemsOnTheCart)
  return <>
    <div className='bg-primarycolor p-3'>
      <h1 className='text-white font-bold text-center my-6'>Shopping Cart</h1>
    </div>
    <Container className=' lg:flex lg:justify-between '>
      { !user &&  <h3 className='text-primarycolor text-lg'>please login to add item to cart</h3>}
      { user &&  itemsOnTheCart.length === 0  && <h3 className='text-primarycolor text-lg'>no item added to cart</h3>}
      { user && <ProductTable />}
      <div className='mt-10 lg:w-1/2 lg:ml-20 lg:mt-0 '>
        <div className='flex justify-between '>
          <div >
            <h2 className='text-lg font-semibold'>Subtotal</h2>
            <p className='text-smalltextcolor mt-4 w-[80%]'>taxes and shipping will calculate in checkout</p>
          </div>
          <h1 className='text-xl font-bold text-primarycolor'>${subtotal}</h1>
        </div>
        <div className='flex flex-col mt-4 sm:w-[80%]  lg:w-full sm:mx-auto'>
          <button className='bg-primarycolor my-2 text-white p-2 rounded-md'>Checkout</button>
          <button className='bg-primarycolor text-white p-2 rounded-md'>Continue Shopping</button>
        </div>
      </div>
    </Container>
  </>;
};

export default Cart;






















