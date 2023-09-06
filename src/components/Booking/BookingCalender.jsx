import React, { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import { addWeeks} from 'date-fns';
import './BookingCalendar.css';
import { useBookingContext } from './BookingContextProvider';

const BookingCalendar = ({ providerProperties }) => {
  const { selectedDate, setSelectedDate, setWeekDaysDetails } = useBookingContext();
  const today = new Date();
  const maxSelectableDate = addWeeks(today, 2);
  const providerSlots = providerProperties.slots;

  useEffect(() => {
    let WeekdaysDetails = [];
    let days_of_week = [];

    providerSlots.forEach(day => {
      if (day.days_of_week === 'All') {
        WeekdaysDetails.push({
          slot_group: day.slot_group,
          days_of_week: ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'],
          time: day.time
        });
      } else if (day.days_of_week === 'NONE') {
        console.log(day.time);
        WeekdaysDetails.push({
          slot_group: day.slot_group,
          days_of_week: [],
          time: day.time,
        });
      } else {
        days_of_week = day.days_of_week;
        WeekdaysDetails.push({
          slot_group: day.slot_group,
          days_of_week: days_of_week.split(','),
          time: day.time,
        });
      }
    });

    setWeekDaysDetails(WeekdaysDetails);
  }, [providerSlots, setWeekDaysDetails]);

  const handleDateChange = (date) => {
   
    // console.log(selectedDay);
    // console.log(selectedDay.substring(0,3));
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

BookingCalendar.propTypes = {
  providerProperties: PropTypes.shape({
    id: PropTypes.string.isRequired,
    slots: PropTypes.arrayOf(PropTypes.shape({
      slot_group: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      days_of_week: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default BookingCalendar;
