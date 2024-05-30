import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Images } from "../../../assets";
import SignUp from "../../../pages/Account/SignUp";
import { useNavigate } from "react-router-dom";
import Login from "../../../pages/Account/Login";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <div className="flex-col">
      <div className="flex ml-[10%] mr-[10%] py-4">
        <div className="mdl:hidden ml-0">
          <IoPerson />
        </div>
        <div className="mr-auto flex xs:ml-[30%] sm:ml-[30%] md:ml-[30%] mdl:ml-0 lg:ml-0 items-center justify-between">
          <img
            src={Images.logo}
            alt="Logo"
            className="w-50 h-6"
            onClick={handleLogoClick}
          />
        </div>

        <div className="flex gap-4 hidden mdl:flex">
          <div className="flex items-center">
            <FaLocationDot
              style={{
                color: "#EF4358",
                fontSize: "1.2rem",
                marginRight: "10px",
              }}
            />
            <input
              className="flex-1 h-full outline-none placeholder:text-[#617585] placeholder:text-[14px] max-mdl:hidden"
              type="text"
              placeholder="Enter Your Address"
            />
          </div>

          <Login />

          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
