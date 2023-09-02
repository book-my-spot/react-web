import React, { useState } from 'react';
import "./BookingTime.css";
import PropTypes from 'prop-types';

function BookingTime({ providerProperties }) {
  const bookingSlots = providerProperties.slots;
  const MorningSlots = [];
  const AfternoonSlots = [];
  const EveningSlots = [];
  const [selectedTimeslot,setselectedTimeslot] = useState(null);
  
  bookingSlots.forEach(slot => {
    if (slot.slot_group === 'Morning') {
      MorningSlots.push(slot.time);
    } else if (slot.slot_group === 'Afternoon') {
      AfternoonSlots.push(slot.time);
    } else if (slot.slot_group === 'Evening') {
      EveningSlots.push(slot.time);
    }
  });
  return (
    <div>
      <div id="mainMorningTimecontainer">
          {MorningSlots.length !== 0 && (
            <>
              <span>Morning</span>
              <ul>
                {MorningSlots.map((time, index) => (
                  <li key={index} id={selectedTimeslot==time?'selected':''}  onClick={()=>setselectedTimeslot(time)}>{time}</li>
                ))}
              </ul>
            </>
          )
          }
      </div>
      <div id="mainAfternoonTimecontainer">
          {AfternoonSlots.length !== 0 && (
            <>
              <span>Afternoon</span>
              <ul>
                {AfternoonSlots.map((time, index) => (
                  <li key={index} id={selectedTimeslot==time?'selected':''}  onClick={()=>setselectedTimeslot(time)}>{time}</li>
                ))}
              </ul>
            </>
          )
          }
      </div>
      <div id="mainEveningTimecontainer">
          {EveningSlots.length !== 0 && (
            <>
              <span>Evening</span>
              <ul>
                {EveningSlots.map((time, index) => (
                  <li key={index} id={selectedTimeslot==time?'selected':''}  onClick={()=>setselectedTimeslot(time)}>{time}</li>
                ))}
              </ul>
            </>
          )
          }
      </div>
    </div>
  )
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
