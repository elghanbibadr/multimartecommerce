import React, { useState,useContext } from 'react';
import { AppContext } from '../../Store/AppContext';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setloading] =useState(false)
  const [error,setError]=useState('')
  const {createUser}=useContext(AppContext)

  const [profilePhoto, setProfilePhoto] = useState('');
  const {user,setUser}=useContext(AppContext)

  const navigate = useNavigate();


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
    const file = event.target.files[0];
    console.log(file)
    setProfilePhoto(file);
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    try {
      await createUser(email, password,profilePhoto);
      navigate('/')
    } catch (e) {
      setError(e.message);
      alert(e.message);
    }
   
  };

  // console.log(error)

  return (
    <div className='mx-auto mt-20 w-[80%]'>
      {/* {  <p className='text-primarycolor font-bold text-lg'>creating new  user</p> } */}
     {  <>
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
            accept="image/*"
            className='text-white'
            onChange={handleProfilePhotoChange}
          />
          <br />
          <button className='bg-white py-2 px-4 mb-6 font-medium rounded-md text-primarycolor' type="submit">Create an Account</button>
        <p>Already have an account? Login</p>
        </form>
     </>
}
    </div>
  );
};

export default SignUp;
