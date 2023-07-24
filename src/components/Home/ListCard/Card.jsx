import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import ALT_IMAGE from "../../Images/barber_shop_placeholder.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

function Card({ properties }) {
  let shopName = properties.name;
  let shopAddress = properties.address;
  let image = properties.image_url;
  // let shopDistance = properties.distance;
  // let shopRatings = properties.ratings;
  console.log(properties);
  return (
    <>
      <div className='main-Card-Container' id='HomcardContainer'>
        <div className='Home-Backimg-Container' id='HomeBackimgContainer'>
          {image != undefined ? (<img
            src={image}
            alt='salon image'
            srcSet=''
            id='HomeBackCardimg'
            width='100px'
          />) : (
            <img
              src={ALT_IMAGE}
              alt="salon image"
              srcSet=''
              id='HomeBackCardimg'
              width='100px'
            />
          )
          }
        </div>
        <div className='card-Content-Container' id='cardContentContainer'>
          <h2>{shopName}</h2>
          <h4>{shopAddress}</h4>
          <div className='number-Results-Container' id='numberResultsContainer'>
            <div className='distance-Container' id='distanceContainer'>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: '#fff70f' }}
                id='locationicon'
              />{' '}
              <span>2 km</span>
            </div>
            <div className='ratings-Container' id='ratingsContainer'>
              <FontAwesomeIcon icon={faStarHalf} style={{ color: '#fff70f' }} id='staricon' />
              <span>4.3</span>
            </div>
          </div>
          <FontAwesomeIcon icon={faBookmark} style={{ color: '#fff70f' }} id='bookmarkicon' />
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  properties: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    image_url: PropTypes.string
    // distance: PropTypes.number.isRequired,
    // ratings: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
