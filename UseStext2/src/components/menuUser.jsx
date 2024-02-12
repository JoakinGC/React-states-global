import React,{useContext,useState} from 'react';
import { AuthContext } from './contexProvide';


const MenuUsuario = () => {
  const { user,logout,chageUsernamePassword } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogout = () => {
    logout();
  };

  const changePassAndUser = () =>{
    chageUsernamePassword(username,password);
  };

  return (
    <div>
      <h2>Bienvenido, {user && user.username}!</h2>
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
      <button onClick={changePassAndUser}>Cambiar nombre y contraseña</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MenuUsuario;
