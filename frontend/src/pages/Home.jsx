import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import servicesData from "../data/servicesData"; 

function Home() {
  return (
    <div className="home-container">
      
      <section className="hero-section">
        <img src="/assets/gymback.jpg" alt="Gym Background" className="hero-bg" />
        <div className="hero-content">
          <h1>Welcome to Phoenix Fitness</h1>
          <p>Your journey to fitness starts here.</p>
          <a href="/membership" className="cta-button">Join Now</a>
        </div>
      </section>

      
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-item">
              <img src={service.image} alt={service.title} />
              <p>{service.title}</p>
              <Link to={`/services/${service.id}`} className="learn-more-btn">Learn More</Link>
            </div>
          ))}
        </div>
      </section>

      
      <section className="free-trial">
        <h2>Try Us for Free!</h2>
        <p>Get a <strong>7-day free trial</strong> and explore our facilities, trainers, and workouts.</p>
        <Link to="/signup" className="cta-button">Start Free Trial</Link>
      </section>
    </div>
  );
}

export default Home;
