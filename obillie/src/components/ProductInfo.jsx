import React, { useState } from 'react';
import '../styles/ProductInfo.css';
import AccordionSection from './AccordionSection'; // Assuming you have an AccordionSection component

// Product Info Component
const ProductInfo = () => {
  const [openSections, setOpenSections] = useState({
    delivery: false,
    description: false,
    sizeFit: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="product-info">
      <AccordionSection
        title="Delivery Details"
        isOpen={openSections.delivery}
        onToggle={() => toggleSection('delivery')}
      >
        <p>Free shipping on orders over ₹1000. Standard delivery takes 3-5 business days.</p>
        <p>Express delivery available for ₹120 (1-2 business days).</p>
      </AccordionSection>

      <AccordionSection
        title="Product Description"
        isOpen={openSections.description}
        onToggle={() => toggleSection('description')}
      >
        <p>Tailored with intention and designed without boundaries, The Arin Blazer is where structure meets soul. Crafted in a clean, minimalist silhouette that drapes effortlessly across all bodies, it’s a quiet rebellion against the expected.</p>
        <ul>
          <li>The Arin carries confidence, comfort, and a universal kind of cool.</li>
          <li>Dry clean only</li>
          <li>Limted to just 10 pieces Worldwide</li>
        </ul>
      </AccordionSection>

      <AccordionSection
        title="Size & Fit"
        isOpen={openSections.sizeFit}
        onToggle={() => toggleSection('sizeFit')}
      >
        <p>Model is 184 cms tall and is wearing an S</p>
        <p>Available in XS S M L XL XXL</p>
      </AccordionSection>
    </div>
  );
};

export default ProductInfo;