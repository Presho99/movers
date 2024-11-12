// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  const { isAuthenticated, userDetails } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">YourLogo</Link>
      </div>
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/book-move">Book Move</Link></li>
        <li><Link to="/my-bookings">My Bookings</Link></li>
      </ul>
      {isAuthenticated && (
        <div className="profile-icon">
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} />
            <span className="welcome-message">Welcome, {userDetails?.name}</span>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
