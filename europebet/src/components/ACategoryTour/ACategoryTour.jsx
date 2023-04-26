import React from "react";
import ACategoryTourComponent from "./ACategoryTourComponent";

export default function ACategoryTour(props) {
  const { benefitNumberProps } = props;

  return (
    <div className="a-category-main-div">
      <div className="a-category-main-header">
        <p>A კატეგორიის საგზურში შედის</p>
      </div>
      <div className="a-category-benefit-list">
        <ACategoryTourComponent benefitNumberProps={benefitNumberProps} />
      </div>
    </div>
  );
}
