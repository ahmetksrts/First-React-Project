import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react'
import './App.css'; // You'll need to create this CSS file for styling
import { GrFlagFill } from "react-icons/gr"; // ilk olarak import Ediyoruz 
// daha sonrasında bunu bir bileşen gibi kullanıyoruz 


const brands = [
  { name: 'NEW IN', color: 'yellow' },
  { name: 'SALE', color: 'red' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  // ... add all other brands here
];

function Header() {
  return (
    <header className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button><i class="search icon"></i></button>

      </div>
      <div className="language-select">
        <ul>
          <li className="dropdown">
            <span className="dropbtn"><i class="gb uk flag"></i>EN<i class="caret down icon"></i></span>
            <div className="dropdown-content">
              <span><i class="ru flag"></i>RU</span>
              <span><i class="fr flag"></i>FR</span>
              <span><i class="tr flag"></i>TR</span>
              <span><i class="sa flag"></i>AR</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="cart">Cart</div>
    </header>
  );
}

function BrandTile({ brand }) {
  return (
    <div className="brand-tile">
      {brand.color ? (
        <div className="brand-name" style={{backgroundColor: brand.color}}>
          {brand.name}
        </div>
      ) : (
        <img src={brand.logo} alt={brand.name} className="brand-logo" />
      )}
    </div>
  );
}

function BrandGrid() {
  return (
    <div className="brand-grid">
      {brands.map((brand, index) => (
        <BrandTile key={index} brand={brand} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BrandGrid />
      </main>
    </div>
  );
}

export default App;