import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth
} from "date-fns";


const secondYearThirdSem = {
  "2025-06-01": "Holiday",
  "2025-06-07": "Bakrid (Holiday)",
  "2025-06-08": "Holiday",
  "2025-06-14": "Holiday",
  "2025-06-15": "Holiday",
  "2025-06-16": "Commencement of Academic Classes",
  "2025-06-19": "Class Committee Meeting I",
  "2025-06-22": "Holiday",
  "2025-06-28": "Holiday",
  "2025-06-29": "Holiday",
  "2025-07-04": "Submission of Assessment Record",
  "2025-07-05": "Dept. Activity-I (GL)",
  "2025-07-06": "Dept. Activity-I (GL)",
  "2025-07-12": "Holiday",
  "2025-07-13": "Holiday",
  "2025-07-19": "Dept. Activity-II (Skill Forum)",
  "2025-07-20": "Holiday",
  "2025-07-26": "Holiday",
  "2025-07-27": "Holiday",
  "2025-07-28": "Submission of CAT I QP",
  "2025-07-30": "Conduct of QCM I",
  "2025-08-02": "Dept. Activity-III (Student Presentation)",
  "2025-08-03": "Holiday",
  "2025-08-04": "CAT I Starts",
  "2025-08-05": "Submission of Assessment Records",
  "2025-08-09": "Holiday",
  "2025-08-10": "Holiday",
  "2025-08-11": "CAT I Ends",
  "2025-08-15": "Independence Day (Holiday)",
  "2025-08-16": "De Jure Transfer Day (Holiday)",
  "2025-08-17": "Holiday",
  "2025-08-18": "Submission of CAT I Mark Register",
  "2025-08-20": "Class Committee Meeting II",
  "2025-08-23": "Holiday",
  "2025-08-24": "Holiday",
  "2025-08-26": "Holiday",
  "2025-08-27": "Ganesh Chathurthi (Holiday)",
  "2025-08-30": "Dept. Activity-IV (Industrial Visit)",
  "2025-08-31": "Holiday",
  "2025-09-01": "Submission of CAT II QP",
  "2025-09-03": "Conduct of QCM II",
  "2025-09-04": "Submission of Assessment Records",
  "2025-09-06": "Dept. Activity-V (Workshop)",
  "2025-09-07": "Holiday",
  "2025-09-08": "CAT II Starts",
  "2025-09-13": "Holiday",
  "2025-09-14": "Holiday",
  "2025-09-15": "CAT II Ends",
  "2025-09-19": "Submission of CAT II Mark Register",
  "2025-09-20": "Dept. Activity-VI (Alumni Meet)",
  "2025-09-21": "Holiday",
  "2025-09-24": "Class Committee Meeting III",
  "2025-09-27": "Holiday",
  "2025-09-28": "Holiday",
  "2025-09-29": "submission of model QP",
  "2025-09-30": "conduct of QCM 3",
  "2025-10-01": "Ayutha Pooja (Holiday)",
  "2025-10-02": "Vijayadasami / Gandhi Jayanti (Holiday)",
  "2025-10-05": "Holiday",
  "2025-10-06": "Model Exam Starts",
  "2025-10-10": "Model Exam Ends/Last Working Day",
  "2025-10-15": "Improvement Exam",
  "2025-10-16": "Improvement Exam",
  "2025-10-17": "Improvement Exam",
  "2025-10-20": "Deepavali (Holiday)",
  "2025-10-22": "Submission of Assessment Records",
  "2025-10-23": "Model Practical Exam",
  "2025-10-25": "Holiday",
  "2025-10-26": "Holiday",
  "2025-10-29": "End Semester Practical Exam",
};
const thirdyearfifthsem = {
  "2025-06-01": "Sunday (Holiday)",
  "2025-06-07": "Bakrid (Holiday)",
  "2025-06-08": "Sunday (Holiday)",
  "2025-06-14": "Saturday (Holiday)",
  "2025-06-15": "Sunday (Holiday)",
  "2025-06-16": "Commencement of Academic Classes",
  "2025-06-22": "Sunday (Holiday)",
  "2025-06-28": "Saturday (Holiday)",
  "2025-06-29": "Sunday (Holiday)",
  "2025-07-02": "Class Committee Meeting I",
  "2025-07-04": "Submission of Assessment Records",
  "2025-07-05": "Dept. Activity-I (GL)",
  "2025-07-06": "Sunday (Holiday)",
  "2025-07-12": "Saturday (Holiday)",
  "2025-07-13": "Sunday (Holiday)",
  "2025-07-19": "Dept. Activity-II (Skill Forum)",
  "2025-07-20": "Sunday (Holiday)",
  "2025-07-27": "Sunday (Holiday)",
  "2025-07-28": "Submission of CAT I QP",
  "2025-07-30": "Conduct of QCM I",
  "2025-08-02": "Dept. Activity-III (Student Presentation)",
  "2025-08-03": "Sunday (Holiday)",
  "2025-08-04": "CAT I Starts",
  "2025-08-05": "Submission of Assessment Records",
  "2025-08-10": "Sunday (Holiday)",
  "2025-08-11": "CAT I Ends",
  "2025-08-15": "Independence Day (Holiday)",
  "2025-08-16": "De Jure Transfer Day (Holiday)",
  "2025-08-17": "Sunday (Holiday)",
  "2025-08-18": "Submission of CAT I Mark Register",
  "2025-08-20": "Class Committee Meeting II",
  "2025-08-23": "Saturday (Holiday)",
  "2025-08-24": "Sunday (Holiday)",
  "2025-08-27": "Ganesh Chathurthi (Holiday)",
  "2025-08-30": "Dept. Activity-IV (Industrial Visit)",
  "2025-08-31": "Sunday (Holiday)",
  "2025-09-01": "Submission of CAT II QP",
  "2025-09-03": "Conduct of QCM II",
  "2025-09-04": "Submission of Assessment Records",
  "2025-09-06": "Dept. Activity-V (Workshop)",
  "2025-09-07": "Sunday (Holiday)",
  "2025-09-08": "CAT II Starts",
  "2025-09-13": "Saturday (Holiday)",
  "2025-09-14": "Sunday (Holiday)",
  "2025-09-15": "CAT II Ends",
  "2025-09-19": "Submission of CAT II Mark Register",
  "2025-09-20": "Dept. Activity-VI (Alumni Meet)",
  "2025-09-21": "Sunday (Holiday)",
  "2025-09-24": "Class Committee Meeting III",
  "2025-09-27": "Saturday (Holiday)",
  "2025-09-28": "Sunday (Holiday)",
  "2025-10-01": "Ayutha Pooja (Holiday)",
  "2025-10-02": "Vijayadasami / Gandhi Jayanti (Holiday)",
  "2025-10-05": "Sunday (Holiday)",
  "2025-10-06": "Model Exam Starts",
  "2025-10-10": "Model Exam Ends / Last Working Day",
  "2025-10-11": "Saturday (Holiday)",
  "2025-10-12": "Sunday (Holiday)",
  "2025-10-16": "Improvement Exam",
  "2025-10-19": "Sunday (Holiday)",
  "2025-10-20": "Deepavali (Holiday)",
  "2025-10-22": "Submission of Assessment Records",
  "2025-10-23": "Model Practical Exam",
  "2025-10-26": "Sunday (Holiday)",
  "2025-10-29": "End Semester Practical Exam",
  "2025-10-30": "Conduct of QCM III"
}

