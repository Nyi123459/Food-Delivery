import React from "react";
import SearchBar from "../../Common/SearchBar";
import MallPhoto from "../../../assets/Mall/MallPhoto.png";
import AnimatedPhoto from "./AnimatedPhoto";

const Herosection = () => {
  return (
    <section className="bg-primary h-[760px] md:h-[870px] mdx:h-[550px]">
      <div className="flex max-mdx:flex-col ml-[10%] mr-[10%]">
        <div className="flex flex-col w-4/5 mt-[10%] max-mdx:w-full">
          <SearchBar
            placeholderText={"Search Item"}
            buttonText={"Find Item"}
            titleText={"Your Ultimate Online Grocery"}
            subtitleText={
              "Experience grocery shopping and swift home delivery with our wide range of fresh produce and essentials"
            }
          />
        </div>
        <AnimatedPhoto src={MallPhoto} />
      </div>
    </section>
  );
};

export default Herosection;
