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
      <div className='cardContainer' id='card2Container'>
        <div className='cardImgContainer' id='card2ImgContainer'>
          <img src={backgroundImg2} alt='haircutimg' srcSet='' />
        </div>
        <div className='cardContentcontainer' id='card2Contentcontainer'>
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
