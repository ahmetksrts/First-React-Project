//
import React, { useState } from "react";
import { Icon } from 'semantic-ui-react';
import "./SearchModal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleTrueModal = () => {
    setModal(true);
  };

  const toggleFalseModal = () => {
    setModal(false);
  };

  if(modal) {
    document.body.classList.add('searchmodal__active-modal')
  } else {
    document.body.classList.remove('searchmodal__active-modal')
  }

  return (
    <>
      <button onClick={toggleTrueModal} className="searchmodal__btn-modal">
      <i class="search icon"></i>
      </button>

      {modal && (
        <div className="searchmodal__overlay">
          <div className="searchmodal__modal">
            <header className="searchmodal__header">
              <button className="searchmodal__back-button" onClick={toggleFalseModal}>
              <i class="arrow left icon"></i>
              </button>
              <div className="searchmodal__search-bar">
                <input type="text" placeholder="Product Search"/>
                
              </div>
            </header>
            <main className="searchmodal__main-content">
              <h1>Enter barcode or product code.</h1>
              <hr/>
              <button className="searchmodal__close-button" onClick={toggleFalseModal}>
                Close
              </button>
            </main>
          </div>
        </div>
      )}
    </>
  );
}