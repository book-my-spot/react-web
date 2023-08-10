import React, { useEffect, useState } from 'react'
import Providerscard from './Providerscard'
import { BASE_URL } from '../apiUrls'
import axios from "axios";
import { useServiceContext } from './ServiceContextProvider';
import { useParams } from 'react-router-dom';
import "./Providers.css";

function Providers() {
  const id = useParams();
  const [providers, setProviders] = useState(null);
  const { servicesContext } = useServiceContext();

  useEffect(() => {
    async function getServiceProviders() {
      const response = await axios.get(`${BASE_URL}/getServiceProvider?service_owner_id=${id.id}`);
      setProviders(response.data.service_providers.Items);
    }

    getServiceProviders();
  }, []);

  function findFilterData(data) {
    const filteredData = data.services.filter(service => service.id === servicesContext);
    return filteredData;
  }


  return (
    <>
      <div id='providersTopContainer'>
        <h4>Hair Specialist</h4>
        <span>View All</span>
      </div>
      <div id="providersCardsContainer">
      {providers ? (
  servicesContext ? (
    providers
      .filter(provider => findFilterData(provider).length > 0)
      .map((provider) => (
        <Providerscard providersProperties={provider} key={provider.id} />            
      ))
  ) : (
    providers.map((provider) => (
      <Providerscard providersProperties={provider} key={provider.id} />            
    ))
  )
) : (
  <p>Loading</p>
)}
      </div>
    </>
  )
}

export default Providers;
