import React from 'react';
import PropTypes from 'prop-types';
import { useServiceContext } from './ServiceContextProvider';
import maleServiceProvider from "../Images/maleServiceprovider.png";
import femaleServiceProvider from "../Images/femaleServiceproviders.jpg";


function Providerscard({ providersProperties }) {

  const {setselectedProvider,setselectedProviderId,selectedProvider} = useServiceContext();
  const providerName = providersProperties.name;
  const image = providersProperties.image;
  const gender = providersProperties.gender;
  const providerID = providersProperties.id;
  function handleprovidervalue(){
    setselectedProviderId(providerID); 
    setselectedProvider(providerName);
  }
  return (
    <>
      <div className={`providersCardContainer ${selectedProvider==providerName ? 'selected':''}`} id='providersCardContainer' onClick={handleprovidervalue}>
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


Providerscard.propTypes = {
  providersProperties: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    gender: PropTypes.string.isRequired
  }).isRequired,
};


export default Providerscard