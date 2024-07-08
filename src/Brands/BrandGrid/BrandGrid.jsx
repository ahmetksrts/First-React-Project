import React from 'react';
import "./BrandGrid.css";
import BrandTile from '../BrandTile/BrandTile.jsx';
import brands from "../brands.js";


function BrandGrid({onBrandClick}) {
    return (
      <div className="BrandGrid__brand-grid">
        {brands.map((brand, index) => (
          <BrandTile key={index} brand={brand} onClick={onBrandClick}/>
        ))}
      </div>
    );
  }

export default BrandGrid