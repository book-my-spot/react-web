import React, { useEffect, useState } from 'react'
import Providerscard from './Providerscard'
import { BASE_URL } from '../apiUrls'
import axios from "axios";
import { useServiceContext } from './ServiceContextProvider';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Providers.css";

function Providers() {
  const id = useParams();
  const [providers, setProviders] = useState(null);
  const { servicesContext ,selectedProvider,setservicesContext,setselectedProviderId,setSelectedServiceId,selectedProviderId} = useServiceContext();

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
  function handlServiceClean(){
    setSelectedServiceId(null);
    setservicesContext(null);
    setselectedProviderId(null);
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
                <Providerscard providersProperties={provider} key={provider.id}/>
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
      <div className="clearallBtncontainer">
      <button onClick={handlServiceClean} id='clearServicesBtn'>clear all</button>
      </div>
      <div id="serviceMainbuttoncontainer">
        <Link to={`booking?provider=${selectedProvider}&service=${servicesContext}&provider_id=${selectedProviderId}`}>
        <button>Continue</button>
        </Link>
      </div>
    </>
  )
}

export default Providers;
