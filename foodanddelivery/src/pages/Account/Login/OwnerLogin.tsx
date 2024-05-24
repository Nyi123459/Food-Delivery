import React from "react";

const OwnerLogin: React.FC = () => {
  return (
    <div className="flex justify-center py-10 px-4">
      <form className="w-full max-w-lg">
        <h2 className="text-center text-2xl font-bold mb-6">
          Interested? Fill in the form below to become our partner and increase
          your revenue!
        </h2>
        {/* Owner login form fields */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="restaurantName"
          >
            Restaurant/ Shop Name*
          </label>
          <input
            id="restaurantName"
            type="text"
            placeholder=""
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="businessType"
          >
            Business Type*
          </label>
          <select
            id="businessType"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Value</option>
            <option value="restaurant">Restaurant</option>
            <option value="shop">Shop</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First/Given Name*
          </label>
          <input
            id="firstName"
            type="text"
            placeholder=""
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last/ Family Name*
          </label>
          <input
            id="lastName"
            type="text"
            placeholder=""
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="contactNumber"
          >
            Primary Contact Number*
          </label>
          <input
            id="contactNumber"
            type="text"
            placeholder="+9523456789"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@mail.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="menuUpload"
          >
            Menu/Item List Upload*
          </label>
          <input
            id="menuUpload"
            type="file"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-gray-600 text-xs italic mt-1">
            Please upload a copy of your menu as per current prices for in-store
            purchases. Supported files such as pdf, excel, word, jpg.
          </p>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="restaurantAddress"
          >
            Restaurant Address
          </label>
          <input
            id="restaurantAddress"
            type="text"
            placeholder="Search here..."
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default OwnerLogin;
