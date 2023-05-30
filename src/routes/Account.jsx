import React from 'react'
import { auth } from '../firebase/firebaseConfig'
const Account = () => {
  return (
    <div>
    <h1 className='text-black'>hello {auth.currentUser.email}</h1>
    </div>
  )
}

export default Account