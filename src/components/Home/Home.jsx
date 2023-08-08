import React from 'react';
import './Home.css';
import axios from 'axios';
import Card from './ListCard/Card';
import { CAROUSEL_AND_FILTER_DATA_BASE_URL, SERVICES_LIST_DATA } from '../apiUrls';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Filterbar from '../Filterbar/Filterbar';
import { NavLink } from 'react-router-dom';



function Home() {
  const [showFilter, setShowFilter] = useState(false);
  const [filterdata, setFilterdata] = useState(null);
  const [listdata, setListdata] = useState(null);
  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };

  const handleFilterApply = (values) => {
    console.log('Filter values from home component are:', values);
  };

  const fetchFilterData = async () => {
    try {
      const response = await axios.get(CAROUSEL_AND_FILTER_DATA_BASE_URL);
      setFilterdata(response.data.filters);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const fetchListData = async () => {
    try {
      const response = await axios.get(SERVICES_LIST_DATA);
      setListdata(response.data.service_owners);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchFilterData();
  }, []);

  useEffect(() => {
    fetchListData();
  }, []);
  return (
    <>
      {listdata !== null && filterdata != null ? (
        <div className='mainHomeContainer' id='mainHomeContainer'>
          <section>
            <div className='searchInputContainer' id='searchInputContainer'>
              <FontAwesomeIcon icon={faMagnifyingGlass} id='searchIcon' />
              <FontAwesomeIcon icon={faBars} id='filterIcon' onClick={handleFilterClick} />
              <input type='text' placeholder='Search Here' id='searchInput' />
            </div>
            {showFilter && (
              <Filterbar onApplyFilter={handleFilterApply} filterComponentData={filterdata} />
            )}
            <div className='resultsTextContainer' id='resultsTextContainer'>
              <h2>Results &ldquo;Salon&rdquo;</h2>
              <span>12,289 found</span>
            </div>
          </section>
          <main>
            <ul>
            {listdata.map((element) => {
              return  <li key={element.id}>
                <NavLink to={`services/${element.id}`} className='servicesLink'>
                <Card properties={element}/>
                </NavLink>
                </li>;
            })}
            </ul>
          </main>
        </div>
      ) : (
        <p>Loading data...</p>
      )
      }

    </>
  );
}

export default Home;
