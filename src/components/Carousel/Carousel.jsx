import React, { useEffect, useRef } from "react";
import CarouselCSS from "./Carousel.css";
import SingleCarouselCard from "../SingleCarouselCard/SingleCarouselCard";
import headline from "../headline/headline";
import card1Background from "../../assets/card-background1.png";
import card2Background from "../../assets/card-background2.png";
import card3Background from "../../assets/card-background3.png";
export default function Carousel() {
  return (
    <div className="carousel-main">
      <CustomCarousel>
        {cards.map((index, i) => {
          return (
            <Box
              index={index}
              key={i}
              headline={index.headline}
              mainText={index.mainText}
              image={index.image1}
              styles={index.style}
            />
          );
        })}
      </CustomCarousel>
    </div>
  );
}

function CustomCarousel(props) {
  const slider = useRef(null);
  let isDown = useRef(false);
  let startX = useRef(null);
  let scrollLeft = useRef(null);

  useEffect(() => {
    if (slider && slider.current) {
      let sliderRef = slider.current;
      sliderRef.addEventListener("mousedown", one);
      sliderRef.addEventListener("mousedown", two);
      sliderRef.addEventListener("mouseleave", three);
      sliderRef.addEventListener("mouseup", four);
      sliderRef.addEventListener("mousemove", five);

      return () => {
        sliderRef.removeEventListener("mousedown", one);
        sliderRef.removeEventListener("mousedown", two);
        sliderRef.removeEventListener("mouseleave", three);
        sliderRef.removeEventListener("mouseup", four);
        sliderRef.removeEventListener("mousemove", five);
      };
    }
  }, []);

  function one(e) {
    isDown.current = true;
    startX.current = e.pageX - slider.current.offsetLeft;
    scrollLeft.current = slider.current.scrollLeft;
  }

  function two(e) {
    isDown.current = true;
    startX.current = e.pageX - slider.current.offsetLeft;
    scrollLeft.current = slider.current.scrollLeft;
  }

  function three() {
    isDown.current = false;
  }

  function four() {
    isDown.current = false;
  }

  function five(e) {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - slider.current.offsetLeft;
    const walk = x - startX.current;
    slider.current.scrollLeft = scrollLeft.current - walk;
  }

  return (
    <div className="items" ref={slider}>
      {props.children}
    </div>
  );
}

function Box({ index, headline, mainText, image, styles }) {
  return (
    <div className="box">
      <SingleCarouselCard
        index={index}
        headline={headline}
        text={mainText}
        image={image}
        styles={styles}
      />
    </div>
  );
}

let cards = [
  {
    headline: "მიიღე 300% ქეშბ…",
    mainText: "retrieve 300% bet amount as real money…",
    image1: `${card1Background}`,
    style: "blue",
  },
  {
    headline: "მალე",
    mainText: "retrieve 300% bet amount as real money…",
    image1: `${card2Background}`,
    style: "orange",
  },
  {
    headline: "მოიგე ჯეკპოტი",
    mainText: "retrieve 300% bet amount as real money…",
    image1: `${card3Background}`,
    style: "purple",
  },
  {
    headline: "მიიღე 300% ქეშბ…",
    mainText: "retrieve 300% bet amount as real money…",
    image1: `${card1Background}`,
    style: "blue",
  },
  {
    headline: "მალე",
    mainText: "retrieve 300% bet amount as real money…",
    image1: `${card2Background}`,
    style: "orange",
  },
  {
    headline: "მოიგე ჯეკპოტი",
    mainText: "retrieve 300% bet amount as real money…",
    image1: `${card3Background}`,
    style: "purple",
  },
];
