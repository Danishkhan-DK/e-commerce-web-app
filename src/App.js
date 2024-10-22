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
 const [cartCount, setCartCount]=useState(0)

 const addToCart=()=>{
  setCartCount(cartCount+1)
 }

  return (
    <div className="App">
     {/* <Nav cartCount={cartCount}/> */}
     <CustomRouter cartCount={cartCount} addToCart={addToCart}/>
     {/* <Banner/> */}
     {/* <Categories/> */}
     {/* <Product addToCart={addToCart}/> */}
      {/* <Footer/> */}
     
    </div>
  );
}

export default App;
