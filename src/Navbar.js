// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // We'll style it in a separate CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Car Repo
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/settings" className="nav-link">
              Settings
            </Link>
          </li>
          <li>
            <Link to="/logout" className="nav-link">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;