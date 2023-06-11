import React from "react";
import homeAdvisorImg from "../img/HomeAdvisor.png";
const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1 className="hero-title">
          Your Trusted Partner for Lawncare Excellence
        </h1>
        <img src={homeAdvisorImg} alt="HomeAdvisor 5-start Ratings" />
        <p className="hero-description">
          Transforming Your Outdoor Space Professional Landscaping Services
        </p>
        <br />
        <button className="hero-button">Get a Free Quote</button>{" "}
      </div>
    </div>
  );
};

export default HeroBanner;
