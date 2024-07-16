// BrandGrid.jsx
import React, { useState } from 'react';
import "./BrandGrid.css";
import brands from "../brands.js";
import BrandTile from '../Brand Tile/BrandTile.jsx';
import BrandModal from '../../BrandModal/BrandModal.jsx';
import ListBlock from '../List Block/ListBlock.jsx';

function BrandGrid() {
    const [selectedBrand, setSelectedBrand] = useState(null);

    const handleBrandClick = (brand) => {
      setSelectedBrand(brand);
    };

    const handleCloseModal = () => {
      setSelectedBrand(null);
    };

    return (
      <div className="BrandGrid__container">
        <div className="BrandGrid__brand-grid">
          {brands.map((brand, index) => (
            <BrandTile key={index} brand={brand} onBrandClick={handleBrandClick} />
          ))}
        </div>
        {selectedBrand && (
          <BrandModal onClose={handleCloseModal} brand={selectedBrand} />
        )}
        <ListBlock/>
      </div>
    );
}

export default BrandGrid;