/* eslint-disable */

import React, { createContext, useContext, useEffect, useState } from 'react';
import { format } from 'date-fns';

const BookingContext = createContext();

export function useBookingContext() {
  return useContext(BookingContext);
}

function BookingContextProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(findTodayDate());
  const [weekDaysDetails, setWeekDaysDetails] = useState(null);
  const [daySlotMapping, setDaySlotMapping] = useState([]);
  const [selectedTimeslot,setselectedTimeslot] = useState([]);
 
  useEffect(() => {
    if (weekDaysDetails && selectedDate) {
     
      const mappedSlots = weekDaysDetails
        .filter(element => element.days_of_week.includes(format(selectedDate, 'EEEE').toUpperCase().substring(0, 3)))
        .map(element => ({
          slot_group: element.slot_group,
          time: element.time,
          duration:element.duration,
          slot_index:element.slot_index
        }));
      setDaySlotMapping(mappedSlots);
    }
  }, [selectedDate, weekDaysDetails]);
   
  function findTodayDate(){
    let date = new Date();
    return date;
  }


  return (
    <BookingContext.Provider value={{ selectedDate, setSelectedDate, setWeekDaysDetails, daySlotMapping,setselectedTimeslot,selectedTimeslot}}>
      {children}
    </BookingContext.Provider>
  )
}

export default BookingContextProvider;
