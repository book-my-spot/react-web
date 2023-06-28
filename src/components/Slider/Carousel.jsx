import React, { useRef } from 'react';
import './Carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card1 from './CardItems/Card1/Card1';
import Card2 from './CardItems/Card2/Card2';
import Card3 from './CardItems/Card3/Card3';
import axios from 'axios';
import { useState,useEffect } from 'react'

const Carousel = () => {
  const sliderRef = useRef(null);

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };


  const [carouseldata, setCarouseldata] = useState(null);
  const [filterdata, setFilterdata] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://cnhjhmy5w5.execute-api.ap-southeast-2.amazonaws.com/dev/config');
      setCarouseldata(response.data.onboarding);
      setFilterdata(response.data.filters);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
<div className="main-Container">
    <div className="carousel-Container">
      {carouseldata !== null ? 
      (
        <Slider {...settings} className="slider-Container" ref={sliderRef}>
          <Card1 card1data={carouseldata[0]} />
          <Card2 onNextSlide={handleNextSlide}  card2data={carouseldata[1]}/>
          <Card3 card3data = {carouseldata[2]} />
        </Slider>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  </div>
  );
};
export default Carousel;