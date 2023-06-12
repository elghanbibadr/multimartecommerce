import React ,{useState,useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Store/AppContext';

const Login = () => {
    const {signIn}=useContext(AppContext)
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const navigate=useNavigate()


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };



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