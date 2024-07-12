// BrandModal.jsx
import React from 'react';
import "./BrandModal.css";
import { Button } from 'semantic-ui-react'

const BrandModal = ({ onClose, brand }) => {
  const handleAddToCart = () => {
    const item = {
      id: brand.id,
      size: brand.size,
      price: parseFloat(brand.price.replace('$', '')),
      image: brand.image,
      name: brand.name
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      item.quantity = 1;
      cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    
    const event = new Event('cartUpdated');
    window.dispatchEvent(event);

    onClose();
  };

  return (
    <div className='BrandModal__overlay'>
      <div className='BrandModal__modal'>
        <header className="BrandModal__header">
          <button className="BrandModal__back-button" onClick={onClose}>
            <i className="arrow left icon"></i>
          </button>
          <h1 className='BrandModal__heading'>{brand.name} Products</h1>
        </header>
        <div className='BrandModal__image-content'>
          <img
            src={brand.image}
            alt={`${brand.name} product`}
            className='BrandModal__image'
          />
          <p id='hidden'>Size: {brand.size}</p>
          <p id='hidden'> Price: {brand.price}</p>
          {/* <button className='BrandModal__add-to-cart-button' onClick={handleAddToCart}>
            Add to Cart
          </button> */}
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default BrandModal;