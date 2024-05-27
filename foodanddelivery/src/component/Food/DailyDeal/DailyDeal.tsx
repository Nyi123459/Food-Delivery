/* import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DailyDealLinks } from "../../../constants/food/index";

type SliderArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  position: "next" | "prev";
};

const SliderArrow: React.FC<SliderArrowProps> = ({
  className,
  style,
  onClick,
  position,
}) => {
  const arrowStyle =
    position === "next"
      ? { ...style, right: "10px" }
      : { ...style, left: "10px", zIndex: "1" };

  return <div className={className} style={arrowStyle} onClick={onClick} />;
};

const DailyDeal: React.FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: "max-lgx",
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: "max-mdx",
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: "max-md",
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SliderArrow position="next" />,
    prevArrow: <SliderArrow position="prev" />,
  };

  return (
    <div className="flex flex-col ml-[10%] mr-[10%]">
      <div className="flex flex-start mb-6">
        <h2 className="text-2xl font-bold">Your Daily Deal</h2>
      </div>
      <Slider {...settings}>
        {DailyDealLinks.map((card, i) => (
          <div key={i} className="flex flex-col items-center p-3 relative">
            <div className="relative">
              <img
                src={card.img}
                className="w-full h-48 object-cover mb-4 rounded"
                alt={card.title}
              />
              <div className="absolute bottom-0 left-0 bg-primary text-white text-base px-6 py-2 rounded">
                10% Off
              </div>
            </div>
            <span className="text-white text-lg font-semibold">
              {card.title}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DailyDeal;
 */

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DailyDealLinks } from "../../../constants/food/index";

type SliderArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  position: "next" | "prev";
  
};

const SliderArrow: React.FC<SliderArrowProps> = ({
  className,
  style,
  onClick,
  position,
  
}) => {
  const arrowStyle =
    position === "next"
      ? { ...style, right: "10px" }
      : { ...style, left: "10px", zIndex: "1" };

  return <div className={className} style={arrowStyle} onClick={onClick} />;
};

const DailyDeal: React.FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1143,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: false,
    speed: 1500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SliderArrow position="next" />,
    prevArrow: <SliderArrow position="prev"  />,
  };

  return (
    <div className="flex flex-col ml-[10%] mr-[10%]">
      <div className="flex flex-start mb-6">
        <h2 className="text-2xl font-bold">Your Daily Deal</h2>
      </div>
      <Slider {...settings}>
        {DailyDealLinks.map((card, i) => (
          <div key={i} className="flex flex-col items-center p-3 relative">
            <div className="relative">
              <img
                src={card.img}
                className="w-full h-48 object-cover mb-4 rounded"
                alt={card.title}
              />
              <div className="absolute bottom-0 left-0 bg-primary text-white text-base px-6 py-2 rounded">
                10% Off
              </div>
            </div>
            <span className="text-white text-lg font-semibold">
              {card.title}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DailyDeal;
