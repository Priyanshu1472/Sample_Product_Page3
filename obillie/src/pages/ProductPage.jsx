import React, { useState } from 'react';
import Header from '../components/Header';
import ProductGallery from '../components/ProductGallery';
import ProductDetails from '../components/ProductDetails';
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductPage.css';
import img1 from '../assets/images1.jpeg';
import img2 from '../assets/images2.jpeg';
import img3 from '../assets/images3.jpeg';
import img4 from '../assets/images.jpeg';


// Main Product Page Component
const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(img2);
  const [selectedColor, setSelectedColor] = useState({ name: 'Black', value: '#000000' });
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const product = {
    title: 'Tailored Shirt',
    price: 999,
    originalPrice: 1299,
    rating: 4,
    reviews: 111,
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'White', value: '#FFFFFF' },
      { name: 'Red', value: '#FF0000' },
      { name: 'Blue', value: '#0066CC' },
      { name: 'Green', value: '#00AA00' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  };

  const images = [img1, img3, img2,  img3, img4, img2, img1, img2, img3, img4];

  return (
    <div className="product-page">
      <Header />
      <main className="main-content">
        <div className="product-container">
          <ProductGallery 
            images={images}
            selectedImage={selectedImage}
            onImageSelect={setSelectedImage}
          />
          <ProductDetails 
            product={product}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            quantity={quantity}
            onColorSelect={setSelectedColor}
            onSizeSelect={setSelectedSize}
            onQuantityChange={setQuantity}
          />
        </div>
        <ProductInfo />
      </main>
    </div>
  );
};

export default ProductPage;