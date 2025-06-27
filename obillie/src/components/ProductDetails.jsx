import React from 'react';
import { Star } from 'lucide-react';
import '../styles/ProductDetails.css';
import ColorSelector from '../components/ColorSelector';
import SizeSelector from '../components/SizeSelector';
import QuantitySelector from '../components/QuantitySelector';
import ActionButtons from '../components/ActionButtons';
import SocialShare from '../components/SocialShare';

// Product Details Component
const ProductDetails = ({ product, selectedColor, selectedSize, quantity, onColorSelect, onSizeSelect, onQuantityChange }) => {
    return (
      <div className="product-details">
        <div className="product-header">
          <h1 className="product-title">{product.title}</h1>
          <div className="product-rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`star ${i < product.rating ? 'filled' : ''}`} />
            ))}
            <span className="rating-text">({product.reviews} reviews)</span>
          </div>
          <div className="product-price">
            <span className="current-price">₹{product.price}</span>
            {product.originalPrice && (
              <span className="original-price">₹{product.originalPrice}</span>
            )}
          </div>
        </div>
  
        <ColorSelector 
          colors={product.colors} 
          selectedColor={selectedColor} 
          onColorSelect={onColorSelect} 
        />
        
        <SizeSelector 
          sizes={product.sizes} 
          selectedSize={selectedSize} 
          onSizeSelect={onSizeSelect} 
        />
        
        <QuantitySelector 
          quantity={quantity} 
          onQuantityChange={onQuantityChange} 
        />
        
        <ActionButtons 
          onAddToCart={() => console.log('Added to cart')}
          onBuyNow={() => console.log('Buy now')}
        />
        
        <SocialShare />
      </div>
    );
  };
  
export default ProductDetails;  