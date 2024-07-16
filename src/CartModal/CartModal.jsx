/* CartModal.jsx */

import React, { useState, useEffect } from 'react';
import "./CartModal.css";
import { Button } from 'semantic-ui-react'
import BrandModal from '../BrandModal/BrandModal.jsx';
import Header from '../Header/Header';
import { Form, TextArea } from 'semantic-ui-react'


const CartModal = ({ onClose }) => {
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
    <div className='CartModal__overlay'>
      <div className='CartModal__container'>
        <Header/>
        <Button className='CartModal__cart-button'>Cart</Button>

        <div className='CartModal__content'>
        {cartItems.length==0 ? (
          <p className='CartModal__cart-message'> Cart is empty </p>
        ) : (
          <>
          <ul className='CartModal__item-list'>
            {cartItems.map((item, index) => (
              <li key={index} className='CartModal__item' onClick={() => handleProductClick(item)}>
                <img className='CartModal__added-cart-image' src={item.image} alt={item.name} />
                <div className='CartModal__item-details'>
                  <p className='CartModal__item-name'>{item.id}</p>
                  <p className='CartModal__item-price'>${item.price}</p>
                  <div className='CartModal__item-actions'>
                    <Button onClick={(e) => { e.stopPropagation(); updateQuantity(index, -1); }}>-</Button>
                    <span style={{padding:"10px",background:"black"}}>{item.quantity}</span>
                    <Button onClick={(e) => { e.stopPropagation(); updateQuantity(index, 1); }}>+</Button>
                  </div>

                  <Button color='red' className='Cart__remove-button' onClick={(e) => { e.stopPropagation(); removeItem(index); }} >Remove</Button>
                </div>
              </li>
            ))}
          </ul>
          <div className='CartModal__order-note'>
            <Form>
              <TextArea style={{resize:"none"}} placeholder='Order note' />
            </Form>
          </div>
          <div className='CartModal__summary'>
            <p>Set: {cartItems.length}</p>
            <p className='CartModal__total-price'>Total Price: ${totalPrice}</p>
          </div>
          <button className='CartModal__remove-all' onClick={clearCart}>Remove All</button>

          </>
        )}
        {selectedProduct && (
          <BrandModal onClose={() => setSelectedProduct(null)} brand={selectedProduct} />
        )}
        </div>
      </div>
    </div>
  );
}

export default CartModal;