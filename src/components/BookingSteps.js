import React, { useState, useEffect } from "react";
import "./BookingSteps.css";
import greeceImage from "../assets/images/greece.jpg";
import romeImage from "../assets/images/rome.jpg";
import starImage from '../assets/images/star1.png';

const BookingSteps = () => {
  const [trip, setTrip] = useState({
    title: "Trip to Greece",
    image: greeceImage,
    progress: 40,
    date: "14-29 June",
    organizer: "Robbin Joseph",
    peopleGoing: 24,
  });

  useEffect(() => {
    const trips = [
      {
        title: "Trip to Greece",
        image: greeceImage,
        progress: 40,
        date: "14-29 June",
        organizer: "Robbin Joseph",
        peopleGoing: 24,
      },
      {
        title: "Trip to Rome",
        image: romeImage,
        progress: 60,
        date: "20-30 July",
        organizer: "Sophia Smith",
        peopleGoing: 18,
      },
    ];
  
    let currentIndex = 0;
  
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % trips.length; 
      setTrip(trips[currentIndex]);
    }, 3000);
  
    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="booking-steps">
      <p className="subtitle">Easy and Fast</p>
      <h2>Book Your Next Trip In 3 Easy Steps</h2>

      <div className="content-container">
        {/* Steps Section */}
        <div className="steps-container">
          <div className="step">
            <div className="icon-wrapper">
              <span className="icon">🗺️</span>
            </div>
            <div className="step-content">
              <h3>Choose Destination</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="step">
            <div className="icon-wrapper">
              <span className="icon">💳</span>
            </div>
            <div className="step-content">
              <h3>Make Payment</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="step">
            <div className="icon-wrapper">
              <span className="icon">✈️</span>
            </div>
            <div className="step-content">
              <h3>Reach Airport on Selected Date</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="star1">
            <img src={starImage} alt="star"/>
          </div>
        </div>

        <div className="trip-card">
          <img src={trip.image} alt={trip.title} className="trip-image" />
          <div className="trip-details">
            <h3>{trip.title}</h3>
            <p>{trip.date} | by {trip.organizer}</p>
            <div className="trip-icons">
              <span>🗺️</span>
              <span>📍</span>
              <span>✈️</span>
            </div>
            <p className="trip-stats">{trip.peopleGoing} people going</p>
          </div>
          <div className="ongoing-trip">
            <p>Ongoing</p>
            <h4>{trip.title}</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${trip.progress}%` }}></div>
            </div>
            <p className="progress-text">{trip.progress}% completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
