<<<<<<< HEAD
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
    dots: true,
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
          dots: true,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    autoplay: true,
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
 */

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FavoriteCuisinesLinks } from "../../../constants/food/index";

const FavoriteCuisines: React.FC = () => {
  const settings = {
    dots: true,
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
          dots: true,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
=======
import React from "react";
import FloatingItems from "../../Common/FloatingItems";
import { FavoriteCuisinesLinks } from "../../../constants/food";
>>>>>>> master

const FavoriteCuisines = () => {
  return (
    <div className="flex flex-col py-12 ml-[10%] mr-[10%]">
      <div className="flex flex-start mb-6">
        <h2 className="text-2xl font-bold">Your favourite cuisines</h2>
      </div>
<<<<<<< HEAD
      <Slider {...settings}>
        {FavoriteCuisinesLinks.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-3">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-24 object-cover rounded-md mb-4"
            />
            <div className="text-center">
              <span className="text-white text-lg">{item.title}</span>
            </div>
          </div>
        ))}
      </Slider>
=======
      <FloatingItems data={FavoriteCuisinesLinks} showOptionalContent={true} />;
>>>>>>> master
    </div>
  );
};

export default FavoriteCuisines;
