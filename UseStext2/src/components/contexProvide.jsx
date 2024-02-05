import React, { createContext, useState } from 'react';

const AuthContext = createContext();



const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Lógica de autenticación aquí (ejemplo simple)
    if (username === 'usuario' && password === 'contraseña') {
      setUser({ username });
    } else {
      setUser(null);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
