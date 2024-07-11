import React, {useState, useEffect} from 'react';
import "./Cart.css";

function Cart() {
    return(
      <div className='Cart__cart-container'>
        <button className='Cart_cart-button'>Cart</button>
        <p>Your cart is empty.</p>
        
      </div>
    );
}

export default Cart;