import React from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

function SignUp() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/signin">Sign In</Link></p>
      </div>
    </div>
  );
}

export default SignUp;
