import React from 'react'
import "./BookingTime.css"

function BookingTime() {
  return (
    <div>
      <div id="mainMorningTimecontainer">
        <span>Morning</span>
        <ul>
          <li>7:00 am</li>
          <li>8:00 am</li>
          <li>9:00 am</li>
        </ul>
      </div>
      <div id="mainAfternoonTimecontainer">
        <span>Afternoon</span>
        <ul>
          <li>10:00 am</li>
          <li>11:00 am</li>
          <li>12:00 pm</li>
          <li>13:00 pm</li>
          <li>14:00 pm</li>
          <li>15:00 pm</li>
        </ul>
      </div>
    </div>
  )
}

export default BookingTime