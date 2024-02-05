import React,{useContext} from "react";
import { userContext } from "./App";
import { useUserContext,useUserToggleContext } from "./userProvider";


export default function Hijo(){

    const user = useUserContext();
    const cambiarLogin = useUserToggleContext();

    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      login(username, password);
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };