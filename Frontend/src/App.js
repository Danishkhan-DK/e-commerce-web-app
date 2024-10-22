import React  from 'react';
import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Nav from './components/Nav';
import Product from './components/Product';
import CustomRouter from './CustomRouter';
import Footer from './components/Footer';
import Shopby from './components/Shopby';

function App() {
//  const [cartCount, setCartCount]=useState(0)

//  const addToCartCount=()=>{
//   setCartCount(cartCount+1)
//   console.log(setCartCount)
//  }

const [cartItems, setCartItems] = useState([]);
const [message, setMessage] = useState('');

const addToCart = (product) => {
  if(cartItems.some(item => item.id === product.id && item.selectedUnit === product.selectedUnit))
  {
    setMessage(`The product ${product.title} (${product.selectedUnit}) is already in the cart.`)} else {
  setCartItems([...cartItems, product]);
  setMessage('')

  }
};

const[cardCount, setCardCount]=useState([]);

const Countfun=(newCards)=>{
  setCardCount([...cardCount, newCards])
}

// cartCount={cartCount} addToCartCount={addToCartCount}

  return (
    <div className="App">
     {/* <Nav cartCount={cartCount}/> */}
     {/* <CustomRouter cartCount={cartCount} addToCart={addToCart}/> */}
     <CustomRouter cartItems={cartItems} addToCart={addToCart}  Countfun={Countfun} cardCount={cardCount}/>
     {message && <div className="message">{message}</div>}
     {/* <Banner/> */}
     {/* <Categories/> */}
     {/* <Product addToCart={addToCart}/> */}
      {/* <Footer/> */}
     
    </div>
  );
}

export default App;
