import React from "react";

const DriverLogin: React.FC = () => {
  return (
    <div className="flex justify-center py-10 px-4">
      <form className="w-full max-w-lg">
        <h2 className="text-center text-2xl font-bold mb-6">Driver Login</h2>
        {/* Driver login form fields */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="driverId"
          >
            Driver ID*
          </label>
          <input
            id="driverId"
            type="text"
            placeholder=""
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password*
          </label>
          <input
            id="password"
            type="password"
            placeholder=""
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default DriverLogin;
