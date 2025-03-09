import React from "react";
import { Link } from "react-router-dom";
import servicesData from "../data/servicesData";
import "../styles/Services.css"; 

function Services() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Link to={`/services/${service.id}`} className="learn-more-btn">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
