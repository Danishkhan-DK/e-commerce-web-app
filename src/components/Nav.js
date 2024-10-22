import React, { useState } from 'react';
import './Nav.css'
import Product from './Product';
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";

const Nav = ({cartCount}) => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

    
  return (
    <div className='nav-container'>
      <div className='bar'>
        <div className='logo'>
            <img src="basketlogo.jpeg" alt="logo" onClick={()=>navigate('/')} className='img-logo'/>
        </div>
        <div className='search-bar'> 
       <span className='search-icon'><CiSearch /> </span> 
        <input type="text"  placeholder="Search for Products..."  className='search-text'/>
        </div>

        {/* <div>
            <Product addCart={addCart}/>
        </div> */}

        <div className='nav-buttons'>
            <button className='location-btn'>Select Location</button>
            <button className='login-btn' onClick={()=> navigate('/login')}>Login/Sign Up</button>
            {/* <button className='o-btn'>O</button> Cart */}
           <span className='cart-area' onClick={() => navigate('/carting')} > Cart: {cartCount} </span>
        </div>
      </div>

      <div className='bar-two'> 
            {/* <div className='dropdown'> 
                <button>Shop by Category</button>
                <div className='categories'>
                    <a href="#exotic">Exotic Fruits & V...</a>
                    <a href="#tea">Tea</a>
                    <a href="#ghee">Ghee</a>
                    <a href="#nandini">Nandini</a>
                    <a href="#exotic"> .. </a>

                    <div className='navtwo-buttons'>
            <button className='smart-btn'>Smart Basket</button>
            <button className='offers-btn'>Offers</button>
        </div>
                    

                </div>
            </div> */}
                 <div className="nav-link" id='nav-drop'>
                    <div className='dropdown'>
                    <button className='drop-btn' onClick={toggleDropdown}>Shop by Category
                    <span><IoIosArrowDropdown /></span>
                    </button>
                    <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                             <a href="#" className='main-juices'>Fruit juices
                                <div className='category-juices'>
                                <a href="#" className='mango'>Mango juice
                                <div className='category-mango'>
                                <a href="#">Small glass</a>
                             <a href="#">Medium glass</a>
                             <a href="#">Large glass</a>
                                </div>
                                </a>
                             <a>Watermelon juice</a>
                             <a>Apple juice</a>
                                </div>
                             </a>
                              <a onClick={() => navigate('/shopby')} className='ice'>ice-creams</a>
                             <a href="#">Snacks & foods</a>
                             <a href="#">Non-veg items</a>
                             <a href="#">Baby foods</a>
                             <a href="#">coco powder</a>
                             <a href="#">chocolates</a>
                             <a href="#">deo perfumes</a>
                             <a href="#">Bubble gums</a>
    </div>
                    </div>
                </div>
                <div className="nav-link">
                    <a className='ghee-btn' onClick={() => navigate('/fruits')}>Exotic Fruits & Vegetables</a>
                </div>
                <div className="nav-link">
                    <a className='ghee-btn' onClick={() => navigate('/tea')}>Tea</a>
                </div>
                <div className="nav-link">
                    <a className='ghee-btn' onClick={() => navigate('/ghee')} >Ghee</a>
                </div>
                <div className="nav-link">
                    <a className='ghee-btn' onClick={() => navigate('/nandini')}>Nandini</a>
                </div>

                <div className='nav-link'>
                    ..
                </div>

                
        <div className='smart-btn'> <button onClick={()=> navigate('/smartbasket')}>Smart Basket</button></div>
        <div className='offer-btn'>   <button>Offers</button> </div>
        

        {/* <select>
                        <option>Fruit juices</option>
                        <option>ice-creams</option>
                        <option>Snacks & foods</option>
                        <option>non-veg items</option>
                    </select> */}
      </div>

    </div>
  )
}

export default Nav
