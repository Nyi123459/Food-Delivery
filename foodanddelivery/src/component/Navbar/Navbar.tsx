// import { LogoIcon } from "../../assets";
// import { MoneyBag } from "../../assets";
// import { IoMdSearch } from "react-icons/io";
// import { IoPerson } from "react-icons/io5";
// import styles from "../../style";

// export const Navbar = () => (
//   <div className="flex flex-col">
//     <div className="flex justify-between items-center bg-primary py-2.5 text-xs">
//       <div className="flex ml-[10%] md:ml-[20%] lg:ml-[25%] items-center">
//         <img src={MoneyBag} alt="money-bag" className="h-[20px] w-[20px]" />
//         <span className="flex-shrink-0">
//           List your business on Ride & Savor!
//         </span>
//       </div>
//       <div className="rounded border-[1.2px] border-white text-white px-1.5 py-1">
//         Be Our Partner
//       </div>
//       <div className="mr-[10%] md:mr-[20%] lg:mr-[25%] font-bold text-white cursor-pointer">
//         X
//       </div>
//     </div>
//     <div
//       className={`flex justify-between items-center ${styles.paddingHero} py-4 bg-white w-full`}>
//       <div className="text-xl font-bold mr-auto flex justify-center item-center">
//         <img src={LogoIcon} alt="logo" className="w-50 h-6" />
//       </div>

//       <div className="flex space-x-8">
//         {" "}
//         <div className="cursor-pointer border border-white py-[5px] px-[5px] flex items-center text-xs font-bold">
//           <IoMdSearch style={{ color: "#F17228" }} />
//           Search Food
//         </div>
//         <div className="flex px-[20px] py-[5px] cursor-pointer rounded-lg shadow shadow-primary text-xs font-bold text-[#F17228] items-center">
//           <IoPerson />
//           Login
//         </div>
//         <div className="flex cursor-pointer px-[20px] py-[5px] rounded-lg shadow shadow-primary text-xs font-bold text-[#F17228] items-center">
//           <IoPerson />
//           Signup
//         </div>
//       </div>
//     </div>
//   </div>
// );

import React from "react";
import { LogoIcon, MoneyBag } from "../../assets";

const Navbar = () => {
  return (
    <>
      <div className="flex-col ">
        <div className="bg-primary flex items-center px-[10%] py-2.5 items-center">
          <div className="flex sm:ml-0 sm:mr-[20px] lg:ml-[20%]">
            <img src={MoneyBag} alt="Money-bag" className="h-[25px] w-[25px]" />
            <p>
              List your business on{" "}
              <span className="text-red-500">Ride & Savor!</span>
            </p>
          </div>
          <div className="sm:text-xs lg:text-base rounded border-[1.2px] border-white px-1.5 py-1 lg:ml-[150px] lg:mr-auto sm:mr-[30px] md:mr-auto text-white">
            Be Our Partner
          </div>
          <p className="font-bold cursor-pointer">X</p>
        </div>
        <div className="flex">
          <div>
            <img src={LogoIcon} alt="Logo" className="w-50 h-6" />
          </div>
          <div className="flex">
            <div>Search Food</div>
            <div>Login</div>
            <div>Sign Up</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
