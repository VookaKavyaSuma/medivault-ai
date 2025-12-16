import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./Profile.css";

const Profile = () => {
  const [showQR, setShowQR] = useState(true);

  const profileData = {
    name: "Vooka Kavya Suma",
    email: "vookakavya4@gmail.com",
    phone: "+91 8500035012",
    address: "Hyderabad, India",
    disease: "None",
  };

  return (
    <div className="profile-page">
      <div className="profile-wrapper">
        {/* Left Panel */}
        <div className="profile-left-panel">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            className="profile-picture"
          />
          <h2 className="profile-name">{profileData.name}</h2>
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Phone:</strong> {profileData.phone}</p>
          <p><strong>Address:</strong> {profileData.address}</p>
          <p><strong>Disease:</strong> {profileData.disease}</p>
       </div> 

        {/* Right Panel */}
        <div className="profile-right-panel">
          <button
            className="qr-button"
            onClick={() => setShowQR(!showQR)}
          >
            {showQR ? "Hide QR" : "Show QR"}
          </button>
          {showQR ? (
            <div className="qr-display">
              <QRCodeCanvas
                value={JSON.stringify(profileData)}
                size={230}
                fgColor="#000000"
              />
              <p className="qr-text">Scan to view profile details</p>
            </div>
          ) : (
            <div className="qr-placeholder">QR Code Hidden</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
