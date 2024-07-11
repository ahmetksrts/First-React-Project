// Cart.jsx
import React, {useState, useEffect} from 'react';
import "./Cart.css";

function Cart() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  
    return(
      <div className='Cart__cart-container'>
        <button className='Cart_cart-button'>Cart</button>
        <p>Your cart is empty.</p> {/* Initially should be empty */}
        
      </div>
    );
}

export default Cart;