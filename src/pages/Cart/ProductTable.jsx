import React, { useContext } from 'react'
import productImg from "../../assets/bag.png"
import { db } from '../../../firebaseConfig';
import { getDoc,doc,updateDoc } from 'firebase/firestore';
import { AppContext } from '../../Store/AppContext';
const ProductTable = ({productName,price,img}) => {
    const {user,itemsOnTheCart,setuserdelete,  setItemsOnTheCart} =useContext(AppContext)
    const handleItemDeletedFromCart = async (userId, productName) => {
        setuserdelete(true)
        const userRef = doc(db, 'users', userId);
      
        try {
          // Get the user document
          const userSnap = await getDoc(userRef);
      
          // Get the cart array from the user document data
          const { cart } = userSnap.data();
      
          // Filter the cart array based on the product name
          const updatedCart = cart.filter(item => item.productName !== productName);
      
          // Update the user document with the modified cart array
          await updateDoc(userRef, { cart: updatedCart });
          setItemsOnTheCart(updatedCart)
        } catch (error) {
          console.error('Error deleting item from cart:', error);
        }
      };


    return (
        <table className=' w-full'>
            <thead className=' '>
                <tr className='flex justify-between w-full p-2'>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>delete</th>
                </tr>
            </thead>
            {itemsOnTheCart.length > 0 &&  itemsOnTheCart.map(({productName,price,imgUrl},index)=>{

           return  <tbody className='flex justify-between text-sm'>
            <tr className='flex justify-between w-full p-2 items-center'>
                <td><img className='h-10 w-10' src={imgUrl} alt='product item' /></td>
                <td>
                    <p> {productName}</p>
                </td>
                <td>
                    <p>${price}</p>
                </td>
                <td>
                    <p>1px</p>
                </td>
                <td>
                    <svg onClick={() => handleItemDeletedFromCart(user.uid,productName)} className='h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                    </svg>
                </td>
            </tr>

            </tbody>
            })
             }
        </table>
    )
}

export default ProductTable