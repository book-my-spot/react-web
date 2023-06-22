import React from 'react'
import "./Card3.css"
import {NavLink} from "react-router-dom";
import bacKgroundImg3 from "./../../../Images/calander.svg"; 
function Card3() {
  return (
    <div className="card-Container" id='card3Container'>
      <div className="card-Img-Container" id='card3ImgContainer' >
      <img src={bacKgroundImg3} alt="bookingImg" srcset="" />
      </div>
      <div className="card-Content-container" id='card3Contentcontainer'>
     <h2>Book Your Favorite <br /> Barber and Salon <br /> Quickly</h2>
     <NavLink to={"/home"}> <button>Next</button></NavLink>
      </div>
      </div>  
  )
}
export default Card3