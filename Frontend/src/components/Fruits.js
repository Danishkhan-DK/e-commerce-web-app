import React, { useState } from 'react'
import './Product.css'
import Productcard from './Productcard';

const Fruits = ({addToCart}) => {
    const [message, setMessage] = useState('');
    const products = [
        {
            id: 1,
          title: "Mangoes - fresh",
          image: "mango.jfif",
          discount: "27% Off",
          price: "₹99",
          originalPrice: "₹133.65",
          units: ["1 kg", "2 kg", "3 kg"]
        },
        {
            id: 2,
          title: "Pineapple",
          image: "pine.jfif",
          discount: "27% Off",
          price: "₹89",
          originalPrice: "₹133.65",
          units: ["1 kg", "2 kg", "3 kg"]
        },
        {
            id: 3,
          title: "Carrot - fresh ",
          image: "images.jfif",
          discount: "27% Off",
          price: "₹79",
          originalPrice: "₹50.65",
          units: ["1 kg", "2 kg", "3 kg"]
        },
        {
            id: 4,
          title: "Apples",
          image: "apple.jfif",
          discount: "27% Off",
          price: "₹59",
          originalPrice: "₹40.22",
          units: ["1 kg", "2 kg", "3 kg"]
        },
      ];
    


  return (
    <div>
        <h3>Fresh Fruits and Vegs</h3>
      <div className='product-multicards'>
       {/* <div className="product-card">
            <div className="product-image">
                <img src="mango.jfif" alt="carrot" />
            </div>
            <div className="product-details">
                <div className="product-discount">27% Off</div>
                <div className="product-fresh">Fresho! </div>
                <div className="product-title">Mangoes - fresh </div>
                <div className="product-unit">
                    <select>
                        <option>1 kg</option>
                        <option>2 kg</option>
                        <option>3 kg</option>
                    </select>
                </div>
                <div className="product-pricing">
                    <span className="product-price"><marquee direction="up">₹69</marquee></span>
                    <span className="product-original-price">
                        <sup>₹99.65</sup></span>
                </div>
                <div className="product-actions">
                    <button className="wishlist-button">+</button>
                    <button className="add-button" onClick={addToCart}>Add</button>

                    {/* ❤️ */}
                {/* </div> */}
            {/* </div> */}
    {/* </div> */}


    {/* <div className="product-card">
            <div className="product-image">
                <img src="pine.jfif" alt="carrot" />
            </div>
            <div className="product-details">
                <div className="product-discount">27% Off</div>
                <div className="product-fresh">Fresho! </div>
                <div className="product-title">Pineapple </div>
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
                <img src="images.jfif" alt="carrot" />
            </div>
            <div className="product-details">
                <div className="product-discount">27% Off</div>
                <div className="product-fresh">Fresho! </div>
                <div className="product-title">Carrot - fresh </div>
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
                    <button className="wishlist-button">+</button>
                    <button className="add-button" onClick={addToCart}>Add</button>
                </div>
            </div>
    </div> */}

    
    {/* <div className="product-card">
            <div className="product-image">
                <img src="apple.jfif" alt="carrot" />
            </div>
            <div className="product-details">
                <div className="product-discount">27% Off</div>
                <div className="product-fresh">Fresho! </div>
                <div className="product-title">Apples </div>
                <div className="product-unit">
                    <select>
                        <option>1 kg</option>
                        <option>2 kg</option>
                        <option>3 kg</option>
                    </select>
                </div>
                <div className="product-pricing">
                    <span className="product-price">₹199</span>
                    <span className="product-original-price">
                        <sup>₹233.65</sup></span>
                </div>
                <div className="product-actions">
                    <button className="wishlist-button">❤️</button>
                    <button className="add-button" onClick={addToCart}>Add</button>
                </div>
            </div>
    </div>  */}

{products.map((product, index) => (
          <Productcard key={index} product={product} addToCart={addToCart} />
     
        ))}

{message && <div className="message">{message}</div>}
    </div>
    </div>
  )
}

export default Fruits
