import React from "react";
import { useState } from "react";
import "../RulesAndConditions/RulesAndConditions.css";

export default function RulesAndConditions() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const handleQuestionClick = (i) => {
    if (openQuestion == i) {
      return setOpenQuestion(null);
    }
    setOpenQuestion(i);
  };

  return (
    <div className="QandA-main-container">
      <h2 className="rules-and-conditions-header">წესები და პირობები</h2>

      {data.map((item, i) => {
        return (
          <div className="QuestionOnly" key={i}>
            <div
              className="question-with-arrow"
              onClick={() => handleQuestionClick(i)}
            >
              <span className="question">{item.question}</span>
              <span className="arrow">{openQuestion === i ? "-" : "+"}</span>
            </div>
            <p
              className={openQuestion === i ? "answer-shown" : "answer-hidden"}
            >
              {item.answer}
            </p>
          </div>
        );
      })}
    </div>
  );
}

const data = [
  {
    question: "როდის იწყება და რა ფორმატით გაიმართება აქცია",
    answer: "lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    question: "როგორ მივიღო აქციაში მონაწილეობა?",
    answer: "lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    question: "სხვადასვა",
    answer: "lorem ipsum dolor sit amet, consectetur adipiscing",
  },
];
