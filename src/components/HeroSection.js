import React from 'react';
import './HeroSection.css';
import travellerImage from '../assets/images/travel.png';

import { FaPlay } from 'react-icons/fa';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h3>BEST DESTINATIONS AROUND THE WORLD</h3>
        <h1>Travel, enjoy and live a new and full life</h1>
        <p>
          Built Wicket longer admire do barton vanity itself do in it.
          Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-find">Find out more</button>
          <div class="ply-btn">
            <button className="btn play-demo">
            <FaPlay className="play-icon" /> 
            </button><p>Play Demo</p>
          </div>
          
        </div>
      </div>
      <div className="biscuit-shapes">
      </div>
      <div className="hero-image">
        <img src={travellerImage} alt="Traveler" />
      </div>
    </section>
  );
}

export default HeroSection;
