import React, { useState } from "react";
import Lottie from "lottie-react";
import EmailAnimation from "../../assets/Email.json";
import { FaFacebook } from "react-icons/fa";
import { Images } from "../../assets";

interface BasicRegisterProps {
  email: string;
  password: string;
  confirmPassword?: string;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loginForm?: boolean;
  signUpForm?: boolean;
  text: string;
}

const BasicRegister: React.FC<BasicRegisterProps> = ({
  email,
  password,
  confirmPassword,
  handleSubmit,
  handleChange,
  loginForm = false,
  signUpForm = false,
  text,
}) => {
  const [currentForm, setCurrentForm] = useState(1);

  const handleNext = () => {
    setCurrentForm(currentForm + 1);
  };

  const handleBack = () => {
    if (currentForm > 1) {
      setCurrentForm(currentForm - 1);
    }
  };

  return (
    <>
      {currentForm === 1 && (
        <div>
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800 mt-4">
              Welcome!
            </h1>
            <h3 className="text-base font-light text-gray-600">
              Sign up or log in to continue.
            </h3>
          </div>
          <form className="space-y-4">
            <div className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <button type="button" className="flex items-center">
                <FaFacebook className="text-xl mr-2 -ml-1" />
                <span className="text-center">Continue with Facebook</span>
              </button>
            </div>
            <div className="w-full flex justify-center py-2 px-4 border border-current rounded-md shadow-sm text-base font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <button type="button" className="flex items-center">
                <img
                  className="w-6 h-6 mr-2 -ml-1"
                  src={Images.Google}
                  alt="Google"
                />
                <span className="text-center">Continue with Google</span>
              </button>
            </div>
            <div className="w-full flex justify-center py-2 px-4 text-base font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2">
              or
            </div>
            <div
              className="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-base font-medium bg-yellow-500 hover:bg-yellow-400 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
              onClick={handleNext}>
              <button type="button" className="flex items-center">
                {text}
              </button>
            </div>
          </form>
        </div>
      )}
      {currentForm === 2 && (
        <div>
          <div className="flex justify-center mb-6">
            <Lottie
              animationData={EmailAnimation}
              style={{ width: 100, height: 100 }}
            />
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-amber-400 focus:shadow-outline"
              />
            </label>
            <label className="block">
              Password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-amber-400 focus:shadow-outline"
              />
            </label>
            {signUpForm && (
              <label className="block">
                Confirm Password:
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-amber-400 focus:shadow-outline"
                />
              </label>
            )}
            <div className="flex justify-between">
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
                onClick={handleBack}>
                Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-white rounded-md">
                {loginForm ? "Log In" : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default BasicRegister;
