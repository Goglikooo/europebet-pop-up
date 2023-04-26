import React from "react";
import Top20Table from "../top20Table/Top20Table";
import LeaderBoardCSS from "../leaderbordResults/LeaderBoard.css";
import AllPrizes from "../AllPrizes/AllPrizes";

export default function LeaderBoard(props) {
  const { mainHeader, numOfTop20, topN, collectCoins, extraDisclaimer } = props;

  return (
    <div className="main-container">
      <div className="reiki">
        <h1>{mainHeader}</h1>
      </div>
      <Top20Table topN={topN} collectCoins={collectCoins} />
      <AllPrizes />
      {numOfTop20 == 2 ? (
        <>
          <Top20Table topN={topN} collectCoins={collectCoins} />
          <AllPrizes />
        </>
      ) : (
        ""
      )}

      <div className="disclaimer-wrapper">
        <span className="disclaimer">
          * ლიდერბორდის შედეგები განახლდება <a href="#">პოკერის ლობიში</a>
        </span>
        {extraDisclaimer && (
          <span className="disclaimer">{extraDisclaimer}</span>
        )}
      </div>
    </div>
  );
}
