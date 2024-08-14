import React, { useState } from 'react';
import './Login.css';

function Login() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'usuario' && password === 'contraseña') {
    setMessage('Inicio de sesión exitoso');
    } else {
    setMessage('Credenciales incorrectas');
    }
};

return (
    <div className="login-container">
    <h2>Inicio de Sesión</h2>
    <form onSubmit={handleSubmit}>
        <div>
        <label>Usuario:</label>
        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        <div>
        <label>Contraseña:</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button type="submit">Aceptar</button>
    </form>
    {message && <p>{message}</p>}
    </div>
);
}

export default Login;
