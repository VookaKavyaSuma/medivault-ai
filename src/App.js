import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Activity from "./pages/Activity";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./App.css";

// ✅ Protected Route Wrapper
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function LayoutWithNavbar() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/activity"
          element={
            <ProtectedRoute>
              <Activity />
            </ProtectedRoute>
          }
        />
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
