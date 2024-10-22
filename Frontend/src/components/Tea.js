import React from 'react'
import './Product.css'
import Productcard from './Productcard';

const Tea = ({addToCart}) => {

    const products = [
        {
            id: 9,
          title: "Taj-Mahal Tea ",
          image: "tea.jfif",
          discount: "27% Off",
          price: "₹99",
          originalPrice: "₹133.65",
          units: ["1 kg", "2 kg", "3 kg"]
        },
        {
            id: 10,
          title: "Red Label Tea",
          image: "redlabel.jfif",
          discount: "27% Off",
          price: "₹89",
          originalPrice: "₹133.65",
          units: ["1 kg", "2 kg", "3 kg"]
        },
        {
            id: 11,
          title: "Kashmir Pink Tea",
          image: "kashmiri.jfif",
          discount: "27% Off",
          price: "₹79",
          originalPrice: "₹50.65",
          units: ["1 kg", "2 kg", "3 kg"]
        },
        {
            id: 12,
          title: "Tata Tea ",
          image: "tata.jfif",
          discount: "27% Off",
          price: "₹59",
          originalPrice: "₹40.22",
          units: ["1 kg", "2 kg", "3 kg"]
        },
      ];
    
  return (
    <div>
        <h3>Fresh Tea</h3>
      <div className='product-multicards'>
       {/* <div className="product-card">
            <div className="product-image">
                <img src="tea.jfif" alt="carrot" />
            </div>
            <div className="product-details">
                <div className="product-discount">27% Off</div>
                <div className="product-fresh">Fresho! </div>
                <div className="product-title"> Taj-Mahal Tea </div>
                <div className="product-unit">
                    <select>
                        <option>1 kg</option>
                        <option>2 kg</option>
                        <option>3 kg</option>
                    </select>
                </div>
                <div className="product-pricing">
                    <span className="product-price"><marquee direction="up">₹149</marquee></span>
                    <span className="product-original-price">
                        <sup>₹183.65</sup></span>
                </div>
                <div className="product-actions">
                    <button className="wishlist-button">+</button>
                    <button className="add-button" onClick={addToCart}>Add</button> */}

                    {/* ❤️ */}
                {/* </div>
            </div>
    </div> */}

{/* 
    <div className="product-card">
            <div className="product-image">
                <img src="redlabel.jfif" alt="carrot" />
            </div>
            <div className="product-details">
                <div className="product-discount">27% Off</div>
                <div className="product-fresh">Fresho! </div>
                <div className="product-title">Red Label Tea </div>
                <div className="product-unit">
                    <select>
                        <option>1 kg</option>
                        <option>2 kg</option>
                        <option>3 kg</option>
                    </select>
                </div>
                <div className="product-pricing">
                    <span className="product-price">59</span>
                    <span className="product-original-price">
                        <sup>₹88.65</sup></span>
                </div>
                <div className="product-actions">
                    <button className="wishlist-button">+</button>
                    <button className="add-button" onClick={addToCart}>Add</button>
                </div>
            </div>
    </div>

    
    <div className="product-card">
            <div className="product-image">
                <img src="kashmiri.jfif" alt="carrot" />
            </div>
            <div className="product-details">
                <div className="product-discount">27% Off</div>
                <div className="product-fresh">Fresho! </div>
                <div className="product-title">Kashmir Pink Tea </div>
                <div className="product-unit">
                    <select>
                        <option>1 kg</option>
                        <option>2 kg</option>
                        <option>3 kg</option>
                    </select>
                </div>
                <div className="product-pricing">
                    <span className="product-price">₹399</span>
                    <span className="product-original-price">
                        <sup>₹433.65</sup></span>
                </div>
                <div className="product-actions">
                    <button className="wishlist-button">+</button>
                    <button className="add-button" onClick={addToCart}>Add</button>
                </div>
            </div>
    </div> */}

    
    {/* <div className="product-card">
            <div className="product-image">
                <img src="tata.jfif" alt="carrot" />
            </div>
            <div className="product-details">
                <div className="product-discount">27% Off</div>
                <div className="product-fresh">Fresho! </div>
                <div className="product-title">Tata Tea </div>
                <div className="product-unit">
                    <select>
                        <option>1 kg</option>
                        <option>2 kg</option>
                        <option>3 kg</option>
                    </select>
                </div>
                <div className="product-pricing">
                    <span className="product-price">₹106</span>
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

export default Tea
