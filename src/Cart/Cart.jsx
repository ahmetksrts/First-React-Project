/* Cart.jsx */

import React, { useState, useEffect } from 'react';
import './Cart.css';
import BrandModal from '../BrandModal/BrandModal.jsx';
import { Form, TextArea,Button } from 'semantic-ui-react'



function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const updateCartItems = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
    calculateTotalPrice(storedCart);
  };

  const calculateTotalPrice = (items) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total.toFixed(2));
  };

  const updateQuantity = (index, change) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += change;
    if (updatedCart[index].quantity <= 0) {
      updatedCart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCartItems();
  };

  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCartItems();
  };

  const clearCart = () => {
    localStorage.setItem('cart', JSON.stringify([]));
    updateCartItems();
  };

  const handleProductClick = (item) => {
    setSelectedProduct(item);
  };

  useEffect(() => {
    updateCartItems();

    const handleCartUpdate = () => {
      updateCartItems();
    };

    window.addEventListener('cartUpdated', handleCartUpdate);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  return (
    <div className='Cart__cart-container'>

      <button className='Cart__container-button'>Cart</button>
      <div className='Cart__content'>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className='Cart__item-list'>
            {cartItems.map((item, index) => (
              <li key={index} className='Cart__item' onClick={() => handleProductClick(item)}>
                <img className='Cart__added-cart-image' src={item.image} alt={item.name} />
                <div className='Cart__item-details'>
                  <p className='Cart__item-name'>{item.id}</p>
                  <p className='Cart__item-price'>${item.price}</p>
                  <div className='Cart__item-actions'>
                    <Button onClick={(e) => { e.stopPropagation(); updateQuantity(index, -1); }}>-</Button>
                    <span style={{padding:"10px",background:"#fff"}}>{item.quantity}</span>
                    <Button onClick={(e) => { e.stopPropagation(); updateQuantity(index, 1); }}>+</Button>
                  </div>
                </div>
                
                <Button color='red' className='Cart__remove-button' onClick={(e) => { e.stopPropagation(); removeItem(index); }} >Remove</Button>
              </li>
            ))}
          </ul>
          <div className='Cart__order-note'>
            
            <Form>
              <TextArea style={{resize:"none"}} placeholder='Order note' />
            </Form>
          </div>
          <div className='Cart__summary'>
            <p>Set: {cartItems.length}</p>
            <p className='Cart__total-price'>Total Price: ${totalPrice}</p>
          </div>
          <button className='Cart__remove-all' onClick={clearCart}>Remove All</button>
        </>
      )}
      {selectedProduct && (
        <BrandModal onClose={() => setSelectedProduct(null)} brand={selectedProduct} />
      )}

      </div>
    </div>
  );
}

export default Cart;