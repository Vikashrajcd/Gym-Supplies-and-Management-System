import React, { useState } from "react";
import "../styles/Auth.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Forgot Password?</h1>
        <p>Enter your email to receive a password reset link.</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <button type="submit">Send Reset Link</button>
        </form>
        <p><a href="/signin">Back to Sign In</a></p>
      </div>
    </div>
  );
}

export default ForgotPassword;
