import React from 'react'
import Nandini from './Nandini'
import Tea from './Tea'
import Fruits from './Fruits'
import Ghee from './Ghee'
import { BiColor } from 'react-icons/bi'

const Smartbasket = ({addToCart}) => {
  return (
   
    <div>
         <div>
         <h3 style={{color:'blue'}}>Smart Basket</h3> 
      <marquee scrollamount="30"> <h4 tyle={{color:'green'}}>SALE - Shop Now </h4> </marquee> 
    </div>
      <Nandini addToCart={addToCart}/>
      <Tea addToCart={addToCart}/>
      <Fruits addToCart={addToCart}/>
      <Ghee addToCart={addToCart}/>
    </div>
  )
}

export default Smartbasket
