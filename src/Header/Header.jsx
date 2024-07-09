import React, {useState} from 'react'
import Modal from '../SearchModal/SearchModal.jsx';
import "./Header.css";
import 'semantic-ui-css/semantic.min.css';



function Header() {
  const refreshOnClick=()=>{
    window.location.reload();
  }
    return (
      <header className="header">
        <div className="header__search-bar">
          <button className="header__button" onClick={refreshOnClick}> Beethoven </button>
          <Modal/>
        </div>
        <div className="header__language-select">
          <ul>
            <li className="header__dropdown ">
              <span className="header__dropbtn"><i class="gb uk flag"></i>EN<i class="caret down icon"></i></span>
              <div className="header__dropdown-content">
                <span><i class="ru flag"></i>RU</span>
                <span><i class="fr flag"></i>FR</span>
                <span><i class="tr flag"></i>TR</span>
                <span><i class="sa flag"></i>AR</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="header__cart">Cart</div>
      </header>
    );
  }

export default Header