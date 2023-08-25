import React from 'react';
import Services from './Services';
import "./Services.css";
import Providers from './Providers';
import  ServiceContextProvider from './ServiceContextProvider';

function ServiceHome() {
  return (
    <div id='mainServiceContainer'>
        <h2 className='serviceHomeheading' id='serviceHomeheading'>Home</h2>
        <ServiceContextProvider>
          <>
          <Services/>
       <Providers />
          </>
        </ServiceContextProvider>
        <div id="serviceMainbuttoncontainer">
        <button>Continue</button>          
        </div>
    </div>
  )
}



export default ServiceHome