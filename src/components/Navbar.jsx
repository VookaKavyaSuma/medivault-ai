import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Pages where the navbar or logout should be hidden
  const hideLogoutPages = ["/login", "/signup", "/"];

  const handleLogout = () => {
    // Remove any stored user data (customize if you use tokens)
    localStorage.removeItem("authToken");
    sessionStorage.clear();

    // Redirect to login page
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img
          src="/MediVault.AI-logo.png"
          alt="MediVault Logo"
          className="logo"
        />
        <h2>MediVault.AI</h2>
      </div>

      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/activity">Activity</Link></li>
        <li><Link to="/profile">Profile</Link></li>

        {/* Conditionally show Logout button */}
        {!hideLogoutPages.includes(location.pathname) && (
          <li>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
