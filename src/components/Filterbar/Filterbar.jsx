import React from 'react'
import "./Filterbar.css"
import { useState } from 'react';

function Filterbar({ onApplyFilter }) {
    const [Type, setType] = useState(null);
    const [Category, setCategory] = useState(null);
    const [Distance, setDistance] = useState(null);

    const handleTypeClick = (name) => {
        setType(name);
        
    };
    const handleCategoryClick = (name) => {
        setCategory(name);
        
    };
    const handleDistanceClick = (name) => {
        setDistance(name);
        
    };
    const handleReset = ()=>{
         setType(null);
         setCategory(null);
         setDistance(null);
    }
    const handleapply = ()=>{
        let values = [];
        values = [Type,Category,Distance];
        onApplyFilter(values);
    }
    return (
        <div className="filter-options-container" id='filteroptionsContainer'>
            <h2 id='mainheadfilter'>Filter</h2>
            <span>Type</span>
            <div className="filter type-container" id="typefilter">
                <ul onClick={(event) => {
                    if (event.target.tagName === 'LI') {
                        handleTypeClick(event.target.textContent);
                    }
                }}>
                    <li className={Type === 'All' ? 'selectedfilterli' : ''}>All</li>
                    <li className={Type === 'Haircuts' ? 'selectedfilterli' : ''}>Haircuts</li>
                    <li className={Type === 'Make up' ? 'selectedfilterli' : ''}>Make up</li>
                    <li className={Type === 'Manicure' ? 'selectedfilterli' : ''}>Manicure</li>
                </ul>
            </div>
            <span>Category</span>
            <div className="filter category-container" id="categoryfilter">

                <ul
                onClick={(event) => {
                    if (event.target.tagName === 'LI') {
                        handleCategoryClick(event.target.textContent);
                    }
                }}
                >
                    <li className={Category === 'Unisex' ? 'selectedfilterli' : ''}>Unisex</li>
                    <li className={Category === 'Women' ? 'selectedfilterli' : ''}>Women</li>
                    <li className={Category === 'Men' ? 'selectedfilterli' : ''}>Men</li>
                </ul>

            </div>
            <span>Distance</span>
            <div className="filter distance-container" id="distancefilter">
                <ul 
                onClick={(event)=>{
                    if(event.target.tagName === 'LI'){
                        handleDistanceClick(event.target.textContent);
                    }
                }}
                >
                    <li className={Distance === 'less than 1km' ? 'selectedfilterli' : ''}>less than 1km</li>
                    <li className={Distance === '1-5 km' ? 'selectedfilterli' : ''}>1-5 km</li>
                    <li className={Distance === '5-10 km' ? 'selectedfilterli' : ''}>5-10 km</li>
                    <li className={Distance === 'greater than 10km' ? 'selectedfilterli' : ''}>greater than 10km</li>
                </ul>
            </div>
            <div className="filter-button-container" id='filterbuttonscontainer'>
                <button id='filterresetbtn' onClick={handleReset}>Reset</button>
                <button id='filterapplybtn' onClick={handleapply}>Apply Filter</button>
            </div>
        </div>
    )
}

export default Filterbar