const pgsecondyearThirdsem = {
  "2025-06-01": "Sunday (Holiday)",
  "2025-06-07": "Bakrid (Holiday)",
  "2025-06-08": "Sunday (Holiday)",
  "2025-06-14": "Saturday (Holiday)",
  "2025-06-15": "Sunday (Holiday)",
  "2025-06-16": "Commencement of Academic Classes",
  "2025-06-21": "Summer Internship (SKD)",
  "2025-06-22": "Sunday (Holiday)",
  "2025-06-28": "Saturday (Holiday)",
  "2025-06-29": "Sunday (Holiday)",
  "2025-07-02": "Class Committee Mtg. I",
  "2025-07-04": "Submission of Assessment Records",
  "2025-07-05": "Dept. Activity-I (GL)",
  "2025-07-06": "Sunday (Holiday)",
  "2025-07-12": "Saturday (Holiday)",
  "2025-07-13": "Sunday (Holiday)",
  "2025-07-19": "Dept. Activity-II (Skill Forum)",
  "2025-07-20": "Sunday (Holiday)",
  "2025-07-26": "Saturday (Holiday)",
  "2025-07-27": "Sunday (Holiday)",
  "2025-07-28": "Submission of CAT I QP",
  "2025-07-30": "Conduct of QCM I",
  "2025-08-02": "Dept. Activity-III (Student Presentation)",
  "2025-08-03": "Sunday (Holiday)",
  "2025-08-04": "CAT I Starts",
  "2025-08-05": "Submission of Assessment Records",
  "2025-08-10": "Sunday (Holiday)",
  "2025-08-11": "CAT I Ends",
  "2025-08-15": "Independence Day (Holiday)",
  "2025-08-16": "De Jure Transfer Day (Holiday)",
  "2025-08-17": "Sunday (Holiday)",
  "2025-08-18": "Submission of CAT I Mark Register",
  "2025-08-20": "Class Committee Mtg. II",
  "2025-08-23": "Saturday (Holiday)",
  "2025-08-24": "Sunday (Holiday)",
  "2025-08-27": "Ganesh Chathurthi (Holiday)",
  "2025-08-30": "Dept. Activity-IV (Industrial Visit)",
  "2025-08-31": "Sunday (Holiday)",
  "2025-09-01": "Submission of CAT II QP",
  "2025-09-03": "Conduct of QCM II",
  "2025-09-04": "Submission of Assessment Records",
  "2025-09-06": "Dept. Activity-V (Workshop)",
  "2025-09-07": "Sunday (Holiday)",
  "2025-09-08": "CAT II Starts",
  "2025-09-13": "Saturday (Holiday)",
  "2025-09-14": "Sunday (Holiday)",
  "2025-09-15": "CAT II Ends",
  "2025-09-19": "Submission of CAT II Mark Register",
  "2025-09-20": "Dept. Activity-VI (Alumni Meet)",
  "2025-09-21": "Sunday (Holiday)",
  "2025-09-24": "Class Committee Mtg. III",
  "2025-09-27": "Saturday (Holiday)",
  "2025-09-28": "Sunday (Holiday)",
  "2025-10-01": "Ayutha Pooja (Holiday)",
  "2025-10-02": "Vijayadasami / Gandhi Jayanti (Holiday)",
  "2025-10-05": "Sunday (Holiday)",
  "2025-10-06": "Model Exam Starts",
  "2025-10-10": "Model Exam Ends / Last Working Day",
  "2025-10-11": "Saturday (Holiday)",
  "2025-10-12": "Sunday (Holiday)",
  "2025-10-16": "Improvement Exam",
  "2025-10-19": "Sunday (Holiday)",
  "2025-10-20": "Deepavali (Holiday)",
  "2025-10-22": "Submission of Assessment Records",
  "2025-10-23": "Model Practical Exam",
  "2025-10-25": "Saturday (Holiday)",
  "2025-10-26": "Sunday (Holiday)",
  "2025-10-29": "End Sem Practical Exam",
  "2025-10-30": "Conduct of QCM III"
}
// 📆 Months and Quarters
const monthsList = [
  { label: "June", date: new Date(2025, 5) },
  { label: "July", date: new Date(2025, 6) },
  { label: "August", date: new Date(2025, 7) },
  { label: "September", date: new Date(2025, 8) },
  { label: "October", date: new Date(2025, 9) },
];

