import React from 'react'
import { useBookingContext } from './BookingContextProvider'
import { useLocation } from 'react-router-dom';

function Booking_Submit() {
  
  const location = useLocation();
  const {selectedTimeslot} = useBookingContext(); 
  const queryParams = new URLSearchParams(location.search);
  const providerId = queryParams.get("provider_id");

  function handleBooking(){
    console.log(providerId);
     console.log(selectedTimeslot);
  }
  return (
    <>
            <div id="bookingBtnContainer">
            <button id='bookingControllerBtn' onClick={handleBooking}>Continue</button>
            </div>
    </>
  )
}

export default Booking_Submit