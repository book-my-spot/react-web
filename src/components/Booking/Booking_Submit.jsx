import React from 'react'
import { useBookingContext } from './BookingContextProvider'
import { useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import axios from 'axios';
import { BOOKING_URL } from '../apiUrls';
function Booking_Submit({duration}) {

  const location = useLocation();
  const { selectedTimeslot } = useBookingContext();
  const queryParams = new URLSearchParams(location.search);
  const providerId = queryParams.get("provider_id");
  const serviceName = queryParams.get("service_name");
  const serviceId = queryParams.get("service");
  const service_owner_id = useParams().id;
  let slot_indexes = selectedTimeslot.map((slot)=>{
    return  slot.slot_index
  })
   


  function handleBooking() {
    const date = new Date();
    const options = {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
  
    const formattedDate = date.toLocaleString(undefined, options);
  
    let bookingData = {
      service_provider_id: providerId,
      service_owner_id: service_owner_id,
      user_id: "1",
      service_date_time: formattedDate,
      created_date_time: formattedDate,
      updated_date_time: formattedDate,
      slot_indexes: slot_indexes,
      booking_status: "Pending",
      services: [
        {
          id: serviceId,
          name: serviceName,
          duration: duration,
        }
      ]
    }
    try{
      const data = axios.post(BOOKING_URL,bookingData);
      console.log(data);
    }
    catch(err){
      console.log(err);
    }
   
  }

  return (
    <>
      <div id="bookingBtnContainer">
        <button id='bookingControllerBtn' onClick={handleBooking}>Continue</button>
      </div>
    </>
  )
}

Booking_Submit.propTypes = {
  duration: PropTypes.number.isRequired, 
};


export default Booking_Submit