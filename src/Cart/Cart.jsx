// Cart.jsx

import React, { useState, useEffect } from 'react';
import './Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const updateCartItems = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  };

  const removeItem = (index) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    if (storedCart[index].quantity > 1) {
      storedCart[index].quantity -= 1;
    } else {
      storedCart.splice(index, 1); // Remove item from array if quantity is 1
    }
    localStorage.setItem('cart', JSON.stringify(storedCart));
    
    // Dispatch a custom event to trigger re-render
    const event = new Event('cartUpdated');
    window.dispatchEvent(event);
  };

  useEffect(() => {
    updateCartItems(); // Initial load

    // Listen to custom event
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
      <button className='Cart_cart-button'>Cart</button>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img className='Cart__added-cart-image' src={item.image} alt='item' width='100'/>
              <br/>
              ID: {item.id}, Size: {item.size}, Price: {item.price}, Quantity: {item.quantity}
              <button onClick={() => removeItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;