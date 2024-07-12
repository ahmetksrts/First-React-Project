// Cart.jsx
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

  const decreaseQuantity = (index) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    if (storedCart[index].quantity > 1) {
      storedCart[index].quantity -= 1;
    } else {
      storedCart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(storedCart));
    
    const event = new Event('cartUpdated');
    window.dispatchEvent(event);
  };

  const removeItem = (index) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    storedCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(storedCart));
    
    const event = new Event('cartUpdated');
    window.dispatchEvent(event);
  };

  const clearCart = () => {
    localStorage.setItem('cart', JSON.stringify([]));
    
    const event = new Event('cartUpdated');
    window.dispatchEvent(event);
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
      <button className='Cart_cart-button'>Cart</button>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img className='Cart__added-cart-image' src={item.image} alt='item' width='100'/>
                <br/>
                ID: {item.id}, Size: {item.size}, Price: ${item.price}, Quantity: {item.quantity}
                <button onClick={() => decreaseQuantity(index)}>-</button>
                <button onClick={() => removeItem(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total Price: ${totalPrice}</p>
          <button onClick={clearCart}>Remove All</button>
        </>
      )}
    </div>
  );
}

export default Cart;