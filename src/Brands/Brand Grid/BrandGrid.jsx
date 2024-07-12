// BranGrid.jsx
import React from 'react';
import "./BrandGrid.css";
import brands from "../brands.js";
import BrandTile from '../Brand Tile/BrandTile.jsx';

function BrandGrid() {
    return (
      <div>
          <div className="BrandGrid__brand-grid">
            {brands.map((brand, index) => (
              <BrandTile key={index} brand={brand}/>
            ))}
          </div>
      </div>
    );
  }

export default BrandGrid;