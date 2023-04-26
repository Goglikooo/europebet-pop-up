import React from 'react'
import SinglePrizeCardCSS from "../SinglePrizeCard/SinglePrizeCard.css";


export default function SinglePrizeCard(props) {

    const {mainText, imageSource} = props;

  return (
    <div className='prize-card-wrapper'>
      <img src={imageSource} alt=""  className='icon-size'/>
      <span className='PrizeText'>{mainText}</span>
    </div>
  )
}
