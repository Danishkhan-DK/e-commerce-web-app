import React from 'react'
import './Product.css'
import './Ghee.css'
import Productcard from './Productcard';

const Ghee = ({addToCart}) => {
    const products = [
        {
            id: 5,
          title: "Nandini Ghee Packet ",
          image: "gheepack.jfif",
          discount: "27% Off",
          price: "₹99",
          originalPrice: "₹133.65",
          units: ["1 kg", "2 kg", "3 kg"]
        },
        {
            id: 6,
          title: "Nandini Ghee Bottle",
          image: "gheebottle.jfif",
          discount: "27% Off",
          price: "₹89",
          originalPrice: "₹133.65",
          units: ["1 kg", "2 kg", "3 kg"]
        },
        {
            id: 7,
          title: "Amul Ghee",
          image: "amul.jfif",
          discount: "27% Off",
          price: "₹79",
          originalPrice: "₹50.65",
          units: ["1 kg", "2 kg", "3 kg"]
        },
        {
            id: 8,
          title: "Pure Ghee ",
          image: "pureghee.jfif",
          discount: "27% Off",
          price: "₹59",
          originalPrice: "₹40.22",
          units: ["1 kg", "2 kg", "3 kg"]
        },
      ];
    

  return (
    <div className='ghee-home'>
        Pure Ghee Items...
    <div className='ghee-cards'>
      {/* <div className="product-card"> */}
            {/* <div className="product-image">
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
    </div> */}

    {/* <div className="product-card">
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
    </div> */}

    {/* <div className="product-card">
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
    </div> */}

    {/* <div className="product-card">
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
    </div> */}

    {products.map((product, index) => (
          <Productcard key={index} product={product} addToCart={addToCart} />
        ))}
    </div>
    </div>
  )
}

export default Ghee
