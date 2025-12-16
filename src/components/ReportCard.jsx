import React from "react";

function ReportCard({ report }) {
  return (
    <div className="report-card">
      <h4>{report.title}</h4>
      <p>Date: {report.date}</p>
      <button>View</button>
    </div>
  );
}

export default ReportCard;
