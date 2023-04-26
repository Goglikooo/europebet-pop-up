import React from 'react'
import SinglePrizeCard from '../SinglePrizeCard/SinglePrizeCard'
import TravelIconSM from '../../assets/travel-icon-sm.png';
import TicketIconSm from '../../assets/ticket-icon-sm.png';
import GiftCardSM from '../../assets/gift-card.png';
import AllPrizesCSS from "../AllPrizes/AllPrizes.css";



export default function AllPrizes() {
  return (
    <div className='main-wrapper-prizes'>
      <SinglePrizeCard mainText={"The Festival in Malta-ს საგზური"} imageSource ={TravelIconSM}/>
      <SinglePrizeCard mainText={"სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური"} imageSource ={TicketIconSm}/>
      <SinglePrizeCard mainText={"„ალტას“ ვაუჩერი"} imageSource ={GiftCardSM}/>
    </div>
  )
}
