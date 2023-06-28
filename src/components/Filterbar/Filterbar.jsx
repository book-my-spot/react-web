import React from 'react'
import "./Filterbar.css"
import { useState} from 'react';
function Filterbar(props) {
    const {onApplyFilter,filterComponentData} = props
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

    // console.log(filterComponentData.conditions);
    let serviceTypevalues = filterComponentData.conditions[0];
    let genderValues = filterComponentData.conditions[1];
    let distanceValues = filterComponentData.conditions[2];
    // console.log(typevalues);
    return (
        <div className="filter-options-container" id='filteroptionsContainer'>
            <h2 id='mainheadfilter'>Filter</h2>
            <span>{serviceTypevalues.title}</span>
            <div className="filter type-container" id="typefilter">
                <ul onClick={(event) => {
                    if (event.target.tagName === 'LI') {
                        handleTypeClick(event.target.textContent);
                        console.log(event.target.textContent);
                    }
                }}>
                    <li className={Type === `${serviceTypevalues.options[0].title}` ? 'selectedfilterli' : ''}>{serviceTypevalues.options[0].title}</li>
                    <li className={Type === `${serviceTypevalues.options[1].title}` ? 'selectedfilterli' : ''}>{serviceTypevalues.options[1].title}</li>
                    <li className={Type === `${serviceTypevalues.options[2].title}` ? 'selectedfilterli' : ''}>{serviceTypevalues.options[2].title}</li>
                    <li className={Type === `${serviceTypevalues.options[3].title}` ? 'selectedfilterli' : ''}>{serviceTypevalues.options[3].title}</li>
                </ul>
            </div>
            <span>{genderValues.title}</span>
            <div className="filter category-container" id="categoryfilter">

                <ul
                onClick={(event) => {
                    if (event.target.tagName === 'LI') {
                        handleCategoryClick(event.target.textContent);
                    }
                }}
                >
                    <li className={Category === `${genderValues.options[0].title}` ? 'selectedfilterli' : ''}>{genderValues.options[0].title}</li>
                    <li className={Category === `${genderValues.options[1].title}` ? 'selectedfilterli' : ''}>{genderValues.options[1].title}</li>
                    <li className={Category === `${genderValues.options[2].title}` ? 'selectedfilterli' : ''}>{genderValues.options[2].title}</li>
                </ul>

            </div>
            <span>{distanceValues.title}</span>
            <div className="filter distance-container" id="distancefilter">
                <ul 
                onClick={(event)=>{
                    if(event.target.tagName === 'LI'){
                        handleDistanceClick(event.target.textContent);
                    }
                }}
                >
                    <li className={Distance === `${distanceValues.options[0].title}` ? 'selectedfilterli' : ''}>{distanceValues.options[0].title}</li>
                    <li className={Distance === `${distanceValues.options[1].title}` ? 'selectedfilterli' : ''}>{distanceValues.options[1].title}</li>
                    <li className={Distance === `${distanceValues.options[2].title}` ? 'selectedfilterli' : ''}>{distanceValues.options[2].title}</li>
                    {/* <li className={Distance === 'greater than 10km' ? 'selectedfilterli' : ''}>{distanceValues.options[3].title}</li> */}
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