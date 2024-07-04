import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react';
import './App.css'; // You'll need to create this CSS file for styling
import { GrFlagFill } from "react-icons/gr"; // ilk olarak import Ediyoruz 
import Modal from './SerachModal/Modal.jsx';
import BrandModal from './BrandModal/BrandModal.jsx';
// daha sonrasında bunu bir bileşen gibi kullanıyoruz 


const brands = [
  { name: 'NEW IN', color: 'yellow' },
  { name: 'SALE', color: 'red' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  { name: 'AZALEA', logo: 'azalea-logo.png' },
  // ... add all other brands here
];

const refreshToClick = () => {
  window.location.reload();
};



function Header() {
  return (
    <header className="app_header">
      <div className="app_search-bar">
        <button className='app_button' onClick={refreshToClick}> Beethoven </button>
        <Modal/>
      </div>
      <div className="app_language-select">
        <ul>
          <li className="app_dropdown ">
            <span className="app_dropbtn"><i class="gb uk flag"></i>EN<i class="caret down icon"></i></span>
            <div className="app_dropdown-content">
              <span><i class="ru flag"></i>RU</span>
              <span><i class="fr flag"></i>FR</span>
              <span><i class="tr flag"></i>TR</span>
              <span><i class="sa flag"></i>AR</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="app_cart">Cart</div>
    </header>
  );
}



function BrandTile({ brand }) {
  return (
    <div className="app_brand-tile" onClick={()=>onclick(brand)}>
      {brand.color ? (
        <div className="app_brand-name" style={{backgroundColor: brand.color}}>
          {brand.name}
        </div>
      ) : (
        <img src={brand.logo} alt={brand.name} className="app_brand-logo" />
      )}
    </div>
  );
}

function BrandGrid(onBrandClick) {
  return (
    <div className="app_brand-grid">
      {brands.map((brand, index) => (
        <BrandTile key={index} brand={brand} onClick={onBrandClick}/>
      ))}
    </div>
  );
}

function App() {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

  const closeModal = () => {
    setSelectedBrand(null);
  };

  return (
    <div className="app_App">
      <Header />
      <main>
        <BrandGrid onBrandClick={handleBrandClick}/>
      </main>
      {selectedBrand && (
        <BrandModal brand={selectedBrand} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;