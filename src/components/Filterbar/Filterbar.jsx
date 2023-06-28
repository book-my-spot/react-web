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
    let serviceTypevalues = filterComponentData.conditions[0];
    let genderValues = filterComponentData.conditions[1];
    let distanceValues = filterComponentData.conditions[2];
    return (
        <div className="filter-options-container" id='filteroptionsContainer'>
            <h2 id='mainheadfilter'>Filter</h2>
            <span>{serviceTypevalues.title}</span>
            <div className="filter type-container" id="typefilter">
  <ul onClick={(event) => {
    if (event.target.tagName === 'LI') {
      handleTypeClick(event.target.textContent);
    }
  }}>
    {serviceTypevalues.options.map((option, index) => (
      <li
        key={index}
        className={Type === `${option.title}` ? 'selectedfilterli' : ''}
      >
        {option.title}
      </li>
    ))}
  </ul>
</div>

            <span>{genderValues.title}</span>
            <div className="filter category-container" id="categoryfilter">
  <ul onClick={(event) => {
    if (event.target.tagName === 'LI') {
      handleCategoryClick(event.target.textContent);
    }
  }}>
    {genderValues.options.map((option, index) => (
      <li
        key={index}
        className={Category === `${option.title}` ? 'selectedfilterli' : ''}
      >
        {option.title}
      </li>
    ))}
  </ul>
</div>

            <span>{distanceValues.title}</span>
            <div className="filter distance-container" id="distancefilter">
  <ul onClick={(event) => {
    if (event.target.tagName === 'LI') {
      handleDistanceClick(event.target.textContent);
    }
  }}>
    {distanceValues.options.map((option, index) => (
      <li
        key={index}
        className={Distance === `${option.title}` ? 'selectedfilterli' : ''}
      >
        {option.title}
      </li>
    ))}
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