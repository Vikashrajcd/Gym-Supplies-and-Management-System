import React from "react";
import { Link } from "react-router-dom";
import "../styles/Membership.css";

function Membership() {
  return (
    <div className="membership-container">
      <video autoPlay loop muted className="background-video">
        <source src="/assets/gym-background.mp4" type="video/mp4" />
      </video>

      <h1>Choose Your Membership Plan</h1>
      <p>We offer flexible membership plans to suit your fitness needs.</p>

      <div className="membership-plans">
        <div className="plan basic-plan">
          <h2>Basic Plan</h2>
          <p>Price: ₹999/month</p>
          <Link to="/signup"><button>Join Now</button></Link>
        </div>
        <div className="plan standard-plan">
          <h2>Standard Plan</h2>
          <p>Price: ₹2,499/3 months</p>
          <Link to="/signup"><button>Join Now</button></Link>
        </div>
        <div className="plan premium-plan">
          <h2>Premium Plan</h2>
          <p>Price: ₹5,299/year</p>
          <Link to="/signup"><button>Join Now</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Membership;
