import React from 'react';
import brands from "../brands.js";
import "./BrandTile.css"

  function BrandTile({ brand }) {
    return (
      <div className="BrandTile__brand-tile" onClick={()=>onclick(brand)}>
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

export default BrandTile