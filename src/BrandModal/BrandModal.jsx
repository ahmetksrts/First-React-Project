// BrandModal.jsx
import React, { useState, useEffect } from 'react';
import "./BrandModal.css";

const BrandModal = ({ onClose, brand }) => {
  const [modal, setModal] = useState(true);

  const handleAddToCart = () => {
    const itemId = document.getElementById('item-id').textContent.trim();
    const itemSize = document.getElementById('item-size').textContent.trim();
    const itemPrice = document.getElementById('item-price').textContent.trim();
    const itemImage = document.querySelector('.BrandModal__image').src;

    const item = {
      id: itemId,
      size: itemSize,
      price: parseFloat(itemPrice.replace('$', '')),
      image: itemImage,
      quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === itemId && cartItem.size === itemSize);

    if (existingItemIndex >= 0) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    
    const event = new Event('cartUpdated');
    window.dispatchEvent(event);

    handleClose();
  };

  const handleClose = () => {
    onClose();
    setModal(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const getImageUrl = () => {
    if (brand.name === 'SALE') {
      return 'https://wg.dialogtab.com/proxy/insecure/q:70/plain/local:///export/570/279317/2.jpg';
    }
    return 'https://wg.dialogtab.com/proxy/insecure/q:70/plain/local:///export/881/252159/4.jpg';
  };

  return (
    <>
      {modal && (
        <div className='BrandModal__overlay'>
          <div className='BrandModal__modal'>
            <header className="BrandModal__header">
              <button className="BrandModal__back-button" onClick={handleClose}>
                <i className="arrow left icon"></i>
              </button>
              <h1 className='BrandModal__heading'>New Products</h1>
            </header>
            <div className='BrandModal__image-content'>
              <img
                src={getImageUrl()}
                alt='new product image'
                className='BrandModal__image'
              />
              <p id='item-id' className="hidden">2757-389</p>
              <p id='item-size' className="hidden">36-42</p>
              <p id='item-price' className="hidden">$19</p>
              <button className='BrandModal__add-to-cart-button' onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BrandModal;