import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const hideLogoutPages = ["/login", "/signup", "/"];

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
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
        <li>
          <NavLink to="/home" className="nav-link">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/activity" className="nav-link">
            Activity
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile" className="nav-link">
            Profile
          </NavLink>
        </li>

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
