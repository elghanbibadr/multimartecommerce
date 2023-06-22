import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import { Link } from 'react-router-dom';
import Container from '../../componenet/UI/Container';
import ProductItem from '../../componenet/UI/ProductItem';
import { AppContext } from '../../Store/AppContext';


const ProductDetail = () => {
  const { id } = useParams();
  const [isDescriptionActive, setIsDescriptionActive] = useState(false)
  const [userReviews, setUserReview] = useState('')
  const [userName, setUserName] = useState('')
  const [relatedProducts, setRelatedProducts] = useState(undefined);
  const { products } = useContext(AppContext)
  const handleDescriptionClicked = () => setIsDescriptionActive(true)
  const handleReviewsClicked = () => setIsDescriptionActive(false)
  const currentProduct = products.find(product => product.id === id)

  useEffect(() => {
    if (currentProduct) {
      setRelatedProducts(products.filter(({ id, item }) => item.category === currentProduct.item.category && currentProduct.id !==id))
    }
  }, [currentProduct])

  const handleReviewAdded = (e) => setUserReview(e.target.value)
  const handleNameEntered = (e) => setUserName(e.target.value)

  const handleReviewSubmited = async (e) => {
    e.preventDefault()
    if (!userReviews || !userName) {
      alert('please fill out all the required fields')
      return
    }
    addReview(id, userReviews,userName)
    setUserReview('')
    setUserName('')
    console.log('successfully')

  }

  const addReview = async (productId, newReview,nameOfUser) => {
    try {
      const productRef = doc(db, 'products', productId);
      const productSnapshot = await getDoc(productRef);

      if (productSnapshot.exists()) {
        const productData = productSnapshot.data();
        const reviews = productData.reviews || []; // Existing reviews or empty array

        // Add the new review to the reviews array
        const updatedReviews = [...reviews, { text: newReview, rating: 4.9,name:nameOfUser }];

        // Update the product document with the updated reviews array
        await updateDoc(productRef, { reviews: updatedReviews });

      } else {
        alert('Product does not exist.');
      }
    } catch (error) {
      alert('Error adding review:', error);
    }
  };


  return (
    <>
      {currentProduct && <Container>
        <div className="grid grid-cols-1  text-[#111] md:grid-cols-2  lg:gap-x-20">
          <img className=' mb-5  justify-self-center w-[80%]' src={currentProduct.item.imgUrl} alt="product image" />
          <div className='self-center'>
            <h1 className=' font-medium text-xl'>{currentProduct.item.productName}</h1>
            <div>
              <p className='my-4 '><span className='text-orange-400'>({currentProduct.item.avgRating}) </span>ratings</p>
            </div>
            <div className='flex justify-between sm:w-1/2 my-3'>
              <h3 className='text-xl font-semibold'>${currentProduct.item.price}</h3>
              <p className=''>Category: {currentProduct.item.category}</p>
            </div>
            <p className='text-smalltextcolor'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, eaque.</p>
            <button className='capitalize bg-primarycolor text-white py-3 px-6 rounded-md font-medium mt-4'>Add to Cart</button>
          </div>

        </div>
        {/* reviews and desc */}
        <div>
          <div className='mt-8 flex font-medium  '>
            <h4 onClick={handleDescriptionClicked} className={`${isDescriptionActive ? "text-primarycolor" : "text-[#111]"} cursor-pointer`}>Description</h4>
            <h4 onClick={handleReviewsClicked} className={`${!isDescriptionActive ? "text-primarycolor" : "text-[#111]"} ml-6 cursor-pointer`}>Reviews ({currentProduct.item.reviews.length})</h4>
          </div>
          {isDescriptionActive && <p className='mt-6 text-smalltextcolor text-base' > {currentProduct.item.description} </p>}
          {!isDescriptionActive && <div>
            {currentProduct.item.reviews.map(({ text, rating, name }, index) => {
              return <div key={index} className='mt-6'>
                <h4 className='text-[1.2rem] text-[#111]'>{name}</h4>
                <p className='text-orange-400'> {rating} (rating) </p>
                <p className='text-smalltextcolor  mt-2'>{text}</p>
              </div>
            })}
            <div className='p-5'>
              <h3>Leave your experience</h3>
              <form onSubmit={handleReviewSubmited} className='flex flex-col'>
              <input className='border-[1px] mt-5  border-black w-1/2 ' placeholder='enter your name' type="text" value={userName} onChange={handleNameEntered} />
              <input className='border-[1px]  border-black w-1/2 ' type="text" value={userReviews} placeholder='your review' onChange={handleReviewAdded} />
              <button className='capitalize w-fit bg-primarycolor text-white py-3 px-6 rounded-md font-medium mt-4'>Add Review</button>
              </form>
            </div>
          </div>
          }

        </div>
        {/* you might also like */}
        <div>
          <h3 className='mt-6'>You might also like</h3>
          {relatedProducts && <div className='sm:grid justify-items-center sm:grid-cols-2 md:gap-10 lg:grid-cols-4'>
             {relatedProducts.map(({ id, item }) => {
              return <div  className='w-[80%]'>
                <ProductItem key={id}
                id={id}
                  category={item.category}
                  productName={item.productName}
                  imgUrl={item.imgUrl}
                  price={item.price}
                />
              </div>
            })}
          </div>}
        </div>
      </Container>}
    </>
  )
}

export default ProductDetail