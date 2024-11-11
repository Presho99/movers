import React, { useState } from 'react';
import Card from '../components/Card';
import './Register.css'; // Import your CSS file
import one from '../assets/images/one.webp'

function Register({ onRegisterSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = () => {
    console.log('Registering:', name, email);
    onRegisterSuccess();
  };

  return (
    <div className="register-container">
      <Card className="register-card">
        <div className="register-content">
          {/* Left Side: Image */}
          <div className="register-image">
            <img
              src={one}
              alt="Registration"
              className="image"
            />
          </div>

          {/* Right Side: Registration Form */}
          <div className="register-form">
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
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Register;
