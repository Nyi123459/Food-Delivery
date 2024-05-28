import React from "react";
import Slider from "react-slick";
import { MallBrandImage } from "../../../assets";

const MallBrand = () => {
  const defaultSettings = {
    dots: false,
    infinite: true,
    slidesToShow: MallBrandImage.length,
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
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const combinedSettings = { ...defaultSettings };

  return (
    <div className="flex flex-col py-12 ml-[10%] mr-[10%]">
      <div className="flex flex-start mb-6">
        <h2 className="text-2xl font-bold">Can Order Now</h2>
      </div>
      <Slider {...combinedSettings} className="flex w-full ">
        {MallBrandImage.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center py-2 px-2 m-2 w-full">
            <div className="flex justify-center items-center border rounded-md shadow-sm shadow-gray-700 p-2 max-sml:w-full">
              <img
                src={item.img}
                className="w-fit h-20 rounded-md"
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MallBrand;
