import React, { useState, useEffect } from 'react';
import './Header.css';
import logoImage from '../assets/images/logo1.png';

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="logo" />
      </div>

      <nav className={`nav ${isMobile && menuOpen ? 'nav-open' : ''}`}>
        <a href="#destinations">Destinations</a>
        <a href="#hotels">Hotels</a>
        <a href="#flights">Flights</a>
        <a href="#bookings">Bookings</a>
      </nav>

      <div className="header-actions">
        <button className="btn-login">Login</button>
        <button className="btn-sign">Sign Up</button>
        <select className="lang-select">
          <option value="EN">EN</option>
          <option value="FR">FR</option>
        </select>
        {isMobile && (
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? '✖' : '☰'}
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
