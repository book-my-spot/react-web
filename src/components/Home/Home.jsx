import React from 'react';
import './Home.css';
import axios from 'axios';
import Card from './ListCard/Card';
import { BASE_URL } from '../apiUrls';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Filterbar from '../Filterbar/Filterbar';
let arr = [
  {
    name: 'Classic hair cutting salon',
    address: 'Kadamba Bus stand panjim',
    distance: 2.4,
    ratings: 4.3,
  },
  { name: 'Modern Beauty Salon', address: 'Miramar Road, Panjim', distance: 1.5, ratings: 4.1 },
  { name: 'Stylish Cuts Hair Studio', address: 'Caculo Mall, Panjim', distance: 3.2, ratings: 4.6 },
  { name: 'The Hair Haven', address: 'Mandovi River View, Panjim', distance: 2.7, ratings: 4.4 },
  { name: 'Trendy Tresses Salon', address: 'Campal Gardens, Panjim', distance: 1.9, ratings: 4.2 },

  { name: 'Trendy Tresses Salon', address: 'Campal Gardens, Panjim', distance: 1.9, ratings: 2.2 },

  { name: 'Trendy Tresses Salon', address: 'Campal Gardens, Panjim', distance: 1.9, ratings: 3.2 },

  { name: 'Trendy Tresses Salon', address: 'Campal Gardens, Panjim', distance: 1.9, ratings: 4.9 },

  { name: 'Trendy Tresses Salon', address: 'Campal Gardens, Panjim', distance: 1.9, ratings: 4.21 },

  { name: 'Trendy Tresses Salon', address: 'Campal Gardens, Panjim', distance: 1.9, ratings: 4.22 },

  { name: 'Trendy Tresses Salon', address: 'Campal Gardens, Panjim', distance: 1.9, ratings: 4.23 },

  { name: 'Trendy Tresses Salon', address: 'Campal Gardens, Panjim', distance: 1.9, ratings: 4.25 },
];

function Home() {
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };

  const handleFilterApply = (values) => {
    console.log('Filter values from home component are:', values);
  };

  const [filterdata, setFilterdata] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setFilterdata(response.data.filters);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <>
      <div className='main-Home-Container' id='mainHomeContainer'>
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
        {arr.map((element) => {
          return <Card properties={element} key={element.ratings} />;
        })}
      </div>
    </>
  );
}

export default Home;
