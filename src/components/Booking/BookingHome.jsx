import React from 'react'
import BookingTime from './BookingTime'
import BookinCalender from "./BookingCalender";
import { useLocation } from 'react-router-dom';
import './BookingHome.css'
import Bookingprovider from './Bookingprovider';


function BookingHome() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const provider = searchParams.get('provider');
  const service = searchParams.get('service');

  return (
    <div>
    <h1 id='mainBookingHometxt'>Booking</h1>  
    <h3 id='AppointmentMaintxt'>Appointment</h3>
     <BookinCalender/>
     <span id='SelectedServiceBooking'>{service}</span>
    <BookingTime/>
    <Bookingprovider providerproperties={provider}/>
    </div>
  )
}

export default BookingHome