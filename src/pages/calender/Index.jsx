import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth
} from "date-fns";

// 🎯 Event Data
const events = {
  "2025-07-10": "Orientation for Freshers",
  "2025-08-15": "Independence Day Celebration",
  "2025-09-05": "Teachers' Day Function",
  "2025-10-02": "Gandhi Jayanti Event",
  "2025-11-14": "Children’s Day Lecture",
  "2025-12-25": "Christmas Celebration"
};

// 📆 Months and Quarters
const monthsList = [
  { label: "July", date: new Date(2025, 6) },
  { label: "August", date: new Date(2025, 7) },
  { label: "September", date: new Date(2025, 8) },
  { label: "October", date: new Date(2025, 9) },
  { label: "November", date: new Date(2025, 10) },
  { label: "December", date: new Date(2025, 11) }
];

const quarters = {
  Q1: [monthsList[0].date, monthsList[1].date, monthsList[2].date], // Jul–Sep
  Q2: [monthsList[3].date, monthsList[4].date, monthsList[5].date]  // Oct–Dec
};

const Index = () => {
  const [selectedView, setSelectedView] = useState("Q1");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDateClick = (date) => {
    const key = format(date, "yyyy-MM-dd");
    if (events[key]) {
      setSelectedEvent({ date: key, detail: events[key] });
    }
  };

  const closePopup = () => setSelectedEvent(null);

  const renderMonth = (month) => {
    const days = eachDayOfInterval({
      start: startOfMonth(month),
      end: endOfMonth(month)
    });

    return (
      <div key={month} className="month-container">
        <h3 className="month-title">{format(month, "MMMM yyyy")}</h3>
        <div className="calendar-grid">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="weekday">{day}</div>
          ))}
          {days.map((date) => {
            const key = format(date, "yyyy-MM-dd");
            const isEvent = events[key];
            return (
              <div
                key={key}
                className={`day ${isSameMonth(date, month) ? "" : "disabled"} ${isEvent ? "event-day" : ""}`}
                onClick={() => handleDateClick(date)}
              >
                <span>{format(date, "d")}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const getMonthsToRender = () => {
    if (selectedView.startsWith("Q")) return quarters[selectedView];
    const found = monthsList.find((m) => m.label === selectedView);
    return found ? [found.date] : [];
  };

  return (
    <div className="calendermain" style={{backgroundImage:`url('/assets/img/image/entrance.JPG')`}}>
      <div className="layer">
            <div className="calendar-container">
      <h2 className="calendar-title">SMVEC Semester Calendar</h2>

      <div className="calendar-controls">
        <button
          onClick={() => setSelectedView("Q1")}
          className={selectedView === "Q1" ? "active" : ""}
        >
          July – September
        </button>
        <button
          onClick={() => setSelectedView("Q2")}
          className={selectedView === "Q2" ? "active" : ""}
        >
          October – December
        </button>

        <select
          className="month-dropdown"
          value={monthsList.some((m) => m.label === selectedView) ? selectedView : ""}
          onChange={(e) => setSelectedView(e.target.value)}
        >
          <option value="">-- Select a Month --</option>
          {monthsList.map((m) => (
            <option key={m.label} value={m.label}>
              {m.label}
            </option>
          ))}
        </select>
      </div>

      <div className={`three-months-view ${getMonthsToRender().length === 1 ? "single" : ""}`}>
        {getMonthsToRender().map(renderMonth)}
      </div>

      {selectedEvent && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedEvent.date}</h3>
            <p>{selectedEvent.detail}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
      </div>
    </div>
  );
};

export default Index;
