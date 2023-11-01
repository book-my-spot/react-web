import React, { useState } from 'react'
import BookingTime from './BookingTime'
import BookinCalender from "./BookingCalender";
import { useLocation } from 'react-router-dom';
import './BookingHome.css'
import { useEffect } from 'react';

import Bookingprovider from './Bookingprovider';
import { BASE_URL } from '../apiUrls';
import axios from "axios";
import { useParams } from 'react-router-dom';
import BookingContextProvider from './BookingContextProvider';
import BookingSubmit from './BookingSubmit';


function BookingHome() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const providerparams = searchParams.get('provider');
  const serviceName = searchParams.get("service_name");
  const [duration, setDuration] = useState(null);
  const [providerdata, setProviderdata] = useState(null);
  const id = useParams();

  function handleduration(data) {
    // console.log(data);
    data.map((item) => {
      if (item.name === providerparams) {
        setDuration(item.duration);
      }
    })
  }
  useEffect(() => {
    async function getServiceProviders() {
      const response = await axios.get(`${BASE_URL}/getServiceProvider?service_owner_id=${id.id}`);
      handleduration(response.data.service_providers.Items);
      return response.data.service_providers.Items;
    }

    getServiceProviders().then((data) => {
      let providerdetails = data.find((provider) => provider.name == providerparams);
      setProviderdata(providerdetails);
    });
  }, [])




  return (
    <div>
      <h1 id='mainBookingHometxt'>Booking</h1>
      <h3 id='AppointmentMaintxt'>Appointment</h3>
      {providerdata ? (
        <>
          <BookingContextProvider>
            <BookinCalender providerProperties={providerdata} />
            <span id='SelectedServiceBooking'>{serviceName}</span>
            <BookingTime providerProperties={providerdata} />
            <Bookingprovider providerProperties={providerdata} />
            <BookingSubmit  duration={duration}/>
          </BookingContextProvider>
        </>
      ) : (
        <p>loading</p>
      )}

    </div>
  )
}

export default BookingHome