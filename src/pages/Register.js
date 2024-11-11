// src/pages/Register.js
import React, { useState } from 'react';
import Card from '../components/Card'; // Import the Card component

function Register({ onRegisterSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = () => {
    // Add logic for registering the user
    console.log('Registering:', name, email);
    onRegisterSuccess(); // Notify parent of successful registration
  };

  return (
    <Card> {/* Wrap the content inside the Card */}
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </Card>
  );
}

export default Register;
