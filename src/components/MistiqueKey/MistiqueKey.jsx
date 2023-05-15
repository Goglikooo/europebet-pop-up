import React from "react";
import "./MistiqueKey.css";

export default function MistiqueKey() {
  return (
    <div className="key-main-div">
      <div className="key-main-header-div">
        <span className="key-main-header">მისტიური გასაღები</span>
      </div>
      <div className="result-wrapper">
        <div className="key-results">
          {mistiqueKeyObj.map((item, i) => {
            return (
              <div className="key-single-result" key={i}>
                <span className="key-single-result-number">{item.number}</span>
                <span className="key-single-result-text">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

let mistiqueKeyObj = [
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
  {
    number: "1",
    text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
  },
];
