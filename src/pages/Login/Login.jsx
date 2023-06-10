import React ,{useState,useEffect, useContext} from 'react'
import { auth } from '../../../firebaseConfig';
import { signInWithEmailAndPassword ,onAuthStateChanged} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Store/AppContext';

const Login = () => {
    const {setUser}=useContext(AppContext)
    const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

 const navigate=useNavigate()


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };



  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("submited")
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // User login successful
      console.log('User logged in');
      // Redirect to dashboard or desired route
    } catch (error) {
      // Handle login error
      console.error('Error logging in:', error.message);
    }finally{
        navigate("/")
    }
  };

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        console.log(user)
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);


    return (
        <div className='mx-auto mt-20 w-[80%]'>
            <h2 className='text-3xl text-center mb-6 font-semibold text-primarycolor ' >Login</h2>
            <form className='bg-primarycolor flex flex-col rounded-md items-center  text-white p-10' onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <input

                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
               
                <button className='bg-white py-2 px-4 mb-6 font-medium rounded-md text-primarycolor' type="submit">Login</button>
                <p>Don't have an account? Create an account</p>
            </form>
        </div>
    )
}

export default Login