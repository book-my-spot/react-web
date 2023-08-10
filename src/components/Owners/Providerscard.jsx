import React from 'react';
import PropTypes from 'prop-types'; 
import maleServiceProvider from "../Images/maleServiceprovider.png";
import femaleServiceProvider from "../Images/femaleServiceproviders.jpg";


function Providerscard({providersProperties}) {
   
  const providerName = providersProperties.name;
  const image = providersProperties.image;
  const gender = providersProperties.gender;
  

  
  return (
    <>

 <div id='providersCardContainer'>

 <div id='providersCardimgContainer'>
   {image?(
     <img src={image} alt=""  />
   ):(
      gender==='male'?(
           <img src={maleServiceProvider}/>
      ):(
         <img src={femaleServiceProvider}/> 
      )
   )}
   {/* <img src={providersProperties} alt="servicesimg" /> */}

 </div>
 
 <span>{providerName}</span>


</div>
    </>
  )
}


Providerscard.propTypes = {
  providersProperties: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    gender: PropTypes.string.isRequired
  }).isRequired,
};


export default Providerscard