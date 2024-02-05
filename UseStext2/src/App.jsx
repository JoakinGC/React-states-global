import React from 'react';
import MenuUsuario from './components/menuUser';
import LoginComponent from './components/login';

import { AuthProvider, AuthContext } from './components/contexProvide'; 

const App = () => {
  const { user } = React.useContext(AuthContext);
  const { login } = React.useContext(AuthContext); 

  return (
    <div>
      {user ? (
        <MenuUsuario />
      ) : (
        <LoginComponent onLoginToggle={login} />
      )}
    </div>
  );
};

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
