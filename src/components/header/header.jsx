import React from "react";
import "./header.css";
import orangeDot from "../../assets/logo.png";
export default function header() {
  return (
    <div className="header-wrapper">
      <img src={orangeDot} alt="orange-dot" className="orange-dot" />
      <div className="sign-in-out-wrapper">
        <a href="#" className="sign-up">
          Sign Up
        </a>
        <div className="sign-in-div">
          <a href="#" className="sign-in">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}
