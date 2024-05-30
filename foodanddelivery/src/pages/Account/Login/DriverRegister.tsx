import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundPhoto from "../../../assets/bg-photo.jpg";
import NavbarLogin from "../NavbarLogin";

const DriverRegister: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    address: "",
    vehicleType: "",
    vehicleNumber: "",
    licenseNumber: "",
    licenseExpire: "",
    insuranceProvider: "",
    bankName: "",
    accountNumber: "",
    branchName: "",
    referralCode: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    dateOfBirth: false,
    address: false,
    vehicleType: false,
    vehicleNumber: false,
    licenseNumber: false,
    licenseExpire: false,
    insuranceProvider: false,
    bankName: false,
    accountNumber: false,
    branchName: false,
    referralCode: false,
  });

  const handleLoginNavigation = () => {
    navigate("/login/rider");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = {
      name: formData.name === "",
      email: formData.email === "",
      phoneNumber: formData.phoneNumber === "",
      dateOfBirth: formData.dateOfBirth === "",
      address: formData.address === "",
      vehicleType: formData.vehicleType === "",
      vehicleNumber: formData.vehicleNumber === "",
      licenseNumber: formData.licenseNumber === "",
      licenseExpire: formData.licenseExpire === "",
      insuranceProvider: formData.insuranceProvider === "",
      bankName: formData.bankName === "",
      accountNumber: formData.accountNumber === "",
      branchName: formData.branchName === "",
      referralCode: formData.referralCode === "",
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
              Ready to hit the road? Join our network as a rider and boost your
              earnings. Fill out the form below!
            </h2>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="relative mb-4">
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
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="text"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+95923456789"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-amber-400 focus:shadow-outline ${
                    formErrors.phoneNumber ? "border-red-500" : ""
                  }`}
                />
                {formErrors.phoneNumber && (
                  <p className="text-red-500 text-xs italic">
                    Please enter a contact number.
                  </p>
                )}
              </div>

              <div className="relative mb-4">
                <label
                  className="block text-black text-sm font-normal mb-2"
                  htmlFor="dateOfBirth"
                >
                  Date of Birth
                </label>
                <input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  placeholder="YYYY-MM-DD"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-amber-400 focus:shadow-outline ${
                    formErrors.dateOfBirth ? "border-red-500" : ""
                  }`}
                />
                {formErrors.dateOfBirth && (
                  <p className="text-red-500 text-xs italic">
                    Please enter a valid date of birth.
                  </p>
                )}
              </div>

              <div className="relative mb-4">
                <label
                  className="block text-black text-sm font-normal mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-amber-400 focus:shadow-outline ${
                    formErrors.address ? "border-red-500" : ""
                  }`}
                />
                {formErrors.address && (
                  <p className="text-red-500 text-xs italic">
                    Please enter your address.
                  </p>
                )}
              </div>

              <div className="relative mb-4">
                <label
                  className="block text-black text-sm font-normal mb-2"
                  htmlFor="referralCode"
                >
                  Referral Code
                </label>
                <input
                  id="referralCode"
                  type="text"
                  value={formData.referralCode}
                  onChange={handleChange}
                  placeholder="Enter your referral code"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-amber-400 focus:shadow-outline ${
                    formErrors.referralCode ? "border-red-500" : ""
                  }`}
                />
                {formErrors.referralCode && (
                  <p className="text-red-500 text-xs italic">
                    Please enter your referral code.
                  </p>
                )}
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

export default DriverRegister;
