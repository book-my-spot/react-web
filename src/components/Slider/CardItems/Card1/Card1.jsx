import React from 'react';
import PropTypes from 'prop-types';
import './Card1.css';

function Card1({card1data}) {
  const originalTitle = card1data.title;
  const greetingEmoji = '👋';
  const titleParts = originalTitle.split(greetingEmoji);

  return (
    <>
      <div className='card-Container' id='card1Container'>
        <div className='card-Img-Container' id='card1ImgContainer'>
          <div className='card-content-Container' id='card1contentContainer'>
            <h2>
              {titleParts[0]}
              {greetingEmoji}
            </h2>
            <h1>{titleParts[1]}</h1>
            <p>{card1data.subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
}

Card1.propTypes = {
  card1data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card1;
