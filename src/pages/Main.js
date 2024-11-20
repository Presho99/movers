// src/pages/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/home'); // Redirect to user dashboard
  };

  const handleAdminClick = () => {
    navigate('/admin-login'); // Redirect to admin login
  };

  return (
    <div className="landing-page">
      <h1>Welcome! Choose an Option:</h1>
      <button onClick={handleUserClick}>User</button>
      <button onClick={handleAdminClick}>Admin</button>
    </div>
  );
}

export default Main;
