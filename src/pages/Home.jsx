import React from "react";
import Chatbot from "../components/Chatbot";
import ReportCard from "../components/ReportCard";

function Home() {
  const username = "Vooka Kavya Suma"; // later fetched from backend

  const reports = [
    { id: 1, title: "Blood Test", date: "2025-10-25" },
    { id: 2, title: "X-Ray", date: "2025-09-14" },
  ];

  return (
    <div className="home-page">
      <h2>WELCOME {username.toUpperCase()}</h2>
      <h3>Your Reports</h3>
      <div className="reports">
        {reports.map((r) => (
          <ReportCard key={r.id} report={r} />
        ))}
      </div>

      <Chatbot />
    </div>
  );
}

export default Home;
