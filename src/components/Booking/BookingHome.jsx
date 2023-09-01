import React, { useState } from 'react'
import BookingTime from './BookingTime'
import BookinCalender from "./BookingCalender";
import { useLocation } from 'react-router-dom';
import './BookingHome.css'
import { useEffect } from 'react';
import Bookingprovider from './Bookingprovider';
import { SERVICES_DATA } from '../apiUrls';
import axios from "axios";
import { useParams } from 'react-router-dom';


function BookingHome() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const providerparams = searchParams.get('provider');
  const serviceparams = searchParams.get('service');
  const [servicedata,setServicedata] = useState(null);
  const id = useParams();

  useEffect(() => {
    
    let getservicesdata = async()=>{
      let servicedata = await axios.get(SERVICES_DATA);
      return servicedata.data.service_owners;
    }
    getservicesdata().then((data)=>{
      console.log(data);
      let filterservice = data.find((elem)=>{
        return elem.id==id.id
      });
      let servicename = filterservice.services.find((service)=>service.id==serviceparams);
      setServicedata(servicename.name);
    });

  }, [])
  


  return (
    <div>
    <h1 id='mainBookingHometxt'>Booking</h1>  
    <h3 id='AppointmentMaintxt'>Appointment</h3>
     <BookinCalender/>
     <span id='SelectedServiceBooking'>{servicedata}</span>
    <BookingTime/>
    <Bookingprovider providerproperties={providerparams}/>
    </div>
  )
}

export default BookingHome