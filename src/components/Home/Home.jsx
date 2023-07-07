import React from 'react';
import './Home.css';
import axios from 'axios';
import Card from './ListCard/Card';
import { FILTER_DATA_BASE_URL, LIST_DATA_BASE_URL } from '../apiUrls';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Filterbar from '../Filterbar/Filterbar';

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
      const response = await axios.get(FILTER_DATA_BASE_URL);
      setFilterdata(response.data.filters);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const fetchListData = async () => {
    try {
      const response = await axios.get(LIST_DATA_BASE_URL);
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
        <div className='main-Home-Container' id='mainHomeContainer'>
          <section>
            <div className='search-input-container' id='searchinputcontainer'>
              <FontAwesomeIcon icon={faMagnifyingGlass} id='searchIcon' />
              <FontAwesomeIcon icon={faBars} id='filterIcon' onClick={handleFilterClick} />
              <input type='text' placeholder='Search Here' id='searchinput' />
            </div>
            {showFilter && (
              <Filterbar onApplyFilter={handleFilterApply} filterComponentData={filterdata} />
            )}
            <div className='results-text-container' id='resultstextcontainer'>
              <h2>Results &ldquo;Salon&rdquo;</h2>
              <span>12,289 found</span>
            </div>
          </section>
          <main>
            <ul>
            {listdata.map((element) => {
              return  <li key={element.id}><Card properties={element}/></li>;
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
