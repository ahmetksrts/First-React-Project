// BrandTile.jsx
import React from 'react';
import "./BrandTile.css";

function BrandTile({ brand, onBrandClick }) {
    return (
      <div className="BrandTile__brand-tile" onClick={() => onBrandClick(brand)}>
        <img src={brand.logo} alt={brand.name} className="BrandTile__brand-logo" />
      </div>
    );
}

export default BrandTile;