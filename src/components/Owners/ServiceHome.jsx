import React from 'react';
import Services from './Services';
import "./Services.css";
 
import ServiceContextProvider from './ServiceContextProvider';

import Providers from './Providers';
function ServiceHome() {
  
 
  return (
    <div id='mainServiceContainer'>
      <h2 className='serviceHomeheading' id='serviceHomeheading'>Home</h2>
     
        <>
        <ServiceContextProvider>
          <Services />
          <Providers />
        </ServiceContextProvider>
        </>
    </div>
  )
}



export default ServiceHome