import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  // Temporary static user details (later can be fetched from backend)
  const [user, setUser] = useState({
    name: "Kavya Suma",
    phone: "+91 8500035012",
    email: "vookakavyasuma4@gmail.com",
    profilePic: "/profile_pic.png", // Put a sample image in public folder
  });

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src={user.profilePic}
          alt="Profile"
          className="profile-picture"
        />
        <h2 className="profile-name">{user.name}</h2>

        <div className="profile-details">
          <p><strong>📞 Phone:</strong> {user.phone}</p>
          <p><strong>📧 Email:</strong> {user.email}</p>
        </div>

        <button className="qr-button">Generate QR Code</button>
      </div>
    </div>
  );
}

export default Profile;
