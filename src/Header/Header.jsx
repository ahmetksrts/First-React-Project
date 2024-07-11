/* Header.jsx */

import React, { useState } from 'react';
import Modal from '../SearchModal/SearchModal.jsx';
import "./Header.css";
import 'semantic-ui-css/semantic.min.css';
import CartModal from '../CartModal/CartModal.jsx';

function Header() {
  const [cartModalOpen, setCartModalOpen] = useState(false);

  const refreshOnClick = () => {
    window.location.reload();
  };

  const toggleCartModal = () => {
    setCartModalOpen(!cartModalOpen);
  };

  return (
    <header className="header">
      <div className="header__search-bar">
        <button className="header__button" onClick={refreshOnClick}> Beethoven </button>
        <Modal />
      </div>
      <div className="header__language-select">
        <ul>
          <li className="header__dropdown">
            <span className="header__dropbtn">
              <i className="gb uk flag"></i>EN<i className="caret down icon"></i>
            </span>
            <div className="header__dropdown-content">
              <span><i className="ru flag"></i>RU</span>
              <span><i className="fr flag"></i>FR</span>
              <span><i className="tr flag"></i>TR</span>
              <span><i className="sa flag"></i>AR</span>
            </div>
          </li>
        </ul>
      </div>
      <button className="header__cart-button" onClick={toggleCartModal}>Cart</button>
      {cartModalOpen && <CartModal onClose={toggleCartModal} />}
    </header>
  );
}

export default Header;
