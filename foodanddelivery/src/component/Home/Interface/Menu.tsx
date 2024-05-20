import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import default styles first
import { menu_list, responsive } from "./index.js";
interface MenuItem {
  menu_image: string;
  menu_name: string;
}

const TopCategoryArrow: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 h-fit flex flex-col justify-center items-center px-4 py-10 lg:px-20 lg:py-20 gap-6">
      <div className="w-full flex items-center justify-between pl-28 pt-3">
        <h1 className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-yellow-400 to-yellow-600 transition-all ease-in-out duration-100">
          Top Category
        </h1>
      </div>
      <div className="w-full p-3 gap-x-28 items-center justify-center">
        <Carousel responsive={responsive}>
          {menu_list.map((item: MenuItem, index: number) => (
            <div
              key={index}
              className="bg-yellow-200 p-10 rounded-xl flex flex-col w-36 h-28 justify-center items-center border-b-[8px]"
            >
              <div className="rounded-full hover:bg-yellow-500 cursor-pointer">
                <img
                  src={item.menu_image}
                  alt={item.menu_name}
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 mt-4">
                <h1 className="text-sm text-black font-bold">
                  {item.menu_name}
                </h1>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TopCategoryArrow;
