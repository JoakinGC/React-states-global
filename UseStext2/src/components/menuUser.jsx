import React,{useContext} from 'react';
import { AuthContext } from './contexProvide';


const MenuUsuario = () => {
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    cambiarLogin();
  };

  return (
    <div>
      <h2>Bienvenido, {user && user.username}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MenuUsuario;
