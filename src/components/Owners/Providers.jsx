import React, { useEffect, useState } from 'react'
import Providerscard from './Providerscard'
import { BASE_URL } from '../apiUrls'
import axios from "axios"; 
import { useServiceContext } from './ServiceContextProvider';
import { useParams } from 'react-router-dom';
import "./Providers.css";


function Providers() {

   const id = useParams();
   const [providers,setProviders] = useState(null);
   const {services} = useServiceContext();
   
   console.log(services);

   useEffect(()=>{
     
    async function getserviceProviders(){
        const reponse = await axios.get(`${BASE_URL}/getServiceProvider?service_owner_id=${id.id}`);
        
        setProviders(reponse.data.service_providers.Items);
    }  
      
   getserviceProviders(); 
   },[]);


  return (
    <>
    
    
    <div id='providersTopContainer'>
    <h4>Hair Specialist</h4>
    <span>View All</span>
    </div>
    <div id="providersCardsContainer">
    {providers?(
      providers.map((provider)=>{
        return  <Providerscard  providersProperties={provider} key={provider.id}/>
      })
    ):(
<p>loading</p>
    )
    }

 
    </div>
    </>
  )
}

export default Providers