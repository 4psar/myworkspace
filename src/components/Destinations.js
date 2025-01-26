import React from 'react';
import './Destinations.css';

import RomeImage from '../assets/images/rome.jpg';
import LondonImage from '../assets/images/london.jpeg';
import EuropeImage from '../assets/images/europe.jpg';

function Destinations() {
  const destinations = [
    { image: RomeImage, location: 'Rome, Italy', price: '$5k', duration: '10 Days Trip' },
    { image: LondonImage, location: 'London, UK', price: '$4.5k', duration: '8 Days Trip' },
    { image: EuropeImage, location: 'Full Europe', price: '$10k', duration: '20 Days Trip' },
  ];

  return (
    <section className="destinations">
      <h3>TOP SELLING</h3>
      <h2>Top Destinations</h2>
      <div className="destinations-grid">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.image} alt={destination.location} />
            <h3>{destination.location}</h3>
            <p>{destination.duration}</p>
            <p>{destination.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;
