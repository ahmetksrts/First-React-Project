// BrandTile.jsx
import React, {useState} from 'react';
import "./BrandTile.css";
import BrandModal from '../../BrandModal/BrandModal.jsx';

function BrandTile({ brand }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const BrandClicked = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div className="BrandTile__brand-tile" onClick={BrandClicked}>
        {isModalOpen && <BrandModal onClose={closeModal} brand={brand} />}
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