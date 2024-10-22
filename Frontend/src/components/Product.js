import React from 'react'
import './Product.css'
import Productcard from './Productcard';

const Product = ({addToCart}) => {

    // const veg="Carrots - fresh";

    const products = [
        {
          id: 3,
          title: "Carrots - fresh",
          image: "images.jfif",
          discount: "27% Off",
          price: "₹99",
          originalPrice: "₹133.65",
          units: ["1 kg", "2 kg", "3 kg"]
        },
        {
        id: 18,
          title: "Capsicum - green",
          image: "capsicum.jfif",
          discount: "27% Off",
          price: "₹89",
          originalPrice: "₹133.65",
          units: ["1 kg", "2 kg", "3 kg"]
        },
        {
          id: 19,
          title: "Green Leafy Vegetables",
          image: "greenleafy.jfif",
          discount: "27% Off",
          price: "₹79",
          originalPrice: "₹50.65",
          units: ["1 kg", "2 kg", "3 kg"]
        },
        {
          id: 20,
          title: "Tomatoes",
          image: "tomato.jfif",
          discount: "27% Off",
          price: "₹59",
          originalPrice: "₹40.22",
          units: ["1 kg", "2 kg", "3 kg"]
        },
      ];
    

  return (
    <div className='products'>
       <div className='head-title'><h2>My Smart Basket</h2>
       {/* <div className='view'>View All</div> */}
       </div> 

       <div className='product-multicards'>
       {/* <div className="product-card">
            <div className="product-image">
                <img src="images.jfif" alt="carrot" />
            </div>
            <div className="product-details">
                <div className="product-discount">27% Off</div>
                <div className="product-fresh">Fresho! </div>
                <div className="product-title">{veg} </div>
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
                {/* </div> */}
            {/* </div> */}
    {/* </div>  */}


    {products.map((product, index) => (
          <Productcard key={index} product={product} addToCart={addToCart} />
        ))}

    

    </div>

    </div>
  )
}

export default Product
