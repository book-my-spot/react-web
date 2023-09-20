import React from 'react'
import { useBookingContext } from './BookingContextProvider'
import { useLocation, useParams } from 'react-router-dom';

function Booking_Submit() {

  const location = useLocation();
  const { selectedTimeslot } = useBookingContext();
  const queryParams = new URLSearchParams(location.search);
  const providerId = queryParams.get("provider_id");
  const serviceName = queryParams.get("service_name");
  const service_owner_id = useParams().id;
  let slot_indexes = selectedTimeslot.map((slot)=>{
    return  slot.slot_index
  })
  // let duration = selectedTimeslot.map((slot=>{
  //     duration
  // }))


  function handleBooking() {
    const date = new Date();
    let bookingData = {
      service_provider_id: providerId,
      service_owner_id: service_owner_id,
      user_id: "1",
      service_date_time: date,
      created_date_time: date,
      updated_date_time: date,
      slot_indexes: slot_indexes,
      booking_status: "Pending",
      services: [
        {
          id: "HAIRCUT",
          name: "Hair Cut",
          duration: "30"
        }
      ]
    }
    console.log(bookingData);
    console.log(date);
    console.log(providerId);
    console.log(serviceName);
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