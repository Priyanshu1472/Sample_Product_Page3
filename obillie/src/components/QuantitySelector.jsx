import React from 'react';
import {  Plus, Minus, } from 'lucide-react';
import '../styles/QuantitySelector.css';

// Quantity Selector Component
const QuantitySelector = ({ quantity, onQuantityChange }) => {
    return (
      <div className="quantity-selector">
        <h3 className="selector-title">Quantity</h3>
        <div className="quantity-controls">
          <button
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            className="quantity-btn"
          >
            <Minus />
          </button>
          <span className="quantity-display">{quantity}</span>
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className="quantity-btn"
          >
            <Plus />
          </button>
        </div>
      </div>
    );
  };
export default QuantitySelector;  