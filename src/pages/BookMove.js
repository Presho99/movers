import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext'; // Import BookingContext
import ReusableButton from '../components/Button';
import Payment from './Payment'; // Import the Payment component
import one from '../assets/images/one.webp';
import { ToastContainer, toast } from 'react-toastify'; // Import Toast components
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles
import './BookMove.css';

function BookMove() {
  const { setBookingDetails } = useContext(BookingContext);

  // State variables
  const [currentLocation, setCurrentLocation] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [locations] = useState([
    'Nairobi',
    'Mombasa',
    'Kisumu',
    'Eldoret',
    'Nakuru',
    'Malindi',
    'Kisii',
    'Thika',
    'Meru',
    'Naivasha',
  ]);
  const [selectedInventory, setSelectedInventory] = useState([]);
  const [quote, setQuote] = useState(null);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [movers, setMovers] = useState([]);
  const [selectedMover, setSelectedMover] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const inventoryOptions = ['Bedsitter', 'One Bedroom', 'Studio', 'Two Bedroom'];

  const handleInventorySelect = (item) => {
    setSelectedInventory((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const calculateQuote = () => {
    const basePrice = 50;
    const totalPrice = selectedInventory.length * basePrice;
    setQuote(totalPrice);
    setShowModal(true);
  };

  const fetchMovers = () => {
    const availableMovers = [
      { name: 'Mover 1', price: 100 },
      { name: 'Mover 2', price: 150 },
      { name: 'Mover 3', price: 120 },
    ];
    setMovers(availableMovers);
  };

  const handleBooking = () => {
    const bookingData = {
      currentLocation,
      newLocation,
      selectedInventory,
      date: bookingDate,
      time: bookingTime,
      price: quote,
      mover: selectedMover ? selectedMover.name : 'No mover selected',
    };

    setBookingDetails(bookingData);
    toast.success('Move booked successfully!');
  };

  const handleNextStep = () => {
    let stepValid = false;

    // Validate each step
    switch (currentStep) {
      case 1: // Step 1: Location Selection
        stepValid = currentLocation && newLocation;
        break;
      case 2: // Step 2: Inventory Selection
        stepValid = selectedInventory.length > 0;
        break;
      case 3: // Step 3: Date and Time
        stepValid = bookingDate && bookingTime;
        break;
      case 4: // Step 4: Mover Selection
        stepValid = selectedMover !== null;
        break;
      case 5: // Step 5: Quote Calculation
        stepValid = quote !== null;
        break;
      default:
        stepValid = true;
    }

    if (stepValid) {
      setCurrentStep(currentStep + 1);
      setProgress((currentStep / 5) * 100);
    } else {
      toast.error('Please complete all required fields before proceeding.');
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setProgress(((currentStep - 2) / 5) * 100);
    }
  };

  return (
    <div className="book-move">
      <div className="book-move-card">
        {/* Left Side: Image */}
        <div className="card-image">
          <img
            src={one}
            alt="Moving Illustration"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Right Side: Form Content */}
        <div className="card-form-box">
          <div className="card-form">
            {/* Progress Bar */}
            <div className="progress-bar" style={{ marginBottom: '20px' }}>
              <div
                className="progress"
                style={{
                  width: `${progress}%`,
                  height: '5px',
                  backgroundColor: '#f56626',
                  transition: 'width 0.3s ease-in-out',
                }}
              />
            </div>

            {/* Step Navigation */}
            {currentStep === 1 && (
              <div className="step">
                <h4>Step 1: Select Your Locations</h4>
                <div className="location-details">
                  <h5>Current Location</h5>
                  <select
                    value={currentLocation}
                    onChange={(e) => setCurrentLocation(e.target.value)}
                    className="loc"
                  >
                    <option value="">Select Current Location</option>
                    {locations.map((location, index) => (
                      <option key={index} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>

                  <h5>New Location</h5>
                  <select
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="loc"
                  >
                    <option value="">Select New Location</option>
                    {locations.map((location, index) => (
                      <option key={index} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Other steps remain the same */}

            {/* Step Navigation Buttons */}
            <div className="step-navigation">
              {currentStep > 1 && (
                <ReusableButton onClick={handlePrevStep}>Back</ReusableButton>
              )}
              {currentStep < 6 && (
                <ReusableButton onClick={handleNextStep}>Next</ReusableButton>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default BookMove;
