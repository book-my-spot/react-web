import React from 'react';
import Home from './components/Home/Home';
import Carousel from './components/Slider/Carousel';
import ServiceHome from './components/Owners/ServiceHome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Carousel />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/services' exact element={<ServiceHome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
