import React from "react";
import Vegetables from "../../../assets/Mall/Vegetables.png";
import MallPhoto from "../../../assets/Mall/MallPhoto.png";
import AnimatedPhoto from "./AnimatedPhoto";
import HerosectionCommon from "../../Common/Herosection.common";

const Herosection = () => {
  return (
    <HerosectionCommon
      sectionClassName={
        "bg-primary h-[670px] mdl:h-[760px] mdx:h-[550px] sm:h-[670px] md:h-[670px]"
      }
      wrapperClassName={"flex max-mdx:flex-col ml-[10%] mr-[10%]"}
      className={"flex flex-col w-4/5 mt-[10%] max-mdx:w-full"}
      textClassName={
        "text-5xl text-white font-bold max-mdl:text-4xl max-md:text-3xl"
      }
      text={"Your Ultimate Online Grocery"}
      paragraphClassName={
        "text-base mt-[10%] text-black font-normal max-mdl:text-sm max-md:text-xs"
      }
      paragraph={
        "Experience grocery shopping and swift home delivery with our wide range of fresh produce and essentials"
      }
      foodAndMall={true}
      placeholderText="Search Item"
      findText="Find Item"
      imageClassName={""}
      imageChildren={
        <AnimatedPhoto MallPhoto={MallPhoto} Vegetables={Vegetables} />
      }
    />
  );
};

export default Herosection;
