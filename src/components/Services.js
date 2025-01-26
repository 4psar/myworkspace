import React from 'react';
import './Services.css';
import sateliteImage from '../assets/images/satelite.png';
import flightImage from '../assets/images/flight.png';
import micImage from '../assets/images/mic.png';
import settingsImage from '../assets/images/settings.png';
import starImage from '../assets/images/star.png';

function Services() {
  const services = [
    { image: sateliteImage, title: 'Calculated Weather', desc: 'Built Wicket longer admire do barton vanity itself do in it' },
    { image: flightImage, title: 'Best Flights', desc: 'Engrossed listening. Park gate sell they west hard for the.' },
    { image: micImage, title: 'Local Events', desc: 'Barton vanity itself do in it. Prefered to men it engrossed listening.' },
    { image: settingsImage, title: 'Customization', desc: 'We deliver outsourced aviation services for millitary customers' },];

  return (
    <section className="services">
      <h3>CATEGORY</h3>
      <h1>We Offer Best Services</h1>
      <div className="star">
          <img src={starImage} alt="star"/>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className={`service-card service-card-${index}`}>
            <img src={service.image} alt={service} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default Services;
