import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth,storage } from '../firebase/firebaseConfig'
import { ref, uploadBytes } from 'firebase/storage';
import {  useNavigate} from 'react-router-dom'
const SignUp = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [user,setUser]=useState(null)
    const [profilePicture, setProfilePicture] = useState(null);


    const navigate=useNavigate('')

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential=  await createUserWithEmailAndPassword(auth,email, password);
      // Upload the profile picture to Firebase Storage
      if (profilePicture) {
        const storageRef = ref(storage, `profilePictures/${userCredential.user.uid}`);
        await uploadBytes(storageRef, profilePicture);
      }
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

console.log(profilePicture)

const handleProfilePictureChange = (e) => {
  const file = e.target.files[0];
  setProfilePicture(file);
};


  return (
    <form onSubmit={handleSubmit}>
        <div className='flex flex-col'>
            <input className='w-1/4 p-2 bg-blue text-black-400 my-6 border border-input rounded-2xl' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter your email'  />
            <input className='w-1/4 p-2 bg-blue text-black-400 my-6 border border-input rounded-2xl' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter your password' />
            <p className='mt-3 mb-2'>add your profile image</p>
            <input type="file"   onChange={handleProfilePictureChange}  />
        </div>
            <button className='bg-black text-white font-bold p-3 rounded-md m-5'>Sign up</button>
    </form>
  )
}

export default SignUp