import React from 'react'
import './Product.css'

const Fruits = ({addToCart}) => {
  return (
    <div>
        <h3>Fresh Fruits and Vegs</h3>
      <div className='product-multicards'>
       <div className="product-card">
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
                </div>
            </div>
    </div>


    <div className="product-card">
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
    </div>

    
    <div className="product-card">
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
    </div>

    
    <div className="product-card">
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
    </div>

    </div>
    </div>
  )
}

export default Fruits
