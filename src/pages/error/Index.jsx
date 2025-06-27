import React from "react";
import "./Error.css";

export default function Index() {

  return (
    <div className="college-404-container">
      <div className="floating-books">
        <div className="book book1" >
          <img src="/assets/img/image/book.png" alt="" />
        </div>
        <div className="book book2" >
          <img src="/assets/img/image/book.png" alt="" />
        </div>
        <div className="book book3" >
          <img src="/assets/img/image/book.png" alt="" />
        </div>
      </div>


      <div className="college-message-box">

        <img src="/assets/img/image/error.png" alt="" />
        <div className="college-buttons">
          <button onClick={() => (window.location.href = "/")}>
            Return to Campus
          </button>

        </div>
      </div>
    </div>
  );
}
