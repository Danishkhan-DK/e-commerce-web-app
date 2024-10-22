import React from 'react'
import './Carting.css'
import { useNavigate } from 'react-router-dom';

const Carting = ({cartCount, veg}) => {
    const navigate = useNavigate();
  return (
    <div>
        <div className='carting-area'>
      Your Product in cart = {cartCount}{veg} items
      </div>
      <div className='carting-btn'>
      <button onClick={() => navigate('/')}> Cancel </button>
        <button> Buy </button>
      </div>
    </div>
  )
}

export default Carting
