
import React, { useState} from 'react';
import "./BookingTime.css";
import { useBookingContext } from './BookingContextProvider';
import PropTypes from 'prop-types';

function BookingTime() {
  const [selectedTimeslot, setselectedTimeslot] = useState([]);
const { daySlotMapping } = useBookingContext();
console.log(selectedTimeslot);

function addTimeslots(time, duration, slot_index) {
  const existingTimeslot = selectedTimeslot.find(slot => slot.time === time);
  if (existingTimeslot) {
    return;
  }
  setselectedTimeslot([...selectedTimeslot, {
    time: time,
    duration: duration,
    slot_index: slot_index
  }]);
}

  
  
  return (
    <div>
      {daySlotMapping.length > 0 ? (
        <>
          <div id="mainMorningTimecontainer">
            <span>Morning</span>
            <ul>
              {daySlotMapping
                .filter(slot => slot.slot_group === 'Morning')
                .map(slot_info => (
                  <li
                    key={slot_info.time}
                    id={selectedTimeslot.find(slot => slot.time === slot_info.time)? 'selected' : ''}
                    onClick={() =>addTimeslots(slot_info.time,slot_info.duration,slot_info.slot_index)}
                  >
                    {slot_info.time}
                  </li>
                ))
              }
            </ul>
          </div>
          <div id="mainAfternoonTimecontainer">
            <span>Afternoon</span>
            <ul>
              {daySlotMapping
                .filter(slot => slot.slot_group === 'Afternoon')
                .map(slot_info => (
                
                  <li
                    key={slot_info.time}
                    id={selectedTimeslot.find(slot => slot.time === slot_info.time)? 'selected' : ''}
                    onClick={() =>addTimeslots(slot_info.time,slot_info.duration,slot_info.slot_index)}
                  >
                    {slot_info.time}
                  </li>
                ))
              }
            </ul>
          </div>
          <div id="mainEveningTimecontainer">
            <span>Evening</span>
            <ul>
              {daySlotMapping
                .filter(slot => slot.slot_group === 'Evening')
                .map(slot_info => (
                  <li
                    key={slot_info.time}
                    id={selectedTimeslot.find(slot => slot.time === slot_info.time)? 'selected' : ''}
                    onClick={() =>addTimeslots(slot_info.time,slot_info.duration,slot_info.slot_index)}
                  >
                    {slot_info.time}
                  </li>
                ))
              }
            </ul>
          </div>
          <button onClick={()=>setselectedTimeslot([])}  id='btnTimeslotsClear'>Clear Slots</button>
        </>
      ) : (
        <p>No slots</p>
      )}
    </div>
  );
}

BookingTime.propTypes = {
  providerProperties: PropTypes.shape({
    id: PropTypes.string.isRequired,
    slots: PropTypes.arrayOf(PropTypes.shape({
      slot_group: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default BookingTime;
