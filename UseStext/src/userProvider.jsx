import React, { createContext, useContext, useState } from "react";

const UserContext = React.createContext();
const UserToggleContext = React.createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function useUserToggleContext() {
  return useContext(UserToggleContext);
}

export function UserProvider(props) {
  const [user, setUser] = useState(null);

  const cambiarLogin = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({
        name: "pepe",
        email: "pepepepon@gmail.com",
      });
    }
  };

  return (
    <UserContext.Provider value={user}>
      <UserToggleContext.Provider value={cambiarLogin}>
        {props.children}
      </UserToggleContext.Provider>
    </UserContext.Provider>
  );
}
