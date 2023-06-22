import React from 'react';
import './Card2.css';
import { useState } from 'react';
import bacKgroundImg2 from "./../../../Images/hair_cut.svg"; 
function Card2({ onNextSlide }) {
  const handleNext = () => {
    onNextSlide();
  };
  return (
    <>
      <div className="card-Container" id="card2Container">
        <div className="card-Img-Container" id="card2ImgContainer">
      <img src={bacKgroundImg2} alt="haricutimg" srcset="" />
        </div>
        <div className="card-Content-container" id="card2Contentcontainer">
          <h2>Find Barbers and Salons Easily in Your Hands</h2>
          <button onClick={handleNext} >Next</button>
        </div>
      </div>
    </>
  );
}
export default Card2;