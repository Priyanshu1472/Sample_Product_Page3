import React from 'react';
import { Search, User, ShoppingCart } from 'lucide-react';
import '../styles/Header.css'; // Assuming you have a CSS file for styling

// Header Component
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            Sample
          </div>
          <nav className="main-nav">
            <a href="/men" className="nav-item">MEN</a>
            <a href="/women" className="nav-item">WOMEN</a>
          </nav>
        </div>
        <div className="header-right">
          <div className="search-bar">
            <input type="text" placeholder="Search products..." />
            <Search className="search-icon" />
          </div>
          <div className="header-icons">
            <User className="icon" />
            <div className="cart-wrapper">
              <ShoppingCart className="icon" />
              <span className="cart-count">2</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;









