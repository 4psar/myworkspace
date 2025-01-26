import React, { useState } from "react";
import "./Footer.css";
import facebookImage from '../assets/images/facebook.png';
import instagramImage from '../assets/images/instagram.png';
import twitterImage from '../assets/images/twitter.png';
import playstoreImage from '../assets/images/playstore.png';
import applestoreImage from '../assets/images/applestore.png';

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <footer className={`footer ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="footer-left">
        <h1 className="footer-logo">Jadoo.</h1>
        <p className="footer-description">
          Book your trip in minute, get full <br /> control for much longer.
        </p>
        <button onClick={toggleTheme} className="theme-toggle-button">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div className="footer-middle">
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/mobile">Mobile</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li><a href="/help">Help/FAQ</a></li>
            <li><a href="/press">Press</a></li>
            <li><a href="/affiliates">Affiliates</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>More</h3>
          <ul>
            <li><a href="/airlinefees">Airline Fees</a></li>
            <li><a href="/airline">Airline</a></li>
            <li><a href="/low-fare-tips">Low Fare Tips</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-right">
        <div className="social-icons">
          <span className="icon"><img src={facebookImage} alt="facebook" /></span>
          <span className="icon"><img src={instagramImage} alt="instagram" /></span>
          <span className="icon"><img src={twitterImage} alt="twitter" /></span>
        </div>
        <h3>Discover our app</h3>
        <div className="app-buttons">
          <span className="pstores"><img src={playstoreImage} alt="Google Play" /></span>
          <span className="astores"><img src={applestoreImage} alt="Apple Store" /></span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>All rights reserved @jadoo.co</p>
      </div>
    </footer>
  );
};

export default Footer;
