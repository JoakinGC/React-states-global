// App.js
import React from 'react';
import Login from './Login';
import AdminPanel from './AdminPanel';
import useUserStore from './Store/UserStore';

function App() {
  const currentUser = useUserStore(state => state.currentUser);

  return (
      <div className="App">
        {!currentUser ? (
            <Login onLoginSuccess={() => console.log('Login successful!')} />
        ) : (
            <AdminPanel />
        )}
      </div>
  );
}

export default App;
