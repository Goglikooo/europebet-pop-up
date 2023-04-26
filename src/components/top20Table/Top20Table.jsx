import React from "react";
import Top20TableCSS from "./Top20Table.css";
import InformationButton from "../../assets/example-icon.png";
import Voucher from "../../assets/gift-card.png";
import DownVector from "../../assets/mechanic-icon.png";
export default function Top20Table(props) {
  const { topN, collectCoins } = props;

  let obj = [
    {
      rank: "1",
      voucher: "-",
      prise: "A კატეგორიის საგზური",
    },
    {
      rank: "2",
      voucher: "-",
      prise: "B კატეგორიის საგზური",
    },
    {
      rank: "3",
      voucher: "1500₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
    {
      rank: "4",
      voucher: "1200₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
    {
      rank: "5",
      voucher: "1000₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
    {
      rank: "6",
      voucher: "800₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
    {
      rank: "7",
      voucher: "600₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
    {
      rank: "8",
      voucher: "400₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
    {
      rank: "9",
      voucher: "200₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
    {
      rank: "10",
      voucher: "100₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
    {
      rank: "11",
      voucher: "100₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
    {
      rank: "12",
      voucher: "100₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
    {
      rank: "13",
      voucher: "100₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
    {
      rank: "14",
      voucher: "100₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
    {
      rank: "15",
      voucher: "100₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
    {
      rank: "16",
      voucher: "100₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
    {
      rank: "17",
      voucher: "100₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
    {
      rank: "18",
      voucher: "100₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
    {
      rank: "19",
      voucher: "100₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
    {
      rank: "20",
      voucher: "100₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
    {
      rank: "21",
      voucher: "100₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
    {
      rank: "22",
      voucher: "100₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
    {
      rank: "23",
      voucher: "100₾",
      prise: "სპეც. ტურნირის ბილეთი",
    },
  ];

  return (
    <div className="main">
      {collectCoins == 1 ? (
        <div className="leaderbord-wrapper-collect">
          <h1 className="leaderbord-header">ქულების დაგროვების მექანიკა</h1>
          <img
            src={DownVector}
            alt="information button"
            className="information-button-collect"
          />
        </div>
      ) : (
        <div className="leaderbord-wrapper">
          <h1 className="leaderbord-header">TOP20 ლიდერბორდი ჰოლდემში</h1>
          <img
            src={InformationButton}
            alt="information button"
            className="information-button"
          />
        </div>
      )}

      <div className="leaderbord-box">
        <div className="label-wrapper">
          <label className="headlines">ადგილი</label>
          <div className="voucher-headline">
            <img src={Voucher} alt="gift-card" className="gift-card" />
            <label className="headlines">ვაუჩერი</label>
          </div>

          <label className="headlines">პრიზი</label>
        </div>
        <div className="leaderbord-results-box">
          {obj.slice(0, topN).map((item, i) => {
            return (
              <div className="leaderbord-results-wrapper" key={i}>
                <div className="rank-background">
                  <span className="rank-number top20-center">{item.rank}</span>
                </div>

                <span className="voucher top20-center">{item.voucher}</span>
                <span className="prise top20-center">{item.prise}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
