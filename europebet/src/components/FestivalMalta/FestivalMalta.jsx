import React from "react";
import FestivalMaltaCSS from "./FestivalMalta.css";
import ACategoryTour from "../ACategoryTour/ACategoryTour";
import maltaImg from "../../assets/malta.jpg";
export default function FestivalMalta() {
  return (
    <div className="festival-malta-main-div">
      <img src={maltaImg} alt="" className="malta-img-3rd-page" />
      <div className="festival-malta-header-div">
        <span className="festiva-malta-header">
          გაემგზავრე The Festival in Malta-ზე!
        </span>
        <span className="festival-malta-info">
          The Festival Series ტურნირების ფარგლებში, ევროპაბეთი უკვე მეორედ
          აძლევს პოკერის მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
        </span>
      </div>
      <div className="festival-malta-dates-div">
        <span className="festival-malta-main-text">
          15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს
        </span>
      </div>
      <ACategoryTour benefitNumberProps={5} />
      <ACategoryTour benefitNumberProps={5} />
      <ACategoryTour benefitNumberProps={4} />
    </div>
  );
}
