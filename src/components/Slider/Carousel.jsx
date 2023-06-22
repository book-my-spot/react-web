import React, { useRef } from 'react';
import './Carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card1 from './CardItems/Card1/Card1';
import Card2 from './CardItems/Card2/Card2';
import Card3 from './CardItems/Card3/Card3';

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

  return (
    <div className="main-Container">
    <div className="carousel-Container">
      <Slider {...settings} className="slider-Container" ref={sliderRef}>
        <Card1 />
        <Card2 onNextSlide={handleNextSlide} />
        <Card3 />
      </Slider>
    </div>
    </div>
  );
};
export default Carousel;