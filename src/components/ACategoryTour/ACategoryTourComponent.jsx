import React from "react";
import "./ACategoryTour.css";

// assets

import eventImg from "../../assets/final-item-event-icon.png";
import hotelImg from "../../assets/final-item-hotel-icon.png";
import moneyImg from "../../assets/final-item-money-icon.png";
import ticketImg from "../../assets/final-item-ticket-icon.png";

export default function ACategoryTourComponent(props) {
  const { benefitNumberProps } = props;

  let numberOfBenefits = benefitNumberProps;

  return (
    <div className="a-category-tournament-benefits">
      {benefits.slice(0, numberOfBenefits).map((item, i) => {
        return (
          <div className="single-benefit-div" key={i}>
            <img src={item.img} className="single-benefit-image" />
            <span className="single-benefit-title">{item.title}</span>
          </div>
        );
      })}
    </div>
  );
}

let benefits = [
  {
    img: `${ticketImg}`,
    title: "ორმხრივი ავიაბილეთი",
  },

  {
    img: `${eventImg}`,
    title: "The Festival in Malta -ს მეინ ივენთის ბაი-ინი",
  },
  {
    img: `${eventImg}`,
    title: "Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი",
  },
  {
    img: `${hotelImg}`,
    title: "სასტუმრო",
  },
  {
    img: `${moneyImg}`,
    title: "€500 სახარჯი ფული",
  },
];
