import React from 'react';
import PropTypes from 'prop-types';
import './Card3.css';
import { NavLink } from 'react-router-dom';
import backgroundImg3 from './../../../Images/calander.svg';

function Card3(props) {
  const { card3data } = props;

  return (
    <div className='card-Container' id='card3Container'>
      <div className='card-Img-Container' id='card3ImgContainer'>
        <img src={backgroundImg3} alt='bookingImg' srcSet='' />
      </div>
      <div className='card-Content-container' id='card3Contentcontainer'>
        <h2>{card3data.title}</h2>
        <NavLink to={'/home'}>
          <button>Next</button>
        </NavLink>
      </div>
    </div>
  );
}

Card3.propTypes = {
  card3data: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card3;
