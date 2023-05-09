import React from "react";
import "./WinJourney.css";
import backgroundIcon from "../../assets/poker-item-2-ticket-icon.png";

export default function WinJourney() {
  return (
    <div className="main-gift-list-wrapper">
      <h3 className="gift-list-header">მოიგე საგზური 30 აპრილის ტურნირებზე</h3>
      <div className="full-gift-list">
        {journeyObj.map((item, i) => {
          return (
            <div className={`single-gift-item single-gift-item${i}`} key={i}>
              <span className="single-gift-item-header">{item.header}</span>
              <span className="single-gift-item-category">{item.category}</span>
              <span className="single-gift-item-category2">
                {item.category2}
              </span>
              <span className="single-gift-item-disclaimer">
                {item.disclaimer}
              </span>
            </div>
          );
        })}
      </div>
      <div className="gift-list-disclaimer-wrapper">
        <span className="gift-list-disclaimer">
          * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the Rings
          ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით
        </span>
        <span className="gift-list-disclaimer">
          *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
          ბაი-ინის გადახდით.
        </span>
      </div>
    </div>
  );
}

let journeyObj = [
  {
    header: "„Holdem Grinders”",
    category: "C კატეგორიის 1 საგზური",
  },
  {
    header: "“Cashgame Sharks”",
    category: "C კატეგორიის 1 საგზური",
  },
  {
    header: "„Holdem Grinders”",
    category: "C კატეგორიის 1 საგზური",
  },
  {
    header: "„The Festival in Malta, GTD“",
    category: "B კატეგორიის 1 საგზური",
    category2: "C კატეგორიის 1 საგზური",
    disclaimer:
      "*ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾ ბაი-ინის გადახდით.",
  },
  {
    header: "“Cashgame Sharks”“",
    category: "B კატეგორიის 1 საგზური",
    disclaimer:
      "*ტურნირზე მონაწილებას შეძლებენ მხოლოდ ევროპაბეთის ბეჭდის მფლობელები.",
  },
];
