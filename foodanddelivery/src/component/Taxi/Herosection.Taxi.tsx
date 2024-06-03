import React from "react";
import HerosectionCommon from "../Common/Herosection.common";
import TaxiMascot from "../../assets/Taxi/TaxiMascot.png";

const Herosection = () => {
  const handleClick = () => {};
  return (
    <HerosectionCommon
      sectionClassName={"bg-primary h-[760px] md:h-[870px] mdx:h-[550px] pb-20"}
      wrapperClassName={"flex max-mdx:flex-col ml-[10%] mr-[10%]"}
      className={"flex flex-col w-1/2 mt-[10%] max-mdx:w-full"}
      textClassName={
        "text-5xl text-white font-bold max-mdl:text-4xl max-md:text-3xl"
      }
      text={"Welcome to Rider & Savor!"}
      paragraphClassName={
        "text-base mt-[10%] text-black font-normal max-mdl:text-sm max-md:text-xs"
      }
      paragraph={"Your Safety and comfort is our concern"}
      children={
        <div
          className="ml-[10%] mt-[20%] w-[20%] h-10 bg-navcolor rounded-md flex justify-center items-center cursor-pointer"
          onClick={handleClick}>
          Book Now
        </div>
      }
      imageClassName={"w-1/2 h-full mt-[10%] pl-[10%] max-mdx:hidden"}
      imageChildren={
        <div className="w-full h-[430px] max-mdx:h-[200px]">
          <img
            src={TaxiMascot}
            alt="Taxi_Mascot"
            className="h-full w-full max-mdx:object-contain"
          />
        </div>
      }
    />
  );
};

export default Herosection;
