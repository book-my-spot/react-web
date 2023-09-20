
import React, { useState} from 'react';
import "./BookingTime.css";
import { useBookingContext } from './BookingContextProvider';
import PropTypes from 'prop-types';

function BookingTime() {
  const [selectedTimeslot, setselectedTimeslot] = useState([]);
  const { daySlotMapping } = useBookingContext();

  function addTimeslots(time){
    if(selectedTimeslot.includes(time)){
      return;
    }
    setselectedTimeslot([...selectedTimeslot,time]);
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
                .map(time => (
                  <li
                    key={time.time}
                    id={selectedTimeslot.includes(time.time) ? 'selected' : ''}
                    onClick={() =>addTimeslots(time.time)}
                  >
                    {time.time}
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
                .map(time => (
                  <li
                    key={time.time}
                    id={selectedTimeslot.includes(time.time) ? 'selected' : ''}
                    onClick={() =>addTimeslots(time.time)}
                  >
                    {time.time}
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
                .map(time => (
                  <li
                    key={time.time}
                    id={selectedTimeslot.includes(time.time) ? 'selected' : ''}
                    onClick={() =>addTimeslots(time.time)}
                  >
                    {time.time}
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
