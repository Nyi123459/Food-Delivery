import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine, RiSearchLine } from "react-icons/ri";
import BackgroundPhoto from "../../../assets/bg-photo.jpg";
import NavbarLogin from "../NavbarLogin";

const OwnerRegister: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    restaurantName: "",
    businessType: "",
    name: "",
    contactNumber: "",
    email: "",
    menuUpload: null,
    restaurantAddress: "",
  });

  const [formErrors, setFormErrors] = useState({
    restaurantName: false,
    businessType: false,
    name: false,
    contactNumber: false,
    email: false,
    menuUpload: false,
    restaurantAddress: false,
  });

  const handleLoginNavigation = () => {
    navigate("/login/food-merchant-owner");
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelectOption = (value: string) => {
    setFormData({ ...formData, businessType: value });
    setDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = {
      restaurantName: formData.restaurantName === "",
      businessType: formData.businessType === "",
      name: formData.name === "",
      contactNumber: formData.contactNumber === "",
      email: formData.email === "",
      menuUpload: formData.menuUpload === null,
      restaurantAddress: formData.restaurantAddress === "",
    };

    setFormErrors(errors);

    const hasErrors = Object.values(errors).some((error) => error);
    if (!hasErrors) {
      // Handle form submission
      console.log("Form submitted", formData);
    }
  };

  return (
    <section>
      <NavbarLogin />
      <div
        className="p-4 bg-cover"
        style={{
          backgroundImage: `url(${BackgroundPhoto})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex justify-end px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-center text-l font-bold mb-8 w-full text-amber-600">
              Ready to expand your business? Join our network to boost your
              revenue. Fill out the form below!
            </h2>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  className="block text-black text-sm font-normal mb-2"
                  htmlFor="restaurantName"
                >
                  Restaurant/ Shop Name
                </label>
                <input
                  id="restaurantName"
                  type="text"
                  value={formData.restaurantName}
                  onChange={handleChange}
                  placeholder=""
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-amber-400 focus:shadow-outline ${
                    formErrors.restaurantName ? "border-red-500" : ""
                  }`}
                />
                {formErrors.restaurantName && (
                  <p className="text-red-500 text-xs italic">
                    Please enter the restaurant/shop name.
                  </p>
                )}
              </div>
              <div className="relative mb-4">
                <label
                  className="block text-black text-sm font-normal mb-2"
                  htmlFor="businessType"
                >
                  Business Type
                </label>
                <div className="relative">
                  <div>
                    <div
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-amber-400 focus:shadow-outline ${
                        formErrors.businessType ? "border-red-500" : ""
                      }`}
                      onClick={handleToggleDropdown}
                      tabIndex={0} // Ensure the div is focusable
                    >
                      <span
                        className={
                          formData.businessType ? "text-black" : "text-gray-500"
                        }
                      >
                        {formData.businessType || "Select Value"}
                      </span>
                      <RiArrowDropDownLine
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                        size={24}
                      />
                    </div>
                    {dropdownOpen && (
                      <div className="absolute w-full mt-1 border rounded shadow-lg bg-white">
                        <div
                          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                          onClick={() => handleSelectOption("Restaurant")}
                        >
                          Restaurant
                        </div>
                        <div
                          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                          onClick={() => handleSelectOption("Shop")}
                        >
                          Shop
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-black text-sm font-normal mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=""
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-amber-400 focus:shadow-outline ${
                    formErrors.name ? "border-red-500" : ""
                  }`}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-xs italic">
                    Please enter your name.
                  </p>
                )}
              </div>
              <div className="relative mb-4">
                <label
                  className="block text-black text-sm font-normal mb-2"
                  htmlFor="contactNumber"
                >
                  Phone Number
                </label>
                <input
                  id="contactNumber"
                  type="text"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="+95923456789"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-amber-400 focus:shadow-outline ${
                    formErrors.contactNumber ? "border-red-500" : ""
                  }`}
                />
                {formErrors.contactNumber && (
                  <p className="text-red-500 text-xs italic">
                    Please enter a contact number.
                  </p>
                )}
              </div>
              <div className="relative mb-4">
                <label
                  className="block text-black text-sm font-normal mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@mail.com"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-amber-400 focus:shadow-outline ${
                    formErrors.email ? "border-red-500" : ""
                  }`}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-xs italic">
                    Please enter a valid email address.
                  </p>
                )}
              </div>
              <div className="relative mb-4">
                <label
                  className="block text-black text-sm font-normal mb-2"
                  htmlFor="menuUpload"
                >
                  Menu/Item List Upload
                </label>
                <input
                  id="menuUpload"
                  type="file"
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-amber-400 focus:shadow-outline ${
                    formErrors.menuUpload ? "border-red-500" : ""
                  }`}
                />
                {formErrors.menuUpload && (
                  <p className="text-red-500 text-xs italic">
                    Please upload a menu or item list.
                  </p>
                )}
                <p className="text-gray-600 text-xs italic mt-1">
                  Please upload a copy of your menu as per current prices for
                  in-store purchases. Supported files such as pdf, excel, word,
                  jpg.
                </p>
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-normal mb-2"
                  htmlFor="restaurantAddress"
                >
                  Restaurant Address
                </label>
                <div className="relative">
                  <input
                    id="restaurantAddress"
                    type="text"
                    value={formData.restaurantAddress}
                    onChange={handleChange}
                    placeholder="Search here..."
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-amber-400 focus:shadow-outline ${
                      formErrors.restaurantAddress ? "border-red-500" : ""
                    }`}
                  />
                  {formErrors.restaurantAddress && (
                    <p className="text-red-500 text-xs italic">
                      Please enter the restaurant address.
                    </p>
                  )}
                  <RiSearchLine
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                    size={12}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-normal w-full py-2 px-3 rounded focus:outline-none focus:shadow-outline"
                >
                  SUBMIT
                </button>
              </div>
              <div className="flex items-center justify-center pt-8">
                Already registered?{" "}
                <span
                  onClick={handleLoginNavigation}
                  className="text-amber-500 cursor-pointer px-3"
                >
                  Login
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerRegister;
