import React from "react";
import DailyTournamentsCSS from "./DailyTournaments.css";
import SingleTournament from "./SingleTournament";
export default function DailyTournaments() {
  return (
    <div className="daily-tournaments">
      <div className="main-container-daily-tournament">
        <p>ყოველდღიური ტურნირები და სატელიტები</p>
        <div className="daily-tournament-wrapper">
          <SingleTournament />
          <SingleTournament />
          <SingleTournament backgroundimage={2} dateColor={2} />
        </div>
        <div>
          <span className="daily-tournament-disclaimer">
            * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე,
            The Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს
            საგზურის მისაღებად.
          </span>
        </div>
      </div>
    </div>
  );
}
