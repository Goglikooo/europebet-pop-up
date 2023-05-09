import React from "react";
import "./DailyTournaments.css";

export default function SingleTournament(props) {
  const { backgroundimage, dateColor } = props;

  return (
    <div
      className={`${
        backgroundimage == 2 ? "single-banner2" : "single-banner"
      } `}
    >
      <div className="left-part">
        <span className="omaha-header">Omaha Highrollers</span>
        <span className="main-prise">40 000₾</span>
      </div>
      <div className="right-part">
        <span className="xxxl">ბაი-ინი XXX₾</span>
        <span className={`${dateColor == 2 ? "date-round2" : "date-round"}`}>
          27 დეკემბერი
        </span>
      </div>
    </div>
  );
}
