// this is App.jsx
import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react';
import './App.css'; // You'll need to create this CSS file for styling
import { GrFlagFill } from "react-icons/gr"; // ilk olarak import Ediyoruz 
import Modal from './SearchModal/Modal.jsx';
import Header from './Header/Header.jsx';
import BrandGrid from './Brands/BrandGrid/BrandGrid.jsx';

// daha sonrasında bunu bir bileşen gibi kullanıyoruz 

function App() {

  return (
    <div className="app_App">
      <Header/>
      <main>
        <BrandGrid/>
      </main>
    </div>
  );
}

export default App;