
/* import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FavoriteCuisinesLinks } from "../../../constants/food/index";

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

const FavoriteCuisines: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: "lg",
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: "md",
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: "sm",
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
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
    <div className="flex flex-col py-12 ml-[10%] mr-[10%]">
      <div className="flex flex-start mb-6">
        <h2 className="text-2xl font-bold">Your favorite cuisines</h2>
      </div>
      <Slider {...settings}>
        {FavoriteCuisinesLinks.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-3">
            <img
              src={item.img}
              className="w-full h-24 object-cover rounded-md mb-4"
              alt={item.title}
            />
            <div className="text-center">
              <span className="text-white text-lg">{item.title}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FavoriteCuisines;
 */

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FavoriteCuisinesLinks } from "../../../constants/food/index";

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

const FavoriteCuisines: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1143,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
    autoplay: false,
    speed: 1500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SliderArrow position="next" />,
    prevArrow: <SliderArrow position="prev" />,
  };

  return (
    <div className="flex flex-col py-12 ml-[10%] mr-[10%]">
      <div className="flex flex-start mb-6">
        <h2 className="text-2xl font-bold">Your Favorite Cuisines</h2>
      </div>
      <Slider {...settings}>
        {FavoriteCuisinesLinks.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-3">
            <img
              src={item.img}
              
              alt={item.title}className="w-full h-24 object-cover rounded-md mb-4"
              
            />
            <div className="text-center">
              <span className="text-white text-lg">{item.title}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FavoriteCuisines;
