import React, {useState} from 'react';
import "./BrandTile.css";
import brands from "../brands.js";
import BrandModal from '../../BrandModal/BrandModal.jsx';

function BrandTile({ brand }) {
    const [clicked, setClicked] = useState(false);
  
    const BrandClicked = () => {
      setClicked(true);
    };
  
    const closeModal = () => {
      setClicked(false);
    };
  
    return (
      <div className="BrandTile__brand-tile" onClick={BrandClicked}>
        {clicked && <BrandModal onClose={closeModal} />}
        {brand.color ? (
            <div className="BrandTile__brand-name" style={{backgroundColor: brand.color}}>
              {brand.name}
            </div>
          ) : (
            <img src={brand.logo} alt={brand.name} className="BrandTile__brand-logo" />
          )}
      </div>
    );
}

export default BrandTile;