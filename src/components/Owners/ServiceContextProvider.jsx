/* eslint-disable */
import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ServiceContext = createContext();

export function useServiceContext() {
  return useContext(ServiceContext);
}

function ServiceContextProvider({ children }) {
  const [servicesContext, setServicesContext] = useState(null);
  const [selectedProvider, setselectedProvider] = useState(null);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [selectedProviderId, setselectedProviderId] = useState(null);
 
  return (
    <ServiceContext.Provider value={{ servicesContext, setServicesContext, selectedProvider, setselectedProvider, selectedServiceId, setSelectedServiceId,selectedProviderId,setselectedProviderId }}>
      {children}
    </ServiceContext.Provider>
  );
}

ServiceContextProvider.propTypes = {
  children: PropTypes.node, 
};
export default ServiceContextProvider;
