/* eslint-disable */

import React, { createContext, useContext, useEffect, useState } from 'react';
import { format } from 'date-fns';

const BookingContext = createContext();

export function useBookingContext() {
  return useContext(BookingContext);
}

function BookingContextProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [weekDaysDetails, setWeekDaysDetails] = useState(null);

  const [daySlotMapping, setDaySlotMapping] = useState([]);

  useEffect(() => {
    if (weekDaysDetails && selectedDate) {
      const mappedSlots = weekDaysDetails
        .filter(element => element.days_of_week.includes(format(selectedDate, 'EEEE').toUpperCase().substring(0, 3)))
        .map(element => ({
          slot_group: element.slot_group,
          time: element.time,
        }));
        
      setDaySlotMapping(mappedSlots);
    }
  }, [selectedDate, weekDaysDetails]);

  return (
    <BookingContext.Provider value={{ selectedDate, setSelectedDate, setWeekDaysDetails, daySlotMapping }}>
      {children}
    </BookingContext.Provider>
  )
}

export default BookingContextProvider;
