import React from 'react';
import PropTypes from 'prop-types';
import './Card2.css';
import backgroundImg2 from './../../../Images/hair_cut.svg';

function Card2({onNextSlide, card2data}) {

  const handleNext = () => {
    onNextSlide();
  };

  return (
    <>
      <div className='card-Container' id='card2Container'>
        <div className='card-Img-Container' id='card2ImgContainer'>
          <img src={backgroundImg2} alt='haircutimg' srcSet='' />
        </div>
        <div className='card-Content-container' id='card2Contentcontainer'>
          <h2>{card2data.title}</h2>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
}

Card2.propTypes = {
  onNextSlide: PropTypes.func.isRequired,
  card2data: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card2;
