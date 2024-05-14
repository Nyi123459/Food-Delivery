import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Images } from "../../../assets";
import Login from "../../../pages/Account/Login";
import SignUp from "../../../pages/Account/SignUp";

const Navbar = () => {
  return (
    <div className="flex-col">
      <div className="flex ml-[10%] mr-[10%] py-4 items-center">
        {/* User Icon (hidden on medium screens and larger) */}
        <div className="hidden md:flex">
          <IoPerson />
        </div>

        {/* Logo */}
        <div className="mr-auto flex items-center">
          <img
            src={Images.logo}
            alt="Logo"
            className="h-auto object-cover max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px]"
          />
        </div>

        {/* Search Bar (visible on medium screens and larger) */}
        <div className="gap-4 items-center md:flex hidden flex-1">
          <FaLocationDot
            style={{
              color: "#EF4358",
              fontSize: "1.2rem",
              marginRight: "10px",
            }}
          />
          <input
            className="flex-1 h-full outline-none placeholder:text-[#617585] placeholder:text-[14px] border-none"
            type="text"
            placeholder="Enter Your Address"
          />
        </div>

        {/* Login and Signup buttons */}
        <div className="flex gap-2">
          <Login />
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
