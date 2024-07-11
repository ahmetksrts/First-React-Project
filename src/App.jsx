// this is App.jsx
import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react';
import './App.css'; // You'll need to create this CSS file for styling
import { GrFlagFill } from "react-icons/gr"; // ilk olarak import Ediyoruz 
import Modal from './SearchModal/SearchModal.jsx';
import Header from './Header/Header.jsx';
import CartModal from './CartModal/CartModal.jsx';
import brands from "./Brands/brands.js";
import BrandModal from './BrandModal/BrandModal.jsx';
import BrandGrid from './Brands/Brand Grid/BrandGrid.jsx';
import Cart from './Cart/Cart.jsx';

// daha sonrasında bunu bir bileşen gibi kullanıyoruz 



function App() {

  return (
    <div className="App">
      
      <Header/>
      <div className="App__content">
        <div className="App__main">
          
          <BrandGrid/>
          
        </div>
        <Cart/>
        
        
      </div>
    </div>
  );
}

export default App;