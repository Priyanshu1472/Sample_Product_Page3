import React from 'react';
import { Heart } from 'lucide-react';
import '../styles/ProductGallery.css';

// Product Gallery Component
const ProductGallery = ({ images, selectedImage, onImageSelect }) => {
    return (
      <div className="product-gallery">
        <div className="main-image">
          <img src={selectedImage} alt="Product" />
          <div className="image-overlay">
            <Heart className="wishlist-btn" />
          </div>
        </div>
        <div className="thumbnail-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
              onClick={() => onImageSelect(image)}
            >
              <img src={image} alt={`Product ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };
export default ProductGallery;  