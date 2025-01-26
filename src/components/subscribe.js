import React, { useState } from "react";
import "./subscribe.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="subscribe-container">
      <div className="subscribe-content">
        <h2>Subscribe to get information, latest news and other interesting offers about Jadoo</h2>
        <div className="subscribe-form">
          <input
            type="email"
            placeholder="Your email"
            className="email-input"
            value={email}
            onChange={handleInputChange}
          />
          <button className="subscribe-button" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;