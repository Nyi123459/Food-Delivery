/* import Slider from "react-slick";
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
    dots: false, // Hide the dots
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false, // Hide the dots
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false, // Hide the dots
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false, // Hide the dots
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
    <div>
      <div className="flex flex-col py-12 gap-5">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl text-primary font-bold leading-8 tracking-tighter">
            Your favorite cuisines
          </h2>
        </div>
        <div className="mx-12">
          <Slider {...settings}>
            {FavoriteCuisinesLinks.map((item, index) => (
              <div key={index} className="relative border rounded-lg mx-4">
                <div className="relative">
                  <img
                    width={300}
                    height={200}
                    src={item.img}
                    className="w-full h-[200px] object-cover rounded-t-lg"
                    alt={item.title}
                  />
                </div>
                <div className="flex flex-col gap-2 px-2 py-4">
                  <div className="text-lg">{item.title}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
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
