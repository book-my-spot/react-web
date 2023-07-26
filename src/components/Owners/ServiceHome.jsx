import React from 'react'
import Services from './Services'
import "./Services.css"

function ServiceHome() {
  return (
    <div id='mainServiceContainer'>
        <h2 className='serviceHomeheading' id='serviceHomeheading'>Home</h2>
       <Services/>
    </div>
  )
}



export default ServiceHome