import React, { useState } from "react";
import "./Login.css";
import logo from "../assets/MediVault.AI-logo.png"; 

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      alert("Login successful!");
      onLogin && onLogin();
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="MediVault.AI Logo" className="login-logo" />

        <h2>MediVault.AI</h2>
        <p className="login-subtext">Your Personal Health Record Vault</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="signup-text">
            Don’t have an account? <a href="/signup">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
