/* CartModal.jsx */

import React from 'react';
import "./CartModal.css";

const CartModal = ({ onClose }) => {
  return (
    <div className='CartModal__overlay'>
      <div className='CartModal'>
        <p className='CartModal__p'>Cart sdsffsöda</p>
        <button className='CartModal__close-button' onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CartModal;
