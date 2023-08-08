import React from 'react'
import Services from './Services'
import "./Services.css"
import Providers from './Providers'

function ServiceHome() {
  return (
    <div id='mainServiceContainer'>
        <h2 className='serviceHomeheading' id='serviceHomeheading'>Home</h2>
       <Services/>
       <Providers />
    </div>
  )
}



export default ServiceHome