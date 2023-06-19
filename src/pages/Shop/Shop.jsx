import React from 'react'
import Container from '../../componenet/UI/Container'

const Shop = () => {
  return (

    <>
    <div className='bg-primarycolor p-3'>
      <h1 className='text-white font-bold text-center my-6'>Products</h1>
    </div>
    <Container>
      <form>
        {/* filter by categor select dropdown */}
        <select className='capitalize'>
          <option value="">filter by category</option>
          <option value="">sofa</option>
          <option value="">mobile</option>
          <option value="">chair</option>
          <option value="">watch</option>
          <option value="">wireless</option>
        </select>
        {/* filter by categor select dropdown */}
        <select>
          <option value="">Sort by</option>
          <option value="">Ascending</option>
          <option value="">Descending</option>
        
        </select>
      </form>
    </Container>
    </>
  )
}

export default Shop