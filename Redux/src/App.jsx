import React from 'react';
import { connect } from 'react-redux';
import LoginComponent from './components/login';
import MenuUser from './components/menuUser';
import { toggleLogin,setUser } from './redeux/actions';

const App = ({ user, loginToggle, toggleLogin, setUser }) => {
  return (
    <div>
      {user ? (
        <MenuUser />
      ) : (
        <LoginComponent
          loginToggle={loginToggle}
          toggleLogin={toggleLogin}
          setUser={setUser}
          user={user}
        />
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
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);