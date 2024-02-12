import React from 'react';
import { useSelector } from 'react-redux';
import LoginComponent from './components/login';
import MenuUser from './components/menuUser';


const App = () => {
  const datos = useSelector(state => state.userActual);
  const {isLoggedIn} = datos;
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



export default App;
