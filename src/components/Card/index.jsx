import React from 'react'
import './card.css'

export default function Card({ value, icon, text, onPress }) {
  
    return (
    <div className='card-container' onClick={ onPress }>
      <div className='card-content'>
        <span>{ icon }</span>
        <span className="card-value">{ value }</span>
      </div>
      <p>{ text }</p>
    </div>
  )
}
