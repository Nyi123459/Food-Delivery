import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { IoMdSearch, IoMdClose } from "react-icons/io";
import { Images } from "../../assets";
import BeOurPartner from "../Home/PartnerShip/BeOurPartner";
import Login from "../../pages/Account/Login";
import SignUp from "../../pages/Account/SignUp";

interface BarProps {
  onClose: () => void;
}

const Navbar = ({ onClose }: BarProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      <div className="flex-col">
        <div
          className={`bg-primary flex items-center px-[10%] py-2.5 ${
            !isOpen && "hidden"
          }`}
        >
          <div className="flex sm:ml-0 sm:mr-[20px] lg:ml-[20%] md:ml-[20%]">
            <img
              src={Images.MoneyBag}
              alt="Money-bag"
              className="h-[25px] w-[25px]"
            />
            <p>
              List your business on{" "}
              <span className="text-red-500">Ride & Savor!</span>
            </p>
          </div>
          <div className="sm:text-xs lg:text-base px-1.5 py-1 lg:ml-[150px] lg:mr-auto sm:mr-[30px] md:mr-[80px] text-white">
            <BeOurPartner />
          </div>
          <button type="button" onClick={handleClick}>
            <IoMdClose className="text-white-500 hover:text-red-500 h-6 w-6" />{" "}
          </button>
        </div>
        <div className="flex ml-[10%] mr-[10%] py-4">
          <div className="mdl:hidden ml-0">
            <IoPerson />
          </div>
          <div className="mr-auto flex xs:ml-[30%] sm:ml-[30%] md:ml-[30%] mdl:ml-0 lg:ml-0 items-center">
            <img src={Images.logo} alt="Logo" className="w-50 h-6" />
          </div>

          <div className="flex gap-4 hidden mdl:flex">
            <div className="flex items-center">
              <IoMdSearch
                style={{
                  color: "#F17228",
                  fontSize: "1.5rem",
                  marginRight: "10px",
                }}
              />
              <input
                className="flex-1 h-full outline-none placeholder:text-[#617585] placeholder:text-s max-mdl:hidden"
                type="text"
                placeholder="Search"
              />
            </div>

            <Login />

            <SignUp />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
