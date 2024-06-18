import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const LoginProfile: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      <div className="relative">
        <button
          className="select-none rounded-lg border border-black py-3 px-6 text-center align-middle font-sans text-m uppercase text-black transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:bg-amber-50 hover:border-[#FFA500] flex items-center justify-between"
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}>
          Be Our Partner <RiArrowDropDownLine className="ml-2" size={24} />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <button className="block px-4 py-2 text-left text-gray-800 hover:underline underline-offset-8 decoration-amber-500 w-full">
              Profile
            </button>
            <button className="block px-4 py-2 text-left text-gray-800 hover:underline underline-offset-8 decoration-amber-500 w-full">
              Orders & reordering
            </button>
            <button className="block px-4 py-2 text-left text-gray-800 hover:underline underline-offset-8 decoration-amber-500 w-full">
              Vouchers
            </button>
            <button className="block px-4 py-2 text-left text-gray-800 hover:underline underline-offset-8 decoration-amber-500 w-full">
              Help Centers
            </button>
            <button className="block px-4 py-2 text-left text-gray-800 hover:underline underline-offset-8 decoration-amber-500 w-full">
              Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginProfile;
