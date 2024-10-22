import React from 'react'
import './Product.css'
import './Ghee.css'

const Ghee = ({addToCart}) => {
  return (
    <div className='ghee-home'>
        Pure Ghee Items...
    <div className='ghee-cards'>
      <div className="product-card">
            <div className="product-image">
                <img src="gheepack.jfif" alt="gheepack" />
            </div>
            <div className="product-details">
                <div className="product-discount">7% Off</div>
                <div className="product-fresh">Fresho! </div>
                <div className="product-title">Nandini Ghee Packet </div>
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

    <div className="product-card">
            <div className="product-image">
                <img src="gheebottle.jfif" alt="gheepack" />
            </div>
            <div className="product-details">
                <div className="product-discount">7% Off</div>
                <div className="product-fresh">Fresho! </div>
                <div className="product-title">Nandini Ghee Bottle </div>
                <div className="product-unit">
                    <select>
                        <option>1 kg</option>
                        <option>2 kg</option>
                        <option>3 kg</option>
                    </select>
                </div>
                <div className="product-pricing">
                    <span className="product-price">₹299</span>
                    <span className="product-original-price">
                        <sup>₹333.65</sup></span>
                </div>
                <div className="product-actions">
                    <button className="wishlist-button">❤️</button>
                    <button className="add-button" onClick={addToCart}>Add</button>
                </div>
            </div>
    </div>

    <div className="product-card">
            <div className="product-image">
                <img src="amul.jfif" alt="gheepack" />
            </div>
            <div className="product-details">
                <div className="product-discount">7% Off</div>
                <div className="product-fresh">Fresho! </div>
                <div className="product-title">Amul Ghee </div>
                <div className="product-unit">
                    <select>
                        <option>1 kg</option>
                        <option>2 kg</option>
                        <option>3 kg</option>
                    </select>
                </div>
                <div className="product-pricing">
                    <span className="product-price">₹299</span>
                    <span className="product-original-price">
                        <sup>₹313.65</sup></span>
                </div>
                <div className="product-actions">
                    <button className="wishlist-button">❤️</button>
                    <button className="add-button" onClick={addToCart}>Add</button>
                </div>
            </div>
    </div>

    <div className="product-card">
            <div className="product-image">
                <img src="pureghee.jfif" alt="gheepack" />
            </div>
            <div className="product-details">
                <div className="product-discount">7% Off</div>
                <div className="product-fresh">Fresho! </div>
                <div className="product-title"> Pure Ghee </div>
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
                    <button className="wishlist-button">❤️</button>
                    <button className="add-button" onClick={addToCart}>Add</button>
                </div>
            </div>
    </div>

    </div>
    </div>
  )
}

export default Ghee
