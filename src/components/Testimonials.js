import React, { useState } from "react";
import "./Testimonials.css";
import axonImage from '../assets/images/axon.png';
import jetstarImage from '../assets/images/Jetstar.png';
import expediaImage from '../assets/images/expedia.png';
import qantusImage from '../assets/images/Qantas-Logo.png';
import alitaliaImage from '../assets/images/alitalia.png';
import indianmanImage from '../assets/images/indianman.png';
import usmanImage from '../assets/images/usman.png';

const testimonials = [
  {
    text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    name: "Mike Taylor",
    location: "Lahore, Pakistan",
    image: indianmanImage, 
  },
  {
    text: "Amazing service! The team was very professional and the experience was delightful. Highly recommended!",
    name: "Chris Thomas",
    location: "CEO of Red Button",
    image: usmanImage, 
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonial-container">
      <h3>TESTIMONIALS</h3>
      <h1 className="testimonial-title">What People Say About Us.</h1>
      <div className="testimonial-card">
        <div className="testimonial-content">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="testimonial-avatar"
          />
          <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
          <p className="testimonial-name">{testimonials[currentIndex].name}</p>
          <p className="testimonial-location">{testimonials[currentIndex].location}</p>
        </div>
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
      <div className="brands">
        <img src={axonImage} alt="axonImage" />
        <img src={jetstarImage} alt="jetstarImage" />
        <img src={expediaImage} alt="expediaImage" />
        <img src={qantusImage} alt="qantusImage" />
        <img src={alitaliaImage} alt="alitaliaImage" />
      </div>
    </div>
  );
};

export default TestimonialSlider;
