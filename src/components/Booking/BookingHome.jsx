import React from 'react'
import BookingTime from './BookingTime'
import BookinCalender from "./BookingCalender";
import './BookingHome.css'

function BookingHome() {
  return (
    <div>
    <h1 id='mainBookingHometxt'>Booking</h1>  
    <h3 id='AppointmentMaintxt'>Appointment</h3>
     <BookinCalender/>
    <BookingTime/>
    </div>
  )
}

export default BookingHome