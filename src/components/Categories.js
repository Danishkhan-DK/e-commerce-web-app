import React from 'react'
import './Categories.css'

const Categories = () => {
  return (
    <div className='cat'>
     
     <marquee> <button className="button-item">Eggs, Meat and Fish</button>
            <button className="button-item neu-btn">NEUPASS</button>
            <button className="button-item ayurveda-btn">Ayurveda</button>
            <button className="button-item">Buy More Save More</button>
            <button className="button-item">Deals of the Week</button>
            <button className="button-item">Combo Store</button>
            </marquee> 
      
    </div>
  )
}

export default Categories
