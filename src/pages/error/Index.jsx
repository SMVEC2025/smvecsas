import React from "react";
import "./Error.css";

export default function Index() {
  return (
    <div className="college-404-container">
      <div className="floating-books">
        <div className="book book1" />
        <div className="book book2" />
        <div className="book book3" />
      </div>

      <div className="student-shadow" />

      <div className="college-message-box">
        <h1 className="college-title">404</h1>
        <p className="college-subtitle">This page didn’t show up for class.</p>
        <p className="college-text">
          It seems the page you're looking for is wandering around campus.
        </p>

        <div className="college-buttons">
          <button onClick={() => (window.location.href = "/")}>
            🏫 Return to Campus
          </button>
          <button onClick={() => (window.location.href = "/student-portal")}>
            🎓 Go to Student Portal
          </button>
        </div>
      </div>
    </div>
  );
}
