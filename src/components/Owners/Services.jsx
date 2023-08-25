import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'
import { useServiceContext } from './ServiceContextProvider';
import axios from "axios";
import { SERVICES_DATA } from '../apiUrls';
import { useParams } from 'react-router-dom';


function Services() {

    const [services, setServices] = useState(null);
    const id = useParams();
    const {setservicesContext} = useServiceContext();

    function findidService(data) {
        const serviceOwners = data.find((serviceItem) => serviceItem.id == id.id);
        setServices(serviceOwners.services);
    }

    function handlServiceClean(){
        console.log(`called`);
        setservicesContext(null);
    }
    
    useEffect(() => {
        async function getServiceData() {
            let response = await axios.get(SERVICES_DATA);
            findidService(response.data.service_owners);
        }

        getServiceData();

    }, []);


    return (
        <>
            <div className="servicesTopContainer" id='servicesTopContainer'>
                <h4>Services</h4>
                <span>View All</span>
            </div>
            <div className="servicesContainer" id="servicesContainer">
                {services ? (
                    services.map((service) => {
                        return <ServiceCard serviceProperties={service} key={service.id} />
                    })
                ) : (<p>loading data</p>)}
           
            </div>
            <button onClick={handlServiceClean} id='clearServicesBtn'>clear</button>
        </>
    )
}

export default Services