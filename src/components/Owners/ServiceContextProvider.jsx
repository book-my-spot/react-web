/* eslint-disable */
import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';  

const ServiceContext = createContext();

export function useServiceContext() {
  return useContext(ServiceContext);
}

function ServiceContextProvider({ children }) {
  const [services, setServices] = useState(null);

  const handleservicemapping = (serviceId) => {
    console.log("log from service main", serviceId);
  };

  return (
    <ServiceContext.Provider value={{ services, setServices, handleservicemapping }}>
      {children}
    </ServiceContext.Provider>
  );
}

ServiceContextProvider.propTypes = {
  children: PropTypes.shape({
    children:PropTypes.node
  }), 
};

export default ServiceContextProvider;
