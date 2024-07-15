/* CartModal.jsx */

import React, { useState, useEffect } from 'react';
import "./CartModal.css";
import { Button } from 'semantic-ui-react'
import BrandModal from '../BrandModal/BrandModal.jsx';
import Header from '../Header/Header';

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

  return (
    <div className='CartModal__overlay'>
      <div className='CartModal__container'>
        <Header/>
        <Button className='CartModal__cart-button'>Cart</Button>

        <div className='CartModal__content'>
        {cartItems.length==0 ? (
          <p> Cart is empty </p>
        ) : (
          <>
          </>
        )}
        </div>
      </div>
    </div>
  );
}

export default CartModal;