const quarters = {
  Q1: [monthsList[0].date, monthsList[1].date, monthsList[2].date], // Jul–Sep
  Q2: [monthsList[3].date, monthsList[4].date]  // Oct–Dec
};

const Index = () => {
  const [selectedView, setSelectedView] = useState("Q1");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [nowCalendarData, setNowCalendarData] = useState(secondYearThirdSem);
  const [events, setEvents] = useState(thirdyearfifthsem)
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
  function handleCalendarChange(e) {
    console.log(e.target.value)
    if (e.target.value == "ug3rdyear5thsem") {
      setEvents(thirdyearfifthsem)
      console.log('setting')
    }
    if (e.target.value == "ugsecondyear3rdsem") {
      setEvents(secondYearThirdSem)
    }
    if (e.target.value == "pgsecondyear3rdsem") {
      setEvents(pgsecondyearThirdsem)
    }
  }

  return (
    <div className="calendermain" style={{ backgroundImage: `url('/assets/img/image/entrance.JPG')` }}>
      <div className="layer">
        <div className="calendar-container">
          <h2 className="calendar-title"> 
            <select className="calendar-select_options" onChange={handleCalendarChange}>
            <option value="ug3rdyear5thsem">UG  III Year / V sem</option>
            <option value="ugsecondyear3rdsem">UG  II Year / III sem</option>
            <option value="pgsecondyear3rdsem">PG  II Year / III sem</option>
          </select> Calendar</h2>

          <div className="calendar-controls">
            <button
              onClick={() => setSelectedView("Q1")}
              className={selectedView === "Q1" ? "active" : ""}
            >
              June – August
            </button>
            <button
              onClick={() => setSelectedView("Q2")}
              className={selectedView === "Q2" ? "active" : ""}
            >
              September – October
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
