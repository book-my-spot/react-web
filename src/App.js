import React from 'react';
import Home from './components/Home/Home';
import Carousel from './components/Slider/Carousel';
import ServiceHome from './components/Owners/ServiceHome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingHome from './components/Booking/BookingHome';
import './App.css';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Carousel />} />
          <Route path='home' element={<Home />} />
          <Route path='home/services/:id' element={<ServiceHome />} />
          <Route path='home/booking' element={<BookingHome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
