import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "../data/servicesData";

function ServiceDetail() {
  const { id } = useParams(); // Get the dynamic ID from URL
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <h2>Service Not Found</h2>;
  }

  return (
    <div className="service-detail">
      <img src={service.image} alt={service.title} />
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <a href="/membership" className="cta-button">Join Now</a>
    </div>
  );
}

export default ServiceDetail;
