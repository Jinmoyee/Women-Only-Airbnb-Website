import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-logo">SHE SHARE VACATION RENTALS</div>
      <div className="nav-links">
        <Link to="/signUp" className="link">
          Register
        </Link>
        <Link to="/signIn" className="link">
          Login
        </Link>
      </div>
    </div>
  );
}
