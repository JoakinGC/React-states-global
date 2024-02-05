import React from 'react';
import { connect } from 'react-redux';
import LoginComponent from './components/login';
import MenuUser from './components/menuUser';

const App = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <MenuUser />
      ) : (
        <LoginComponent />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(App);
