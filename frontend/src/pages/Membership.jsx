import React from "react";
import "../styles/Membership.css"; // Import CSS for styling

function Membership() {
  return (
    <div className="membership-container">
      <h1>Choose Your Membership Plan</h1>
      <p>We offer flexible membership plans to suit your fitness needs.</p>

      <div className="membership-plans">
        <div className="plan">
          <h2>Basic Plan</h2>
          <p>Access to gym facilities</p>
          <p>Price: $20/month</p>
          <button>Join Now</button>
        </div>

        <div className="plan">
          <h2>Standard Plan</h2>
          <p>Gym access + Group classes</p>
          <p>Price: $35/month</p>
          <button>Join Now</button>
        </div>

        <div className="plan">
          <h2>Premium Plan</h2>
          <p>All facilities + Personal trainer</p>
          <p>Price: $50/month</p>
          <button>Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default Membership;
