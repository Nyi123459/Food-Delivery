import { RxTriangleRight } from "react-icons/rx";
import { Images } from "../../../assets";
import { Link } from "react-router-dom";
import { iconsLinks } from "../../../constants";

const Herosection = () => {
  return (
    <>
      <div className="flex flex-col bg-primary relative mb-20">
        <div className="max-md:flex-col flex mt-[5%] ml-[10%] mr-[10%] mb-[5%]">
          <div className="flex flex-col w-full md:w-1/2 ">
            <div className="max-w-[650px] lg:text-5xl md:text-3xl sm:text-2xl xs:text-xl text-white">
              Ride & Savor <br />
              Delivery Service Management
            </div>
            <p className="lg:text-base md:text-sm sm:text-xs xs:text-xs mt-2">
              Track and optimize routes in real-time
            </p>
            <div className="flex mt-[10%] mb-[10%] items-center max-lg:mb-0">
              <p className=" shadow shadow-black bg-[#F17228] font-medium text-base max-lg:text-sm max-md:text-xs text-white text-center flex justify-center items-center rounded-lg px-2 py-1 ">
                Get Started
              </p>
              <RxTriangleRight className="ml-[20px] h-[25px] w-[25px] rounded-full bg-[#F17228] border-[1.2px] border-none shadow shadow-black" />{" "}
              <p className="text-white font-medium text-base ml-[10px] justify-center ">
                Watch how it works{" "}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src={Images.Display} alt="Display-Photo" className="w-full" />
          </div>
        </div>
        <div className="relative">
          <div className="flex absolute bottom-0 translate-y-1/2 max-lg:left-[10%] max-lg:right-[10%] gap-x-20 max-lg:gap-2 left-0 right-0 lg:ml-[10%] lg:mr-[10%] xl:ml-[10%] xl:mr-[10%] max-lg:grid max-lg:grid-cols-2 max-mdx:top-[-60px]">
            {iconsLinks.map((data, index) => (
              <Link
                to={data.route}
                key={index}
                style={{
                  boxShadow:
                    "0 4px 6px 0 rgba(255, 184, 0, 0.5), 0 6px 12px 0 rgba(255, 138, 0, 0.5)",
                }}
                className="border-2 bg-secondary flex items-center sm:w-[100%] md:w-[100%] lg:w-[25%] xl:w-[25%] rounded-xl p-2.5 max-md:p-0 max-sml:p-0 justify-start hover:-translate-y-1 hover:scale-110 transition duration-700 ease-in-out">
                <img src={data.icon} alt={data.title} className="size-[50px]" />
                <p className="text-xl font-bold sm:text-sm xs:text-xs max-md:text-base lg:truncate md:truncate pl-2 ">
                  {data.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
