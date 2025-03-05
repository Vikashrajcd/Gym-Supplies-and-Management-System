import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Import CSS

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/logo.png" alt="Phoenix Fitness Logo" className="logo-img" />
        <Link to="/">Phoenix Fitness</Link>
      </div>

      {/* Navbar Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/membership" onClick={() => setMenuOpen(false)}>Membership</Link>
        <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      {/* Authentication Buttons */}
      <div className="auth-buttons">
        <Link to="/signin" className="btn">Sign In</Link>
        <Link to="/signup" className="btn btn-primary">Sign Up</Link>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
