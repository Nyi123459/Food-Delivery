import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { UserContext } from "../../../context/userContext";

const BeOurPartner: React.FC = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { currentUser } = useContext(UserContext);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (role: string) => {
    navigate(`/register/${role}`);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="relative">
        <button
          className="select-none rounded-lg border border-black py-3 px-6 text-center align-middle font-sans text-m uppercase text-black transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:bg-amber-50 hover:border-[#FFA500] flex items-center justify-between"
          type="button"
          onClick={(event) =>
            !currentUser
              ? event.preventDefault()
              : setDropdownOpen(!dropdownOpen)
          }>
          Be Our Partner <RiArrowDropDownLine className="ml-2" size={24} />
        </button>
        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
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
