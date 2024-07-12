/* Cart.jsx */
import React, { useState, useEffect } from 'react';
import './Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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
      <h2 className='Cart__title'>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className='Cart__item-list'>
            {cartItems.map((item, index) => (
              <li key={index} className='Cart__item'>
                <img className='Cart__added-cart-image' src={item.image} alt={item.name} />
                <div className='Cart__item-details'>
                  <p><strong>Brand:</strong> {item.name}</p>
                  <p><strong>ID:</strong> {item.id}</p>
                  <p><strong>Size:</strong> {item.size}</p>
                  <p><strong>Price:</strong> ${item.price}</p>
                  <p><strong>Quantity:</strong> {item.quantity}</p>
                  <div className='Cart__item-actions'>
                    <button onClick={() => updateQuantity(index, -1)}>-</button>
                    <button onClick={() => updateQuantity(index, 1)}>+</button>
                    <button onClick={() => removeItem(index)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className='Cart__total-price'>Total Price: ${totalPrice}</p>
          <button className='Cart__remove-all' onClick={clearCart}>Remove All</button>
        </>
      )}
    </div>
  );
}

export default Cart;