import React from 'react'
import './CardInfo.css'

function CardInfo({location}) {
  return (
    <div className="cardInfo">
        <h2 className='cardInfo__title'>{location?.name}</h2>
        <div className='cardInfo__container'>
        <div className="cardInfo__items">
            <h3 className="cardInfo__items-title">Type</h3>
            <p className="cardInfo__items-data" >{location?.type}</p>
        </div>
        <div className="cardInfo__items-title">
            <h3 className="cardInfo__items">Dimension</h3>
            <p className="cardInfo__items-data" >{location?.dimension}</p>
        </div>
        <div className="cardInfo__items">
            <h3 className="cardInfo__items-title">Type</h3>
            <p className="cardInfo__items-data" >{location?.length}</p>
        </div>
    </div>
    </div>
  )
}

export default CardInfo
