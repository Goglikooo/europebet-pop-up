import React from 'react'
import SingleCarouselCardCSS from '../SingleCarouselCard/SingleCarouselCard.css';


export default function SingleCarouselCard(props) {
 
    const {headline, text, image, styles} = props
 

    return (
    <div className="single-card">
        <div className='image-div'>
            <img src={image} alt="background" className='card-image'/>
        </div>
        <div className={`card-details ${styles}`}>
            <p className='span-element'>{headline}</p>
            <p className='span-element'>{text}</p>
        </div>
    </div>
  )
};

