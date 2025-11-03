import React from "react";
import "./Profile.css";
import { FaQrcode } from "react-icons/fa";

function Profile() {
  const user = {
    name: "Kavya Suma",
    email: "kavya.suma@example.com",
    phone: "+91 9876543210",
    address: "Hyderabad, India",
  };

  const handleGenerateQR = () => {
    alert("QR Code generated for your MediVault profile!");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <h2>My Profile</h2>
        </div>

        <div className="profile-details">
          <div className="profile-pic">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
              alt="User"
            />
          </div>

          <div className="info">
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
          </div>
        </div>

        <div className="qr-section">
          <button className="qr-btn" onClick={handleGenerateQR}>
            <FaQrcode className="qr-icon" /> Generate QR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
