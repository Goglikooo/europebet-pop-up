import React from "react";
import "./headline.css";

export default function headline() {
  return (
    <div className="headline-wrapper-div">
      <div className="headline-wrapper">
        <span className="slots">სლოტები</span>
        <span className="dates">10 სექტემბერი - 7 ნოემბერი</span>
      </div>
      <button className="x-btn">X</button>
    </div>
  );
}
