import React from "react";
import MainButtonsCSS from "./mainButtons.css";
import { useState, useEffect } from "react";

export default function mainButtons(props) {
  const { num, setClickedButton } = props;

  const handleClick = (num) => {
    setClickedButton(num);
  };

  //   const [clickedButton, setClickedButton] = useState(1);

  return (
    <div className="wrapper">
      <div
        className={num == 1 ? "button-clicked" : "button button-rounded1"}
        onClick={() => handleClick(1)}
      >
        <span className="stage-dates">28 ოქტ. - 7 ნოემბ.</span>
        <h2 className="stage-name">Cash Games</h2>
      </div>
      <div
        className={num == 2 ? "button-clicked" : "button"}
        onClick={() => handleClick(2)}
      >
        <span className="stage-dates">10 - 29 დეკ.</span>
        <h2 className="stage-name">New Year Series</h2>
      </div>
      <div
        className={num == 3 ? "button-clicked" : "button button-rounded2"}
        onClick={() => handleClick(3)}
      >
        <span className="stage-dates">28 ოქტ. - 7 ნოემბ.</span>
        <h2 className="stage-name">Final Stage</h2>
      </div>
    </div>
  );
}
