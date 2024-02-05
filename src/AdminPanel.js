// components/AdminPanel.js
import React, { useState } from 'react';
import useUserStore from './Store/UserStore';
import './AdminPanel.css';

function AdminPanel() {
    const currentUser = useUserStore(state => state.currentUser);
    const updateUser = useUserStore(state => state.updateUser);
    const [username, setUsername] = useState(currentUser?.username || '');
    const [password, setPassword] = useState(currentUser?.password || '');
    const [anotherField, setAnotherField] = useState(currentUser?.anotherField || '');
    const logout = useUserStore(state => state.logout);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para actualizar el usuario...
        updateUser(currentUser.username, { username, password, anotherField });

        // "Cerrar sesión" después de la actualización
        logout();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder="Another Field" value={anotherField} onChange={(e) => setAnotherField(e.target.value)} />
            <button type="submit">Update</button>
        </form>
    );
}

export default AdminPanel;
