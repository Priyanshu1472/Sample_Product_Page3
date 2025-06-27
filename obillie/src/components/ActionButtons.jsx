import React from 'react';
import '../styles/ActionButtons.css'; // Assuming you have a CSS file for styling

// Action Buttons Component
const ActionButtons = ({ onAddToCart, onBuyNow }) => {
    return (
      <div className="action-buttons">
        <button onClick={onAddToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
        <button onClick={onBuyNow} className="buy-now-btn">
          Buy Now
        </button>
      </div>
    );
  };
export default ActionButtons;  