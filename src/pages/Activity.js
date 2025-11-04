import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Activity.css";

function Activity() {
  const healthData = [
    { month: "Jan", BP: 120, Sugar: 90 },
    { month: "Feb", BP: 125, Sugar: 95 },
    { month: "Mar", BP: 130, Sugar: 100 },
    { month: "Apr", BP: 128, Sugar: 92 },
    { month: "May", BP: 118, Sugar: 88 },
    { month: "Jun", BP: 122, Sugar: 94 },
  ];

  const reports = [
    { name: "Blood Test", date: "2025-05-12", status: "Normal" },
    { name: "X-Ray", date: "2025-06-10", status: "Clear" },
    { name: "ECG", date: "2025-07-22", status: "Stable" },
  ];

  return (
    <div className="activity-page">
      <h1 className="activity-title">Health Activity Dashboard</h1>

      {/* Summary Section */}
      <div className="summary-section">
        <div className="summary-card">
          <h3>Heart Rate</h3>
          <p>78 bpm</p>
        </div>
        <div className="summary-card">
          <h3>Blood Pressure</h3>
          <p>122 / 80 mmHg</p>
        </div>
        <div className="summary-card">
          <h3>Blood Sugar</h3>
          <p>95 mg/dL</p>
        </div>
        <div className="summary-card">
          <h3>BMI</h3>
          <p>22.4</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="chart-section">
        <h2>Health Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={healthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="BP" stroke="#0078d7" strokeWidth={2} />
            <Line type="monotone" dataKey="Sugar" stroke="#00c49f" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Reports Section */}
      <div className="reports-section">
        <h2>Recent Reports</h2>
        <table>
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index}>
                <td>{report.name}</td>
                <td>{report.date}</td>
                <td>{report.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Activity;
