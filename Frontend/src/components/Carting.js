import React, { useState } from 'react'
import './Carting.css'
import { useNavigate } from 'react-router-dom';

// const Carting = ({cartCount, veg}) => {
//     const navigate = useNavigate();
//   return (
//     <div>
//         <div className='carting-area'>
//       Your Product in cart = {cartCount}{veg} items
//       </div>
//       <div className='carting-btn'>
//       <button onClick={() => navigate('/')}> Cancel </button>
//         <button> Buy </button>
//       </div>
//     </div>
//   )
// }

const Carting = ({ cartItems }) => {

  // const[countnum, setCountum]=useState([]);

  // const countInc=()=>{
  //   setCountum(countnum+1)
  // }

  // const countDec=()=>{
  //   setCountum(countnum-1)
  // }

  // const[cardCount, setCardCount]=useState([]);

  // const Countfun=(newCards)=>{
  //   setCardCount([...cardCount, newCards])
  // }

//  Countfun();
//  console.log(cardCount)



  const navigate = useNavigate();

  return (
    <div>
      <div className='carting-area'>
        <h4>Your Products in Cart: {cartItems.length}</h4>
        <div className='card-seperate'>
        {cartItems.length > 0 ? (
          <ol >
            {cartItems.map((item, index) => (
              // <li className='list-product' key={index}>{item.title} - {item.price}</li>
              <li key={index} className='list-product'>
              <img src={item.image} alt={item.title} className='cart-item-image' />
              <div className='cart-item-details'>
                <p className='itemtitle'>{item.title}</p>
                <p>{item.selectedUnit}</p>
                <p>{item.price} </p>
              </div>

              <div className='quantity'> Quantity <div>

              {/* <div>{countnum}</div>

             <button onClick={countDec}>-</button>
              
              <button onClick={countInc}>+</button> */}

              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option><input type='number'/>10+</option>
              </select>

              </div> 
              </div>

            </li>
            
            ))}
          </ol>
        

        ) : (
          <p>No items in cart.</p>
        )}
        </div>
      </div>
      <div className='carting-btn'>
        <button onClick={() => navigate('/')}>Cancel</button>
        <button>Buy</button>
      </div>
    </div>
  );
};

export default Carting
