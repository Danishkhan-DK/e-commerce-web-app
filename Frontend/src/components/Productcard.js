import React, { useState } from 'react';
// import './ProductCard.css';
import './Product.css'

const ProductCard = ({ product, addToCart }) => {

  // const [cartCount, setCartCount]=useState(0)

  // const addToCartCount=()=>{
  //  setCartCount(cartCount+1)
  //  console.log(setCartCount)
  // }
 

  const [selectedUnit, setSelectedUnit] = useState(product.units[0]);

  const handleUnitChange = (e) => {
    setSelectedUnit(e.target.value);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, selectedUnit });
  };

   


  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <div className="product-discount">{product.discount}</div>
        <div className="product-fresh">Fresho! </div>
        <div className="product-title">{product.title}</div>
        <div className="product-unit">
          <select  value={selectedUnit} onChange={handleUnitChange}>
            {product.units.map((unit, index) => (
              <option key={index}>{unit}</option>
            ))}
          </select>
        </div>
        <div className="product-pricing">
          <span className="product-price">{product.price}</span>
          <span className="product-original-price">
            <sup>{product.originalPrice}</sup>
          </span>
        </div>
        <div className="product-actions">
          <button className="wishlist-button">❤️</button>
          {/* <button className="add-button" onClick={addToCartCount}>Add</button> */}
          {/* <button className="add-button" onClick={()=>addToCart(product)} >Add</button>  */}
          <button className="add-button" onClick={handleAddToCart} >Add</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
