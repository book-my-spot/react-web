import React from 'react'
import { useBookingContext } from './BookingContextProvider'

function Booking_Submit() {
  
  const {selectedTimeslot} = useBookingContext(); 
//   console.log(selectedTimeslot);  
  function handleBooking(){
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