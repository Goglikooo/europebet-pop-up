import React from "react";
import "../TournamentsAndSatelites/TournamentsAndSatelites.css";
import PromoImageLeft from "../../assets/promo-left-img.png";
import PromoImageRight from "../../assets/promo-right-img.png";
import ClockIcon from "../../assets/clock-icon.png";
export default function TournamentsAndSatelites() {
  return (
    <div className="tournament-card">
      <h3 className="tournament-card-header">ტურნირები და სატელიტები</h3>
      <div className="tournament-card-event-times">
        <p className="tournament-card-ad-header">
          სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:
        </p>
        <div className="tournament-card-time-component">
          <div className="clock-div">
            <img src={ClockIcon} alt="" className="clock-icon" />
          </div>
          <p className="tournament-card-time-hours">19:00 / 19:30 / 20:00</p>
        </div>
        <div className="bottom-images">
          <img src={PromoImageLeft} alt="" className="image-decoration" />
          <img src={PromoImageRight} alt="" className="image-decoration" />
        </div>
      </div>
      <div className="tournament-card-info-wrapper">
        <span className="tournament-card-all-info-span">
          * ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.
        </span>
        <span className="tourmanet-card-schedule-info">
          ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში
        </span>
        <button className="tournament-card-btn">პოკერის ლობი</button>
      </div>
    </div>
  );
}
