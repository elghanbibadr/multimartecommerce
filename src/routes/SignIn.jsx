import React ,{useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';
const SignIn = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate('')


  const handleSignIn=(e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredentiel) => {
      console.log(userCredentiel)
    }).catch((e) => { 
      console.log(e.message)
    })
    setEmail('')
    setPassword('')
    navigate('/')
  }


  return (
      <form onSubmit={handleSignIn}>
          <div className='flex flex-col'>
              <input className='w-1/4 p-2 bg-blue text-black-400 my-6 border border-input rounded-2xl' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter your email'  />
              <input className='w-1/4 p-2 bg-blue text-black-400 my-6 border border-input rounded-2xl' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter your password' />
          </div>
              <button className='bg-black text-white font-bold p-3 rounded-md m-5'>Sign in</button>
      </form>
  )
}

export default SignIn