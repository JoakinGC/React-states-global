import React, { useContext, useState } from 'react';
import { AuthContext } from './contexProvide';
import "../styles/login.css";


const LoginComponent = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(username, password);
  };

  return (
    <div className='login-container'>
      <h2>Login:</h2>
      <input
      className='name-login'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
      className='password-login'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='button-login' onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginComponent;
