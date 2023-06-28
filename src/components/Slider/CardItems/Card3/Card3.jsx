import React from 'react'
import "./Card3.css"
import {NavLink} from "react-router-dom";
import bacKgroundImg3 from "./../../../Images/calander.svg"; 
function Card3(props) {
  let cardData = props.card3data;
  return (
    <div className="card-Container" id='card3Container'>
      <div className="card-Img-Container" id='card3ImgContainer' >
      <img src={bacKgroundImg3} alt="bookingImg" srcSet="" />
      </div>
      <div className="card-Content-container" id='card3Contentcontainer'>
     <h2>{cardData.title}</h2>
     <NavLink to={"/home"}> <button>Next</button></NavLink>
      </div>
      </div>  
  )
}
export default Card3