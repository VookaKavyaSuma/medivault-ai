import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Activity from "./pages/Activity";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./App.css";

function LayoutWithNavbar() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
    </>
  );
}

function LayoutWithoutNavbar() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

function AppContent() {
  const location = useLocation();

  // Paths that should not display navbar
  const noNavbarPaths = ["/", "/login", "/signup"];

  const isNoNavbarPage = noNavbarPaths.includes(location.pathname);

  return isNoNavbarPage ? <LayoutWithoutNavbar /> : <LayoutWithNavbar />;
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
