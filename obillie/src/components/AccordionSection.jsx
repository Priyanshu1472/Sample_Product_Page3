import React from 'react';
import {ChevronDown, ChevronUp } from 'lucide-react';
import '../styles/AccordionSection.css'; // Assuming you have a CSS file for styling

// Accordion Section Component
const AccordionSection = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="accordion-section">
      <button className="accordion-header" onClick={onToggle}>
        <span>{title}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionSection;    