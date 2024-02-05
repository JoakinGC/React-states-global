import React from 'react';
import { connect } from 'react-redux';
import { setUsername, setPassword, toggleLogin } from '../redeux/actions';
import { store } from '../redeux/store'; 

const valor = store.getState();
const nombre = valor.user1.name;
const password2 = valor.user1.password;

const LoginComponent = ({ toggleLogin, setUsername, setPassword, username, password, isLoggedIn }) => {
  const handleLogin = () => {
    //Aqui se puede hacer un fetch
    if (username === nombre && password === password2) {
      toggleLogin();
    } else {
      console.error("NO valido");
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
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className='password-login'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='button-login' onClick={handleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  username: state.username,
  password: state.password,
  isLoggedIn: state.isLoggedIn,
});

const mapDispatchToProps = {
  setUsername,
  setPassword,
  toggleLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
