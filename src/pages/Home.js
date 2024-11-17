import React from 'react';
import './Home.css';
import two from '../assets/images/two.png'; // Image path for the hero section
import money from '../assets/images/money.webp'
import movers from '../assets/images/movers.webp'
import time from '../assets/images/time.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faFile, faMoneyBill, faComment } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Start your exciting journey with us</h1>
          <p>A team of moving professionals dedicated to providing you with the best moving services</p>
          <button className="cta-button">Discover More</button>
        </div>
        <div className="hero-image">
          <img src={two} alt="Moving Illustration" />
        </div>
      </header>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <FontAwesomeIcon icon={faFile} />
            <h3>Enter Your Details</h3>
            <p>Specify when, where, and what you need help with.</p>
          </div>
          <div className="step">
            <FontAwesomeIcon icon={faMoneyBill} />
            <h3>Get Your Price</h3>
            <p>Select one or two Movers and receive an instant quote.</p>
          </div>
          <div className="step">
            <FontAwesomeIcon icon={faCalendar} />
            <h3>Book Your Move</h3>
            <p>Schedule your move in minutes.</p>
          </div>
          <div className="step">
            <FontAwesomeIcon icon={faComment} />
            <h3>Track and Communicate</h3>
            <p>Contact your Mover in real-time.</p>
          </div>
        </div>
      </section>

      {/* Inventory Categories Section */}
      <section className="inventory-categories">
        <h2>Inventory Categories</h2>
        <div className="categories-container">
          <div className="category">
            <img src="path-to-bedsitter-icon.png" alt="Bedsitter" />
            <p>Bedsitter</p>
          </div>
          <div className="category">
            <img src="path-to-one-bedroom-icon.png" alt="One Bedroom" />
            <p>One Bedroom</p>
          </div>
          <div className="category">
            <img src="path-to-studio-icon.png" alt="Studio" />
            <p>Studio</p>
          </div>
          <div className="category">
            <img src="path-to-two-bedroom-icon.png" alt="Two Bedroom" />
            <p>Two Bedroom</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Cards */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="cards-container">
          <div className="card">
            <img src={money} alt="Instant Quotes" />
            <div className="card-content">
              <h3>Instant Quotes</h3>
            </div>
          </div>
          <div className="card">
            <img src={time} alt="Real-Time Tracking" />
            <div className="card-content">
              <h3>Real-Time Tracking</h3>
            </div>
          </div>
          <div className="card">
            <img src={movers} alt="Trusted Movers" />
            <div className="card-content">
              <h3>Trusted Movers</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <footer className="cta-footer">
        <button className="book-now-button">Book Now</button>
      </footer>
    </div>
  );
};

export default Home;
