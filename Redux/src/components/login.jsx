

import React from 'react';
import { connect } from 'react-redux';
import { toggleLogin } from '../redeux/actions';
import "../styles/login.css";

const LoginComponent = ({ loginToggle, toggleLogin, setUser, user }) => {
  const handleLoginToggle = () => {
    toggleLogin();
    if (!user) {
      
      setUser({
        name: "pepe",
        email: "pepepepon@gmail.com",
      });
    }
  };

  return (
    <div className='login-container'>
      {user ? (
        <div>
          <h2>Bienvenido, {user.name}!</h2>
          <button onClick={handleLoginToggle}>Logout</button>
        </div>
      ) : (
        <button className='button-login' onClick={handleLoginToggle}>
          {loginToggle ? 'Cancelar' : 'Login'}
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loginToggle: state.loginToggle,
  user: state.user,
});

const mapDispatchToProps = {
  toggleLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);