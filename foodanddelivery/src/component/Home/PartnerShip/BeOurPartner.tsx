import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

const BeOurPartner: React.FC = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavigation = (role: string) => {
    navigate(`/register/${role}`);
    setDropdownOpen(false);
  };

  return (
    <div>
      <div className="relative">
        <button
          className="select-none rounded-lg border border-black py-3 px-6 text-center align-middle font-sans text-m uppercase text-black transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:bg-amber-50 hover:border-[#FFA500] flex items-center justify-between"
          type="button"
          onClick={(event) =>
            !user ? event.preventDefault() : setDropdownOpen(!dropdownOpen)
          }>
          Be Our Partner <RiArrowDropDownLine className="ml-2" size={24} />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <button
              onClick={() => handleNavigation("food-merchant-owner")}
              className="block px-4 py-2 text-left text-gray-800 hover:underline underline-offset-8 decoration-amber-500 w-full">
              Food/Merchant Owner
            </button>
            <button
              onClick={() => handleNavigation("driver")}
              className="block px-4 py-2 text-left text-gray-800 hover:underline underline-offset-8 decoration-amber-500 w-full">
              Savor Driver
            </button>
            <button
              onClick={() => handleNavigation("rider")}
              className="block px-4 py-2 text-left text-gray-800 hover:underline underline-offset-8 decoration-amber-500 w-full">
              Savor Rider
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BeOurPartner;
