import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
import {  useNavigate} from 'react-router-dom'
const SignUp = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [user,setUser]=useState(null)
    const navigate=useNavigate('')

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth,email, password);
      setUser(auth.currentUser)
      // New user created successfully
    } catch (error) {
      console.log(error.message);

      // Handle error during user creation
    }
    setEmail('')
    setPassword('')
    navigate('/')
}

  return (
    <form onSubmit={handleSubmit}>
        <div className='flex flex-col'>
            <input className='w-1/4 p-2 bg-blue text-black-400 my-6 border border-input rounded-2xl' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter your email'  />
            <input className='w-1/4 p-2 bg-blue text-black-400 my-6 border border-input rounded-2xl' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter your password' />
        </div>
            <button className='bg-black text-white font-bold p-3 rounded-md m-5'>Sign up</button>
    </form>
  )
}

export default SignUp