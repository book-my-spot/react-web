/* eslint-disable */
import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';  

const ServiceContext = createContext();

export function useServiceContext() {
  return useContext(ServiceContext);
}

function ServiceContextProvider({ children }) {
  const [servicesContext, setservicesContext] = useState(null);
  const [selectedProvider,setselectedProvider] = useState(null);
  return (
    <ServiceContext.Provider value={{ servicesContext, setservicesContext,selectedProvider,setselectedProvider}}>
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
