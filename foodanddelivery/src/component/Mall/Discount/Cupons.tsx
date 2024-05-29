import React from "react";
import Slider from "react-slick";
import { MallCupon } from "../../../assets";

const Cupons: React.FC = () => {
  const handleClick = () => {};

  const customSetting = {
    dots: false,
    infinite: true,
    autoSlide: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
  };
  return (
    <Slider {...customSetting}>
      {MallCupon.map((cupon) => (
        <img
          id={cupon.id}
          src={cupon.img}
          alt={cupon.title}
          className="object-cover h-full pl-[10%] pr-[10%] cursor-pointer"
          onClick={handleClick}
        />
      ))}
    </Slider>
  );
};

export default Cupons;
