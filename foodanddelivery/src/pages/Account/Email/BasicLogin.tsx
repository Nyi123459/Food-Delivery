import React, { useState } from "react";
import Lottie from "lottie-react";
import EmailAnimation from "../../../assets/Email.json";

interface BasicLoginProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleEmailSubmit: (e: React.FormEvent) => void;
  handlePasswordSubmit: (e: React.FormEvent) => void;
  handleBack: () => void;
}

const BasicLogin: React.FC<BasicLoginProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  handleEmailSubmit,
  handlePasswordSubmit,
  handleBack,
}) => {
  const [currentForm, setCurrentForm] = useState(1);
  const handleNext = () => {
    setCurrentForm(currentForm + 1);
  };
  return (
    <div>
      {currentForm === 1 && (
        <div>
          <div className="flex justify-center mb-6">
            <Lottie
              animationData={EmailAnimation}
              style={{ width: 100, height: 100 }}
            />
          </div>
          <form className="space-y-4" onSubmit={handleEmailSubmit}>
            <label className="block">
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-amber-400 focus:shadow-outline"
              />
            </label>
            <div className="flex justify-between">
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
                onClick={handleBack}>
                Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-white rounded-md"
                onClick={handleNext}>
                Next
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
          <form className="space-y-4" onSubmit={handlePasswordSubmit}>
            <label className="block">
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-amber-400 focus:shadow-outline"
              />
            </label>
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
                Log In
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default BasicLogin;
