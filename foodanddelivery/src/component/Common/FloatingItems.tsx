import React from "react";
import Slider from "react-slick";

type FloatingItemsProps = {
  data: { img: string; title: string }[];
  showOptionalContent?: boolean;
};

const FloatingItems: React.FC<FloatingItemsProps> = ({
  data,
  showOptionalContent = false,
}) => {
  const defaultSettings = {
    dots: false,
    infinite: true,
    slidesToShow: data.length,
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
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const combinedSettings = { ...defaultSettings };

  return (
    <Slider {...combinedSettings}>
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center border-none p-3">
          <img
            src={item.img}
            className="w-full h-24 rounded-md mb-4 max-sml:object-contain"
            alt={item.title}
          />
          {showOptionalContent && (
            <div className="text-center">
              <span className="text-black text-xs font-bold">{item.title}</span>
            </div>
          )}
        </div>
      ))}
    </Slider>
  );
};

export default FloatingItems;
