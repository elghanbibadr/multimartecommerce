import React ,{useState} from 'react'

const Login = () => {
    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');




  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };



    const handleSubmit=() => {}
    return (
        <div className='mx-auto mt-20 w-[80%]'>
            <h2 className='text-3xl text-center mb-6 font-semibold text-primarycolor ' >Login</h2>
            <form className='bg-primarycolor flex flex-col rounded-md items-center  text-white p-10' onSubmit={handleSubmit}>
                <input

                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
               
                <button className='bg-white py-2 px-4 mb-6 font-medium rounded-md text-primarycolor' type="submit">Login</button>
                <p>Don't have an account? Create an account</p>
            </form>
        </div>
    )
}

export default Login