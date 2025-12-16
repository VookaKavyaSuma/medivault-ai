import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
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
  const isLoggedIn = !!localStorage.getItem("authToken");
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

// ✅ Layout for pages with Navbar
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

// ✅ Layout for pages without Navbar (login/signup)
function LayoutWithoutNavbar() {
  const isLoggedIn = !!localStorage.getItem("authToken");

  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Navigate to="/home" /> : <Login />}
      />
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/home" /> : <Login />}
      />
      <Route
        path="/signup"
        element={isLoggedIn ? <Navigate to="/home" /> : <SignUp />}
      />
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
