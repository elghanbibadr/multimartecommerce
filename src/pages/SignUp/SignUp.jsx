import React, { useState } from 'react';

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted!');
  };

  return (
    <div>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Create an Account</button>
      </form>
      <p>Already have an account? Login</p>
    </div>
  );
};

export default SignUp;
