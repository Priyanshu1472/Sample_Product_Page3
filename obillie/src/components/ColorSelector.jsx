import React from 'react';
import '../styles/ColorSelector.css'; // Assuming you have a CSS file for styling

// Color Selector Component
const ColorSelector = ({ colors, selectedColor, onColorSelect }) => {
    return (
      <div className="color-selector">
        <h3 className="selector-title">Color</h3>
        <div className="color-options">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => onColorSelect(color)}
              className={`color-swatch ${selectedColor.name === color.name ? 'active' : ''}`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>
    );
  };
export default ColorSelector;  