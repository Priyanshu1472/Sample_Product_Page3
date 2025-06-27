import React from 'react';
import '../styles/SizeSelector.css';

// Size Selector Component
const SizeSelector = ({ sizes, selectedSize, onSizeSelect }) => {
    return (
      <div className="size-selector">
        <h3 className="selector-title">Size</h3>
        <div className="size-options">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSizeSelect(size)}
              className={`size-option ${selectedSize === size ? 'active' : ''}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    );
  };
export default SizeSelector;  