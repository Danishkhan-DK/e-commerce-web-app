import React from 'react'
import './Shopby.css'
import './Product.css'

const Shopby = ({addToCart}) => {
  return (
    <div>
     <h4>Ice-creams</h4>

      <div className='product-multicards'>
       <div className="product-card">
            <div className="product-image">
                <img src="images.jfif" alt="carrot" />
            </div>
            <div className="product-details">
                <div className="product-discount">27% Off</div>
                <div className="product-fresh">Fresho! </div>
                <div className="product-title">Tea </div>
                <div className="product-unit">
                    <select>
                        <option>1 kg</option>
                        <option>2 kg</option>
                        <option>3 kg</option>
                    </select>
                </div>
                <div className="product-pricing">
                    <span className="product-price"><marquee direction="up">₹99</marquee></span>
                    <span className="product-original-price">
                        <sup>₹133.65</sup></span>
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
                <img src="capsicum.jfif" alt="carrot" />
            </div>
            <div className="product-details">
                <div className="product-discount">27% Off</div>
                <div className="product-fresh">Fresho! </div>
                <div className="product-title">Capsicum - green </div>
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
                <div className="product-title">Tea </div>
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
                <img src="images.jfif" alt="carrot" />
            </div>
            <div className="product-details">
                <div className="product-discount">27% Off</div>
                <div className="product-fresh">Fresho! </div>
                <div className="product-title">Tea </div>
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
    </div>

    </div>
    </div>
  )
}

export default Shopby
