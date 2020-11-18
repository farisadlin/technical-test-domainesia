import React from 'react';
import "./HeroSection.css";

function HeroSection() {
    return (
      <div>
        <section className="hero-section">
          <div className="hero-container">
            <h1 className="hero-title">Best Web Hosting in Indonesia</h1>
            <p className="hero-desc">
              The best Indonesian web hosting service with the most complete
              hosting features and 24-hours support for your ease of achieving
              online success!
            </p>
            <button className="hero-btn">Choose Now</button>
          </div>
        </section>
      </div>
    );
}

export default HeroSection
