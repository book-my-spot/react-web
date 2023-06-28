import React from 'react'
import "./Card1.css"
function Card1(props) {
  const cardData = props.card1data;
  const originalTitle = cardData.title;
  const greetingEmoji = "👋";
  const titleParts = originalTitle.split(greetingEmoji);
  return (
    <>
      <div className="card-Container" id='card1Container'>
        <div className="card-Img-Container" id='card1ImgContainer'>
          <div className="card-content-Container" id='card1contentContainer'>
            <h2>{titleParts[0]}{greetingEmoji}</h2>
            <h1>{titleParts[1]}</h1>
            <p>{cardData.subtitle}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card1