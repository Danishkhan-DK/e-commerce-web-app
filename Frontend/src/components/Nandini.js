import React from 'react'
import './Product.css'
import Productcard from './Productcard';

const Nandini = ({addToCart}) => {

    const products = [
        {
            id: 13,
          title: "Nandini Milk - Fresh!",
          image: "milk.jfif",
          discount: "27% Off",
          price: "₹99",
          originalPrice: "₹133.65",
          units: ["1 kg", "2 kg", "3 kg"]
        },
        {
            id: 14,
          title: "Nandini Ladoo",
          image: "ladoo.jfif",
          discount: "27% Off",
          price: "₹89",
          originalPrice: "₹133.65",
          units: ["1 kg", "2 kg", "3 kg"]
        },
        {
            id: 15,
          title: "Nandini Curd",
          image: "curd.jfif",
          discount: "27% Off",
          price: "₹79",
          originalPrice: "₹50.65",
          units: ["1 kg", "2 kg", "3 kg"]
        },
        {
            id: 16,
          title: "Nandini Paneer  ",
          image: "paneer.jfif",
          discount: "27% Off",
          price: "₹59",
          originalPrice: "₹40.22",
          units: ["1 kg", "2 kg", "3 kg"]
        },
      ];
  return (
    <div>
        <h3>Nandini Items wholesale</h3>
       <div className='product-multicards'>
       {/* <div className="product-card">
            <div className="product-image">
                <img src="milk.jfif" alt="carrot" />
            </div>
            <div className="product-details">
                <div className="product-discount">27% Off</div>
                <div className="product-fresh">Fresho! </div>
                <div className="product-title">Nandini Milk - Fresh! </div>
                <div className="product-unit">
                    <select>
                        <option>1 kg</option>
                        <option>2 kg</option>
                        <option>3 kg</option>
                    </select>
                </div>
                <div className="product-pricing">
                    <span className="product-price"><marquee direction="up">₹26</marquee></span>
                    <span className="product-original-price">
                        <sup>₹30.65</sup></span>
                </div>
                <div className="product-actions">
                    <button className="wishlist-button">+</button>
                    <button className="add-button" onClick={addToCart}>Add</button> */}

                    {/* ❤️ */}
                {/* </div> */}
            {/* </div> */}
    {/* </div> */}

{/* 
    <div className="product-card">
            <div className="product-image">
                <img src="ladoo.jfif" alt="carrot" />
            </div>
            <div className="product-details">
                <div className="product-discount">27% Off</div>
                <div className="product-fresh">Fresho! </div>
                <div className="product-title">Nandini Ladoo </div>
                <div className="product-unit">
                    <select>
                        <option>1 kg</option>
                        <option>2 kg</option>
                        <option>3 kg</option>
                    </select>
                </div>
                <div className="product-pricing">
                    <span className="product-price">₹89</span>
                    <span className="product-original-price">
                        <sup>₹133.65</sup></span>
                </div>
                <div className="product-actions">
                    <button className="wishlist-button">+</button>
                    <button className="add-button" onClick={addToCart}>Add</button>
                </div>
            </div>
    </div> */}

    
    {/* <div className="product-card">
            <div className="product-image">
                <img src="curd.jfif" alt="carrot" />
            </div>
            <div className="product-details">
                <div className="product-discount">27% Off</div>
                <div className="product-fresh">Fresho! </div>
                <div className="product-title">Nandini Curd </div>
                <div className="product-unit">
                    <select>
                        <option>1 kg</option>
                        <option>2 kg</option>
                        <option>3 kg</option>
                    </select>
                </div>
                <div className="product-pricing">
                    <span className="product-price">₹39</span>
                    <span className="product-original-price">
                        <sup>₹43.65</sup></span>
                </div>
                <div className="product-actions">
                    <button className="wishlist-button">+</button>
                    <button className="add-button" onClick={addToCart}>Add</button>
                </div>
            </div>
    </div>

    
    <div className="product-card">
            <div className="product-image">
                <img src="paneer.jfif" alt="carrot" />
            </div>
            <div className="product-details">
                <div className="product-discount">27% Off</div>
                <div className="product-fresh">Fresho! </div>
                <div className="product-title">Nandini Paneer </div>
                <div className="product-unit">
                    <select>
                        <option>1 kg</option>
                        <option>2 kg</option>
                        <option>3 kg</option>
                    </select>
                </div>
                <div className="product-pricing">
                    <span className="product-price">₹99</span>
                    <span className="product-original-price">
                        <sup>₹133.65</sup></span>
                </div>
                <div className="product-actions">
                    <button className="wishlist-button">❤️</button>
                    <button className="add-button" onClick={addToCart}>Add</button>
                </div>
            </div>
    </div> */}

    {products.map((product, index) => (
          <Productcard key={index} product={product} addToCart={addToCart} />
        ))}

    </div>
    </div>
  )
}

export default Nandini
