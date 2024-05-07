import React from "react";
import { IoPerson } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { LogoIcon, MoneyBag } from "../../assets";

const Navbar = () => {
  return (
    <>
      <div className="flex-col ">
        <div className="bg-primary flex items-center px-[10%] py-2.5 items-center">
          <div className="flex sm:ml-0 sm:mr-[20px] lg:ml-[20%] md:ml-[20%]">
            <img src={MoneyBag} alt="Money-bag" className="h-[25px] w-[25px]" />
            <p>
              List your business on{" "}
              <span className="text-red-500">Ride & Savor!</span>
            </p>
          </div>
          <div className="sm:text-xs lg:text-base rounded border-[1.2px] border-white px-1.5 py-1 lg:ml-[150px] lg:mr-auto sm:mr-[30px] md:mr-[80px] text-white">
            Be Our Partner
          </div>
          <p className="font-bold cursor-pointer text-white">X</p>
        </div>
        <div className="flex ml-[10%] mr-[10%] py-4 ">
          <div className="md:hidden ml-0">
            <IoPerson />
          </div>
          <div className="mr-auto flex xs:ml-[30%] sm:ml-[30%] md:ml-0">
            <img src={LogoIcon} alt="Logo" className="w-50 h-6" />
          </div>
          <div className="md:hidden">
            <IoMdSearch style={{ color: "#F17228" }} />
          </div>
          <div className="flex gap-4 hidden md:flex">
            <div className="flex items-center">
              <IoMdSearch style={{ color: "#F17228" }} />
              Search Food
            </div>
            <div className="rounded-lg border-white shadow shadow-primary px-[20px] py-[5px]">
              Login
            </div>
            <div className="rounded-lg border-white shadow shadow-primary px-[20px] py-[5px]">
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
