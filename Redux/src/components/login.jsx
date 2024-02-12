import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setPassword, toggleLogin, setUsernameActual, setPasswordActual } from '../redeux/actions';

const LoginComponent = () => {
  const reduce1 = useSelector(state => state.reduceUser1);
  const reduceActual = useSelector(state => state.userActual);
  const {username,password,isLoggedIn} = reduceActual; 
  const { name, password2 } = reduce1;
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Aquí se puede hacer un fetch
    console.log(name,reduce1.password2);
    console.log(username,password);
    if (username === name && password === reduce1.password2) {
      dispatch(toggleLogin())
    } else {
      console.error("NO válido");
      console.log(username, " ", password);
    }
  };

  return (
    <div className='login-container'>
      <input
        className='name-login'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => dispatch(setUsernameActual(e.target.value))}
      />
      <input
        className='password-login'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => dispatch(setPasswordActual(e.target.value))}
      />
      <button className='button-login' onClick={handleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default LoginComponent;
