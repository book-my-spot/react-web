import React from 'react';
import PropTypes from 'prop-types';
import maleServiceProvider from "../Images/maleServiceprovider.png";
import femaleServiceProvider from "../Images/femaleServiceproviders.jpg";


function Bookingprovider({ providerProperties }) {
  console.log(providerProperties);
  const providerName = providerProperties.name;
  const image = providerProperties.image;
  const gender = providerProperties.gender;
  
  return (
    <>
      <div className="providersCardContainer" id='providersCardContainer'>
        <div id='providersCardimgContainer'>
          {image ? (
            <img src={image} alt="" />
          ) : (
            gender === 'male' ? (
              <img src={maleServiceProvider} />
            ) : (
              <img src={femaleServiceProvider} />
            )
          )}
        </div>
        <span>{providerName}</span>
      </div>
    </>
  )
}


Bookingprovider.propTypes = {
    providerProperties: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    gender: PropTypes.string.isRequired
  }).isRequired,
};


export default Bookingprovider