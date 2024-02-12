import React, { createContext, useState } from 'react';

const AuthContext = createContext();



const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [user1,setUser1] = useState(
    {
      name:"Pepe",
      password:"pepona"
    }
  );
  const [user2,setUser2] = useState(
    {
      name:"Joa",
      password:"pepona2"
    }
  );
  const [user3,setUser3] = useState(
    {
      name:"Rancio",
      password:"pepona3"
    }
  );


  const chageUsernamePassword = (newUsarname,newPassword) =>{
    //Esto no es dinamico por lo que para mejorar agregaria base ded atos para llamar y usar componetnes que controlen estos estados


    if (user.username===user1.name && user.password === user1.password) {
      setUser1({name:newUsarname,password:newPassword});
    } else if(user.username===user2.name && user.password === user2.password){
      setUser2({name:newUsarname,password:newPassword});
    }else if(user.username===user3.name && user.password === user3.password){
      setUser3({name:newUsarname,password:newPassword});
    }else{
      return setUser(null);
    }
  }

  //En realidad deberia genera una funcion que haga un llamado als ervidor para comprobar las credenciales

  const login = (username, password) => {
    
    if (username===user1.name && password === user1.password) {
      setUser({ username,password });
    } else if(username===user2.name && password === user2.password){
      setUser({username,password});
    }else if(username===user3.name && password === user3.password){
      setUser({username,password});
    }else{
      return setUser(null);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout,chageUsernamePassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
