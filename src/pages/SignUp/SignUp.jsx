import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {  collection, addDoc } from 'firebase/firestore';
import { db,auth } from '../../../firebaseConfig';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleProfilePhotoChange = (event) => {
    setProfilePhoto(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform form submission logic here
            try {
          const { user } = await createUserWithEmailAndPassword(auth, email, password);
          // User sign up successful
          console.log('User signed up:', user.uid);
          // Add user to Firestore collection
          const usersCollection = collection(db, 'users');
          await addDoc(usersCollection, {
            uid: user.uid,
            email: user.email,
          });
      
          // User added to Firestore collection
          console.log('User added to Firestore:', user.uid);
        } catch (error) {
          // Handle sign-up error
          console.error('Error signing up:', error.message);
        }
    console.log('Form submitted!');
  };

  return (
    <div className='mx-auto mt-20 w-[80%]'>
      <h2 className='text-3xl text-center mb-6 font-semibold text-primarycolor' >Signup</h2>
      <form className='bg-primarycolor flex flex-col items-center  text-white p-10' onSubmit={handleSubmit}>
        <input
         
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <input
          type="file"
          onChange={handleProfilePhotoChange}
        />
        <br />
        <button className='bg-white py-2 px-4 mb-6 font-medium rounded-md text-primarycolor' type="submit">Create an Account</button>
      <p>Already have an account? Login</p>
      </form>
    </div>
  );
};

export default SignUp;
