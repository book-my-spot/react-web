import React from 'react';
import PropTypes from 'prop-types';
import "./Services.css";
import { useServiceContext } from './ServiceContextProvider';
import serviceImg from "../Images/placeholder_services.svg";
import haircutImg from "../Images/haircut.svg";

const rawImgnames = [serviceImg, haircutImg];

function ServiceCard({ serviceProperties }) {
  const { selectedServiceId, setservicesContext ,setSelectedServiceId} = useServiceContext();
  
  const serviceName = serviceProperties.name;
  const serviceId = serviceProperties.id;
  const bgImg = rawImgnames.find((image) => image.split('/')[3].split('.')[0] + ".svg" === serviceProperties.image_name);

  function handleProviders() {
    setservicesContext(serviceId);
    setSelectedServiceId(serviceId);
  } 
  
  return (
    <div
      className={`serviceCardContainer ${selectedServiceId === serviceId ? 'selected' : ''}`}
      id='serviceCardContainer'
      onClick={handleProviders}
    >
      <div className="serviceCardimgContainer" id='serviceCardimgContainer'>
        <img src={bgImg} alt="servicesimg" />
      </div>
      <span>{serviceName}</span>
    </div>
  );
}

ServiceCard.propTypes = {
  serviceProperties: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image_name: PropTypes.string.isRequired
  }).isRequired
};

export default ServiceCard;
