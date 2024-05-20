/* import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DailyDealLinks } from '../../../constants/food/index';

const DailyDeal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Your Daily Deal</h2>
      <Slider {...settings}>
        {DailyDealLinks.map((data, index) => (
          <div key={index} className="p-4 box-border">
            <img src={data.img} alt={data.title} className="w-full h-48 object-cover" />
            <p className="text-lg sm:text-base xs:text-sm max-md:text-lg lg:text-xl truncate mt-2 pl-0">
              {data.title}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default DailyDeal;

 */
/* import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { DailyDealLinks } from '../../../constants/food/index';
export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
};


const DailyDeal = () => {
  return (
    <div>
      <div>
        <h2>Your Daily Deal</h2>
      </div>
      <Swiper {...sliderSettings}>
          <SliderButtons />
          {DailyDealLinks.map((card, i) => (
            <SwiperSlide key={i}>
              <div>
                <img src={card.img}  />
              
                <span className="primaryText">{card.title}</span>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      
    </div>
  )
}

export default DailyDeal

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
 */

/* import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
//import "swiper/swiper-bundle.min.css";
import "swiper/css";
import { DailyDealLinks } from "../../../constants/food/index";

const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
};

const DailyDeal = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Your Daily Deal</h2>
      </div>
      <Swiper {...sliderSettings}>
        <SliderButtons />
        {DailyDealLinks.map((card, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col items-center">
              <img
                src={card.img}
                className="w-full h-auto mb-4"
                alt={card.title}
              />
              <span className="text-primary text-lg font-semibold">
                {card.title}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DailyDeal;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-gray-500 text-white p-2 rounded-l hover:bg-gray-700"
      >
        &lt;
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="bg-gray-500 text-white p-2 rounded-r hover:bg-gray-700"
      >
        &gt;
      </button>
    </div>
  );
};
 */



/* import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { DailyDealLinks } from '../../../constants/food/index';


const SliderArrow = ({ className, style, onClick, position }) => {
  const arrowStyle =
    position === 'next'
      ? { ...style, right: '10px' }
      : { ...style, left: '10px', zIndex: '1' };

  return <div className={className} style={arrowStyle} onClick={onClick} />;
};



const DailyDeal = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    nextArrow: <SliderArrow position="next" />,
    prevArrow: <SliderArrow position="prev" />,
  };


  return (
    <div>
      <div className="flex flex-col py-12 gap-5">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl text-primary font-bold leading-8 tracking-tighter  ">
            Our Top Five Menu
          </h2>
          <p className="text-xl font-semibold tracking-tight">
            Try our best Menu Today
          </p>
        </div>
        <div className="mx-12 ">
          <Slider {...settings}>
            {DailyDealLinks.map((item, index) => (
              <div key={index}>
                <div className="border rounded-lg mx-2">
                  <img
                    width={400}
                    height={300}
                    src={item.img}
                    
                    className="w-full h-[300px] object-cover rounded-t-lg "
                  />
                  <div className="flex flex-col gap-2 px-2 py-4">
                    <div className="text-lg ">{item.title}</div>

                    <div className="flex flex-row justify-between items-center font-semibold">
                      <p>150.00 MAD</p>
                      <button className="bg-primary duration-200 p-1 text-sm rounded-full text-white  hover:bg-white hover:border-primary hover:text-primary">
                        add to Cart
                      </button>
                    </div>
                    </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

     
      </div>
    </div>
  );
  
}

export default DailyDeal
 */


/* import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DailyDealLinks } from '../../../constants/food/index';

type SliderArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  position: 'next' | 'prev';
};



const SliderArrow: React.FC<SliderArrowProps> = ({ className, style, onClick, position }) => {
  const arrowStyle =
    position === 'next'
      ? { ...style, right: '10px' }
      : { ...style, left: '10px', zIndex: '1' };

  return <div className={className} style={arrowStyle} onClick={onClick} />;
};

const DailyDeal: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    nextArrow: <SliderArrow position="next" />,
    prevArrow: <SliderArrow position="prev" />,
  };

  return (
    <div>
      <div className="flex flex-col py-12 gap-5">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl text-primary font-bold leading-8 tracking-tighter">
            Your Daily Deal
          </h2>
          <p className="text-xl font-semibold tracking-tight">
            Try our best Menu Today
          </p>
        </div>
        <div className="mx-12">
          <Slider {...settings}>
            {DailyDealLinks.map((item, index) => (
              <div key={index}>
                <div className="border rounded-lg mx-2">
                  <img
                    width={400}
                    height={300}
                    src={item.img}
                    className="w-full h-[300px] object-cover rounded-t-lg"
                  />
                  <div className="flex flex-col gap-2 px-2 py-4">
                    <div className="text-lg">{item.title}</div>
                    <div className="flex flex-row justify-between items-center font-semibold">
                      <p>150.00 MAD</p>
                      <button className="bg-primary duration-200 p-1 text-sm rounded-full text-white hover:bg-white hover:border-primary hover:text-primary">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default DailyDeal;
 */

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DailyDealLinks } from '../../../constants/food/index';

type SliderArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  position: 'next' | 'prev';
};

const SliderArrow: React.FC<SliderArrowProps> = ({ className, style, onClick, position }) => {
  const arrowStyle =
    position === 'next'
      ? { ...style, right: '10px' }
      : { ...style, left: '10px', zIndex: '1' };

  return <div className={className} style={arrowStyle} onClick={onClick} />;
};

const DailyDeal: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    nextArrow: <SliderArrow position="next" />,
    prevArrow: <SliderArrow position="prev" />,
  };

  return (
    <div>
      <div className="flex flex-col py-12 gap-5">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl text-primary font-bold leading-8 tracking-tighter">
            Your Daily Deal
          </h2>
         
        </div>
        <div className="mx-12">
          <Slider {...settings}>
            {DailyDealLinks.map((item, index) => (
              <div key={index} className="relative border rounded-lg mx-2">
                <img
                  width={400}
                  height={300}
                  src={item.img}
                  className="w-full h-[300px] object-cover rounded-t-lg"
                />
                <button className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                  10% Off
                </button>
                <div className="flex flex-col gap-2 px-2 py-4">
                  <div className="text-lg">{item.title}</div>
                  <div className="flex flex-row justify-between items-center font-semibold">
                    <p>150.00 MAD</p>
                    <button className="bg-primary duration-200 p-1 text-sm rounded-full text-white hover:bg-white hover:border-primary hover:text-primary">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default DailyDeal;
