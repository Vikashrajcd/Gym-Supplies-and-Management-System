import React from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

function SignIn() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Sign In</h1>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
        <p><Link to="/forgot-password">Forgot Password?</Link></p>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default SignIn;
