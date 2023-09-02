/* eslint-disable */

import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export function useBookingContext() {
  return useContext(BookingContext);
}

function BookingContextProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [weekDaysDetails,setWeekDaysDetails] = useState(null);
  


  console.log(weekDaysDetails);
  return (
    <BookingContext.Provider value={{ selectedDate, setSelectedDate,setWeekDaysDetails}}>
      {children}
    </BookingContext.Provider>
  )
}

export default BookingContextProvider;
