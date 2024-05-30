import { useNavigate } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import { Images } from "../../assets";

const NavbarLogin = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between px-12 py-2 bg-white shadow-md">
      <div className="flex items-center">
        <img
          src={Images.logo}
          alt="logo"
          className="w-50 h-6 cursor-pointer"
          onClick={handleLogoClick}
        />
      </div>
      <div className="flex items-center">
        <span className="text-gray-700 px-2 cursor-pointer hidden md:inline">
          <MdLanguage size={24} />
        </span>
        <span className="text-gray-700 cursor-pointer hidden md:inline">
          EN
        </span>
        <span className="text-gray-700 px-2 cursor-pointer hidden md:inline">
          |
        </span>
        <span className="text-gray-700 cursor-pointer hidden md:inline">
          MM
        </span>
      </div>
    </nav>
  );
};

export default NavbarLogin;
