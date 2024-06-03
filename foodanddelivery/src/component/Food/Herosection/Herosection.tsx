import { Food } from "../../../assets";
import Carousel from "./Carousel";
import HerosectionCommon from "../../Common/Herosection.common";

const Herosection = () => {
  return (
    <HerosectionCommon
      sectionClassName={"bg-primary h-[760px] md:h-[870px] mdx:h-[550px] pb-20"}
      wrapperClassName={"flex max-mdx:flex-col ml-[10%] mr-[10%]"}
      className={"flex flex-col w-3/5 mt-[10%] max-mdx:w-full"}
      textClassName={
        "text-5xl text-white font-bold max-mdl:text-4xl max-md:text-3xl"
      }
      text={"Would you like to be with me?"}
      paragraphClassName={
        "text-base mt-[10%] text-black font-normal max-mdl:text-sm max-md:text-xs"
      }
      paragraph={"Accessible meals and taxis, just a few clicks away."}
      findText={"Find Food"}
      placeholderText={"Search Food"}
      foodAndMall={true}
      imageClassName={"w-2/5 h-full mt-[10%] max-mdx:hidden"}
      imageChildren={
        <div className="rounded-box mt-[10%] mb-[20%] ml-[10%] mr-[10%]">
          <Carousel autoSlide={true} hideButtons={false}>
            {Food.map((data, index) => (
              <div key={index} className="h-[300px] w-full">
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-full w-fit object-cover rounded-box"
                />
              </div>
            ))}
          </Carousel>
        </div>
      }
    />
  );
};

export default Herosection;
