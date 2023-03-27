import React from 'react'
import './card.css'

export default function Card({ value, icon, text, onPress, page }) {

    return (
    <div 
      className='card-container' 
      onClick={ onPress } 
      style={{backgroundColor: page}}>
      <div className='card-content'>
        <span>{ icon }</span>
        <span className="card-value">{ value }</span>
      </div>
      <p>{ text }</p>
    </div>
  )
}
