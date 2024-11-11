import React, { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';

function MyBooking() {
  const { bookingDetails } = useContext(BookingContext); // Access the booking details from the context

  // Check if there are booking details
  const hasBookings = bookingDetails !== null;

  return (
    <div className="my-booking">
      <h2>My Bookings</h2>
      {hasBookings ? (
        // If there are bookings, display them in a table
        <table>
          <thead>
            <tr>
              <th>Booking Date</th>
              <th>Current Location</th>
              <th>New Location</th>
              <th>Inventory</th>
              <th>Mover</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{bookingDetails.date}</td>
              <td>{bookingDetails.currentLocation}</td>
              <td>{bookingDetails.newLocation}</td>
              <td>{bookingDetails.selectedInventory.join(', ')}</td>
              <td>{bookingDetails.mover}</td>
              <td>${bookingDetails.price}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        // If no booking is found, display the default message
        <p>Bookings will appear here.</p>
      )}
    </div>
  );
}

export default MyBooking;
