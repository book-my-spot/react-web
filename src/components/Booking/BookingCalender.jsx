import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addWeeks } from 'date-fns';
import './BookingCalendar.css'; 

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date();
  const maxSelectableDate = addWeeks(today, 1.5);
  
  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };

  const isDateSelectable = (date) => {
    return date <= maxSelectableDate;
  };

  return (
    <div className="booking-calendar-container">
      
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        filterDate={isDateSelectable}
        minDate={today}
        maxDate={maxSelectableDate}
        inline
        id='MaindatePicker'
      />
    </div>
  );
};

export default BookingCalendar;
