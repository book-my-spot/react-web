import React, { useRef } from 'react';
import './Carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card1 from './CardItems/Card1/Card1';
import Card2 from './CardItems/Card2/Card2';
import Card3 from './CardItems/Card3/Card3';
import axios from 'axios';
import {CAROUSEL_AND_FILTER_DATA_BASE_URL} from "../apiUrls";
import { useState, useEffect } from 'react';

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

  const [carouselData, setCarouselData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        CAROUSEL_AND_FILTER_DATA_BASE_URL
      );
      setCarouselData(response.data.onboarding);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <div className='mainContainer'>
      <section className='carouselContainer'>
        {carouselData !== null ? (
          <Slider {...settings} className='sliderContainer' ref={sliderRef}>
            <Card1 card1data={carouselData[0]} />
            <Card2 onNextSlide={handleNextSlide} card2data={carouselData[1]} />
            <Card3 card3data={carouselData[2]} />
          </Slider>
        ) : (
          <p>Loading data...</p>
        )}
      </section>
    </div>
  );
};
export default Carousel;
