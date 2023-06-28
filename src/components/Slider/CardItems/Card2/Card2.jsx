import React from 'react';
import './Card2.css';
import bacKgroundImg2 from "./../../../Images/hair_cut.svg"; 
function Card2(props) {
  const { onNextSlide, card2data } = props;
  const handleNext = () => {
    onNextSlide();
  };
  return (
    <>
      <div className="card-Container" id="card2Container">
        <div className="card-Img-Container" id="card2ImgContainer">
      <img src={bacKgroundImg2} alt="haircutimg" srcSet="" />
        </div>
        <div className="card-Content-container" id="card2Contentcontainer">
          <h2>{card2data.title}</h2>
          <button onClick={handleNext} >Next</button>
        </div>
      </div>
    </>
  );
}
export default Card2;