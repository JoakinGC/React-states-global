import React,{useState} from 'react';
import './App.css'
import Hijo from './hijo';
import {UserProvider} from './userProvider';

export const userContext = React.createContext();

function App() {
  
 

  return (
    <UserProvider>
      <div className='App'>
        <Hijo/>
      </div>
      <Store>
        
      </Store>
    </UserProvider>
  )
}

export default App
